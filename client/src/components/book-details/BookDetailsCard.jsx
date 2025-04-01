import { useContext, useEffect, useState } from "react";
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
import CommentCreate from "../comments-create/CommentCreate";
import SuccessBanner from "../banners/SuccessBanner";

export default function BookDetailsCard({ book, handleDelete }) {
  const { email, _id, accessToken } = useContext(UserContext);
  const navigate = useNavigate();
  const baseUrl = "http://localhost:3030/data/bookCatalog";
  const baseLikesUrl = "http://localhost:3030/data/bookLikes";
  const baseCommentsUrl = "http://localhost:3030/data/bookComments";
  const { deleteBook } = useDeleteBook(book._id);

  const [comment, setComment] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const { comment } = Object.fromEntries(new FormData(e.target));

    try {
      await fetch(baseCommentsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": accessToken,
        },
        body: JSON.stringify({
          comment,
          bookId: book._id,
          email,
        }),
      });
      setComment("");
      e.target.reset();

      setSuccessMessage("Comment has been added succesfully!");

      setTimeout(() => setSuccessMessage(""), 1000);
    } catch (error) {
      console.log(error);
    }
  };

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
  };

  const [reaction, setReaction] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    if (reaction === "like") {
      setReaction("");
      setLikes(likes - 1);
    } else {
      setReaction("like");
      setLikes(likes + 1);
      if (reaction === "dislike") setDislikes(dislikes - 1);
    }
  };

  const handleDislike = () => {
    if (reaction === "dislike") {
      setReaction("");
      setDislikes(dislikes - 1);
    } else {
      setReaction("dislike");
      setDislikes(dislikes + 1);
      if (reaction === "like") setLikes(likes - 1);
    }
  };

  return (
    <>
      <div
        key={book._id}
        className={`bg-white shadow-lg rounded-lg p-4 w-82 ${
          email ? "h-180" : "h-111"
        }`}
        // className="bg-white shadow-lg rounded-lg p-4 w-80 h-65"
      >
        <div className="text-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-70 object-contain rounded-md mb-2"
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
                    <Link
                      to={`/catalog/${book._id}/edit`}
                      className="flex items-center space-x-2 px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md 
                            hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
                    >
                      <FaEdit />
                      <span>Edit</span>
                    </Link>
                    <button
                      className="flex items-center space-x-2 px-5 py-2 bg-red-500 text-white rounded-lg shadow-md 
                            hover:bg-red-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
                      onClick={deleteClickHandler}
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      // `${isLiked ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-200 hover:bg-blue-300'}`
                      className={`flex items-center space-x-2 px-5 py-2 text-white rounded-lg shadow-md 
                        hover:scale-105 transition-transform duration-200 cursor-pointer 
                        ${
                          reaction === "like"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      onClick={handleLike}
                    >
                      <FaThumbsUp />
                      <span>
                        {reaction === "like" ? "Liked" : "Like"} ({likes})
                      </span>
                    </button>
                    <button
                      className={`flex items-center space-x-2 px-5 py-2 text-white rounded-lg shadow-md 
                        hover:scale-105 transition-transform duration-200 cursor-pointer 
                        ${
                          reaction === "dislike"
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      onClick={handleDislike}
                    >
                      <FaThumbsDown />
                      <span>
                        {reaction === "dislike" ? "Disliked" : "Dislike"} (
                        {dislikes})
                      </span>
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
          <>{successMessage && (
            <SuccessBanner message={successMessage} onClose={() => setSuccessMessage("")}/>
          )}
          <CommentCreate
            handleCommentSubmit={handleCommentSubmit}
            comment={comment}
            setComment={setComment}
          /></>
        )}
      </div>
    </>
  );
}
