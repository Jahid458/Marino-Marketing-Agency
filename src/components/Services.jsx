import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

//Import images
import service1 from "../assets/service_1.jpeg";
import service2 from "../assets/service_2.jpeg";
import service3 from "../assets/service_3.jpeg";
import service4 from "../assets/service_4.jpeg";

function Services() {
  return (
    <div className="text-white lg:px-24 ">
      <div className="h-36"></div>

      {/* Services Section */}
      <div className="lg:flex lg:justify-between items-start" id='services'>
        {/* Content */}
        <div className="lg:w-1/3 space-y-5 ">
          <h4 className="text-gray-200 font-semibold text-2xl">
            What Can We Do
          </h4>
          <h2 className="text-5xl font-bold mb-5 leading-snug">
            Services We Can Help You With
          </h2>
          <a
            href=""
            className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in"
          >
            <span>See all Services</span>
            <BsArrowRightShort />
          </a>
        </div>

        {/* Services Cards */}
        <div className="lg:w-2/3 my-8">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 hidden lg:block"></div>
            <div className="service-card">
              <a href="/" className="rounded-2xl block relative">
                <img src={service1} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    UI/UX DESIGN
                  </h2>
                </div>
              </a>
            </div>

            <div className="lg:w-1/4 hidden lg:block"></div>
            <div className="service-card">
              <a href="/" className="rounded-2xl block relative">
                <img src={service2} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    SEO Optimization
                  </h2>
                </div>
              </a>
            </div>

            <div className="service-card">
              <a href="/" className="rounded-2xl block relative">
                <img src={service3} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    VR Soutions
                  </h2>
                </div>
              </a>
            </div>

            <div className="lg:w-1/4 hidden lg:block"></div>

            <div className="service-card">
              <a href="/" className="rounded-2xl block relative">
                <img src={service4} alt="" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                {/* Text */}
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">Web Development</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-36"></div>
    </div>
  );
}

export default Services;
