import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { Icon } from "~/components/common/Icon";
import { Tabs } from "~/components/common/Tabs/Tabs";

import { MainLayout } from "~/components/Layout/MainLayout/MainLayout";
import { planetsIcons } from "~/lib/constants/icons";

import styles from "styles/Planets.module.css";
import React from "react";
import { Stats } from "~/components/common/Stats/Stats";

interface Props {
  planet: any;
}

const Planets: NextPage<Props> = ({ planet }) => {
  return (
    <MainLayout>
      {/* Section - Tabs - Data - Planet */}
      <div className={styles.tabsDataContainer}>
        <div className={styles.tabDataWrapper}>
          <section className={styles.planetTabs}>
            <Tabs />
          </section>
          <section className={styles.planetData}>
            <h1>{planet.name}</h1>
            <p className={styles.description}>{planet.overview.content}</p>
            <p className={styles.source}>
              <span>Source : </span>
              <a
                target="_blank"
                rel="noreferrer"
                href={planet.overview.source}
                className={styles.link}
              >
                Wikipedia
                <Icon icon={planetsIcons.source} size={12} />
              </a>
            </p>
          </section>
        </div>
        <section className={styles.planetImageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={planet.images.planet}
              alt="Planet"
              width={450}
              height={450}
            />
          </div>
        </section>
      </div>
      {/* Section - Tabs - Data - Planet */}

      {/* Section - Stats - Planet */}
      <section className={styles.planetDetail}>
        <Stats />
      </section>
      {/* Section - Stats Planet */}
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    `https://mocki.io/v1/ad7f475b-86e3-4d64-b2cd-8755bba41bb7`
  );
  const planets = await res.json();

  const paths = planets.map((planet: any) => ({
    params: { id: planet.id.toString() },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://mocki.io/v1/ad7f475b-86e3-4d64-b2cd-8755bba41bb7`
  );
  const planets = await res.json();
  const planet = planets.filter((element: any) => element.id == params?.id)[0];

  return {
    props: { planet },
  };
};

export default Planets;
