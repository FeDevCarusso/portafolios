import React from "react";
import styles from "./About.module.css";
import image from "../../assets/img/aboutme.png";

const About = ({}) => {
  return (
    <div id="about" className={styles.container}>
      <h2 className={styles.infotitle}>Sobre mi</h2>
      <div className={styles.textcontainer}>
        <img className={styles.aboutimg} src={image} alt="aboutme" />
        <p className={styles.aboutp}>
          Soy de Quilmes, Argentina,tengo 24 años. Completé con éxito los cursos
          de Soy Henry (Full-Stack) y Soy Dalto (JavaScript, Python, CSS). Me
          gusta y me estoy preparando para dar un cambio radical en mi vida,
          estudiando para el ingreso a la universidad, para adquirir los
          conocimientos necesarios que me permitan evolucionar como programador
        </p>
      </div>
    </div>
  );
};

export default About;
