import React, { useState } from "react";
import SmallContact from "./SmallContact";
import SectionTwoHomePage from "./SectionTwoHomePage";
import SectionThreeHomPage from "./SectionThreeHomPage";
import SectionFourHomePage from "./SectionFourHomePage";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";
function HomePage(props) {
  const [togol2, setTogol2] = useState(false);
  const handelClick = () => {
    setTogol2(!togol2);
    console.log(togol2);
  };
  return (
    <div className=" bg-[#f9f9f9] text-center font-bold text-2xl sm:text-9xl h overflow-hidden">
      <div
        id="nav2"
        onClick={handelClick}
        className={togol2 === false ? " hidden" : "visible"}
      ></div>
      <div className="h">
        {/** <p className=" text-white leading-[92vh]">{props.home}</p> */}
        <div className=" h-full">
          {/** <SimpleSlider /> 
          <SectionOneHomePage />
          */}
          <ImageSlider/>
          <SectionTwoHomePage />
          <SectionThreeHomPage/>
          <SectionFourHomePage/>
          <Footer/>
        </div>
        <SmallContact />
      </div>
    </div>
  );
}

export default HomePage;
