import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };
  let likeStyle = {color : "red"};
  return (
    <div onClick={toggleLike}>
      <p>
        {isLiked ? (
          <p>
            I love you <i className="fa-solid fa-heart" style={likeStyle}></i>
          </p>
        ) : (
          <p>
            I hate you<i className="fa-regular fa-heart"></i>
          </p>
        )}
      </p>
    </div>
  );
}
