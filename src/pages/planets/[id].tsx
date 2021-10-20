import { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { Icon } from "~/components/common/Icon";
import { Tabs } from "~/components/common/Tabs/Tabs";

import { MainLayout } from "~/components/Layout/MainLayout/MainLayout";
import { planetsIcons } from "~/lib/constants/icons";

import styles from "styles/Planets.module.css";
import React from "react";
import { Stats } from "~/components/common/Stats/Stats";
import { PlanetByIdResponse } from "~/ts/types";
import PlanetImage from "~/components/common/PlanetImage/PlanetImage";

interface Props {
  planet: PlanetByIdResponse;
}

const Planets: NextPage<Props> = ({ planet }) => {
  return (
    <MainLayout>
      {/* Section - Tabs - Data - Planet */}
      <div className={styles.tabsDataContainer}>
        <div className={styles.tabDataWrapper}>
          <section className={styles.planetTabs}>
            <Tabs data={planet.tabs} />
          </section>
          <section className={styles.planetData}>
            <h1>{planet.name}</h1>
            <p className={styles.description}>{planet.tabs[0].data.content}</p>
            <p className={styles.source}>
              <span>Source : </span>
              <a
                target="_blank"
                rel="noreferrer"
                href={planet.tabs[0].data.source}
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
            <PlanetImage planet={planet.name} image={planet.images.planet} />
          </div>
        </section>
      </div>

      {/* Section - Stats - Planet */}
      <section className={styles.planetDetail}>
        <Stats data={planet.stats} />
      </section>
      {/* Section - Stats Planet */}
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/planets`);
  const { planets } = await res.json();

  const paths = planets.map((planet: any) => ({
    params: { id: planet.id.toString() },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/planets/${params?.id}`);
  const { planet } = await res.json();

  return {
    props: { planet },
  };
};

export default Planets;
