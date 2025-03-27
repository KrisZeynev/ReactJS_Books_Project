import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function BookDetailsCard({ book }) {
  // TODO: implement the correct logic for email and creator later
  const isCreator = true;
  // const { email } = useContext(UserContext);
  const email = false;
  // className="bg-white shadow-lg rounded-lg p-4 w-80 h-111"

  return (
    <>
      <div
        key={book.id}
        className={`bg-white shadow-lg rounded-lg p-4 w-80 ${
          email ? "h-111" : "h-65"
        }`}
        // className="bg-white shadow-lg rounded-lg p-4 w-80 h-65"
      >
        <div className="text-center">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h3 className="text-xl font-semibold">{book.title}</h3>
          <p className="text-gray-500">by {book.author}</p>
          
        </div>
        
        {email && (
          <>
            <div className="flex justify-center space-x-4 mt-4 mb-4">
              {isCreator ? (
                <>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                    Like
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all">
                    Dislike
                  </button>
                </>
              )}
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
                Details
              </button>
            </div>
            <div>
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
          </>
        )}
      </div>
    </>
  );
}
