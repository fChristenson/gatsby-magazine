import React from "react";
import styles from "./articles.module.css";

const ArticleItem = ({ time, title, author, description, href }) => {
  return (
    <li className={styles.articleItem}>
      <a href={href} className={styles.articleLink}>
        <div className={styles.articleItemContainer}>
          <div className={styles.articleTime}>{time}</div>
          <h2 className={styles.articleTitle}>{title}</h2>
          <div className={styles.articleAuthorContainer}>
            by{" "}
            <a href={href} className={styles.articleAuthorLink}>
              {author}
            </a>
          </div>
          <p className={styles.articleDescription}>
            {description} {" ..."}
          </p>
        </div>
        <a href={href} className={styles.articleItemArrow}>
          →
        </a>
      </a>
    </li>
  );
};

export default ArticleItem;
