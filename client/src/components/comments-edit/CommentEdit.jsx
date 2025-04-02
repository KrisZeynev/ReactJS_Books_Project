import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./CommentEdit.css";

export default function CommentEdit({ comment, cancelEdit, fetchComments }) {
  const [updatedComment, setUpdatedComment] = useState(comment.comment);
  const baseCommentsUrl = "http://localhost:3030/data/bookComments";
  const { accessToken } = useContext(UserContext);

  const saveEditHandler = async (e) => {
    e.preventDefault();
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
    <form onSubmit={saveEditHandler} className="comment-edit-form">
      <div className="flex-1">
        <textarea
          value={updatedComment}
          onChange={(e) => setUpdatedComment(e.target.value)}
          className="comment-textarea"
        />
      </div>
      <div className="comment-buttons">
        <button type="submit" className="comment-save">Save</button>
        <button type="button" className="comment-cancel" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
}
