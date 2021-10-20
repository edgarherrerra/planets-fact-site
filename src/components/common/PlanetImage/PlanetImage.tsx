import Image from "next/image";
import styles from "./PlanetImage.module.css";

interface Props {
  planet: string;
  image: string;
}

export default function PlanetImage({ planet, image }: Props) {
  const planetClassContainer = `${planet.toLowerCase()}Image`;
  return (
    <div className={styles[planetClassContainer]}>
      <Image src={image} alt="Planet" layout="responsive" width={"100%"} height={"100%"} />
    </div>
  );
}
