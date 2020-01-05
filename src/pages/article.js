import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo";

const ArticlePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>article</h1>
  </Layout>
);

export default ArticlePage;
