import React from "react";
import RecentArticleItem from "./RecentArticleItemComponent";
import RecentArticlesMessage from "./RecentArticlesMessageComponent";
import rachel from "../../images/rachel-andrew.jpg";
import styles from "./recentArticles.module.css";

const RecentArticles = () => (
  <div className={styles.recentArticlesContainer}>
    <RecentArticlesMessage />
    <ul className={styles.recentArticles}>
      <RecentArticleItem
        href="#"
        authorName="Rachel Andrew"
        articleName="A great article about css grid"
        image={rachel}
      />
      <RecentArticleItem
        href="#"
        authorName="Rachel Andrew"
        articleName="A great article about css grid"
        image={rachel}
      />
      <RecentArticleItem
        href="#"
        authorName="Rachel Andrew"
        articleName="A great article about css grid"
        image={rachel}
      />
      <RecentArticleItem
        href="#"
        authorName="Rachel Andrew"
        articleName="A great article about css grid"
        image={rachel}
      />
    </ul>
  </div>
);

export default RecentArticles;
