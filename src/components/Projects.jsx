import React, { useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import LazyImage from "./LazyImage";

const projects = [
  {
    name: "Student Info System",
    tech: "C++",
    subtext: "CLI",
    description:
      "A command-line interface application for managing student information. Features include adding, updating, and querying student records.",
    github: "https://github.com/Areykal/student-information-system",
  },
  {
    name: "MovieDB",
    tech: "Java",
    subtext: "Android",
    description:
      "An Android application that allows users to browse and search for movie information, powered by a popular movie database API.",
    github: "https://github.com/Areykal/MovieDB_App",
  },
  {
    name: "Freshly Baked",
    tech: "HTML, CSS, JavaScript",
    subtext: "Responsive Website",
    description:
      "A responsive website for a fictional bakery, showcasing products and allowing customers to place orders online.",
    github: "https://github.com/Areykal/Freshly-Baked",
  },
  {
    name: "AUPP App",
    tech: "React Native",
    subtext: "Cross-platform App",
    description:
      "A cross-platform mobile application for university students to access course information, schedules, and campus news.",
    github: "https://github.com/Areykal/Aupp-App",
  },
  {
    name: "Helping Hands",
    tech: "Flutter",
    subtext: "Cross-platform App",
    description:
      "A volunteer management app that connects volunteers with local community service opportunities.",
    github: "https://github.com/Areykal/Helping-Hands",
  },
  {
    name: "Portfolio Website",
    tech: "React, Tailwind CSS",
    subtext: "Dynamic Website",
    description:
      "A personal portfolio website showcasing my projects and skills, built with React and styled using Tailwind CSS.",
    github: "https://github.com/Areykal/portfolio",
  },
];

const ProjectCard = memo(({ project, onClick }) => (
  <div
    className="overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg cursor-pointer bg-slate-700 hover:scale-105"
    onClick={() => onClick(project)}
  >
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold text-blue-400 sm:text-2xl">
        {project.name}
      </h3>
      <p className="mb-2 font-semibold text-slate-300">{project.tech}</p>
      <p className="text-slate-400">{project.subtext}</p>
    </div>
  </div>
));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      id="projects-section"
      className="py-16 text-slate-300 bg-slate-800 sm:py-20"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-400 sm:text-4xl">
          Projects
        </h2>
        <p className="mb-12 text-lg text-center text-slate-400 sm:text-xl">
          My journey through the tech world
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!selectedProject}
        onClose={closeModal}
      >
        {selectedProject && (
          <div className="p-4 text-slate-300">
            <h3 className="mb-4 text-2xl font-bold text-blue-400 sm:text-3xl">
              {selectedProject.name}
            </h3>
            <p className="mb-2 font-semibold text-slate-300">
              {selectedProject.tech}
            </p>
            <p className="mb-6 text-slate-400">{selectedProject.description}</p>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 font-semibold transition-colors duration-300 bg-blue-400 rounded-full text-slate-900 hover:bg-blue-500"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="mr-2"
              />
              View on GitHub
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="ml-2"
                size="sm"
              />
            </a>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
