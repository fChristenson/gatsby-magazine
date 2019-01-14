import React from "react";
import styles from "./recentArticles.module.css";

const RecentArticleItem = ({ authorName, articleName, image, href }) => (
  <li className={styles.recentArticleItem}>
    <a href={href} className={styles.recentArticleItemAnchor}>
      <div className={styles.recentArticleItemAuthorContainer}>
        <span className={styles.recentArticlesImgShadow}>
          <span className={styles.recentArticlesImgContainer}>
            <img
              className={styles.recentArticlesImg}
              alt="profile"
              src={image}
            />
          </span>
        </span>
        <p className={styles.recentArticleItemAuthor}>
          {authorName}
          <span className={styles.recentArticleItemWrote}> wrote</span>
        </p>
      </div>
      <h1 className={styles.recentArticleItemName}>{articleName}</h1>
    </a>
  </li>
);

export default RecentArticleItem;
