// En tu componente Contact.js
import React from "react";
import linkedin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";
import gmail from "../../assets/img/gmail.png";
import henry from "../../assets/img/henry.jpg";
import whatsapp from "../../assets/img/whatsapp.png";
import instagram from "../../assets/img/instagram.png";
import styles from "./Contact.module.css"; // Importa tu módulo de estilos CSS

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contactame!</h2>
      <ul className={styles.contactList}>
        <li>
          <img src={linkedin} alt="LinkedIn" />
          <span>LinkedIn</span>
        </li>
        <li>
          <img src={github} alt="GitHub" />
          <span>GitHub</span>
        </li>
        <li>
          <img src={gmail} alt="Gmail" />
          <span>Gmail</span>
        </li>
        <li>
          <img src={henry} alt="Henry" />
          <span>Henry</span>
        </li>
        <li>
          <img src={whatsapp} alt="WhatsApp" />
          <span>WhatsApp</span>
        </li>
        <li>
          <img src={instagram} alt="Instagram" />
          <span>Instagram</span>
        </li>
      </ul>
      <div style={{ backgroundColor: "#16161a" }}>
        <h3
          style={{
            textAlign: "center",
            color: "white",
            padding: "5px",
            marginTop: "5em",
          }}
        >
          Gracias por visitar! | Fede Carusso
        </h3>
      </div>
    </div>
  );
};

export default Contact;
