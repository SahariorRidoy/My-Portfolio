import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Bangladesh University of Business & Technology (BUBT), Rupnagar, Mirpur-Dhaka",
    year: "2020 - 2024",
    details: "Focusing on Programming, Software Development, Machine Learning, Deep Learning, and Web Development.",
  },
  {
    degree: "Diploma in Marine Technology",
    institution: "Infra Polytechnic Institute, Kashipur-Barishal",
    year: "2014 - 2019",
    details: "Covered Marine Technology.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ulania Hat High School, Galachipa, Patuakhali",
    year: "2013 - 2014",
    details: "Science major with a focus on Mathematics and Physics.",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-out", // Smooth animation
      once: false, // Animation occurs every time you scroll
    });
  }, []);

  return (
    <section
      id="education"
      className="py-16 "
      data-aos="fade-right" // Section slides in from the right
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Title with Animation */}
        <h2
          className="text-4xl font-bold text-center text-white mb-12"
          data-aos="fade-down" // Title drops down
          data-aos-delay="200"
        >
          My Education
        </h2>

        {/* Timeline Structure */}
        <div className="relative border-l-4 border-green-500 pl-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="mb-10 relative"
              data-aos="fade-up" // Each card slides up
              data-aos-delay={index * 300} // Delay increases per card
            >
              {/* Graduation Icon */}
              <div className="absolute -left-10 top-1 bg-green-500 p-3 rounded-full">
                <FaGraduationCap className="text-white text-xl" />
              </div>

              {/* Education Card */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700">
                <h3 className="text-xl font-semibold text-green-400">
                  {edu.degree}
                </h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.year}</p>
                <p className="mt-3 text-gray-300">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
