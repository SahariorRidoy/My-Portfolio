import React from "react";
import image from "../../assets/image.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

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
                  strings: [
                    "Frontend Developer.",
                    "React Developer.",
                    "MERN Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 20,
                }}
              />
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Passionate about building beautiful, user-friendly web applications.
            I specialize in React, Tailwind-CSS, and modern UI/UX based
            development.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-center ">
            <Link className="block cursor-pointer w-full sm:w-auto bg-success hover:bg-success/80 text-white rounded-sm px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success">
              Download Resume
            </Link>

            <Link
              smooth={true}
              duration={1000}
              to="contact"
              className="block cursor-pointer w-full sm:w-auto bg-gray-600 hover:bg-gray-700/80 rounded-sm px-6 py-3 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-6 ml-1 flex justify-center lg:justify-start gap-4">
            <a
              href="https://www.facebook.com/Saharior.Ridoy/"
              target="_blank"
              className="text-3xl hover:text-success"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/SahariorRidoy"
              target="_blank"
              className="text-3xl hover:text-success"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-saharior-ridoy/"
              target="_blank"
              className="text-3xl hover:text-success"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="md:absolute lg:top-10 lg:right-10 md:top-24 md:right-0 right-0 z-10">
          <motion.img
            src={image}
            alt="Saharior Ridoy"
            className="rounded-full object-cover shadow-xl border-4 border-success"
            initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          />
        </div>
        ; ;
      </div>
    </section>
  );
};

export default Banner;
