import React from "react";
import Slider from "react-slick";
import SectionOneHomePage from "./sectionOneHomePage/SectionOneHomePage";
import HomePageBgTwo from "./sectionOneHomePage/HomePageBgTwo";
import HomePageBgThree from "./sectionOneHomePage/HomePageBgThree";
import HomePageBgFour from "./sectionOneHomePage/HomePageBgFour";
import HomePageBgFive from "./sectionOneHomePage/HomePageBgFive";
import "./Slider.css"
import HomePageBgSix from "./sectionOneHomePage/HomePageBgSix";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider className="z-0" {...settings}>
            <SectionOneHomePage/>
            <HomePageBgTwo/>
            <HomePageBgThree/>
            <HomePageBgFour/>
            <HomePageBgFive/>
            <HomePageBgSix/>
        </Slider>
  );
};

export default ImageSlider;
