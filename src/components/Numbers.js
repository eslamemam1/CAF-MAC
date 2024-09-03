import React from "react";
import NumberCounter from "./NumberCounter";
const Numbers = () => {
  return (
    <div className=" flex flex-col sm:flex-row">
      <div className="w-full sm:w-[50%] h-[100px] bg-gray-800">
        <div className=" flex justify-center items-center h-[100px]">
          <span className=" font-semibold text-4xl sm:text-5xl pr-2 text-white"><NumberCounter targetNumber={13} /> </span>
          <span className=" text-[15px] md:text-[20px] font-normal text-start text-white leading-[20px]">
            Years of <br />
            Experienced
          </span>
        </div>
      </div>
      <div className="w-full sm:w-[50%] h-[100px] bg-[#00a44f]">
        <div className=" flex justify-center items-center h-[100px]">
          <span className=" font-semibold text-4xl sm:text-5xl pr-2 text-white"><NumberCounter targetNumber={770} /></span>
          <p className=" text-[15px] md:text-[20px] font-normal text-start text-white leading-[20px]">
            Project
            <br />
            Done
          </p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
