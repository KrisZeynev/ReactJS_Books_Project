import { useParams } from "react-router";
import { useBook } from "../../api/bookApi";
import { useBookComments } from "../../api/commentsApi";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const { id } = useParams();
  const book = useBook(id);

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
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [book]);

  if (!book) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Details</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img
            className="w-64 h-64 object-cover rounded-lg"
            src={book.image}
            alt="Book Cover"
          />
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-semibold">{book.title}</h2>
              <span className="block text-gray-600">Author: {book.author}</span>
              <span className="block text-gray-600">Genre: {book.genre}</span>
              <span className="block text-gray-600">
                Year: {book.publicationYear}
              </span>
              <span className="block text-gray-600">ISBN: {book.isbn}</span>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                Delete
              </button>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Like
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                Dislike
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <div className="space-y-2">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment._id} className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-700">{comment.comment}</p>
                <span className="text-xs text-gray-500">
                  by {comment.email}
                </span>
              </div>
            ))
          ) : (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-gray-700">No comments have been added yet!</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
        <form className="flex flex-col gap-3">
          <textarea
            className="p-2 border rounded-lg"
            placeholder="Write your comment..."
          ></textarea>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Submit
          </button>
        </form>
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