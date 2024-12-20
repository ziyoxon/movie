import React from "react";

const Header = () => {
  return (
    <div className="header bg-black">
      <div className="container bg-[#000000] mx-auto flex items-center justify-between py-4 px-6 ">
        <div className="flex items-center">
          <img src="src/image/logo.png" alt="Logo" className="h-12 w-18" />
        </div>

        <div className="flex space-x-6">
          <img src="src/image/Main.png" alt="Logo" />
          <img src="src/image/Transfer.png" alt="" />
          <img src="src/image/moni.png" alt="" />
          <img src="src/image/moni(2).png" alt="" />
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="src/image/RU.png"
            alt="Russia Flag"
            className="h-5 w-5 rounded-full"
          />

          <span className="text-sm text-white">Py</span>

          <svg
            className="h-4 w-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>

          <button className="bg-[#C61F1F] text-white px-4 py-2 rounded-xl hover:bg-[#481515]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
