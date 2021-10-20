import React from "react";
import styles from "./Modal.module.css";

export const Modal = () => {
  return (
    <div className={styles.container}>
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>Settings</h1>
      </section>
      <section className={styles.languagesContainer}>
        <h1 className={styles.sectionTitle}>Lenguajes</h1>
        <ul className={styles.list}>
          <li>
            <button>Español</button>
          </li>
          <li>
            <button>Inglés</button>
          </li>
        </ul>
      </section>
    </div>
  );
};
