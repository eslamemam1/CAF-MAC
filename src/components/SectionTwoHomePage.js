import React from "react";
import BackGroundOfSectionTwo from "../imges/BackGroundOfSectionTwo.svg";
import Vector from "../imges/Vector.svg";
import Vector2 from "../imges/Vector2.svg";
import LogoSectionTwo from "../imges/LogoSectionTwo.svg";
import ourMesion from "../imges/ourMesion.png";
import ourVesion from "../imges/ourVesion.png";
import { useTranslation } from "react-i18next";
const SectionTwoHomePage = () => {
  const { t, i18n } = useTranslation();
  return (
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
      <div className=" w-[80%] m-auto">
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
      <div className=" h-24"></div>
    </div>
  );
};

export default SectionTwoHomePage;
