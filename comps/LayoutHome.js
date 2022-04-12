import Footer from "./Footer";
import Navbar from "./NavbarHome";
import { Hidden } from "@mui/material";
import NavbarMobile from "./NavbarMobile";
import * as React from "react";

const LayoutHome = ({ children }) => {
  return (
    <div className="content">
      {children}
      <Navbar />
    </div>
  );
};

export default LayoutHome;
