import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@gm",
      remarks: "great!",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComment) => [...currComment, comment]);
  };

  return (
    <>
      <div>
        <h4>All Comments</h4>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <p>-{comment.username}</p>
          </div>
        ))}
      </div>
      <hr></hr>
      <CommentForm addNewComment={addNewComment} />
    </>
  );
}
