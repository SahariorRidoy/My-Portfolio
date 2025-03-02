import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import bloodImg from '../../../assets/blood bank 1.png'
import marathonImg from '../../../assets/marathon1.png'
import crowdfundImg from '../../../assets/crowdfunding1.png'
const projects = [
  
  {
    title: "Blood Bank Management System",
    description: "This is a platform to find and manage blood donors in emergencies. Dynamic dashboard for role-based user. Admin can manage everything.",
    tech: ["React", "JavaScript", "Tailwind CSS","Firebase","ExpressJs"," MongoDB"],
    feature:["Authentication","Dynamic Dashboard","Protected Routes"],
    link: "https://blood-bank-80559.web.app/",
    github: "https://github.com/SahariorRidoy/Blood-Bank-Management-Client",
    image: bloodImg, 
  },
  {
    title: "Marathon Management System",
    description: "An event management app for organizing and tracking marathons.",
    tech:  ["React", "JavaScript", "Tailwind CSS","Firebase","ExpressJs"," MongoDB"],
    feature:["Authentication","CRUD Operation","Searching-Sorting"],
    link: "https://marathon-management-91e2f.web.app/",
    github: "https://github.com/SahariorRidoy/Marathon-Management-client",
    image: marathonImg, 
  },
  {
    title: "CrowdCube Fundraising App",
    description: "A crowdfunding platform where users can create, manage, and donate to fundraising campaigns.",
    tech: ["React", "JavaScript", "Tailwind CSS","Firebase","ExpressJs"," MongoDB"],
    feature:["Authentication","Add/Remove/Update Campaign","Searching"],
    link: "https://crowd-funding-df6e1.web.app/",
    github: "https://github.com/SahariorRidoy/CrowdCube-Funding-Client",
    image: crowdfundImg, 
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out",
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="py-16 ">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Title */}
        <h2
          className="text-4xl font-bold text-center text-white mb-12"
          data-aos="fade-left"
        >
          My Projects
        </h2>

       
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 mb-8 flex flex-col md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
            data-aos="fade-up"
            data-aos-delay={index * 300}
          >
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={`${project.image}`} 
                alt={project.title}
                className="rounded-lg"
              />
            </div>

            {/* Right side - Project Details */}
            <div className="w-full md:w-1/2 pl-6">
              <h3 className="text-2xl font-semibold text-success">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <h2 className="mt-4 font-semibold text-lg">Technology Used :</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h2 className="mt-4 font-semibold text-lg">Features :</h2>
              {/* Features */}
              <div className="mt-2 flex flex-wrap gap-2">
                {project.feature.map((f, i) => (
                  <span
                    key={i}
                    className="bg-success text-white text-xs px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-6  items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-3 py-1 rounded-md text-success flex items-center gap-2 hover:text-blue-300"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-3 py-1 rounded-md text-gray-400 flex items-center gap-2 hover:text-white"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
