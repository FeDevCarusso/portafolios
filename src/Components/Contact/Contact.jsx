// En tu componente Contact.js
import React, { useState } from "react";
import linkedin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";
import whatsapp from "../../assets/img/whatsapp.png";
import cv from "../../assets/img/cv.png";
import styles from "./Contact.module.css";

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
    <div id="contact" className={styles.container}>
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
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=541151204107"
          >
            <img src={whatsapp} alt="WhatsApp" />
            <span>WhatsApp</span>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://docs.google.com/presentation/d/1MzN0r3YGWxmCl44C5PjrV1D6sJJd1RCcqDkxzBk5VSU/edit?usp=sharing"
          >
            <img src={cv} alt="WhatsApp" />
            <span>Curriculum</span>
          </a>
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
