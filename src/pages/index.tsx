import React, { useEffect } from "react";

import type { NextPage } from "next";
import Link from "next/link";

import styles from "styles/Home.module.css";

import { MainLayout } from "~/components/Layout/MainLayout/MainLayout";
import { Icon } from "~/components/common/Icon";

import { useDispatch } from "react-redux";
import { END } from "@redux-saga/core";
import { SagaStore, wrapper } from "~/redux/store";
import { startClock, tickClock } from "~/redux/actions";

import { planetsIcons } from "~/lib/constants/icons";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface Props {
  planets: Array<any>;
}

const Home: NextPage<Props> = ({ planets }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <MainLayout>
      <section>
        <ul className={styles.planetList}>
          {planets.map((planet) => {
            const { name } = planet;
            return (
              <li key={planet.id} className={styles.planetItem}>
                <Link
                  passHref={false}
                  href={`planets/${encodeURIComponent(planet.id)}`}
                >
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
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale = "en" }) => {
      store.dispatch(tickClock());
      store.dispatch(END);
      await (store as SagaStore).sagaTask.toPromise();

      const res = await fetch("http://localhost:3000/api/planets");
      const { planets } = await res.json();

      return {
        props: {
          planets,
          ...(await serverSideTranslations(locale, ["common"])),
        },
      };
    }
);

export default Home;
