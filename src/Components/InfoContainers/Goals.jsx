import React from "react";
import styles from "./About.module.css";
import image from "../../assets/img/goals.png";

const Goals = () => {
  return (
    <div id="section2" className={styles.containerb + " " + styles.container}>
      <h2 className={styles.infotitle}>Objetivos</h2>
      <div className={styles.textcontainer}>
        <p className={styles.aboutp}>
          Entre mis principales objetivos se encuentran aprender y dominar
          Python, para tener mas herramientas a la hora de programar, mas que
          nada para el back, mejorar y adquirir mas conocimientos de SQL, ya
          actualmente mis habilidades son muy básicas y otro de los pilares
          fundamentales en mi meta como desarrollador es aprender y tener un
          conocimiento robusto del idioma inglés.
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
