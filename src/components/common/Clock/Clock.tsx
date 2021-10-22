import styles from "./Clock.module.css";

const pad = (n: number) => (n < 10 ? `0${n}` : n);

const format = (t: any) => {
  const hours = t.getHours();
  const minutes = t.getMinutes();
  const seconds = t.getSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

interface Props {
  lastUpdate: number;
}

function Clock({ lastUpdate }: Props) {
  return <div className={styles.container}>{format(new Date(lastUpdate))}</div>;
}

export default Clock;
