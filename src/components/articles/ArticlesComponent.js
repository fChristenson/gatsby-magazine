import React from "react";
import ArticleItem from "./ArticleItemComponent";
import styles from "./articles.module.css";

const Articles = () => (
  <div className={styles.articles}>
    <ul className={styles.articlesList}>
      <ArticleItem
        href="#"
        time="5 days ago"
        title="My amazing article"
        author="Some author"
        description="As you work on creating better experiences for your mobile app users, spend some time thinking about the design of your app’s search bar. Things like placement, hint text, and the way search results are displayed contribute to how users engage with"
      />
      <ArticleItem
        href="#"
        time="5 days ago"
        title="My amazing article"
        author="Some author"
        description="As you work on creating better experiences for your mobile app users, spend some time thinking about the design of your app’s search bar. Things like placement, hint text, and the way search results are displayed contribute to how users engage with"
      />
      <ArticleItem
        href="#"
        time="5 days ago"
        title="My amazing article"
        author="Some author"
        description="As you work on creating better experiences for your mobile app users, spend some time thinking about the design of your app’s search bar. Things like placement, hint text, and the way search results are displayed contribute to how users engage with"
      />
      <ArticleItem
        href="#"
        time="5 days ago"
        title="My amazing article"
        author="Some author"
        description="As you work on creating better experiences for your mobile app users, spend some time thinking about the design of your app’s search bar. Things like placement, hint text, and the way search results are displayed contribute to how users engage with"
      />
      <ArticleItem
        href="#"
        time="5 days ago"
        title="My amazing article"
        author="Some author"
        description="As you work on creating better experiences for your mobile app users, spend some time thinking about the design of your app’s search bar. Things like placement, hint text, and the way search results are displayed contribute to how users engage with"
      />
    </ul>
  </div>
);

export default Articles;
