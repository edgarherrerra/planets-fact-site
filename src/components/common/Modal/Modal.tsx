import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { State } from "~/redux/reducer";
import Clock from "../Clock/Clock";
import styles from "./Modal.module.css";

export const Modal = () => {
  const { lastUpdate } = useSelector<State, State>((state) => state);
  const router = useRouter();

  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>{t("settings")}</h1>
      </section>
      <section className={styles.languagesContainer}>
        <h1 className={styles.sectionTitle}>{t("languages")}</h1>
        <ul className={styles.list}>
          <li>
            <Link passHref href={router.asPath} locale={"es"}>
              <button>{t("localeEs")}</button>
            </Link>
          </li>
          <li>
            <Link passHref href={router.asPath} locale={"en"}>
              <button>{t("localeEn")}</button>
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.languagesContainer}>
        <h1 className={styles.sectionTitle}>{t("currentHour")}</h1>
        <Clock lastUpdate={lastUpdate} />
      </section>
    </div>
  );
};
