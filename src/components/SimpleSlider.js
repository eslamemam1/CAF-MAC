import React, { Component } from "react";
import Slider from "react-slick";
import gymFloor5 from "../products/gymFloor5.jpg";
import gymFloor6 from "../products/gymFloor6.jpg";
import grusFloor1 from "../products/grusFloor1.jpg";
import grusFloor3 from "../products/grusFloor3.jpg";
import schoolFloor1 from "../products/schoolFloor1.jpg";
import swimmingPul from "../products/swimmingPul.jpg";
import grusFloor7 from "../products/grusFloor7.jpg";
import tertanFloor6 from "../products/tertanFloor6.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className=" bg-[rgb(59 130 246 / 0.5)] min-h-[400px]">
        <div className=" flex flex-col items-center">
          <p className=" text-center pt-1 pb-1 font-normal textV">
            HOT PRODUCTS
          </p>
          <div className="w-[60px] mt-2 mb-5 border border-gray-300"></div>
        </div>
        <Slider className="  h-[60vh] sm:h-[81vh]" {...settings}>
          <div>
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${gymFloor5})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
          <div className=" h-[60vh] sm:h-[81vh]">
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${gymFloor6})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
          <div className=" h-[60vh] sm:h-[81vh]">
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${grusFloor1})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
          <div className=" h-[60vh] sm:h-[81vh]">
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${grusFloor3})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
          <div className=" h-[60vh] sm:h-[81vh]">
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${schoolFloor1})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
          <div className=" h-[60vh] sm:h-[81vh]">
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${swimmingPul})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
          <div className=" h-[60vh] sm:h-[81vh]">
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${grusFloor7})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
          <div className=" h-[60vh] sm:h-[81vh]">
            <div
              className="style-blend-mode-prouduct h-[60vh] sm:h-[81vh] "
              style={{
                backgroundImage: `url(${tertanFloor6})`,
              }}
            >
              {/** <h2 className=" text-white sm:leading-[81vh] leading-[60vh]">
                GYM FLOORING
              </h2> */}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
