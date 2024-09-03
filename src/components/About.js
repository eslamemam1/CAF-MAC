import backgroundImage from "../imges/aboutUsBackGraound.png";
import logoForHeroSection from "../imges/logoForHeroSection.svg";
import logoForHeroSection1 from "../imges/logoForHeroSection1.svg";
import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import ourMesion from "../imges/ourMesion.png";
import ourVesion from "../imges/ourVesion.png";
import BackGroundOfSectionTwo from "../imges/BackGroundOfSectionTwo.svg";
import Vector from "../imges/Vector.svg";
import Vector2 from "../imges/Vector2.svg";
import LogoSectionTwo from "../imges/LogoSectionTwo.svg";
import OurValue from "../imges/OurValue.png";
import Support from "../imges/Support.png";
import HighQualityWork from "../imges/HighQualityWork.png";
import Expert from "../imges/Expert.png";
import OurPartener from "./new/OurPartener";
import Footer from "./Footer";
import SectionThreeHomPage from "./SectionThreeHomPage";
import { useTranslation } from "react-i18next";
import SmallContact from "./SmallContact";

function About(props) {
  const phoneNumber = "+201126484032";
  const { t, i18n } = useTranslation();
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
              {t("About Us")}
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
      <div
        className="style-blend-mode-section-two h relative "
        style={{
          backgroundImage: `url(${BackGroundOfSectionTwo})`,
        }}
      >
        <img
          src={Vector}
          alt="logo"
          className=" sm:w-[120px] w-[90px] absolute"
        />
        <img
          src={Vector2}
          alt="logo"
          className=" sm:w-[120px] w-[90px] absolute bottom-0 right-0 "
        />
        <div className=" w-full h-60 flex justify-center items-center">
          <div>
            <img
              src={LogoSectionTwo}
              alt="logo"
              className=" sm:w-[120px] w-[90px] "
            />
          </div>
          <div className=" pl-5">
          <p className=" text-xl text-green-700 sm:text-4xl ">
            {t("WELCOME TO")} <br />
            <span className="text-black">{t("CAF")}</span> {t("SPORTS")}
          </p>
          </div>
        </div>
        <div className=" w-[80%] md:w-[70%] m-auto">
        <p className=" text-xl font-medium relative bottom-8 ">
          {t(
            "We are CAF SPORTS One of the leading companies in Egypt and United Arab Emirates specialized in the field of sports construction and Artificial flooring."
          )}
        </p>
        </div>
        {/**------------- */}
        <div className="  w-[80%] m-auto flex flex-col md:flex-row sm:justify-between sm:items-center pt-5 ">
        <div className=" w-full md:w-[30%] flex justify-center md:justify-start ">
          <img
            src={ourMesion}
            alt="logo"
            className=" sm:w-[300px] w-[200px] "
          />
        </div>
        <div className=" flex flex-col md:items-start w-full md:w-[60%]">
          {i18n.language !== "ar" ? (
            <p className=" text-xl text-green-700 sm:text-2xl">
              OUR <span className="text-black">MISSION</span>
            </p>
          ) : (
            <p
              className={
                i18n.language !== "ar"
                  ? " text-xl text-green-700 sm:text-2xl md:text-right w-full"
                  : " text-xl text-green-700 sm:text-2xl md:text-right w-full"
              }
            >
              مشروعاتنا
            </p>
          )}
          <p
            className={
              i18n.language !== "ar"
                ? " font-medium text-base md:text-left text-crnter w-full"
                : " font-medium text-base md:text-right text-center w-full"
            }
          >
            {t(
              "to be committed, credible and transparent with our customers to provide High quality products at competitive prices and take into account the specifications of the products in order to achieve the highest degree of success and continuity within the Egyptian market and United Arab Emirates market."
            )}
          </p>
        </div>
      </div>
      {/**------------- */}
      <div className="  w-[80%] m-auto flex flex-col md:flex-row-reverse sm:justify-between sm:items-center pt-5 ">
        <div className=" w-full md:w-[30%] flex justify-center md:justify-end ">
          <img
            src={ourVesion}
            alt="logo"
            className=" sm:w-[300px] w-[200px] "
          />
        </div>
        <div className=" flex flex-col md:items-start w-full md:w-[60%]">
          {i18n.language !== "ar" ? (
            <p className=" text-2xl text-green-700 sm:text-2xl">
              OUR <span className="text-black">VISION</span>
            </p>
          ) : (
            <p
              className=" text-2xl text-green-700 sm:text-2xl md:text-right w-full"
            >
              رؤيتنا
            </p>
          )}
          <p
            className={
              i18n.language !== "ar"
                ? " font-medium text-base md:text-left"
                : " font-medium text-base md:text-right"
            }
          >
            {t(
              "At CAF SPORTS, we aspire to revolutionize the sports flooring industry by providing innovative, high-performance solutions that suit the needs of athletes, sports facilities and fitness enthusiasts around the world. Our vision is to create cutting-edge sports flooring systems that not only enhance sports performance but prioritize For safety, durability and sustainability."
            )}
          </p>
        </div>
      </div>
        {/**------------- */}
        <div className="  w-[80%] m-auto flex flex-col md:flex-row sm:justify-between sm:items-center pt-5 ">
        <div className=" w-full md:w-[30%] flex justify-center md:justify-start ">
          <img
            src={OurValue}
            alt="logo"
            className=" sm:w-[300px] w-[200px] "
          />
        </div>
        <div className=" flex flex-col md:items-start w-full md:w-[60%]">
          {i18n.language !== "ar" ? (
            <p className=" text-xl text-green-700 sm:text-2xl">
              OUR <span className="text-black">VALUE</span>
            </p>
          ) : (
            <p
              className={
                i18n.language !== "ar"
                  ? " text-xl text-green-700 sm:text-2xl md:text-right w-full"
                  : " text-xl text-green-700 sm:text-2xl md:text-right w-full"
              }
            >
              قيمتنا
            </p>
          )}
          <p
            className={
              i18n.language !== "ar"
                ? " font-medium text-base md:text-left text-crnter w-full"
                : " font-medium text-base md:text-right text-center w-full"
            }
          >
            {t(
              "CAF Sports has a distinguished group of specialized employees policy is based on commitment, trust and credibility And transparency with customers, while providing the best products available at prices commensurate with Everyone is observing the standard specifications and the high quality of the products"
            )}
          </p>
        </div>
      </div>
        <div className=" flex flex-col lg:flex-row w-[85%] pt-16 items-center justify-around m-auto">
          <div className=" rounded-border pb-5 w-[300px] sm:w-[400px] h-[230px] lg:w-[230px] sm:h-[230px] ">
            <img src={Vector} alt="logo" className=" w-[50px] " />
            <div className="w-[80%] m-auto  flex flex-col justify-center items-center">
              <img src={Expert} alt="logo" className=" w-[50px]" />
              <p className=" font-bold text-sm mt-1">{t("Expert & Professional")}</p>
              <p className="font-normal text-sm mt-1">
                {t("Always distinguished in all designs and products")}
              </p>
            </div>
          </div>
          <div className=" rounded-border pb-5 w-[300px] sm:w-[400px] h-[230px] mt-5 lg-mt-0 lg:w-[230px] sm:h-[230px] ">
            <img src={Vector} alt="logo" className=" w-[50px] " />
            <div className="w-[80%] m-auto  flex flex-col justify-center items-center">
              <img src={Support} alt="logo" className=" w-[50px]" />
              <p className=" font-bold text-sm mt-1">{t("High Quality Work")}</p>
              <p className="font-normal text-sm mt-1">
                {t("Our products conform to standard specifications and are suitable for changing weather conditions")}
              </p>
            </div>
          </div>
          <div className=" rounded-border pb-5 w-[300px] sm:w-[400px] h-[230px] mt-5 lg-mt-0 lg:w-[230px] sm:h-[230px] ">
            <img src={Vector} alt="logo" className=" w-[50px] " />
            <div className="w-[80%] m-auto  flex flex-col justify-center items-center">
              <img src={HighQualityWork} alt="logo" className=" w-[50px]" />
              <p className=" font-bold text-sm mt-1">{t("24/7 Help Support")}</p>
              <p className="font-normal text-sm mt-1">
                {t("Always at your service and the goal is to always satisfy our customers")}
              </p>
            </div>
          </div>
        </div>
        {/**---------------------- */}
        <div className=" h-24"></div>
      </div>
      <SectionThreeHomPage/>
      <OurPartener />
      <Footer/>
      <SmallContact/>
    </div>
  );
}

export default About;
