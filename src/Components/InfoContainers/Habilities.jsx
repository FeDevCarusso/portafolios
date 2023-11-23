import React from "react";
import styles from "./About.module.css";
import image from "../../assets/img/skills.png";

const Skills = ({}) => {
  return (
    <div id="section3" className={styles.container}>
      <h2 className={styles.infotitle}>Mis habilidades</h2>
      <div className={styles.textcontainer}>
        <img className={styles.aboutimg} src={image} alt="aboutme" />
        <p className={styles.aboutp}>
          Tengo facilidad para adaptarme a cualquier entorno e interactuar con
          mis compañeros. Trabajo y me desarrollo bastante bien bajo presión,
          organizo las prioridades y trabajo en consecuencia para abordar
          cualquier problemática, Agilidad en el aprendizaje en cualquier área,
          desde idiomas, hasta tecnologías. Mi <strong>inglés</strong> es
          bastante básico.
        </p>
      </div>
    </div>
  );
};

export default Skills;
