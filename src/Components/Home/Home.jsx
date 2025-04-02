import React from "react";
// import avatarImg from "../../assets/first-removebg-preview.png";
import avatarImg from "/src/assets/first-removebg-preview2.png";

import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20 gap-10">
      
      {/* Left Section */}
      <div className="md:w-2/4 text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold leading-tight tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-2 md:mt-4">
          Tech Enthusiast | Web & Data Explorer | C++ & DSA Practitioner | Building cool projects! 🚀💻
        </p>
        <a
          href="https://drive.google.com/file/d/1J3K5BZxaB5d_nqdTcq1kfDOK4CXDKKj4/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-5 md:mt-8 text-black py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-white">
            Resume View
          </button>
        </a>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center">
        <img 
          className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain rounded-full shadow-lg" 
          src={avatarImg} 
          alt="Avatar" 
        />
      </div>
      
    </div>
  );
};

export default Home;
