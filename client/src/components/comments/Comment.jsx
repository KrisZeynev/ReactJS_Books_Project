import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import CommentEdit from "../comments-edit/CommentEdit";

const baseCommentsUrl = "http://localhost:3030/data/bookComments";

export default function Comment({ comment, fetchComments }) {
  const { email, accessToken, _id } = useContext(UserContext);
  const isCreator = comment._ownerId === _id;
  const [editing, setEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment.comment);

  const deleteClickHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete the comment?`);

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
        throw new Error("Unable to delete the comment");
      }

      await response.json();
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const editClickHandler = () => {
    setEditing(true);
  };

  const cancelEditHandler = () => {
    setEditing(false);
  };

  return (
    <>
      {!editing ? (
        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-md">
          <div className="flex-1">
            <p className="text-lg text-gray-800">{comment.comment}</p>
            <span className="text-sm text-gray-500">by {comment.email}</span>
          </div>
          {email && (
            <div className="flex flex-col gap-2 ml-5">
              <button
                disabled={!isCreator}
                className={`px-4 py-2 text-base ${
                  !isCreator
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                } rounded-lg shadow-sm transition-all`}
                onClick={editClickHandler}
              >
                Edit
              </button>
              <button
                disabled={!isCreator}
                className={`px-4 py-2 text-base ${
                  !isCreator
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                } rounded-lg shadow-sm transition-all`}
                onClick={deleteClickHandler}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ) : (
        <CommentEdit comment={comment} fetchComments={fetchComments} cancelEdit={cancelEditHandler}/>
      )}
    </>
  );
}
