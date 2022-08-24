import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav_bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="singers">Singers</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <Outlet />
      </nav>
    </>
  );
}

// <nav className="nav_bar">
//   <a href="#">Home</a>
//   <a href="#">Singers</a>
//   <a href="#">Contact</a>
// </nav>
