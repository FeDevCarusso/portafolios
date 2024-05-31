import React from "react";
import styles from "./Landing.module.css";
import profileImg from '../../assets/img/profile.jpg'

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxes}>
        <div className={styles.leftbox}>
          <p>Tus ideas hechas realidad son mi motivación</p>
        </div>

        <div className={styles.rightbox}>
          <h3>Hola! Yo soy</h3>
          <img onClick={() => alert("Algo")} src={profileImg} alt="profile" />
          <h2>Federico Carusso</h2>
          <h4>Programador web</h4>
        </div>
      </div>

      <div className={styles.division}></div>
    </div>
  );
};

export default Landing;
