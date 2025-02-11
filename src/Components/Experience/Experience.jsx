import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMongodb } from "react-icons/si";
// Importing Image (Use this if the image is inside src/assets/)
import zidioLogo from "../../assets/photo-C8q0KQHG.png"; 

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCplusplus color="#FF4438" size={50} />
          </span>
        </div>

        {/* Experience Section */}
            <div className="w-full md:w-1/2 lg:w-2/5">
      <div className="flex flex-col md:flex-row gap-4 bg-black bg-opacity-45 rounded-lg p-4 md:p-5 items-center">
        <img
          src={zidioLogo}
          alt="Zidio Logo"
          className="w-14 h-14 object-contain rounded-lg"
        />
        <div className="text-white text-center md:text-left">
          <h2 className="text-base md:text-lg font-semibold">Web Developer, Zidio</h2>
          <p className="text-xs md:text-sm font-thin">Jan 2025 - Present</p>
          <ul className="text-xs md:text-sm mt-1 md:mt-2 space-y-1">
            <li>- Working as Intern</li>
            <li>- Web-Intern</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Experience;