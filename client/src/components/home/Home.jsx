export default function Home() {
  const featuredBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730=" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://source.unsplash.com/150x200/?novel" },
    { id: 3, title: "1984", author: "George Orwell", cover: "https://source.unsplash.com/150x200/?library" }
];
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to BookHub 📚</h1>
            <p className="text-lg text-gray-600 mb-6">Discover, rate, and review your favorite books!</p>

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
