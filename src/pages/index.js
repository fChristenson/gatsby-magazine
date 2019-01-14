import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo";
import RecentArticles from "../components/recentArticles/RecentArticlesComponent";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <RecentArticles />
  </Layout>
);

export default IndexPage;
