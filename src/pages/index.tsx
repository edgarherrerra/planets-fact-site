import type { GetStaticProps, NextPage } from "next";

import styles from "styles/Home.module.css";

import { MainLayout } from "~/components/Layout/MainLayout/MainLayout";
import { Icon } from "~/components/common/Icon";

import { planetsIcons } from "~/lib/constants/icons";

interface Props {
  planets: Array<any>;
}

const Home: NextPage<Props> = ({ planets }) => {
  return (
    <MainLayout>
      <ul className={styles.planetList}>
        {planets.map((planet) => {
          const { name } = planet;
          return (
            <li key={planet.id} className={styles.planetItem}>
              <a href="#">
                <span className={styles.planetContainer}>
                  <span
                    className={`${styles.planet} ${
                      name ? name.toLowerCase() : "default-planet-color"
                    }`}
                  ></span>
                  {planet.name}
                </span>
                <Icon icon={planetsIcons.arrowRight} />
              </a>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://mocki.io/v1/ad7f475b-86e3-4d64-b2cd-8755bba41bb7`
  );
  const planets = await res.json();

  return {
    props: { planets },
  };
};

export default Home;
