import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  FaEdit,
  FaTrash,
  FaThumbsUp,
  FaThumbsDown,
  FaInfoCircle,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router";
import { useDeleteBook } from "../../api/bookApi";

export default function BookDetailsCard({ book, handleDelete }) {
  const { email, _id, accessToken } = useContext(UserContext);
  const navigate = useNavigate();
  const baseUrl = "http://localhost:3030/data/bookCatalog";
  const { deleteBook } = useDeleteBook(book._id);

  const deleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${book.title} book?`
    );

    if (!hasConfirm) {
      return;
    }

    try {
      const result = await deleteBook();
      handleDelete(book._id);
    } catch (error) {
      console.error("Error deleting book:", error);
    }

    // navigate("/catalog");

    // try {
    //   const response = await fetch(`${baseUrl}/${book._id}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-Authorization": accessToken,
    //     },
    //   });

    //   if (!response.ok) {
    //     throw new Error("Unable to delete the book");
    //   }

    //   await response.json();

    //   handleDelete(book._id)

    //   // navigate("/catalog");
    // } catch (error) {
    //   console.error("Error deleting book:", error);
    // }
  };

  // className="bg-white shadow-lg rounded-lg p-4 w-80 h-111"

  return (
    <>
      <div
        key={book._id}
        className={`bg-white shadow-lg rounded-lg p-4 w-80 ${
          email ? "h-138" : "h-81"
        }`}
        // className="bg-white shadow-lg rounded-lg p-4 w-80 h-65"
      >
        <div className="text-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h3 className="text-xl font-semibold">{book.title}</h3>
          <p className="text-gray-500">by {book.author}</p>
        </div>

        <div id="main" className="mt-6 mb-6 text-center">
          {email && (
            <>
              <div className="flex justify-center space-x-4">
                {book._ownerId === _id ? (
                  <>
                    <button
                      className="flex items-center space-x-2 px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md 
                            hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
                    >
                      <FaEdit />
                      <span>Edit</span>
                    </button>
                    <button
                      className="flex items-center space-x-2 px-5 py-2 bg-red-500 text-white rounded-lg shadow-md 
                            hover:bg-red-600 hover:scale-105 transition-transform duration-200"
                      onClick={deleteClickHandler}
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="flex items-center space-x-2 px-5 py-2 bg-green-500 text-white rounded-lg shadow-md 
                            hover:bg-green-600 hover:scale-105 transition-transform duration-200"
                    >
                      <FaThumbsUp />
                      <span>Like</span>
                    </button>
                    <button
                      className="flex items-center space-x-2 px-5 py-2 bg-gray-500 text-white rounded-lg shadow-md 
                            hover:bg-gray-600 hover:scale-105 transition-transform duration-200"
                    >
                      <FaThumbsDown />
                      <span>Dislike</span>
                    </button>
                  </>
                )}
              </div>
              <hr className="my-6 border-gray-300 w-3/4 mx-auto" />
            </>
          )}

          <div className="flex justify-center">
            <Link
              to={`/catalog/${book._id}/details`}
              className="flex items-center space-x-2 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md 
               hover:bg-indigo-600 hover:scale-105 transition-transform duration-200"
            >
              <FaInfoCircle />
              <span>Details</span>
            </Link>
          </div>
        </div>

        {email && (
          <div id="commentSection">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add a comment"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
