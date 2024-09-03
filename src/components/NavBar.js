import React, { useRef } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./HomePage";
import About from "./About";
import Projects from "./Projects/Projects.js";
import Contact from "./ContactUs/Contact.js";
import Services from "./Services/Services.js"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import logoLight from "../imges/logoLight.svg";
import RightSideBar from "./RightSideBar";
import DropdownMenu from "./DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar(props) {
  const { t, i18n } = useTranslation();
  const ref = useRef();
  const handelClick = () => {
    props.setTogol2(!props.togol2);
    console.log(props.togol2);
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      ref={ref}
      id="nav"
      className={
        i18n.language !== "en"
          ? " arFont overflow-clip"
          : "enFont overflow-clip"
      }
    >
      <div
        id="nav2"
        onClick={handelClick}
        className={props.togol2 === false ? " hidden" : "visible"}
      ></div>
      {/** SideBar */}
      <div>
        <div className={i18n.language === "en" ? "" : "hidden"}>
          <Sidebar togol2={props.togol2} setTogol2={props.setTogol2} />
        </div>
        <div className={i18n.language === "ar" ? "" : "hidden"}>
          <RightSideBar togol2={props.togol2} setTogol2={props.setTogol2} />
        </div>
      </div>
      {/** End Of SideBar */}
      <nav id="navBarS" className="h-0">
        <div
          className={
            i18n.language === "en"
              ? " flex w-[85%] m-auto justify-between items-center sm:h-[13vh] h-[10vh] relative z-10 "
              : " flex w-[85%] m-auto justify-between items-center sm:h-[13vh] h-[10vh] relative z-10 flex-row-reverse" /** flex-row-reverse */
          }
        >
          <div
            className={
              i18n.language === "en"
                ? " text-center w-[155px] ml-4 sm:ml-0 text-[#ffffff] font-bold text-[35px] "
                : " text-center w-[155px]  text-[#ffffff] font-bold text-[35px] "
            }
          >
            <div
              className={
                i18n.language === "en"
                  ? "flex items-center "
                  : "flex items-center justify-end mr-3 "
              }
            >
              <img
                src={logoLight}
                alt="logo"
                className=" sm:w-[120px] w-[90px] "
              />
            </div>
          </div>
          {/** menu */}
          <div
            className={
              i18n.language === "en"
                ? " text-right text-base font-semibold text-[#2e2e2e] max-lg:hidden flex gap-[40px] flex-row-reverse items-center"
                : " text-left text-lg text-[#2e2e2e] max-lg:hidden flex gap-[80px] items-center "
            }
          >
            {/** lang */}
            <DropdownMenu />
            <ul
              className={
                i18n.language === "en"
                  ? " flex gap-5"
                  : " flex flex-row-reverse gap-5"
              }
            >
              <li className="navlink text-[#ffffff]">
                <NavLink
                  element={props.togol2}
                  onClick={topFunction}
                  className="navlink0"
                  to={"/NewCafSports"}
                >
                  {t("Home")}
                </NavLink>
              </li>
              <li className="navlink text-[#ffffff]">
                <NavLink
                  onClick={topFunction}
                  className="navlink0 "
                  to={"/About"}
                >
                  {t("About Us")}
                </NavLink>
              </li>

              <li className="navlink text-[#fff]">
                <NavLink
                  onClick={topFunction}
                  className="navlink0"
                  to={"/Projects"}
                >
                  {t("Our Projects")}
                </NavLink>
              </li>

              <li className="navlink text-[#fff]">
                <NavLink
                  onClick={topFunction}
                  className="navlink0"
                  to={"/Services"}
                >
                  {t("Services")}
                </NavLink>
              </li>
              <li className="navlink text-[#fff]">
                <NavLink
                  onClick={topFunction}
                  className="navlink0"
                  to={"/Contact"}
                >
                  {t("Contact Us")}
                </NavLink>
              </li>
            </ul>
          </div>

          <div
            className={
              i18n.language === "en"
                ? " flex items-center gap-4 flex-row-reverse lg:hidden "
                : " flex items-center gap-4 lg:hidden"
            }
          >
            <FontAwesomeIcon
              onClick={handelClick}
              className="fas fa-bars lg:hidden sm:text-[23px] text-[20px] text-[#ffffff] cursor-pointer"
              icon={faBars}
            />
            <div className="lg:hidden">
              <DropdownMenu />
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/NewCafSports" element={<HomePage home={t("Home")} />} />
        <Route path="/About" element={<About about={t("About Us")} />} />
        <Route
          path="/Projects"
          element={<Projects Projects={t("Our Projects")} />}
        />
        <Route
          path="/Services"
          element={<Services Services={t("Services")} />}
        />
        <Route
          path="/Contact"
          element={<Contact contact={t("Contact Us")} />}
        />
      </Routes>
    </div>
  );
}

export default NavBar;
