import React from "react";
import Header from "../header/HeaderComponent";
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
