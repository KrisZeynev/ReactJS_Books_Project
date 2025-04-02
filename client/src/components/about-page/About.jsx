export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About page
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Welcome to my ReactJS Books Project!
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
        <p className="text-gray-600 mb-4">
          The main purpose of this project is to showcase all the skills
          acquired during the ReactJS course at SoftUni.
        </p>
        <p className="text-gray-600 mb-4">
          The main functionalities of the platform include adding books, rating
          them with a like or dislike, and if the user is the creator of the
          book, they can edit it. Additionally, users can add comments.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          Technologies Used
        </h3>
        <ul className="list-inside list-disc text-gray-600 space-y-2">
          <li>
            <strong>React (with Vite)</strong> – for speed and modularity
          </li>
          <li>
            <strong>Tailwind CSS</strong> – for styling
          </li>
          <li>
            <strong>SoftUni practice server</strong> – for backend
          </li>
          <li>
            <strong>React Router</strong> – for client-side navigation
          </li>
        </ul>
      </div>
    </div>
  );
}
