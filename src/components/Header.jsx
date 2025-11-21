import { useState } from "react";

const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

const Header = ({ active, setActive }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="px-6 py-4 fixed top-0 z-20 w-full bg-gray-900 border-b border-gray-800">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => setActive("")}
        >
          <p className="text-white text-xl font-bold">
            Zaki <span className="text-blue-400">Anwar</span>
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${active === link.title ? "text-white" : "text-gray-400"
                  } hover:text-white transition-colors`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {toggle ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {toggle && (
            <div className="absolute top-16 right-0 bg-gray-800 w-full p-4 border-t border-gray-700">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`${active === link.title ? "text-white" : "text-gray-400"
                        } hover:text-white block px-4 py-2`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
