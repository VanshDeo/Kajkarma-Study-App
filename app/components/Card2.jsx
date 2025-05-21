"use client";

import React, { useState } from "react";

const Card2 = () => {
  const [id, setId] = useState(0);

  const arr_items = ['Study Group', 'Web Design', 'Digital Marketing']

  return (
    <div>
      <div className="h-[320px] w-[300px] p-10 m-10 bg-white shadow-lg shadow-blue-200 rounded-3xl">
        <h2 className="text-[20px] px-4">Groups</h2>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="relative h-5 w-5 bottom-6 left-42 fill-gray-400 cursor-pointer"
          >
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
          </svg>
        </div>
        <div className="px-4">
            {arr_items.map((item, index) => (
                <button
                key={index}
                onClick={() => {
                  setId(index);
                }}
                className={`h-[35px] w-[150px] text-lg text-gray-500 hover:text-black rounded-full ${id===index?'bg-blue-100':'bg-white text-left'} transition-all duration-300`}
              >
                {item}
              </button>
            ))}
          </div>
        <div className="mt-4 border-t-2 border-gray-300"></div>

        <div className="p-4 mt-4">
            <button className="h-9 w-40 border-2 border-blue-400 text-blue-500 rounded-full hover:bg-blue-50 transition-all duration-300">Create New Group</button>
        </div>
    </div>
    </div>
  );
};

export default Card2;
