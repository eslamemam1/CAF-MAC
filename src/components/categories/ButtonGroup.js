import React, { useState } from "react";
import "./buttomG.css";
import { useTranslation } from "react-i18next";
import ArtificialGrassforSportsSurfaces from "./ArtificialGrassforSportsSurfaces";
import ArtificialGrassforLandscape from "./ArtificialGrassforLandscape";
import GYMFlooring from "./GYMFlooring";
import PadelTennis from "./PadelTennis";
import TartanFlooring from "./TartanFlooring";
import AcrylicFlooring from "./AcrylicFlooring";
function MyComponent() {
  // Define state variables to track the class names
  const [activeElement, setActiveElement] = useState("element1");

  const { t, i18n } = useTranslation();

  // Function to handle click event
  const handleButtonClick = (elementId) => {
    setActiveElement(elementId);
  };

  return (
    <div>
      <div className=" flex flex-col gap-5 mb-5 lg:flex-row justify-center ">
        <button
          className="b font-normal text-xl rounded-border p-5 "
          onClick={() => handleButtonClick("element1")}
        >
          {t("Artificial Grass for Sports Surfaces")}
        </button>

        {/* Button to add class to the second element and remove from others */}
        <button
          className="b font-normal text-xl rounded-border p-5"
          onClick={() => handleButtonClick("element2")}
        >
          {t("Artificial Grass for Landscape")}
        </button>

        {/* Button to add class to the third element and remove from others */}
        <button
          className="b font-normal text-xl rounded-border p-5"
          onClick={() => handleButtonClick("element3")}
        >
          {t("GYM Flooring")}
        </button>

        <button
          className="b font-normal text-xl rounded-border p-5"
          onClick={() => handleButtonClick("element4")}
        >
          {t("Padel Tennis Flooring")}
        </button>

        {/* Button to add class to the second element and remove from others */}
        <button
          className="b font-normal text-xl rounded-border p-5"
          onClick={() => handleButtonClick("element5")}
        >
          {t("Tartan Flooring")}
        </button>

        {/* Button to add class to the third element and remove from others */}
        <button
          className=" b font-normal text-xl rounded-border p-5"
          onClick={() => handleButtonClick("element6")}
        >
          {t("Acrylic Flooring")}
        </button>
      </div>
      {/* Add or remove classes based on state */}
      <div className={activeElement === "element1" ? "active" : "defaultClass"}>
        <ArtificialGrassforSportsSurfaces/>
      </div>
      <div className={activeElement === "element2" ? "active" : "defaultClass"}>
        <ArtificialGrassforLandscape/>
      </div>
      <div className={activeElement === "element3" ? "active" : "defaultClass"}>
        <GYMFlooring/>
      </div>
      <div className={activeElement === "element4" ? "active" : "defaultClass"}>
        <PadelTennis/>
      </div>
      <div className={activeElement === "element5" ? "active" : "defaultClass"}>
        <TartanFlooring/>
      </div>
      <div className={activeElement === "element6" ? "active" : "defaultClass"}>
        <AcrylicFlooring/>
      </div>
    </div>
  );
}

export default MyComponent;
