import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-black text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-2 items-center hover:text-gray-300 hover:scale-105 transition duration-300">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:abhisheksingh.official881@gmail.com"
            className="hover:underline"
          >
            Gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center hover:text-gray-300 hover:scale-105 transition duration-300">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/abhishek-3028192a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn.com
          </a>
        </li>
        <li className="flex gap-2 items-center hover:text-gray-300 hover:scale-105 transition duration-300">
          <FaGithub size={22} />
          <a
            href="https://github.com/Ak-official881"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
