import React from "react";

export default class Likes extends React.Component {
  render() {
    return (
      <>
        <i className="fa-solid fa-thumbs-up">
          <span className="likes_counter">0</span>
        </i>
      </>
    );
  }
}
