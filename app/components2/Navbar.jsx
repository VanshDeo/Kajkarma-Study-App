import React from "react";

const Navbar = () => {
  const arr_items = [
    "Home",
    "Community",
    "Jobs",
    "Mentors",
    "Courses",
    "Events",
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center bg-white shadow-md rounded-2xl px-4 py-2 mb-6">
          <ul className="flex items-center gap-4 flex-wrap">
            {arr_items.map((item, index) => (
              <li
                key={index}
                className="font-medium text-gray-600 hover:text-blue-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="relative left-8"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <input
            type="text"
            placeholder="       Search"
            className="relative w-full rounded-full px-4 py-1 border border-gray-300 bg-white"
          />
        </div> ̰
        <div className="flex gap-2"></div>
      </div>
    </>
  );
};

export default Navbar;
