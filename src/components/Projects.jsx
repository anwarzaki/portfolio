import { motion } from "framer-motion";

const projects = [
  {
    title: "EstellaParis Perfume (E-commerce)",
    description:
      "Full-stack e-commerce platform for perfume retail using MERN stack with JWT authentication, Cloudinary integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    link: "https://estella-paris-perfume.vercel.app",
    image: "perfume.png",
  },
  {
    title: "PhD Report Management System",
    description:
      "Role-based system with Spring Boot backend and React frontend serving 4 user roles with JWT authentication and report generation.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    link: "https://github.com/anwarzaki/phd",
    image: "phd.png",
  },
  {
    title: "AI Course Generator",
    description:
      "AI-driven platform to generate and display courses with Clerk authentication and YouTube API integration.",
    technologies: ["Next.js", "Clerk", "YouTube API", "Drizzle ORM"],
    link: "https://ai-content-creation-nine.vercel.app",
    image: "course.png",
  },
  {
    title: "Dictionary App",
    description:
      "Word lookup app using Dictionary API to fetch word meanings, definitions, and examples.",
    technologies: ["JavaScript", "HTML", "CSS", "Dictionary API"],
    link: "https://zaki-dictionary.vercel.app",
    image: "dictionary.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <motion.div
                className="h-72 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} Image`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.2 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
