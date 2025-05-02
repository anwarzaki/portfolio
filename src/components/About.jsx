import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content with Animation */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-300 mb-4"
              variants={textVariant}
              custom={1}
            >
              I'm a passionate full-stack developer with experience in building
              web applications using modern technologies like React, Node.js,
              and MongoDB.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-4"
              variants={textVariant}
              custom={2}
            >
              My journey in web development started during my college years, and
              since then I've worked on various projects ranging from small
              business websites to complex web applications.
            </motion.p>

            <motion.p
              className="text-gray-300"
              variants={textVariant}
              custom={3}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or working on personal projects.
            </motion.p>
          </motion.div>

          {/* Profile Image Animation */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 border-4 border-blue-400 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-gray-700 rounded-lg overflow-hidden transform -rotate-3">
                <img
                  src="/zakikaphoto.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
