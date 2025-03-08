import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black px-10 md:px-16 py-9 border-b-2 border-dotted">
      <Link to="/">
        <div className="text-2xl font-bold">Bloggy</div>
      </Link>
      <nav className="md:flex justify-center items-center gap-5 hidden">
        <ul className="flex justify-center items-center gap-5 ">
          <Link to="/">
            <li className="hover:text-green-300">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-green-300">About</li>
          </Link>
          <Link to="/blogs">
            <li className="hover:text-green-300">Blogs</li>
          </Link>
          <Link to="/services">
            <li className="hover:text-green-300">Services</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-green-300">Contact</li>
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
