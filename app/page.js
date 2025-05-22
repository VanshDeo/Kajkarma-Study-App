import Image from "next/image";
import Navbar from "./components/Navbar";
import Groups from "./components/Groups";
import PostFeature from "./components/PostFeature";
import SamplePost from "./components/SamplePost";
import About from "./components/About";

export default function Home() {
  return (
    <>
    {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
    <Navbar></Navbar>
    <div className="relative flex bottom-12">
    <Groups></Groups>
    <div className="relative right-10">
    <PostFeature></PostFeature>
    <SamplePost></SamplePost>
    <SamplePost></SamplePost>
    </div>
    <div className="relative right-20 bottom-71">
      <About></About>
    </div>
    </div>
    {/* </div> */}
    </>
  );
}
