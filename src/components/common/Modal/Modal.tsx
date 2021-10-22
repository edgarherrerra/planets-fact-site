import React from "react";
import { useSelector } from "react-redux";
import { State } from "~/redux/reducer";
import Clock from "../Clock/Clock";
import styles from "./Modal.module.css";

export const Modal = () => {
  const { lastUpdate } = useSelector<State, State>((state) => state);

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
      <section className={styles.languagesContainer}>
        <h1 className={styles.sectionTitle}>Hora actual</h1>
        <Clock lastUpdate={lastUpdate} />
      </section>
    </div>
  );
};
