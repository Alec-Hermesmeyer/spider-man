"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-6 shadow-lg w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white">
          <span className="text-2xl font-bold tracking-wide">
            <a href="/"></a>
          </span>
        </div>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} w-full`}>
          <div className="lg:flex-grow text-center lg:text-left">
            <a
              href="/spiderman"
              className="block lg:inline-block text-white hover:text-blue-400 mx-2 mt-4 lg:mt-0"
            >
             PlayStation
            </a>
            <a
              href="#examples"
              className="block lg:inline-block text-white hover:text-blue-400 mx-2 mt-4 lg:mt-0"
            >
              Interests
            </a>
          </div>
          <div className="mt-4 lg:mt-0">
            <a
              href="#download"
              className="inline-block px-6 py-2 border border-blue-400 text-white hover:bg-blue-400 rounded-full transition duration-300"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
