import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const baseCommentsUrl = "http://localhost:3030/data/bookComments";

export default function Comment({ comment, fetchComments }) {
  const { email, accessToken } = useContext(UserContext);

  const deleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${comment.title} book?`
    );

    if (!hasConfirm) {
      return;
    }

    try {
      const response = await fetch(`${baseCommentsUrl}/${comment._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": accessToken,
        },
      });
      if (!response.ok) {
        throw new Error("Unable to delete the book");
      }

      await response.json();
      fetchComments()
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-md">
      <div className="flex-1">
        <p className="text-lg text-gray-800">{comment.comment}</p>
        <span className="text-sm text-gray-500">by {comment.email}</span>
      </div>
      {email && (
        <>
          <div className="flex flex-col gap-2 ml-5">
            <button className="px-4 py-2 text-base bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-all">
              Edit
            </button>
            <button className="px-4 py-2 text-base bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-all" onClick={deleteClickHandler}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
