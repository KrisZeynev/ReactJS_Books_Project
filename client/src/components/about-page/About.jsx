export default function About() {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us page</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Welcome to our book collection platform! Our mission is to create a space where book lovers can discover, rate, and comment their favorite reads.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          We believe that books have the power to inspire, educate, and transform lives. Our goal is to build a community where users can explore new titles and engage with fellow readers.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member" />
            <h3 className="text-xl font-medium text-gray-800 mt-4">John Doe</h3>
            <p className="text-gray-500">Founder</p>
          </div>
          <div className="text-center">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member" />
            <h3 className="text-xl font-medium text-gray-800 mt-4">Jane Smith</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
          <div className="text-center">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="Team Member" />
            <h3 className="text-xl font-medium text-gray-800 mt-4">Emily Johnson</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
    )
}