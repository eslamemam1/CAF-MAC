import backgroundImage from "../../imges/homePage/6.jpg";
import logoForHeroSection from "../../imges/logoForHeroSection.svg";
import logoForHeroSection1 from "../../imges/logoForHeroSection1.svg";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const HomePageBgFive = () => {
  const phoneNumber = "+201126484032";
  const { i18n } = useTranslation();
  const { t } = useTranslation();
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
    <div className=" text-center font-bold text-2xl sm:text-9xl h ">
      <div
        className="style-blend-mode h "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="w-[100%] myComponent h-[100vb] flex flex-col md:flex-row items-center justify-center ">
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
          <div className="sm:pl-[50px] pt-10 md:pt-0 sm:pr-[50px] w-[100%] md:w-[60%] flex-col ">
            <p
              className={
                i18n.language !== "ar"  
                  ? " text-5xl md:text-3xl lg:text-5xl text-center md:text-left text-white m-auto pb-5 w-[80%]"
                  : " text-5xl md:text-3xl lg:text-5xl text-center md:text-right text-white m-auto pb-5 w-[80%]"
              }
            >
              {t("Versatile Solutions")}
            </p>
            <p
              className={
                i18n.language !== "ar"
                  ? " text-xl font-normal text-center md:text-left text-white m-auto w-[80%] "
                  : " text-xl font-normal text-center md:text-right text-white m-auto w-[80%] "
              }
            >
              {t(
                "Discover Versatile Solutions Tailored to Meet Your Every Need"
              )}
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
    </div>
  );
};

export default HomePageBgFive;
