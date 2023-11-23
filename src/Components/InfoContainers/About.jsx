import React from "react";
import styles from "./About.module.css";
import image from "../../assets/img/aboutme.png";

const About = ({}) => {
  return (
    <div id="section1" className={styles.container}>
      <h2 className={styles.infotitle}>Sobre mi</h2>
      <div className={styles.textcontainer}>
        <img className={styles.aboutimg} src={image} alt="aboutme" />
        <p className={styles.aboutp}>
          Soy de Quilmes, Argentina,tengo 24 años. Actualmente estoy terminando
          el curso de Desarrollo Web Full-Stack de Henry. Me gusta la
          programación en general y voy a estudiar ingeniería informática en la
          UNAJ, para adquirir los conocimientos necesarios que me permitan
          evolucionar como programador
        </p>
      </div>
    </div>
  );
};

export default About;
