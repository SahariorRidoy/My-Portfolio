import React from "react";
import image from "../../../assets/image.png";
const About = () => {
  return (
    <section id="about" className="py-16  px-12 text-gray-300">
        
      <div className="max-w-[1320px] mx-auto  flex flex-col md:flex-row items-center gap-10">
        
        {/* left  */}
        <div className="w-full md:w-2/3">
        <h2 className="text-4xl text-center font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mt-4">
            My journey in web development started with a deep curiosity for
            technology, and over time, I’ve built several projects that solve
            real-world problems. I constantly strive to learn new technologies
            and improve my skills to stay ahead in the ever-evolving web
            industry.
          </p>
          <p className="text-lg leading-relaxed mt-4">
          I love crafting visually appealing and highly functional web
          applications that provide a seamless user experience.
          </p>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={image}
            alt="Saharior Ridoy"
            className="w- h- rounded-full object-cover shadow-xl border-4 border-success"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
