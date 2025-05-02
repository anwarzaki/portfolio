const projects = [
  {
    title: "EstellaParis Perfume (E-commerce)",
    description:
      "Full-stack e-commerce platform for perfume retail using MERN stack with JWT authentication, Cloudinary integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    link: "https://github.com/anwarzaki/estellaPerfume",
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
    link: "https://github.com/anwarzaki/Dictionary",
    image: "dictionary.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-colors"
            >
              {/* Project Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Image`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-2">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Security best practice
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
