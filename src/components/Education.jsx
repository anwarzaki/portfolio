import { motion } from "framer-motion";

const entryVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-blue-400">Education</span> & Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* B.Tech Entry */}
          <motion.div
            className="border-l-2 border-blue-400 pl-8 relative pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={entryVariant}
            custom={1}
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
            <h3 className="text-xl font-bold mb-1 text-white">
              B.Tech in Computer Science
            </h3>
            <p className="text-gray-400 mb-2">
              Maulana Azad National Urdu University, Hyderabad
            </p>
            <p className="text-gray-300 mb-2">2021 - 2025 | CGPA: 8.08</p>
            <p className="text-gray-300">
              Relevant Coursework: Data Structures & Algorithms, Database
              Management System (DBMS), OOPS Concept, Web Development
            </p>
          </motion.div>

          {/* Freelance Entry */}
          {/* <motion.div
            className="border-l-2 border-blue-400 pl-8 relative pb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={entryVariant}
            custom={2}
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
            <h3 className="text-xl font-bold mb-1 text-white">
              Freelance Full-Stack Developer
            </h3>
            <p className="text-gray-400 mb-2">
              EstellaParis Perfume E-commerce
            </p>
            <p className="text-gray-300">
              Developed full-stack e-commerce platform using MERN stack with JWT
              authentication, admin dashboard, and Cloudinary integration.
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
