// Projects.jsx
"use client";
import React from "react";
import SpotlightCard from "../components/SpotlightCard"; 
// ^ Adjust the import path if needed
import { FaGithub } from "react-icons/fa"; 

export default function Projects() {
  // A sample array of project data. You can fill in actual links later.
  const projectsData = [
    
    {
      title: "BukMuk",
      description:
        "An virtual Library where you can rent or buy all your intrests",
      githubLink: "",
    },
    {
      title: "Template",
      description:
        "An GTemplate for your next project, with a clean and modern design",
      githubLink: "https://github.com/MdAliadil/template1",
    },
     {
      title: "VisitingCardGenerator",
      description:
        "An Visiting Card Generator where you can create your own visiting card with your details and download it as an image or pdf",
      githubLink: "https://github.com/MdAliadil/ViSitingCardGenerater",
    },
    {
      title: "Portfolio Template",
      description:
        "An Personal Portfolio Template for your next project, with a clean and modern design",
      githubLink: "",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        {/* Grid to display your spotlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <SpotlightCard
              key={index}
              className="
                flex flex-col 
                h-full 
                rounded-3xl 
                border-neutral-800 
                bg-neutral-900 
                p-6
              "
              spotlightColor="rgba(255, 255, 255, 0.2)" 
              // Adjust spotlightColor if you want a subtler or stronger effect
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm text-gray-300 mb-4 flex-1">
                {project.description}
              </p>

              {/* "View Now" button (with GitHub icon) */}
              <div className="mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex 
                    items-center 
                    gap-2 
                    bg-indigo-600 
                    hover:bg-indigo-700 
                    text-white 
                    px-4 
                    py-2 
                    rounded-md 
                    transition-colors 
                    duration-200
                  "
                >
                  <FaGithub />
                  View Now
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
