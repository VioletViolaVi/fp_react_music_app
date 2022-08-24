import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="nav_bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/lyrics">Lyrics</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <Outlet />
      </nav>
    </>
  );
}
