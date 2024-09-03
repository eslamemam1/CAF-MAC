import React from "react";
import backgroundImage from "../imges/BackGroundOfSectionTwo1.svg";
import logoSectionThree from "../imges/logoSectionThree.svg";
const SectionThreeHomPage = () => {
  return (
    <div
      className=" backgroundColor"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className=" flex justify-center h-[300px] items-center">
      <img src={logoSectionThree} alt="Logo" className=" w-[15rem]  sm:w-[25rem] " />
      </div>
    </div>
  );
};

export default SectionThreeHomPage;
