import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const { email } = useContext(UserContext);
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex flex-wrap justify-between items-center shadow-md">
      <div className="text-xl font-bold w-full sm:w-auto text-center sm:text-left">
        ReactJS Books Project
      </div>
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog" className="hover:text-gray-400">
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/catalog/create" className="hover:text-gray-400">
              Add new book
            </Link>
          </li>
          <li>
            <Link to="/books/preferences" className="hover:text-gray-400">
              Preferences
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 w-full sm:w-auto mt-2 sm:mt-0">
        {email ? (
          <>
          {<span>{email}</span>}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg> */}
            <Link to="/logout" className="hover:text-gray-400">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-400">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
