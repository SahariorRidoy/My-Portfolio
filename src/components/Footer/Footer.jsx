import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-[1320px] space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 border-t border-gray-700">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          
          {/* Name */}
          <div className="text-2xl text-success font-semibold">
            <h2> Md. Saharior Ridoy</h2>
          </div>

         
          <div>
            <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <li><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link></li>
              <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link></li>
              <li><Link to="education" smooth={true} duration={500} className="cursor-pointer">Education</Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <ul className="mt-4 flex gap-6 sm:mt-0">
            <li>
              <a href="https://www.facebook.com/Saharior.Ridoy/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://github.com/SahariorRidoy" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                <span className="sr-only">GitHub</span>
                <FaGithub className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/md-saharior-ridoy/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1320px] px-4 border-t py-6 border-gray-800">
        <div className="text-center">
          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
            Copyright © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
