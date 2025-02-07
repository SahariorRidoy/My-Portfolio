import React from "react";
import animation from "../../../assets/Animation - 1738861366898.json";
import Lottie from "lottie-react";
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
            Hey there! I'm [Your Name], a web developer who loves building
            user-friendly and dynamic applications. My programming journey
            started with curiosity, and over time, it became my passion. From
            writing my first "Hello World" in C to crafting full-stack React
            apps, I’ve enjoyed every bit of the process. 
          </p>
          <p className="text-lg leading-relaxed mt-4">
          I love solving problems
            and turning ideas into reality with clean, efficient code. Whether
            it's designing sleek interfaces or optimizing performance, I enjoy
            making things work smoothly.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Beyond coding, I’m into learning new tech trends, playing sports and watching movies. I
            believe creativity isn't just for code—it’s in everything we do.
          </p>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Lottie
            animationData={animation}
            loop={true}
            className=" md:w-[350px] 
          lg:w-[500px] w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
