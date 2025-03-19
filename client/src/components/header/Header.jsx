import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ReactJS Books Project</h1>
  
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/books" className="hover:underline">Books</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
  
          <div className="hidden md:block">
            <a href="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
              Login
            </a>
          </div>
  
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
  
        {isOpen && (
          <div className="md:hidden bg-blue-700 text-center py-4">
            <a href="/" className="block py-2 hover:underline">Home</a>
            <a href="/books" className="block py-2 hover:underline">Books</a>
            <a href="/contact" className="block py-2 hover:underline">Contact</a>
            <a href="/login" className="block py-2 bg-white text-blue-600 rounded-lg mx-4 mt-2">Login</a>
          </div>
        )}
      </header>
    );
}