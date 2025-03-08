import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="px-10 py-10">
      <div className="flex flex-col justify-center items-center bg-black rounded-sm gap-7 py-10">
        <h2 className="text-3xl font-semibold">Login</h2>
        <form className="flex flex-col justify-center items-center gap-3">
          <input
            className="border-amber-50 py-2 pl-3 rounded-md "
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <input
            className=" py-2 pl-3 rounded-md mb-6"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <button className="capitalize py-2 px-4 bg-green-500 rounded-md hover:bg-green-700 cursor-pointer w-full">
            Login
          </button>
          <p className="text-center mt-3">
            Don't have an account{" "}
            <Link to="signup">
              <span className="font-semibold text-green-400">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
