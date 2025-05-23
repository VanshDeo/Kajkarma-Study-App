"use client";

import React, { useRef } from "react";
import Image from "next/image";

const PostFeature = () => {
  const inputRef = useRef();

  const post = async (post) => {
    if (!post) {
      return;
    }
    try {
      const response = await fetch("https://kajkarma.onrender.com/api/posts", {
        method: "POST",
        body: post
      });
      if (!response.ok) {
        alert("An unexpected error occured");
        return;
      } else {
        alert("Post created successfully");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error : ${error.message}`);
    }
  };

  // const get = async () => {
  //   try {
  //     const response = await fetch("https://kajkarma.onrender.com/api/posts");
  //     if (!response.ok) {
  //       alert("An unexpected error occured");
  //       return;
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(`Error : ${error.message}`);
  //   }
  // };

  return (
    <div>
      <div className="h-[150px] w-[660px] p-10 mt-5 bg-white shadow-lg shadow-blue-200 rounded-3xl w-full">
        <h2 className="text-[20px] text-gray-800">Post Something</h2>
        <div className="mt-4 border-t-2 border-gray-300"></div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="mt-4 h-8 w-8 bg-gray-300 rounded-full"></div>
            <input
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const formData = new FormData();
                  formData.append("content", inputRef.current.value);
                  post(formData);
                }
              }}
              placeholder="What's on your mind?"
              className="relative bottom-7 left-9 font-bold text-sm text-gray-500 h-[25px] w-full border-none outline-none"
            />
          </div>
          <div className="relative flex gap-2">
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 49 49"
                className="relative h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
              >
                <path
                  d="M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512
			c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744
			C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z"
                />
                <path
                  d="M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229
			c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113
			c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="relative h-6 w-6 cursor-pointer"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="relative h-6 w-6 cursor-pointer"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFeature;
