import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import ScrollToTopButton from "./new/ScrollToTopButton ";
function SmallContact() {
  const { i18n } = useTranslation();
  const ref = useRef();
  useScrollPosition(({ prevPos, currPos }) => {
    /** console.log(currPos.x); */
    if (currPos.y <= -300) {
      ref.current.className = "w-5";
      /** console.log(currPos.y); */
    } else if (currPos.y <= 0 && currPos.y >= -300) {
      ref.current.className = " hidden";
      /** console.log("ss"); */
    }
  });

  return (
    <div ref={ref} className=" hidden">
      <a
        href="#nav"
        className={
          i18n.language === "en"
            ? "fixed right-5 top-[90%]"
            : "fixed left-5 top-[90%]"
        }
      >
        <div
          className={
            i18n.language === "en"
              ? "mr-4 relative bottom-3 w-7 h-9 rounded-full bg-[#44444480]"
              : "ml-4 relative bottom-3 w-7 h-9 rounded-full bg-[#44444480]"
          }
        >
          <ScrollToTopButton/>
        </div>
      </a>
    </div>
  );
}

export default SmallContact;
