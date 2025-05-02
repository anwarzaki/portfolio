import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="text-blue-400"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              delay: 0.5,
            }}
          >
            Zaki Anwar
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          I build exceptional digital experiences with modern web technologies.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-400/20"
          >
            Contact Me
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1r0g0D6NMwboHX584JovgJadEkSULUC6C/view?usp=drive_link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            className="px-6 py-3 border border-blue-800 text-blue-400 hover:bg-blue-400/10 rounded-lg font-medium transition-colors shadow-lg hover:shadow-blue-600/20"
          >
            View My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
