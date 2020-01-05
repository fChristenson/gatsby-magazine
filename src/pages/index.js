import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo";
import RecentArticles from "../components/recentArticles/RecentArticlesComponent";
import Articles from "../components/articles/ArticlesComponent";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <RecentArticles />
    <Articles />
  </Layout>
);

export default IndexPage;
