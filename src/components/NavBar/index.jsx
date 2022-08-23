import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav_bar">
        <a href="#">Home</a>
        <a href="#">Singers</a>
        <a href="#">Contact</a>
      </nav>
    );
  }
}
