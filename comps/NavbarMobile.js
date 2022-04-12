import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Typography,
  Button,
  Menu,
  MenuItem,
  Grid,
  Backdrop,
} from "@mui/material";
import * as React from "react";
const NavbarMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={2}>
          {" "}
          <Image src="/DCN.svg" alt="site logo" width={48} height={35} />
        </Grid>

        <Grid item xs={8}>
          <Typography variant="subtitle2">DINAR CAHAYA NEGARA</Typography>
        </Grid>

        <Grid xs item container direction={"row"}>
          <MenuIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></MenuIcon>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              className: styles.navmobile,
              style: {
                width: "100vw",
                left: "0px",
                boxShadow: "none",
                marginTop: "15px",
                textAlign: "center",
                maxWidth: "none",
                transform: "none",
              },
            }}
            MenuListProps={{
              style: {
                color: "#6B7580",
                maxWidth: "100vw",
                boxShadow: "none",

                padding: 0,
              },
            }}
          >
            <MenuItem onClick={handleClose} style={{ display: "block" }}>
              Sejarah DCN
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ display: "block" }}>
              Produk & Layanan
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ display: "block" }}>
              Karir
            </MenuItem>
            <MenuItem onClick={handleClose} style={{ display: "block" }}>
              Kontak
            </MenuItem>
          </Menu>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          ></Backdrop>
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavbarMobile;
