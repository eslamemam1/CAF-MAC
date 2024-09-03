import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function Sidebar(props) {
  const { t } = useTranslation();
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <aside
      className={
        props.togol2 === true
          ? "view fixed z-20 left-0 top-0 h-screen w-[75%] sm:w-[%50] shadowR"
          : "hide fixed z-20 left-0 top-0 h-screen w-[75%] sm:w-[%50]"
      }
    >
      <div className=" backgroundColorSideBar">
        <div className=" flex flex-col items-center text-black h-screen">
          <FontAwesomeIcon
            onClick={() => {
              props.setTogol2(!props.togol2);
            }}
            icon={faTimes}
            className="text-gray-600 text-[25px] absolute right-[15px] top-[6px] x cursor-pointer"
          />
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
            }}
            className="navlinkEn bg-[#f0f0f0]"
            to={"#"}
          >
            <p>{t("Close")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction();
            }}
            className="navlinkEn"
            to={"/NewCafSports"}
          >
            <p>{t("Home")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction();
            }}
            className="navlinkEn"
            to={"/About"}
          >
            <p>{t("About Us")}</p>
          </NavLink>

          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction();
            }}
            className="navlinkEn"
            to={"/Projects"}
          >
            <p>{t("Our Projects")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction();
            }}
            className="navlinkEn"
            to={"/Services"}
          >
            <p>{t("Our Services")}</p>
          </NavLink>
          <NavLink
            onClick={() => {
              props.setTogol2(!props.togol2);
              topFunction();
            }}
            className="navlinkEn"
            to={"/Contact"}
          >
            <p>{t("Contact Us")}</p>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
