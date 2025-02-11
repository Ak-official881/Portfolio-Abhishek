import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMongodb } from "react-icons/si";
// Importing Image (Use this if the image is inside src/assets/)
import zidioLogo from "../../assets/photo-C8q0KQHG.webp"; 

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
        <div>
          <div className="flex gap-10 bg-black bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img 
              src={zidioLogo} 
              alt="Zidio Logo" 
              className="bg-amber-50w-[50px] h-[50px] object-contain rounded-lg"
            />
            <span className="text-white">
              <h2 className="leading-tight">Web Developer, Zidio</h2>
              <p className="text-sm leading-tight font-thin">Jan 2025 - Present</p>
              <ul className="text-sm p-2">
                <li>- Working as Intern</li>
                <li>- Web-Intern</li>
              </ul>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
