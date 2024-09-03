import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {FaGlobe } from "react-icons/fa";
function DropdownMenu() {
  const { i18n } = useTranslation();
  const [togol, setTogol] = useState(true);
  return (
    <div
      className={
        i18n.language !== "ar"
          ? " dropdown flex flex-row-reverse gap-5 items-center relative z-10 "
          : " dropdown flex gap-5 items-center relative z-10"
      }
    >
      <FaGlobe className="fa-regular text-white text-2xl" />
      {
        <ul className="dropdown-menu">
          <li>
            {" "}
            <button
              className={
                i18n.language !== "ar"
                  ? " enFont text-sm font-bold text-white "
                  : " hidden"
              }
              onClick={() => {
                i18n.changeLanguage("ar");
                setTogol(!togol);
              }}
            >
              Ar
            </button>
          </li>
          <li>
            {" "}
            <button
              className={
                i18n.language !== "en"
                  ? " enFont text-sm font-bold text-white "
                  : " hidden"
              } /** effect */
              onClick={() => {
                i18n.changeLanguage("en");
                setTogol(!togol);
              }}
            >
              En
            </button>
          </li>
        </ul>
      }
    </div>
  );
}

export default DropdownMenu;
