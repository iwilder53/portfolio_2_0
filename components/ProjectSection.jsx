"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "V1 of this website created earlier, not live anymore",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Lead Generation Company Website",
    description: "Project was created for Hoben Infotech, A lead generation company ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/iwilder53/hoben.git",
    previewUrl: "https://hoben.fly.dev",
  },
  {
    id: 3,
    title: "Medicine Ordering Application",
    description: "MVP for Omeyo Pharmacy, it's a hyperlocal medicine delivery app.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iwilder53/mediq.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Energy Bill Application",
    description: "This project was made for a medical college hostel, where students can view their real time power consumption and monthly bill",
    image: "/images/projects/4.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Energy Optimization and Monitoring App ",
    description: "This app was made for RC Plasto's Nagpur factory to monitor their energy usage, power reports and savings/loses",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Classroom Attendance App",
    description: "This app allows students to mark their attendance using QR Code generated by lecturers",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iwilder53/attendance.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;