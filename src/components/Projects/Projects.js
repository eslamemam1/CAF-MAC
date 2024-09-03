import React, { useState, useEffect } from "react";
import backgroundImage from "../../imges/OurProjects.png";
import logoForHeroSection from "../../imges/logoForHeroSection.svg";
import logoForHeroSection1 from "../../imges/logoForHeroSection1.svg";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Vectoors from "../new/Vectoors";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";
import SmallContact from "../SmallContact";
import ButtonGroup from "../categories/ButtonGroup";

function Projects() {
  const { t } = useTranslation();
  const phoneNumber = "+201126484032";
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // Set initial width
    setWidth(window.innerWidth);

    // Add event listener to update width on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" text-center font-bold text-2xl sm:text-9xl h">
      <div
        className="style-blend-mode h "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="w-[100%] h-[100vh] flex flex-col md:flex-row items-center justify-center ">
          <div className="md:w-[40%] w-[100%] ">
            {width >= "768" ? (
              <div>
                <img
                  src={logoForHeroSection}
                  alt="Logo"
                  className=" w-[30rem] "
                />
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <img
                  src={logoForHeroSection1}
                  alt="Logo"
                  className=" w-[12rem] "
                />
              </div>
            )}
          </div>
          <div className="sm:pl-[50px] pt-10 md:pt-0 sm:pr-[50px] w-[100%] md:w-[60%] flex-col justify-center">
            <p className=" text-4xl lg:text-8xl text-center md:text-left text-white pb-5">
              {t("Our Projects")}
            </p>
          </div>
        </div>
        <div className="relative flex w-[85%] m-auto">
          <a
            href="https://www.facebook.com/ConsultantFlooringCAF?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="w-[30px] absolute bottom-5 right-0 text-white" />
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-[30px] absolute bottom-5 right-11 text-white" />
          </a>
          <a href="tel:(+20) 1032906015" target="_blank" rel="noopener noreferrer">
            <FaPhone className="w-[30px] absolute bottom-5 right-[90px] text-white" />
          </a>
        </div>
      </div>
      <Vectoors />
      <div className=" w-[85%] m-auto mt-20 mb-20">
        <ButtonGroup/>
      </div>
      <Footer />
      <SmallContact/>
    </div>
  );
}

export default Projects;
