import React from "react";
import styles from "./Landing.module.css";

const profileImg =
  "https://media.licdn.com/dms/image/D4E03AQEvc4Jff4IZHg/profile-displayphoto-shrink_800_800/0/1684081964257?e=2147483647&v=beta&t=xXlg7nVAhXD077uLHKKetmtOdB5mrkYowGsh6VO0q7Y";

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
