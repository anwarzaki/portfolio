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
              I'm a dedicated full-stack developer with hands-on experience in
              building responsive and scalable web applications using{" "}
              <span className="text-blue-400">
                MERN (MongoDB, Express.js, React, Node.js)
              </span>{" "}
              and <span className="text-blue-400">Next.js</span>.
            </motion.p>

            <motion.p
              className="text-gray-300 mb-4"
              variants={textVariant}
              custom={2}
            >
              My journey in web development started during my college years, and
              since then I've worked on various projects ranging from small
              websites to complex web applications.
            </motion.p>

            <motion.p
              className="text-gray-300"
              variants={textVariant}
              custom={3}
            >
              When I'm not coding, you can find me exploring new technologies,
              playing badminton, or working on personal projects.
            </motion.p>
          </motion.div>

          {/* Profile Image Only */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group">
              <img
                src="/zaki anwar-pic.jpg"
                alt="Zaki Anwar"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
