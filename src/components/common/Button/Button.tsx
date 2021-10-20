import React from "react";
import styles from "./Button.module.css";

interface Props {
  index: number;
  title: string;
}

function Button({ index, title }: Props) {
  const splitWords = title.split(" ");

  return (
    <button className={styles.buttonContainer}>
      <span className={styles.indexItem}>0{index}</span>
      <span className={styles.labelContainer}>
        {splitWords.length == 2 && (
          <span className={styles.label}>{splitWords[1]} </span>
        )}
        <span>{splitWords[0]}</span>
      </span>
    </button>
  );
}

export default Button;
