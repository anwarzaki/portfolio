import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div
      id="skills"
      className="min-h-screen bg-[#0f1123] px-8 py-12 text-white"
    >
      <motion.h2 
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-blue-400">Skills</span>
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1c2c] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            variants={item}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#252842",
              transition: { duration: 0.2 }
            }}
          >
            <motion.img
              src={skill.image}
              alt={skill.name}
              className="w-12 h-12 object-contain mx-auto mb-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <motion.h3 
              className="text-xl font-semibold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {skill.name}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
