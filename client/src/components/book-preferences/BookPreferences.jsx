import { useContext, useEffect, useState } from "react";
import BookDetailsCard from "../book-details/BookDetailsCard";
import { UserContext } from "../../contexts/UserContext";

export default function BookPreferences() {
  const { _id, accessToken } = useContext(UserContext);
  const baseLikesUrl = "http://localhost:3030/data/bookLikes";
  const baseBooksUrl = "http://localhost:3030/data/bookCatalog";

  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() => {
    const fetchLikedBooks = async () => {
      try {
        const response = await fetch(
          `${baseLikesUrl}?where=_ownerId%3D%22${_id}%22%20and%20isLiked%3Dtrue`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json", "X-Authorization": accessToken },
          }
        );
        const likedVotes = await response.json();

        //
        const bookIds = likedVotes.map(vote => vote.bookId);
        const booksPromises = bookIds.map(id =>
          fetch(`${baseBooksUrl}/${id}`).then(res => res.json())
        );
        const books = await Promise.all(booksPromises);

        setLikedBooks(books);
      } catch (error) {
        console.error("Error fetching liked books:", error);
      }
    };

    fetchLikedBooks();
  }, [_id, accessToken]);

  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-6">
        Book Preferences
      </h1>

      <div
        id="main"
        className="flex justify-between space-x-8 space-x-8 ml-10 mr-10 mt-10 mb-10"
      >
        <div
          id="liked-books"
          className="w-1/2 p-6 bg-blue-100 rounded-lg shadow-lg"
        >
          <h2 className="text-xl text-center font-semibold text-blue-600 mb-4">
            Liked Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {likedBooks.map((book) => (
              <BookDetailsCard key={book.id} book={book} setLikedBooks={setLikedBooks} />
            ))}
          </div>
        </div>

        <div
          id="disliked-books"
          className="w-1/2 p-6 bg-red-100 rounded-lg shadow-lg"
        >
          <h2 className="text-xl text-center font-semibold text-red-600 mb-4">
            Disliked Books
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* {dislikedBooks.map((book) => (
              <BookDetailsCard key={book.id} book={book} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}
