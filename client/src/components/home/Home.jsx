import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Home() {
  const {email} = useContext(UserContext)
  const featuredBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730=" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://t4.ftcdn.net/jpg/09/42/21/27/360_F_942212780_zdL34kBycfWYH1rOzzTivvuvJCGAg20O.jpg" },
    { id: 3, title: "1984", author: "George Orwell", cover: "https://static.vecteezy.com/system/resources/thumbnails/034/039/987/small/man-in-a-tunnel-made-of-books-books-and-knowledge-concept-generated-by-artificial-intelligence-photo.jpg" }
];
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{email}</h1>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to BookHub 📚</h1>
            <p className="text-lg text-gray-600 mb-6">Discover, rate, and comment your favorite books!</p>

            <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredBooks.map((book) => (
                    <div key={book.id} className="bg-white shadow-lg rounded-lg p-4">
                        <img src={book.cover} alt={book.title} className="w-full h-40 object-cover rounded-md mb-2" />
                        <h3 className="text-xl font-semibold">{book.title}</h3>
                        <p className="text-gray-500">by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
  );
}
