export default function Comment({ comment }) {
  return (
    <div className="bg-gray-100 p-3 rounded-lg">
      <p className="text-gray-700">{comment.comment}</p>
      <span className="text-xs text-gray-500">by {comment.email}</span>
    </div>
  );
}
