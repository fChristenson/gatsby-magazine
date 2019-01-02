import React from "react";
import styles from "./header.module.css";

const HeaderIcon = ({ title, src, alt }) => (
  <>
    <span className={styles.headerNavIconShadow}>
      <img alt={alt} src={src} className={styles.headerNavIcon} />
    </span>
    <h2 className={styles.headerNavTitle}>{title}</h2>
  </>
);

export default HeaderIcon;
