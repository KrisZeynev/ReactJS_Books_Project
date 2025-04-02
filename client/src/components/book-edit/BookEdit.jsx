import { useNavigate, useParams } from "react-router";
import { useBook } from "../../api/bookApi";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function BookEdit() {
  const { id } = useParams();
  const book = useBook(id);

  const [errors, setErrors] = useState({});
  const { accessToken } = useContext(UserContext);

  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleFormClose = (e) => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setErrors({});
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const fieldErrors = {};

    const regexes = {
      title: /^[A-Za-z0-9\s\-\,\.\!\'\"]{3,20}$/,
      description: /^[A-Za-z0-9\s\-\,\.\!\'\"]{3,30}$/,
      author: /^[A-Za-z\s\-\,\.\!\'\"]{3,20}$/,
      genre: /^[A-Za-z\s\-\,\.\!\'\"]{3,20}$/,
      publicationYear: /^(19|20)\d{2}$/,
      pages: /^[1-9][0-9]*$/,
      isbn: /^(97(8|9))?\d{9}(\d|X)$/,
      image: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp))$/,
    };

    const {
      title,
      description,
      author,
      genre,
      publicationYear,
      pages,
      isbn,
      image,
    } = Object.fromEntries(new FormData(e.target));

    if (!title || !regexes.title.test(title)) {
      fieldErrors.title =
        "Title is required and must be between 3 and 100 characters.";
    }

    if (!description || !regexes.description.test(description)) {
      fieldErrors.description =
        "Description must be between 3 and 500 characters.";
    }

    if (!author || !regexes.author.test(author)) {
      fieldErrors.author = "Author must be between 3 and 50 characters.";
    }

    if (!genre || !regexes.genre.test(genre)) {
      fieldErrors.genre = "Genre must be between 3 and 50 characters.";
    }

    if (!publicationYear || !regexes.publicationYear.test(publicationYear)) {
      fieldErrors.publicationYear =
        "Publication Year must be a valid year (1900-2099).";
    }

    if (!pages || !regexes.pages.test(pages)) {
      fieldErrors.pages = "Pages must be a positive integer.";
    }

    if (!isbn || !regexes.isbn.test(isbn)) {
      fieldErrors.isbn = "ISBN must be a valid ISBN number.";
    }

    if (!image && !regexes.image.test(image)) {
      fieldErrors.image = "Image URL must be a valid image link (http://...).";
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    const baseUrl = `http://localhost:3030/data/bookCatalog/${book._id}`;

    try {
      const response = await fetch(baseUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": accessToken,
        },
        body: JSON.stringify({
          title,
          description,
          author,
          genre,
          publicationYear,
          pages,
          isbn,
          image,
        }),
      });
      // console.log(response);
      // console.log('good to go');
      navigate(-1);
    } catch (error) {
      console.log(`here: ${error}`);
    }
    // console.log("Form submitted successfully:", { title, description, author, genre, publicationYear, publicationDate, pages, publisher, isbn, image });
  };

  if (!book) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-2xl font-semibold mb-4 text-center">Edit Book</h1>
      <form className="space-y-4" onSubmit={handleFormSubmit} ref={formRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              name="title"
              placeholder="Title*"
              defaultValue={book.title}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.title ? "border-red-500" : ""
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700">Description</span>
            <input
              type="text"
              name="description"
              placeholder="Description*"
              defaultValue={book.description}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700">Author</span>
            <input
              type="text"
              name="author"
              placeholder="Author*"
              defaultValue={book.author}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.author ? "border-red-500" : ""
              }`}
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author}</p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700">Genre</span>
            <input
              type="text"
              name="genre"
              placeholder="Genre*"
              defaultValue={book.genre}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.genre ? "border-red-500" : ""
              }`}
            />
            {errors.genre && (
              <p className="text-red-500 text-sm">{errors.genre}</p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700">Publication Year</span>
            <input
              type="text"
              name="publicationYear"
              placeholder="Publication year*"
              defaultValue={book.publicationYear}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.publicationYear ? "border-red-500" : ""
              }`}
            />
            {errors.publicationYear && (
              <p className="text-red-500 text-sm">{errors.publicationYear}</p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700">Number of Pages</span>
            <input
              type="text"
              name="pages"
              placeholder="Number of pages*"
              defaultValue={book.pages}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.pages ? "border-red-500" : ""
              }`}
            />
            {errors.pages && (
              <p className="text-red-500 text-sm">{errors.pages}</p>
            )}
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700">ISBN</span>
            <input
              type="text"
              name="isbn"
              placeholder="ISBN*"
              defaultValue={book.isbn}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.isbn ? "border-red-500" : ""
              }`}
            />
            {errors.isbn && (
              <p className="text-red-500 text-sm">{errors.isbn}</p>
            )}
          </label>
          <label className="block">
            <span className="text-gray-700">Image</span>
            <input
              type="text"
              name="image"
              placeholder="http://..."
              defaultValue={book.image}
              className={`mt-1 block w-full p-2 border rounded-lg ${
                errors.image ? "border-red-500" : ""
              }`}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </label>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:bg-blue-700 hover:bg-blue-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:bg-red-700 hover:bg-red-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
            onClick={handleFormClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
