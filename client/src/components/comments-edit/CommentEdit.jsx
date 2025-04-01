import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function CommentEdit({ comment, cancelEdit, fetchComments }) {
  const [updatedComment, setUpdatedComment] = useState(comment.comment);
  const baseCommentsUrl = "http://localhost:3030/data/bookComments";
  const { accessToken } = useContext(UserContext);

  const saveEditHandler = async (e) => {
    e.preventDefault();
    // updateComment(updatedComment);
    try {
      const response = await fetch(`${baseCommentsUrl}/${comment._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": accessToken,
        },
        body: JSON.stringify({
          comment: updatedComment,
        }),
      });
      if (!response.ok) {
        throw new Error("Unable to edit the comment");
      }

      await response.json();
      cancelEdit();
      fetchComments();
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  return (
    <form
      onSubmit={saveEditHandler}
      className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-md"
    >
      <div className="flex-1">
        <textarea
          value={updatedComment}
          onChange={(e) => setUpdatedComment(e.target.value)}
          className="w-full p-2 text-gray-800 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 ml-5">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 cursor-pointer rounded-lg shadow-sm transition-all"
        >
          Save
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-500 hover:bg-gray-400 cursor-pointer rounded-lg shadow-sm transition-all"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
