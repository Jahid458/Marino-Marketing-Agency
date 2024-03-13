import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="banner cs-style1" id="home">
      {/* CSS Shapes  */}
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>

      {/* Banner Content */}
      <div className="px-4 lg:px-24">
        <h1 className="md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug ">
          Innovation Flows Through Our Marino
        </h1>
        {/* Banner Btn & Text */}
        <div className="text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8">
          <div>
            <a href="" className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"><span>Get a Quote</span>
              <BsArrowRightShort /></a>
          </div>

          <div className="md:w-1/2">
            <p>
              We strive to provide our clients with unparalleled problem-solving
              solutions and deliver superior finished products ensuring
              excellence now and in the upcoming future.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Service Actions */}
      <Link to="services" smooth={true} className="cs-down_btn md:mt-8"></Link>
    </div>
  );
}

export default Hero;
