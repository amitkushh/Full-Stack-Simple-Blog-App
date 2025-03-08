import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black px-16 py-9">
      <Link to="/">
        <div className="text-2xl font-bold">Bloggy</div>
      </Link>
      <nav className="flex justify-center items-center gap-5">
        <ul className="flex justify-center items-center gap-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/blogs">
            <li>Blogs</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <button className="bg-green-500 rounded-md py-2 px-4 cursor-pointer">
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
