import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { useSelector } from "react-redux";

export default function EmptyStateBook() {
  // const { email } = useContext(UserContext);
  const email = useSelector((state) => state.auth.email);
  return (
    <div
      className={`bg-cardDetails shadow-lg rounded-lg p-4 w-82 ${
        email ? "h-180" : "h-111"
      } flex flex-col items-center justify-center border-dashed border-2 border-gray-300`}
    >
      <div className="text-center flex flex-col items-center justify-center">
        <Link to="/catalog/create">
          <button className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}
