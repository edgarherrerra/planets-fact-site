import styles from "./Stats.module.css";

interface Props {
  data: [];
}

export const Stats = ({ data }: Props) => {
  return (
    <>
      <ul className={styles.container}>
        {data.map((element: any) => {
          return (
            <li key={element.id} className={styles.listItem}>
              <div className={styles.dataContainer}>
                <span className={styles.title}>{element.name}</span>
                <span className={styles.data}>{element.data}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
