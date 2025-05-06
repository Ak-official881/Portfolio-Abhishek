import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-black font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="BMI Wala"
          main="A simple and lightweight tool to check your BMI. Enter your details and get instant health insights!"
          demoLink="https://bmi-wala.vercel.app/"
          sourceCodeLink="https://github.com/Ak-official881/BMI-Wala"
        />
        <ProjectCard1
          title="Fussion of Weather"
          main="A sleek and dynamic weather app for real-time updates. Enter your location and get instant forecasts with ease!"
          demoLink="https://fussion-of-weather.vercel.app/"
          sourceCodeLink="https://github.com/Abhisheksingh881/fussion_of_weather"
        />
        <ProjectCard2
          title="Basic FOW"
          main="A simple and lightweight weather app for quick forecasts. Enter your location and get instant weather updates!"
          demoLink="https://ak-official881.github.io/Basic_fow/"
          sourceCodeLink="https://github.com/Ak-official881/Basic_fow"
        />
      </div>
    </div>
  );
};

export default Projects;