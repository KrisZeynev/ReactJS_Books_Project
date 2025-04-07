import { useEffect, useState } from "react";
import BookDetailsCard from "../book-details/BookDetailsCard";
import EmptyStateBook from "./EmptyStateBook";
import { useCatalog } from "../../api/bookApi";

export default function Catalog() {
  const [books, setBooks] = useState([]);

  // search bar start
  const [category, setCategory] = useState("title");
  const [searchTerm, setSearchTerm] = useState("");

  const allBooks = useCatalog(category, searchTerm);

  const searchHandler = (e) => {
    e.preventDefault();
  };
  // search bar end

  useEffect(() => {
    setBooks(allBooks);
  }, [allBooks]);

  const handleDelete = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4 text-center">
        Catalog
      </h1>
      <form
        onSubmit={searchHandler}
        className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2 bg-cardDetails p-3 rounded-lg shadow-md dark:bg-gray-800"
      >
        <select
          className="w-full sm:w-auto p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
          <option value="publicationYear">Publication Year</option>
          <option value="pages">Number of Pages</option>
        </select>
        <input
          type="search"
          className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder={`Search by ${category}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <button
          type="submit"
        >
        </button>
      </form>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-25 place-items-center mt-10 mb-10">
          {books.length > 0 &&
            books.map((book) => (
              <BookDetailsCard
                key={book._id}
                book={book}
                handleDelete={handleDelete}
              />
            ))}
          <EmptyStateBook />
        </div>
      </div>
    </>
  );
}
