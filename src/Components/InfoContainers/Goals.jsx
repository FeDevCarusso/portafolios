import React from "react";
import styles from "./About.module.css";
import image from "../../assets/img/goals.png";

const Goals = () => {
  return (
    <div id="goals" className={styles.containerb + " " + styles.container}>
      <h2 className={styles.infotitle}>Objetivos</h2>
      <div className={styles.textcontainer}>
        <p className={styles.aboutp}>
          Entre mis principales objetivos se encuentran perfeccionar mis
          habilidades en Python y CSS, para tener las mejores capacidades a la
          hora de programar, y otro de los pilares fundamentales en mi meta como
          desarrollador es aprender y tener un conocimiento robusto del idioma
          inglés.
        </p>
        <img
          className={styles.aboutimg + " " + styles.aboutimgb}
          src={image}
          alt="aboutme"
        />
      </div>
    </div>
  );
};

export default Goals;
