import React from "react";

import { planetsIcons } from "~/lib/constants/icons";

import { Icon } from "../common/Icon";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.title}>THE PLANETS</span>
      <button>
        <Icon icon={planetsIcons.settings} size={24} />
      </button>
    </header>
  );
}
