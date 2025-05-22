import React from "react";

const SamplePost = () => {
  return (
    <div>
      <div className="h-[500px] w-[660px] px-9 py-4 m-10 bg-white shadow-lg shadow-blue-200 rounded-3xl">
        <div className="mt-4 h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="flex justify-between">
          <div>
            <h2 className="relative text-xl font-bold left-14 bottom-10">
              John Doe
            </h2>
            <p className="relative left-14 bottom-11 text-[12px] text-gray-500">
              12 April at 09:28 PM
            </p>
          </div>
          <div className="relative flex gap-1 mt-4 bottom-10">
            <div className="h-1.5 w-1.5 bg-gray-500 rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-gray-500 rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <p className="relative bottom-7">Caption...</p>
        <div className="flex gap-5">
          <div className="h-50 w-90 bg-gray-200 rounded-3xl"></div>
          <div>
            <div className="h-23 w-60 bg-gray-200 rounded-3xl"></div>
            <div className="mt-4 h-23 w-60 bg-gray-200 rounded-3xl"></div>
          </div>
        </div>
        <div className="mt-4 border-t-1 border-gray-300"></div>
        <div className="flex justify-between">
          <div className="relative top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
            </svg>
            <p className="relative bottom-6 left-8 text-[15px] text-gray-500">
              25 Comments
            </p>
          </div>

          <div className="relative top-4 right-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
            <p className="relative bottom-6 left-8 text-[15px] text-gray-500">
              120k Likes
            </p>
          </div>

          <div className="relative top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
            </svg>
            <p className="relative bottom-6 left-8 text-[15px] text-gray-500">
              231 Shares
            </p>
          </div>

          <div className="relative top-4 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
            >
              <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
            </svg>
            <p className="relative bottom-6 left-7 text-[15px] text-gray-500">
              10 Saved
            </p>
          </div>
        </div>
        <div className="mt-4 border-t-2 border-gray-300 w-165 place-self-center"></div>

        <div className="flex">
          <div className="mt-4 h-8 w-8 bg-gray-300 rounded-full"></div>
          <div className="relative flex justify-between top-3.5 left-3 rounded-xl h-9 w-140 bg-gray-100">
            <input placeholder="Write your comment..." className="relative left-3 text-sm text-gray-400 font-bold w-[400px] border-none outline-none" />
            <div className="relative flex gap-2 top-1.5 right-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
                >
                  <path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
                >
                  <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="h-6 w-6 fill-gray-400 stroke-current stroke-[2] cursor-pointer"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePost;
