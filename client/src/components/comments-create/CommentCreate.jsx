import "./commentCreate.css";

export default function CommentCreate({
  handleCommentSubmit,
  comment,
  setComment,
}) {
  return (
    <form
      id="commentSection"
      onSubmit={handleCommentSubmit}
      className="comment-form"
    >
      <h3 className="comment-title">Add a Comment</h3>

      <textarea
        className="comment-textarea"
        placeholder="Write a comment..."
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>

      <div className="comment-buttons">
        <button type="submit" className="comment-submit">
          Submit
        </button>
        <button
          type="button"
          className="comment-cancel"
          onClick={() => setComment("")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
