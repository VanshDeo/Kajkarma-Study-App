"use client";

import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [joined, setJoined] = useState(false);
  const [id,setId] = useState(0);

  const arr_items = [
    "Feed",
    "Discussion",
    "Featured",
    "Members",
    "Events",
    "Media",
    "Files",
  ];

  return (
    <div>
      <div className="h-[250px] w-[1000px] m-10 bg-white shadow-lg shadow-blue-200 rounded-3xl">
        <div className="relative h-[100px] w-[1000px] bg-gradient-to-r from-blue-500 to-blue-400 rounded-t-3xl">
          <button className="absolute top-8 left-6 bg-white p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-4 w-4 fill-blue-500"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
          </button>
        </div>
        <div className="flex justify-between">
          <div className="p-6">
            <h2 className="text-[30px] text-gray-800">Study Group</h2>
            <p className="text-sm text-gray-500">
              A place to study, share notes, and collaborate with peers.
            </p>
          </div>
          <div className="flex p-6 mt-3 gap-3">
            <button
              onClick={() => setJoined(!joined)}
              className={`h-10 w-20 text-[17px] cursor-pointer border-1 border-blue-400 rounded-3xl text-blue-500 hover:bg-blue-400 hover:text-white transition-all duration-300 ${
                joined
                  ? "text-white bg-blue-400"
                  : "text-blue-500 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {joined ? "Joined" : "Join"}
            </button>
            <button
              className={`h-10 w-20 text-[17px] cursor-pointer border-1 border-blue-400 rounded-3xl text-blue-500 hover:bg-blue-400 hover:text-white transition-all duration-300`}
            >
              Invite
            </button>
            <div className="flex gap-1 mt-4">
              <div className="h-1.5 w-1.5 bg-gray-500 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-500 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300"></div>
        <nav className="flex px-6 ">
          <ul className="flex gap-6">
            {arr_items.map((item, index) => (
              <li
                key={index}
                onClick={() => setId(index)}
                className={`py-1.25 cursor-pointer hover:text-blue-500 ${id===index?'whitespace-nowrap border-b-2 border-blue-500 text-blue-500 transition-all duration-500':'text-gray-500 border-transparent hover:text-blue-500'}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
         
        <p></p>
      </div>
    </div>
  );
};

export default Navbar;
