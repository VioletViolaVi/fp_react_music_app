import React, { useState } from "react";

export default function Likes() {
  const [likes, setLikes] = useState(0);

  function increase() {
    setLikes((prevLikes) => {
      return prevLikes + 1;
    });
  }

  function decrease() {
    if (likes !== 0) {
      setLikes((prevLikes) => {
        return prevLikes - 1;
      });
    }
  }

  return (
    <>
      <i className="fa-solid fa-thumbs-up" onClick={increase}></i>
      <span className="likes_counter">{likes}</span>
      <i className="fa-solid fa-thumbs-down" onClick={decrease}></i>
    </>
  );
}
