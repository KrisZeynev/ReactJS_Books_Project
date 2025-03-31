export default function CommentCreate({
  handleCommentSubmit,
  comment,
  setComment,
}) {
  return (
    <form
      id="commentSection"
      onSubmit={handleCommentSubmit}
      className="flex flex-col space-y-3"
    >
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Write a comment..."
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>
      <div className="flex justify-center space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all hover:bg-blue-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          Submit
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all hover:bg-red-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
          onClick={() => setComment("")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
