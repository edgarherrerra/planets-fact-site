import Button from "../Button/Button";
import styles from "./Tabs.module.css";

interface Props {
  data: [];
}

export const Tabs = ({ data }: Props) => {
  return (
    <>
      <ul className={styles.list}>
        {data.map((element: any) => {
          return (
            <li key={element.id} className={styles.listItem}>
              <Button index={element.id} title={element.name} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
