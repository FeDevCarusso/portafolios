import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import trendyThumb from "../../assets/img/trendy.jpg";

const projectsData = [
  {
    title: "Trendy",
    image: trendyThumb,
    url: "https://trendy-web-lemon.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <h2 className={styles.title}>Mis Proyectos</h2>
      <div className={styles.cardContainer}>
        {Array.isArray(projectsData) &&
          projectsData?.map((pd, index) => (
              <ProjectCard key={index} cardData={pd} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
