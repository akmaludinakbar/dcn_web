import { Typography, Grid, Button, Hidden } from "@mui/material";
import styles from "../../../styles/Home.module.css";
import stylestext from "../../../styles/sejarah.module.css";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const Sejarah = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={styles.sejarah} id="sejarah">
        {/*parent */}
        <div className={styles.section2_child_bullet} />
        <div className={styles.section2_child} />

        <div style={{ position: "relative" }}>
          {/*child 2  */}
          <Grid
            container
            direction={"row"}
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              paddingTop: { xs: "10px", md: "100px" },
              paddingLeft: { xs: "10px", md: "100px" },
              paddingRight: { xs: "10px", md: "0px" },
            }}

            // style={{
            //   padding: 100,
            //   backgroundColor:
            //     "blue",
            // }}
          >
            <Grid
              item
              xs={12}
              md={5}
              container
              direction={"column"}
              spacing={2}
            >
              <Grid item>
                <Typography variant="h4" className={stylestext.tittle}>
                  DCN History
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Typography variant="caption" className={stylestext.subtittle}>
                  Sejak tahun 2015, PT Dinar Cahaya Negara bergerak dibidang
                  jasa penyedia tenaga kerja atau man supply serta pengelolaan
                  sumber daya manusia. PT Dinar Cahaya Negara telah menjadi
                  partner berbagai perusahaan baik swasta, nasional maupun
                  multinasional.
                </Typography>
              </Grid>
              <Grid item>
                <Hidden smDown={open}>
                  <Typography
                    variant="caption"
                    className={stylestext.subtittle}
                  >
                    Perusahaan kami mampu memberikan pelayanan, kontribusi dan
                    solusi berkaitan dengan sumber daya manusia kepada berbagai
                    macam perusahaan, berbagai jenis industri, dan berbagai
                    jenis jasa. Dengan didukung oleh penghargaan dan kepuasan
                    dari Pemerintah Republik Indonesia Departemen Tenaga Kerja.
                  </Typography>
                </Hidden>
              </Grid>
              <Grid item xs={7}>
                <Hidden smUp={true}>
                  <Button
                    variant="contained"
                    onClick={handleClose}
                    sx={{
                      width: { xs: "100%", md: "200px" },
                    }}
                    style={{
                      backgroundColor: "#00ABEB",
                      borderRadius: 8,
                      boxShadow: " 0px 10px 30px rgba(4, 158, 216, 0.25)",
                    }}
                    size="large"
                    className={stylestext.buttontext}
                    endIcon={<ArrowForwardIosIcon style={{ fontSize: 10 }} />}
                  >
                    See More
                  </Button>
                </Hidden>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/icon_sejarah.svg"
                alt="site logo"
                objectFit="filled"
                className={styles.gambar}
                width={559}
                height={413}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Sejarah;
