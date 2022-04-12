import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";
import { Typography, Button, Menu, MenuItem, Grid } from "@mui/material";
import * as React from "react";
import { positions } from "@mui/system";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = (id, h) => {
    const blue = document.getElementById(id);
    let position = blue.getBoundingClientRect();
    // scrolls to 20px above element
    window.scrollTo(position.left, position.top + window.scrollY - 90, {
      top: 400,
      behavior: "smooth",
    });
    // let i = h || 0;
    // if (i <= position.top + window.scrollY - 90) {
    //   setTimeout(() => {
    //     window.scrollTo(position.left, i);
    //     scrollToTop(id, i + 40);
    //   }, 1);
    // }
    // document.getElementById(id).scrollIntoView(true, {
    //   block: "start",
    //   inline: "end",
    //   behavior: "smooth",
    // });
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
        <Grid item>
          {" "}
          <Image src="/DCN.svg" alt="site logo" width={48} height={35} />
        </Grid>
        <Grid
          xs={5}
          item
          container
          direction={"column"}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="subtitle2">DINAR CAHAYA NEGARA</Typography>
          </Grid>
          <Grid item width={270}>
            {" "}
            <Typography
              variant="caption"
              align="left"
              style={{
                wordWrap: "break-word",
                display: "block",
                lineHeight: 1,
              }}
            >
              Integrated Corporate Solution Focus on developing your coMpany,
              leave the rest to us
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={5} item container direction={"row"}>
          <Grid item>
            {" "}
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={
                  open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                }
              >
                Tentang Kami
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    scrollToTop("sejarah");
                  }}
                >
                  Sejarah DCN
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToTop("visimisi");
                  }}
                >
                  Visi, Misi, & Motto
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    scrollToTop("dokumentasi");
                  }}
                >
                  Gallery
                </MenuItem>
              </Menu>
            </div>
          </Grid>
          <Grid item>
            {" "}
            <Button
              onClick={() => {
                scrollToTop("product");
              }}
            >
              <a>Produk & Layanan</a>
            </Button>
          </Grid>
          <Grid item>
            {" "}
            <Button>
              <a>Karir</a>
            </Button>
          </Grid>
          <Grid item>
            {" "}
            <Button
              onClick={() => {
                scrollToTop("footer");
              }}
            >
              <a>Kontak</a>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Navbar;
