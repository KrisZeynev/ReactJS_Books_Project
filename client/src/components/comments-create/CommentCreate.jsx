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
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
        >
          Submit
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all"
          onClick={() => setComment("")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
