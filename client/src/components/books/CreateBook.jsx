export default function CreateBook() {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
        <h1 className="text-2xl font-semibold mb-4 text-center">Create New Book</h1>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Title</span>
              <input type="text" placeholder="Title*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Description</span>
              <input type="text" placeholder="Description*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Author</span>
              <input type="text" placeholder="Author*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Cover</span>
              <input type="text" placeholder="Cover*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Publication Year</span>
              <input type="text" placeholder="Publication year*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Publication Date</span>
              <input type="date" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Number of Pages</span>
              <input type="text" placeholder="Number of pages*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Publisher</span>
              <input type="text" placeholder="Publisher*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">ISBN</span>
              <input type="text" placeholder="ISBN*" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
            <label className="block">
              <span className="text-gray-700">Image</span>
              <input type="text" placeholder="Image URL" className="mt-1 block w-full p-2 border rounded-lg" />
            </label>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add</button>
            <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
  