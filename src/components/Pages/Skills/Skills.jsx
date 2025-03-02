import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGithub, FaGit, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress} from 'react-icons/si';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React', icon: <FaReact />, progress: 90, color: '#61DBFB' },
  { name: 'JavaScript', icon: <FaJs />, progress: 85, color: '#F7DF1E' },
  { name: 'Node.js', icon: <FaNodeJs />, progress: 80, color: '#68A063' },
  { name: 'Express.js', icon: <SiExpress />, progress: 80, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb />, progress: 75, color: '#47A248' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, progress: 85, color: '#38BDF8' },
  { name: 'BootStrap', icon: <FaBootstrap />, progress: 100, color: '#7D0AF8' },
  { name: 'HTML5', icon: <FaHtml5 />, progress: 100, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, progress: 90, color: '#2965F1' },
  { name: 'Github', icon: <FaGithub />, progress: 75, color: '#D1D7E0' },
  { name: 'NPM', icon: <FaNpm />, progress: 75, color: '#CD3E3D' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? (index < 3 ? -100 : 100) : 0,
                y: index >= 3 ? (index < 6 ? -100 : 100) : 0,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 1,
                ease: 'easeOut',
              }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="text-xl text-white">{skill.name}</h3>
              </div>
              <div className="relative w-full h-2.5 bg-gray-600 rounded-full">
                <motion.div
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="mt-4 text-sm text-gray-400">{skill.progress}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
