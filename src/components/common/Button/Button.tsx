import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.buttonContainer}>
      <span className={styles.indexItem}>01</span>
      <span className={styles.labelContainer}>
        <span className={styles.label}>INTERNAL </span>
        <span>OVERVIEW</span>
      </span>
    </button>
  );
}

export default Button;
