import { useContext, useEffect, useState } from "react";
import BookDetailsCard from "../book-details/BookDetailsCard";
import { UserContext } from "../../contexts/UserContext";

export default function BookPreferences() {
  const { _id, accessToken } = useContext(UserContext);
  const baseLikesUrl = "http://localhost:3030/data/bookLikes";
  const baseBooksUrl = "http://localhost:3030/data/bookCatalog";

  const [likedBooks, setLikedBooks] = useState([]);
  const [dislikedBooks, setDislikedBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `${baseLikesUrl}?where=_ownerId%3D%22${_id}%22`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json", "X-Authorization": accessToken },
          }
        );
        const votes = await response.json();

        // separate liked and disliked
        const likedBookIds = votes.filter(v => v.isLiked).map(v => v.bookId);
        const dislikedBookIds = votes.filter(v => v.isDisliked).map(v => v.bookId);

        const fetchBooksByIds = async (bookIds) => {
          const bookPromises = bookIds.map(id => fetch(`${baseBooksUrl}/${id}`).then(res => res.json()));
          return await Promise.all(bookPromises);
        };

        const [likedBooksData, dislikedBooksData] = await Promise.all([
          fetchBooksByIds(likedBookIds),
          fetchBooksByIds(dislikedBookIds),
        ]);

        setLikedBooks(likedBooksData);
        setDislikedBooks(dislikedBooksData);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [_id, accessToken]);

  // return (
  //   <>
  //     <h1 className="text-3xl font-semibold text-center my-6">
  //       Book Preferences
  //     </h1>

  //     <div
  //       id="main"
  //       className="flex justify-between space-x-8 space-x-8 ml-10 mr-10 mt-10 mb-10"
  //     >
  //       <div
  //         id="liked-books"
  //         className="w-1/2 p-6 bg-blue-100 rounded-lg shadow-lg"
  //       >
  //         <h2 className="text-xl text-center font-semibold text-blue-600 mb-4">
  //           Liked Books
  //         </h2>
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //           {likedBooks.map((book) => (
  //             <BookDetailsCard key={book.id} book={book} setLikedBooks={setLikedBooks} />
  //           ))}
  //         </div>
  //       </div>

  //       <div
  //         id="disliked-books"
  //         className="w-1/2 p-6 bg-red-100 rounded-lg shadow-lg"
  //       >
  //         <h2 className="text-xl text-center font-semibold text-red-600 mb-4">
  //           Disliked Books
  //         </h2>
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //           {dislikedBooks.map((book) => (
  //             <BookDetailsCard key={book.id} book={book} setDislikedBooks={setDislikedBooks} />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center my-6">
        Book Preferences
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Харесани книги */}
        <div className="lg:w-1/2 p-6 bg-blue-100 rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-semibold text-blue-600 mb-4">
            Liked Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {likedBooks.map((book) => (
              <BookDetailsCard key={book.id} book={book} setLikedBooks={setLikedBooks} />
            ))}
          </div>
        </div>

        {/* Нехаресани книги */}
        <div className="lg:w-1/2 p-6 bg-red-100 rounded-lg shadow-lg">
          <h2 className="text-xl text-center font-semibold text-red-600 mb-4">
            Disliked Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dislikedBooks.map((book) => (
              <BookDetailsCard key={book.id} book={book} setDislikedBooks={setDislikedBooks} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
