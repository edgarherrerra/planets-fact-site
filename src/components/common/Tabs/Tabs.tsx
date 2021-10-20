import Button from "../Button/Button";
import styles from "./Tabs.module.css";

export const Tabs = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Button />
        </li>
        <li className={styles.listItem}>
          <Button />
        </li>
        <li className={styles.listItem}>
          <Button />
        </li>
      </ul>
    </>
  );
};
