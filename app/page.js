import Image from "next/image";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";

export default function Home() {
  return (
    <>
    {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> */}
    <Card></Card>
    <div className="relative flex bottom-12">
    <Card2></Card2>
    <div className="relative right-10">
    <Card3></Card3>
    <Card4></Card4>
    <Card4></Card4>
    </div>
    <div className="relative right-20 bottom-71">
      <Card5></Card5>
    </div>
    </div>
    {/* </div> */}
    </>
  );
}
