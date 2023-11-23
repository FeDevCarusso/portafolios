// En tu componente Contact.js
import React, { useState } from "react";
import linkedin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";
import gmail from "../../assets/img/gmail.png";
import henry from "../../assets/img/henry.jpg";
import whatsapp from "../../assets/img/whatsapp.png";
import instagram from "../../assets/img/instagram.png";
import styles from "./Contact.module.css"; // Importa tu módulo de estilos CSS

const Contact = () => {
  const [floatText, setFloatText] = useState("");
  const [messageOpacity, setMessageOpacity] = useState(0);
  const [displayMessage, setDisplayMessage] = useState("none");
  const copyClipboard = (text, message) => {
    navigator.clipboard.writeText(text);
    setFloatText(message);
  };

  async function showMessage() {
    setDisplayMessage("block");
    setMessageOpacity(1);

    setTimeout(function () {
      setMessageOpacity(0);
      setTimeout(() => {
        setDisplayMessage("none");
      }, 300);
    }, 3000);
  }
  return (
    <div id="section5" className={styles.container}>
      <h2 className={styles.title}>Contactame!</h2>
      <ul className={styles.contactList}>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/federico-carusso-177407276/"
          >
            <img src={linkedin} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/FedeCarusso" target="_blank">
            <img src={github} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <img
            onClick={() => {
              copyClipboard(
                "developer.basilorien@gmail.com",
                "Mail copiado al portapapeles."
              );
              showMessage();
            }}
            src={gmail}
            alt="Gmail"
          />
          <span>Gmail</span>
        </li>
        <li>
          <img
            onClick={() => {
              copyClipboard("Proximamente...", "Proximamente.");
              showMessage();
            }}
            src={henry}
            alt="Henry"
          />
          <span>Henry</span>
        </li>
        <li>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=541151204107"
          >
            <img src={whatsapp} alt="WhatsApp" />
            <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <img
            onClick={() => {
              copyClipboard("Proximamente...", "Proximamente.");
              showMessage();
            }}
            src={instagram}
            alt="Instagram"
          />
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
      <p
        style={{
          opacity: messageOpacity,
          display: displayMessage,
        }}
        className={styles.float}
      >
        {floatText}
      </p>
    </div>
  );
};

export default Contact;
