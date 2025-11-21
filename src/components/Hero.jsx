import { motion } from "framer-motion";
import Shuffle from './Shuffle';
import { GridScan } from './GridScan';
import GlitchText from './GlitchText';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 w-full h-full z-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#172554"
          gridScale={0.1}
          scanColor="#3b82f6"
          scanOpacity={0.5}
          enablePost
          bloomIntensity={0.8}
          chromaticAberration={0.003}
          noiseIntensity={0.02}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4">
            <span>Hi, I'm</span>
            <Shuffle
              text="Zaki Anwar"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="text-blue-400 translate-y-2"
            />
          </div>
        </motion.h1>

        <GlitchText
          speed={1}
          enableShadows={true}
          enableOnHover={true}
          className='custom-class text-2xl md:text-3xl text-gray-300 mb-8'
        >
          Full Stack Developer
        </GlitchText>

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
            href="https://drive.google.com/file/d/1AkI51JunHrNtkWGkCNKiewA6ztnGP322/view?usp=sharing"
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
