import React from "react";
import partener1 from "../../imges/p1.png";
import partener2 from "../../imges/p2.png";
import partener3 from "../../imges/p3.png";
import partener4 from "../../imges/p4.png";
import partener5 from "../../imges/p5.png";
import partener6 from "../../imges/p6.png";
import partener7 from "../../imges/p7.jpg";

const OurPartener = () => {
  return (
    <div>
      <div className="bg-white">
        <div className=" w-[90%] m-auto items-center h-[70px]  sm:h-[100px] md:h-[150px]  flex justify-center  ">
          <div className=" w-[80%] ">
            <img src={partener1} alt="logo" className=" w-[80%] " />
          </div>
          <div className=" w-[80%] ">
            <img src={partener2} alt="logo" className=" w-[80%] " />
          </div>
          <div className=" w-[80%] ">
            <img src={partener3} alt="logo" className=" w-[80%] " />
          </div>
          <div className=" w-[80%] ">
            <img src={partener4} alt="logo" className=" w-[80%] " />
          </div>
          <div className=" w-[80%] ">
            <img src={partener5} alt="logo" className=" w-[80%] " />
          </div>
        </div>
        <div className="w-[90%] m-auto items-center h-[70px]  sm:h-[100px] md:h-[150px]  flex justify-center  ">
          <div className=" w-[40%] "></div>
          <div className=" w-[80%] ">
            <img src={partener6} alt="logo" className=" w-[80%] " />
          </div>
          <div className=" w-[80%] ">
            <img src={partener7} alt="logo" className=" w-[80%] " />
          </div>
          <div className=" w-[40%] "></div>
        </div>
      </div>
    </div>
  );
};

export default OurPartener;
