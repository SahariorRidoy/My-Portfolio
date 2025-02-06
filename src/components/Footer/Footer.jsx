import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
    <div className="mx-auto max-w-[1320px] space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 border-t border-gray-700 ">
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        
        {/* Name */}
        <div className="text-2xl text-teal-600 dark:text-teal-300">
          <h2>Saharior Ridoy</h2>
        </div>
  
        {/* Navigation Links */}
        <div>
          <ul className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Skills</a></li>
            <li><a>Education</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
  
        {/* Social Links */}
        <ul className="mt-4 flex gap-6 sm:mt-0">
          <li>
            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
              <span className="sr-only">GitHub</span>
              <FaGithub className="text-2xl" />
            </a>
          </li>
        </ul>
        
      </div>
    </div>
    <div className="mx-auto max-w-[1320px] px-4 border-t py-6 border-gray-800">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75"
            href="#"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75"
            href="#"
          >
            Privacy Policy
          </a>
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
           Copyright © 2025. All rights reserved.
        </p>
      </div>
    </div>
  
  </footer>
  
  );
};

export default Footer;
