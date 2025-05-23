"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Groups from "./components/Groups";
import PostFeature from "./components/PostFeature";
import SamplePost from "./components/SamplePost";
import About from "./components/About";
import { useEffect, useState } from "react";

export default function Home() {

  const [postData, setPostData] = useState([]);

  const fetchPostData = async () => {
    try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_KAJKARMA_URL}/posts`);
          if (!response.ok) {
            alert("An unexpected error occured");
            return;
          }
          const data = await response.json();
          console.log(data);
          
          setPostData(data.posts)

        } catch (error) {
          console.error(`Error : ${error.message}`);
        }
  }

  useEffect( () => {
    fetchPostData();
  },[] )

  return (
    <>
      <div className="p-4 mx-auto">
        <Navbar></Navbar>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:flex-col space-y-4">
            <Groups></Groups>
          </div>
          <div className="">
            <PostFeature></PostFeature>
            {postData.map((item,index) => (
              <SamplePost 
                key={index}
                username={item.user_id.username}
                content={item.content}
                imagePath={item.imagePath}
                likes={item.likes}
                shares={item.shares}
                comments={item.comments}
                saved={item.saved}
                created_At={item.createdAt}
              ></SamplePost>
            ))}
          </div>
          <div className="relative bottom-63">
            <About></About>
          </div>
        </div>
      </div>
    </>
  );
}
