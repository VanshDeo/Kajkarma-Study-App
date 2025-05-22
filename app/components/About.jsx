import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-[350px] w-[250px] px-8 py-6 m-10 bg-white shadow-lg shadow-blue-200 rounded-3xl">
        <h2 className="text-[20px]">About</h2>
        <div className="relative left-13 bottom-2 mt-4 h-20 w-20 bg-gray-300 rounded-full"></div>
        <p className="relative left-11 text-lg ">Study Group</p>
        <p className="relative left-3 text-[13px] text-gray-500">
          Private group,20 members
        </p>
        <p className="relative top-2 left-3 text-[15px] text-gray-600">
          A place to study, share notes, and collaborate with peers.
        </p>
        <div>
          <button className="relative top-7 left-10 h-8 w-25 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-50 transition-all duration-300">
            Edit About
          </button>
        </div>
      </div>

      <div className="relative bottom-2 h-[200px] w-[250px] px-8 py-6 m-10 bg-white shadow-lg shadow-blue-200 rounded-3xl">
        <h2 className="text-[20px]">Resources</h2>
        <div className="flex justify-between relative top-5">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" />
            </svg>
            <p className="text-[15px] text-gray-500 cursor-pointer">
              Shared Notes
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4 relative top-5">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
            <p className="text-[15px] text-gray-500 cursor-pointer">
              Core Files
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4 relative top-5">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
            </svg>
            <p className="text-[15px] text-gray-500 cursor-pointer">
              Top Links
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative bottom-3 h-[80px] w-[250px] px-8 py-6 m-10 bg-white shadow-lg shadow-blue-200 rounded-3xl">

        <div className="flex ">
          <div className="w-8 h-8 border-2 border-white bg-blue-400 rounded-full"></div>
          <div className="relative right-3 border-2 border-white w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="relative right-6 border-2 border-white w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="relative right-9 top-5 border-1 border-white w-3 h-3 bg-green-400 rounded-full"></div>
          <p className="relative top-1 right-5 text-gray-500">Online</p>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
                className="relative top-1 left-3 h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
