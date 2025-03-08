import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center px-10 py-24 gap-6">
      <h1 className="text-3xl font-semibold text-center md:text-6xl lg:max-w-[900px]">
        Create, Share, and Connect{" "}
        <span className="text-green-500">Through Blogging</span>
      </h1>
      <p className="text-center md:max-w-[500px]">
        In today digital age, having a space to share your thoughts and ideas is
        more important than ever. Our blog app empowers you to express yourself
        freely
      </p>
      <div className="flex justify-center items-center gap-3 mt-10">
        <button className="capitalize py-2 px-4 bg-white rounded-md text-black hover:bg-gray-300 cursor-pointer">
          get started
        </button>
        <button className="capitalize py-2 px-4 bg-green-500 rounded-md hover:bg-green-700 cursor-pointer">
          learn more
        </button>
      </div>
    </div>
  );
}

export default Hero;
