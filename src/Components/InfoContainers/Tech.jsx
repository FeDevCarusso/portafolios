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
    { name: "Javascript", icon: jsIcon, level: "intermedio/avanzado" },
    { name: "ReactJS", icon: reactIcon, level: "intermedio/avanzado" },
    { name: "NodeJs", icon: nodeIcon, level: "intermedio/avanzado" },
    { name: "SQL", icon: sqlIcon, level: "básico" },
    { name: "Sequelize", icon: sequelizeIcon, level: "intermedio" },
    { name: "Figma", icon: figmaIcon, level: "básico" },
    { name: "Python", icon: pythonIcon, level: "inicial" },
  ];

  return (
    <div className={styles.containerb + " " + styles.containerc}>
      <h2 style={{ textAlign: "center" }} className={styles.infotitle}>
        Tecnologías
      </h2>
      <ul className={styles2.ul}>
        {techSkills.map(({ name, icon, level }) => (
          <li key={name} className={styles2.li}>
            <img src={icon} alt={`${name} icon`} className={styles2.icon} />
            <span className={styles2.span}>{`${name}: ${level}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
