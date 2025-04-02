import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import BookDetailsCard from "../book-details/BookDetailsCard";
import { useHomeBooks } from "../../api/bookApi";

export default function Home() {
  const { email } = useContext(UserContext);
  const featuredBooksData = useHomeBooks();

  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    setFeaturedBooks(featuredBooksData);
  }, [featuredBooksData]);

  const handleDelete = (bookId) => {
    setFeaturedBooks((prevBooks) =>
      prevBooks.filter((book) => book._id !== bookId)
    );
  };

  return (
    <>
      {featuredBooks.length > 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ReactJS Books Project 📚
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover, rate, and comment your favorite books!
          </p>

          <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-25">
            {featuredBooks.map((book) => (
              <BookDetailsCard
                key={book._id}
                book={book}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to ReactJS Books Project 📚
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover, rate, and comment your favorite books!
          </p>
          <h1 className="text-2xl font-semibold text-gray-500 bg-red-100 px-6 py-3 rounded-lg border border-red-400 shadow-md">
            No books found!
          </h1>
        </div>
      )}
    </>
  );
}
