import React from "react";

import Header from "~/components/Header/Header";

import styles from "./MainLayout.module.css";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>{children}</main>
    </div>
  );
};
