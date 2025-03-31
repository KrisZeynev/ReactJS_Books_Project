export default function Comment({ comment }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-md">
      <div className="flex-1">
        <p className="text-lg text-gray-800">{comment.comment}</p>
        <span className="text-sm text-gray-500">by {comment.email}</span>
      </div>
      <div className="flex flex-col gap-2 ml-5">
        <button className="px-4 py-2 text-base bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-all">
          Edit
        </button>
        <button className="px-4 py-2 text-base bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-all">
          Delete
        </button>
      </div>
    </div>
  );
}
