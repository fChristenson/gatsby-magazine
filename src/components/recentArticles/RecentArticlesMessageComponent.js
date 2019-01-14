import React from "react";
import styles from "./recentArticles.module.css";

const RecentArticlesMessage = () => (
  <span className={styles.recentArticlesMessage}>
    <span className={styles.recentArticlesMessageText}>
      Don't Miss These Latest
    </span>
    <br />
    <span className={styles.recentArticlesMessageText}>Articles</span>
  </span>
);

export default RecentArticlesMessage;
