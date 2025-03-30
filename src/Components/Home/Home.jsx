import React from "react";
// import avatarImg from "../../assets/first-removebg-preview.png";
import avatarImg from "/src/assets/first-removebg-preview2.png";

import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Tech Enthusiast | Web & Data Explorer | C++ & DSA Practitioner | Building cool projects! 🚀💻
        </p>
        <a
          href="https://drive.google.com/file/d/1J3K5BZxaB5d_nqdTcq1kfDOK4CXDKKj4/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-5 md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-white">
            Resume View
          </button>
        </a>
      </div>
      <div className="flex justify-center items-center">
  <img 
    className="w-102 h-125 object-cover rounded-full shadow-lg" 
    src={avatarImg} 
    alt="Avatar" 
  />
</div>

    </div>
  );
};

export default Home;
