import React from "react";

const Navbar1 = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-19 1 50 31" className="absolute z-[-1] h-screen w-screen" preserveAspectRatio="none">
        <path
          d="M 4 4 C 7 4 6 1 9 1 L 30 1 S 31 1 31 2 L 31 31 S 31 32 30 32 H -18 S -19 32 -19 31 V 2 C -19 1 -18 1 -18 1 H -15 C -12 1 -14 4 -10 4 H 4"
          fill="#bfdbfe"
        />
        
      </svg>
      <div class="relative z-10">
  <h1 class="text-4xl font-bold text-white text-center mt-20">
    Welcome to Study Group
  </h1>
  <p class="text-lg text-white text-center mt-4">
    Learn, share, and grow with others!
  </p>

</div>

      {/* <div className="relative left-50 bottom-210 h-[10px] w-[450px] m-10 bg-white shadow-lg shadow-blue-200 rounded-full"> */}

           {/* </div> */}
    </div>
  );
};

export default Navbar1;
