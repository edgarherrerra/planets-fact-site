import React, { useState } from "react";

import { planetsIcons } from "~/lib/constants/icons";

import { Icon } from "../common/Icon";
import { Modal } from "../common/Modal/Modal";

import styles from "./Header.module.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <span className={styles.title}>THE PLANETS</span>
      <button onClick={() => setShowModal(!showModal)}>
        <Icon icon={planetsIcons.settings} size={24} />
      </button>
      {showModal && <Modal />}
    </header>
  );
}
