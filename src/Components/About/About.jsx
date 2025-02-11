import React from "react";
import AboutImg from "../../assets/second-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Introduction
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am Abhishek, a software developer with strong problem-solving skills and expertise in C++ and web development. I specialize in building scalable, high-performance applications with a focus on efficiency and user experience.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Development
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I build interactive and efficient web applications using React.js, Next.js, and JavaScript. With a focus on performance and scalability, I ensure seamless user experiences and optimized system architecture.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Skills
                </h1>
                <p className="text-sm md:text-md leading-tight">
                C++ | HTML | CSS | JavaScript | React.js | Next.js | MERN | SQL | DBMS | OS | SDLC 


                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;