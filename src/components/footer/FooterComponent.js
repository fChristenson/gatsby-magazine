import React from "react";
import styles from "./footer.module.css";
import categories from "./categories";
import { Link } from "gatsby";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerCategories}>
      <p className={styles.footerHeader}>BROWSE ALL GATSBY MAGAZINE TOPICS</p>
      <ul className={styles.footerUl}>
        {categories.map(category => (
          <li className={styles.footerLi} key={category}>
            <Link className={styles.footerLink} to="/#">
              <span className={styles.footerLinkText}>{category}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
