import BookDetailsCard from "../book-details/BookDetailsCard";

export default function BookPreferences() {

    const likedBooks = [
        {
          id: 1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          cover:
            "https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730=",
        },
        {
          id: 2,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          cover:
            "https://t4.ftcdn.net/jpg/09/42/21/27/360_F_942212780_zdL34kBycfWYH1rOzzTivvuvJCGAg20O.jpg",
        },
        {
          id: 3,
          title: "1984",
          author: "George Orwell",
          cover:
            "https://static.vecteezy.com/system/resources/thumbnails/034/039/987/small/man-in-a-tunnel-made-of-books-books-and-knowledge-concept-generated-by-artificial-intelligence-photo.jpg",
        },
        {
          id: 4,
          title: "Moby Dick",
          author: "Herman Melville",
          cover: "https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg",
        },
        {
          id: 5,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          cover: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
        },
      ];

      const dislikedBooks = [
        {
            id: 6,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            cover: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
          },
          {
            id: 7,
            title: "Brave New World",
            author: "Aldous Huxley",
            cover: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg",
          },
          {
            id: 8,
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            cover:
              "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg",
          },
          {
            id: 9,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            cover: "https://images.pexels.com/photos/356372/pexels-photo-356372.jpeg",
          },
          {
            id: 10,
            title: "War and Peace",
            author: "Leo Tolstoy",
            cover:
              "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg",
          },
      ]

    return (
      <>
        <h1 className="text-3xl font-semibold text-center my-6">Book Preferences</h1>
  
        <div id="main" className="flex justify-between space-x-8 space-x-8 ml-10 mr-10 mt-10 mb-10">
          <div id="liked-books" className="w-1/2 p-6 bg-blue-100 rounded-lg shadow-lg">
            <h2 className="text-xl text-center font-semibold text-blue-600 mb-4">Liked Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {likedBooks.map(book => (
                <BookDetailsCard key={book.id} book={book} />
              ))}
            </div>
          </div>
  
          <div id="disliked-books" className="w-1/2 p-6 bg-red-100 rounded-lg shadow-lg">
            <h2 className="text-xl text-center font-semibold text-red-600 mb-4">Disliked Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dislikedBooks.map(book => (
                <BookDetailsCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  