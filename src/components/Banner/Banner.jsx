import React from "react";
import animation from "../../assets/Animation - 1738861366898.json";
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            <span className="text-lg">Hey, I'm Saharior Ridoy</span>
            <strong className="block font-extrabold text-success">
              <Typewriter
                options={{
                  strings: ["Frontend Developer.", "React Enthusiast.", "UI/UX Designer."],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Passionate about building beautiful, user-friendly web applications. I specialize in React, Tailwind-CSS, and modern UI/UX based development.
          </p>
          <div className="mt-6 ml-1 flex justify-center lg:justify-start gap-4">
            <a href="#" className="text-3xl hover:text-success">
              <FaGithub />
            </a>
            <a href="#" className="text-3xl hover:text-success">
              <FaLinkedin />
            </a>
            <a href="#" className="text-3xl hover:text-success">
              <FaTwitter />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded-sm bg-success px-12 py-3 text-sm font-medium text-white shadow-sm opacity-90 hover:opacity-100 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Resume
            </a>

            <a
              href="#"
              className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-success hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Lottie animation container with fixed position */}
        <div className="md:absolute lg:top-10 lg:right-10 md:top-24 md:right-0 right-0 z-10">
          <Lottie animationData={animation} loop={true} className=" md:w-[350px] 
          lg:w-[500px] w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
