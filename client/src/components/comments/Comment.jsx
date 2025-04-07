import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import CommentEdit from "../comments-edit/CommentEdit";
import "./Comment.css";

import { useSelector } from "react-redux";

const baseCommentsUrl = "http://localhost:3030/data/bookComments";

export default function Comment({ comment, fetchComments }) {
  // const { email, accessToken, _id } = useContext(UserContext);
  const { email, _id, accessToken } = useSelector((state) => state.auth);
  const isCreator = comment._ownerId === _id;
  const [editing, setEditing] = useState(false);

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
        <div className="comment-container">
          <div className="flex-1">
            <p className="comment-text">{comment.comment}</p>
            <span className="comment-author">by {comment.email}</span>
          </div>
          {isCreator && (
            <div className="comment-buttons">
              <button
                // disabled={!isCreator}
                // className={`comment-edit ${!isCreator ? "comment-disabled" : ""}`}
                className={"comment-edit"}
                onClick={editClickHandler}
              >
                Edit
              </button>
              <button
                // disabled={!isCreator}
                // className={`comment-delete ${!isCreator ? "comment-disabled" : ""}`}
                className={"comment-delete"}
                onClick={deleteClickHandler}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ) : (
        <CommentEdit
          comment={comment}
          fetchComments={fetchComments}
          cancelEdit={cancelEditHandler}
        />
      )}
    </>
  );
}
