import { Link, useNavigate, useParams } from "react-router";
import { useBook, useDeleteBook } from "../../api/bookApi";
import { useContext, useEffect, useState } from "react";
import Comment from "../comments/Comment";
import { UserContext } from "../../contexts/UserContext";
import CommentCreate from "../comments-create/CommentCreate";
import SuccessBanner from "../banners/SuccessBanner";

import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useBook(id);
  const navigate = useNavigate();
  // const { email, _id, accessToken } = useContext(UserContext);

  const { email, _id, accessToken } = useSelector((state) => state.auth);

  const [comment, setComment] = useState("");

  const { deleteBook } = useDeleteBook(book?._id);
  const deleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${book.title} book?`
    );

    if (!hasConfirm) {
      return;
    }

    try {
      await deleteBook();
      navigate(-1);
      // handleDelete(book._id);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

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
      fetchComments();
      e.target.reset();

      setSuccessMessage("Comment has been added succesfully!");

      setTimeout(() => setSuccessMessage(""), 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const baseCommentsUrl = "http://localhost:3030/data/bookComments";
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const searchParams = new URLSearchParams({
        where: `bookId="${book._id}"`,
      });

      const res = await fetch(`${baseCommentsUrl}?${searchParams.toString()}`);
      if (!res.ok) {
        throw new Error("Error with fetch");
      }

      const result = await res.json();
      setComments(result);
    } catch (error) {
      // console.log(error);
      return (
        <p className="text-center text-gray-500">
          Failed to load comments. Please try again.
        </p>
      );
    }
  };

  useEffect(() => {
    fetchComments();
  }, [book]);

  if (!book) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <section className="p-6 max-w-3xl mx-auto text-nav">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Details</h1>

      <div className="bg-cardDetails shadow-md rounded-lg p-6 shadow-[#14203b]">
        <div id="main" className="flex flex-col justify-center">
          <div className="flex flex-row items-center justify-center md:col-span-7 gap-1">
            <div className="flex justify-center items-center border-solid ml-8">
              <img
                className="w-64 h-full object-cover rounded-lg"
                src={book.image}
                alt="Book Cover"
              />
            </div>

            <div className="space-y-2 basis-1/4 ml-18 text-nav">
              <h2 className="text-2xl font-semibold">{book.title}</h2>
              <span className="block text-nav">Author: {book.author}</span>
              <span className="block text-nav">Genre: {book.genre}</span>
              <span className="block text-nav">Pages: {book.pages}</span>
              <span className="block text-nav">
                Year: {book.publicationYear}
              </span>
              <span className="block text-nav">ISBN: {book.isbn}</span>

              {email && (
                <div className="mt-4 flex gap-4 flex-wrap">
                  {book._ownerId === _id ? (
                    <>
                      <Link
                        to={`/catalog/${book._id}/edit`}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={deleteClickHandler}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all cursor-pointer"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                        Like
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
                        Dislike
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-[#14203b]"></div>
            <span className="px-3 text-[#14203b] text-sm">Description</span>
            <div className="flex-grow border-t border-[#14203b]"></div>
          </div>

          <span className="flex flex-col items-center text-nav">
            {book.description}
          </span>
        </div>

        {email && (
          <>
            {successMessage && (
              <SuccessBanner
                message={successMessage}
                onClose={() => setSuccessMessage("")}
              />
            )}
            <div className="mt-6 pt-4 border-t-4 border-[#14203b]">
              <CommentCreate
                handleCommentSubmit={handleCommentSubmit}
                comment={comment}
                setComment={setComment}
              />
            </div>
          </>
        )}
      </div>

      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-800"></div>
        <span className="px-3 text-gray-900 text-sm">Comments</span>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              fetchComments={fetchComments}
            />
          ))
        ) : (
          <div className="col-span-full bg-cardDetails p-3 rounded-lg text-center shadow-md rounded-lg shadow-[#14203b]">
            <p className="text-nav">No comments have been added yet!</p>
          </div>
        )}
      </div>
    </section>
  );
}
