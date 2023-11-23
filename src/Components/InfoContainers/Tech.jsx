import React from "react";
import styles from "./About.module.css";
import styles2 from "./Tech.module.css";

import figmaIcon from "../../assets/img/figma.webp";
import jsIcon from "../../assets/img/js.png";
import nodeIcon from "../../assets/img/node.png";
import pythonIcon from "../../assets/img/Python.svg.png";
import reactIcon from "../../assets/img/react.png";
import sqlIcon from "../../assets/img/sql.png";
import sequelizeIcon from "../../assets/img/sqlize.png";

const Tech = () => {
  const techSkills = [
    {
      name: "Javascript",
      icon: jsIcon,
      level: "intermedio/avanzado",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "ReactJS",
      icon: reactIcon,
      level: "intermedio/avanzado",
      link: "https://es.react.dev/",
    },
    {
      name: "NodeJs",
      icon: nodeIcon,
      level: "intermedio/avanzado",
      link: "https://nodejs.org/en/docs",
    },
    {
      name: "SQL",
      icon: sqlIcon,
      level: "básico",
      link: "https://www.oracle.com/es/database/technologies/appdev/sql.html",
    },
    {
      name: "Sequelize",
      icon: sequelizeIcon,
      level: "intermedio",
      link: "https://sequelize.org/docs/v6/",
    },
    {
      name: "Figma",
      icon: figmaIcon,
      level: "básico",
      link: "https://www.figma.com/developers/api",
    },
    {
      name: "Python",
      icon: pythonIcon,
      level: "inicial",
      link: "https://docs.python.org/es/3/",
    },
  ];

  return (
    <div id="section4" className={styles.containerb + " " + styles.containerc}>
      <h2 style={{ textAlign: "center" }} className={styles.infotitle}>
        Tecnologías
      </h2>
      <ul className={styles2.ul}>
        {techSkills.map(({ name, icon, level, link }) => (
          <li key={name} className={styles2.li}>
            <a
              target="_blank"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "white",
              }}
              href={link}
            >
              <img src={icon} alt={`${name} icon`} className={styles2.icon} />
              <span className={styles2.span}>{`${name}: ${level}`}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
