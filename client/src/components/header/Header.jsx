import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice"; 

export default function Header() {
  // const { email, userLogoutHandler } = useContext(UserContext);

  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);

  const handleLogout = () => {
    dispatch(logout());  
  };


  return (
    <header className="bg-nav text-white py-4 px-8 flex flex-wrap justify-between items-center shadow-md">
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
          {email && (
            <>
              <li>
                <Link to="/catalog/create" className="hover:text-gray-400">
                  Add new book
                </Link>
              </li>
              <li>
                <Link to="/catalog/preferences" className="hover:text-gray-400">
                  Preferences
                </Link>
              </li>
            </>
          )}

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
            <Link
              to="/logout"
              className="hover:text-gray-400"
              // onClick={userLogoutHandler}
              onClick={handleLogout}
            >
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
