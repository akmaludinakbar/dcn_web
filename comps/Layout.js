import Footer from "./Footer";
import Navbar from "./Navbar";
import { Hidden } from "@mui/material";
import NavbarMobile from "./NavbarMobile";
import * as React from "react";

const Layout = ({ children }) => {
  return (
    <div className="content">
      {children}
      <Hidden smDown={true}>
        <Navbar />
      </Hidden>
      <Hidden smUp={true}>
        <NavbarMobile />
      </Hidden>
      <Footer />
    </div>
  );
};

export default Layout;
