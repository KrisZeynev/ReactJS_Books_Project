import { useEffect } from "react";
import BookDetailsCard from "../book-details/BookDetailsCard";
import SearchBar from "../search-bar/SearchBar";
import EmptyStateBook from "./EmptyStateBook";
import { useCatalog } from "../../api/bookApi";

export default function Catalog() {

  const allBooks = useCatalog();

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-4 text-center">
        Catalog
      </h1>
      <SearchBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-x-25 place-items-center mt-10 mb-10">
          {allBooks.map((book) => (
            <BookDetailsCard key={book._id} book={book} />
          ))}
          <EmptyStateBook/>
        </div>
      </div>
    </>
  );
}