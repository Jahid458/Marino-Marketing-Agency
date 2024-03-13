import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white">
      {/* Footer top */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
        <div className="space-y-4 lg:w-1/3">
          <a href="/" className="text-white text-3xl font-bold ">
            <span className="text-orange">M</span>arino
          </a>
          <p className="text-gray-200">
            We're glad you've chosen us, and we want to show our appreciation by
            giving you a special incentive.
          </p>

          {/* Social icons */}
          <div className="flex gap-5 text-white ">
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="/"
              className="block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* services  */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Services</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block">
              UI/UX Design
            </a>
            <a href="/" className="block">
              VR Solutions
            </a>
            <a href="/" className="block">
              SEO Optimization
            </a>
            <a href="/" className="block">
              WEb Development
            </a>
          </div>
        </div>

        {/* Contact */}

        <div className="space-y-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>+88013135896</p>
              <p>marino@digitech.com</p>
              <p>
                Banani, <br />
                Dhaka 
              </p>
            </div>
          </div>
        </div>

        {/* subscribe */}
        <div className="space-y-4 lg:w-96">
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <div className="space-y-3 text-gray-300">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="example@email.com"
                className="newsletter_input"
              />
              <button className="newsletter_btn">
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <hr className="border-gray-300"/>
      <div className="h-8"></div>

      {/* Copyright Text */}
      <div className="flex flex-col sm:flex-row justify-between pb-7">
        <p>Copyright@2024 Marino</p>
        <p>Terms of use | Privacy Policy</p>
      </div>

    </div>
  );
};

export default Footer;
