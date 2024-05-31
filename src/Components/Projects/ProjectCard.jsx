import React from "react";
import styles from "./Projects.module.css";
const ProjectCard = ({ cardData }) => {
  return (
    <div className={styles.card}>
      <a target="_blank" href={cardData?.url}>
        <h3 className={styles.cardTitle}>{cardData?.title}</h3>
        <img
          className={styles.cardImage}
          src={cardData?.image}
          alt={`${cardData?.title}_img`}
        />
      </a>
      <p className={styles.description}>{cardData?.description}</p>
    </div>
  );
};

export default ProjectCard;
