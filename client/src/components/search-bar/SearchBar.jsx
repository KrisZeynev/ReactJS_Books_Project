import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [category, setCategory] = useState("Title");

  return (
    <form className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-center gap-2 bg-white p-3 rounded-lg shadow-md dark:bg-gray-800">
      <select
        className="w-full sm:w-auto p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Title">Title</option>
        <option value="Author">Author</option>
        <option value="Genre">Genre</option>
        <option value="Publication Year">Publication Year</option>
        <option value="Number of Pages">Number of Pages</option>
      </select>
      <input
        type="search"
        className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        placeholder={`Search by ${category}`}
        required
      />
      <button
        type="submit"
        className="w-full sm:w-auto p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 flex justify-center"
      >
        <FaSearch />
      </button>
    </form>
  );
}
