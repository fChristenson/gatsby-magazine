import { Link } from "gatsby";
import articles from "../../images/articles.svg";
import books from "../../images/books.svg";
import events from "../../images/events.svg";
import jobs from "../../images/jobs.svg";
import membership from "../../images/membership.svg";
import HeaderIcon from "./HeaderIconComponent";
import styles from "./header.module.css";
import React from "react";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.headerNav}>
      <ul className={styles.headerUl}>
        <li>
          <Link className={styles.headerLink} to="/articles">
            <HeaderIcon title="Articles" src={articles} alt="articles" />
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} to="/books">
            <HeaderIcon title="Books" src={books} alt="books" />
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} to="/event">
            <HeaderIcon title="Events" src={events} alt="events" />
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} to="/jobs">
            <HeaderIcon title="Jobs" src={jobs} alt="jobs" />
          </Link>
        </li>
        <li>
          <Link className={styles.headerLink} to="/membership">
            <HeaderIcon title="Membership" src={membership} alt="membership" />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
