
import styles  from './Stats.module.css'

export const Stats = () => {
  return (
    <>
      <ul className={styles.container}>
        <li className={styles.listItem}>
          <div className={styles.dataContainer}>
            <span className={styles.title}>Rotation Time</span>
            <span className={styles.data}>0.99 Days</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.dataContainer}>
            <span className={styles.title}>REVOLUTION TIME</span>
            <span className={styles.data}>365.26 Days</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.dataContainer}>
            <span className={styles.title}>RADIUS</span>
            <span className={styles.data}>6,371 KM</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.dataContainer}>
            <span className={styles.title}>AVERAGE TEMP</span>
            <span className={styles.data}>16°c</span>
          </div>
        </li>
      </ul>
    </>
  );
}
