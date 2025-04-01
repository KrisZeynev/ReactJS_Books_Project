import { useParams } from "react-router";
import { useBook } from "../../api/bookApi";
import { useBookComments } from "../../api/commentsApi";
import { useContext, useEffect, useState } from "react";
import Comment from "../comments/Comment";
import { UserContext } from "../../contexts/UserContext";
import CommentCreate from "../comments-create/CommentCreate";

export default function BookDetails() {
  const { id } = useParams();
  const book = useBook(id);
  const { email, _id, accessToken } = useContext(UserContext);

  const [comment, setComment] = useState("");

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
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Details</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-row items-center justify-center md:col-span-7 gap-1">
          <div className="flex justify-center items-center border-solid ml-8">
            <img
              className="w-64 h-full object-cover rounded-lg"
              src={book.image}
              alt="Book Cover"
            />
          </div>

          <div className="space-y-2 basis-1/4 ml-18">
            <h2 className="text-2xl font-semibold">{book.title}</h2>
            <span className="block text-gray-600">Author: {book.author}</span>
            <span className="block text-gray-600">Genre: {book.genre}</span>
            <span className="block text-gray-600">
              Year: {book.publicationYear}
            </span>
            <span className="block text-gray-600">ISBN: {book.isbn}</span>

            {email && (
              <div className="mt-4 flex gap-4 flex-wrap">
                {book._ownerId === _id ? (
                  <>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
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

        {email && (
          <div className="mt-6 pt-4 border-t-4 border-gray-300">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Add a Comment
            </h3>
            <CommentCreate
              handleCommentSubmit={handleCommentSubmit}
              comment={comment}
              setComment={setComment}
            />
          </div>
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
          <div className="col-span-full bg-gray-100 p-3 rounded-lg text-center">
            <p className="text-gray-700">No comments have been added yet!</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Feed for the comments
// import React from 'react';
// export default function BookDetails() {
//     const comments = [
//         { user: 'user1', comment: 'This is cool' },
//         { user: 'user2', comment: 'Great post!' },
//         { user: 'user3', comment: 'I love it!' },
//       ];
//     return (
//         <div className="max-w-3xl mx-auto p-4 space-y-4">
//           {comments.map((comment, index) => (
//             <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
//               <p className="font-semibold text-gray-800">{comment.user} commented:</p>
//               <p className="text-gray-600">{`"${comment.comment}"`}</p>
//             </div>
//           ))}
//         </div>
//       );
// }

// Text area
// import React from "react";
// export default function BookDetails() {
//   const comments = [
//     { user: "user1", comment: "This is cool" },
//     { user: "user2", comment: "Great post!" },
//     { user: "user3", comment: "I love it!" },
//   ];
//   return (
//     <div className="flex items-center space-x-4">
//       <div className="flex-shrink-0">
//         <img
//           src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
//           alt="User Avatar"
//           className="h-10 w-10 rounded-full"
//         />
//       </div>
//       <textarea
//         placeholder="Write a comment..."
//         className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   );
// }
