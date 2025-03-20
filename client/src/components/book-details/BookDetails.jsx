export default function BookDetails() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Book Details</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img
            className="w-64 h-64 object-cover rounded-lg"
            src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730="
            alt="Book Cover"
          />
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-semibold">Book Title</h2>
              <span className="block text-gray-600">Author: Kris</span>
              <span className="block text-gray-600">Genre: Comedy</span>
              <span className="block text-gray-600">Publisher: Random</span>
              <span className="block text-gray-600">
                Overall rate: 2.2 / 5.0
              </span>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Edit
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <div className="space-y-2">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-gray-700">This book is amazing!</p>
            <span className="text-xs text-gray-500">by user@example.com</span>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
                    <form className="flex flex-col gap-3">
                        <textarea className="p-2 border rounded-lg" placeholder="Write your comment..."></textarea>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Submit</button>
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
