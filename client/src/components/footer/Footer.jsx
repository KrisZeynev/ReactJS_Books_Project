import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-8 mt-10 shadow-md">
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-center sm:text-left text-lg font-semibold w-full sm:w-auto">
          ReactJS Books Project
        </div>

        <div className="flex justify-center space-x-6 w-full sm:w-auto mt-4 sm:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="text-center mt-6 text-sm">
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
