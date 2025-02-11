import React from "react";
import avatarImg from "../../assets/first-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        Tech Enthusiast | Web & Data Explorer | C++ & DSA Practitioner | Building cool projects! 🚀💻
        </p>
        <button className="mt-5 md:md-10 text-black py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-white
        ">
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;