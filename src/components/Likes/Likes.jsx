import React, { useState, useEffect } from "react";

export default function Likes() {
  const [likes, setLikes] = useState(0);

  function increase() {
    setLikes(likes + 1);
  }

  function decrease() {
    setLikes(likes - 1);
  }

  return (
    <>
      <i className="fa-solid fa-thumbs-up" onClick={increase}></i>
      <span className="likes_counter">{likes}</span>
      <i class="fa-solid fa-thumbs-down" onClick={decrease}></i>
    </>
  );
}
