import React from "react";
import Header from "../header/HeaderComponent";
import Footer from "../footer/FooterComponent";
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
