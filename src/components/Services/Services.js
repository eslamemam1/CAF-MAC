import backgroundImage from "../../imges/Services.jpg";
import logoForHeroSection from "../../imges/logoForHeroSection.svg";
import logoForHeroSection1 from "../../imges/logoForHeroSection1.svg";
import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Supply from "../../imges/Supply.jpg";
import installation from "../../imges/installation.jpg";
import BackGroundOfSectionTwo from "../../imges/BackGroundOfSectionTwo.svg";
import Vector from "../../imges/Vector.svg";
import Vector2 from "../../imges/Vector2.svg";
import LogoSectionTwo from "../../imges/LogoSectionTwo.svg";
import Maintenance from "../../imges/Maintenance.jpg";
import OurPartener from "../new/OurPartener";
import Footer from "../Footer";
import SectionThreeHomPage from "../SectionThreeHomPage";
import { useTranslation } from "react-i18next";
import SmallContact from "../SmallContact";
import Qrcode1 from "../qrcode/Qrcode1.js"
import Qrcode2 from "../qrcode/Qrcode2.js"
import Qrcode3 from "../qrcode/Qrcode3.js"
import Qrcode4 from "../qrcode/Qrcode4.js"
import Qrcode5 from "../qrcode/Qrcode5.js"
import Qrcode6 from "../qrcode/Qrcode6.js"

function Services(props) {
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
              {t("Our Services")}
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
        <div className=" w-[55%] m-auto">
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
            src={Supply}
            alt="logo"
            className=" sm:w-[300px] w-[200px] "
          />
        </div>
        <div className=" flex flex-col md:items-start w-full md:w-[60%]">
          {i18n.language !== "ar" ? (
            <p className=" text-xl text-green-700 sm:text-2xl">
              Supply
            </p>
          ) : (
            <p
              className={
                i18n.language !== "ar"
                  ? " text-xl text-green-700 sm:text-2xl md:text-right w-full"
                  : " text-xl text-green-700 sm:text-2xl md:text-right w-full"
              }
            >
              توريد
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
              "Caf Sports offers first class sports flooring supply solutions tailored to meet the needs of your sports facility. Our range of high-quality materials ensures optimal performance and safety for athletes of all levels. Trust Caf Sports to elevate your sports experience with reliable and durable flooring solutions."
            )}
          </p>
        </div>
      </div>
      {/**------------- */}
      <div className="  w-[80%] m-auto flex flex-col md:flex-row-reverse sm:justify-between sm:items-center pt-5 ">
        <div className=" w-full md:w-[30%] flex justify-center md:justify-end ">
          <img
            src={installation}
            alt="logo"
            className=" sm:w-[300px] w-[200px] "
          />
        </div>
        <div className=" flex flex-col md:items-start w-full md:w-[60%]">
          {i18n.language !== "ar" ? (
            <p className=" text-2xl text-green-700 sm:text-2xl">
              Installation
            </p>
          ) : (
            <p
              className=" text-2xl text-green-700 sm:text-2xl md:text-right w-full"
            >
              تركيب
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
              "At Caf Sports, we specialize in the precise installation of sports flooring. Our expert team ensures a seamless process, from preparation to completion, delivering high-quality results for your athletic facility"
            )}
          </p>
        </div>
      </div>
        {/**------------- */}
        <div className="  w-[80%] m-auto flex flex-col md:flex-row sm:justify-between sm:items-center pt-5 ">
        <div className=" w-full md:w-[30%] flex justify-center md:justify-start ">
          <img
            src={Maintenance}
            alt="logo"
            className=" sm:w-[300px] w-[200px] "
          />
        </div>
        <div className=" flex flex-col md:items-start w-full md:w-[60%]">
          {i18n.language !== "ar" ? (
            <p className=" text-xl text-green-700 sm:text-2xl">
              Maintenance
            </p>
          ) : (
            <p
              className={
                i18n.language !== "ar"
                  ? " text-xl text-green-700 sm:text-2xl md:text-right w-full"
                  : " text-xl text-green-700 sm:text-2xl md:text-right w-full"
              }
            >
              صيانة
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
              "At Caf Sports, we provide expert maintenance services to keep your sports flooring in top condition. From routine cleaning to repairs, trust us to ensure your flooring remains safe and durable for years to come"
            )}
          </p>
        </div>
      </div>
      <div>
        <div className=" w-full text-xs flex flex-col sm:flex-row justify-evenly items-center">
        <Qrcode1/>
        <Qrcode2/>
        <Qrcode3/>
        </div>
        <div className=" w-full text-xs flex flex-col sm:flex-row justify-evenly items-center">
        <Qrcode4/>
        <Qrcode5/>
        <Qrcode6/>
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

export default Services;
