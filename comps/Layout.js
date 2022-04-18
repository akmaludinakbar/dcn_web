import Footer from "./Footer";
import Navbar from "./Navbar";
import { Hidden } from "@mui/material";
import NavbarMobile from "./NavbarMobile";
import * as React from "react";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Layout = ({ children }) => {
  return (
    <div className="content" style={{ position: "relative" }}>
      {children}
      <Hidden smDown={true}>
        <Navbar />
      </Hidden>
      <Hidden smUp={true}>
        <NavbarMobile />
      </Hidden>
      <Footer />
      <div style={{ position: "fixed", bottom: 50, zIndex: "99", right: 50 }}>
        <Fab
          size="large"
          variant="extended"
          id="btnWhatsapp"
          style={{ backgroundColor: "green", color: "white" }}
          href="https://api.whatsapp.com/send?phone=083861757102&text="
          target="_blank"
        >
          <Hidden smDown={true}> Hubungi Kami</Hidden>
          <WhatsAppIcon size="large" style={{ paddingLeft: 10 }}></WhatsAppIcon>
        </Fab>
      </div>
    </div>
  );
};

export default Layout;
