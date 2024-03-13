import React from "react";
import PortfolioSlider from "./PortfolioSlider";


const Projects = () => {
  return (
    <div>
      <div className="text-center pb-14 lg:px-24 px-4">
        <h4 className="text-gray-200 font-semibold text-2xl">
          Latest Projects
        </h4>
        <h2 className="text-5xl font-bold leading-snug text-white">
          Portfolio to Explore
        </h2>
      </div>

      {/* carousel card */}
      <div className="lg:px-24 px-4 overflow-hidden">
         <PortfolioSlider />
      </div>


      <div className="md:h-24 h-12">

      </div>
    </div>
  );
};

export default Projects;
