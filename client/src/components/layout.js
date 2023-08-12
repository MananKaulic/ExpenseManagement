import React, { Children } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mainContent">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
