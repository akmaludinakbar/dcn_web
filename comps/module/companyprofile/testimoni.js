import { Typography, Grid, Button, Card, Hidden } from "@mui/material";
import styles from "../../../styles/Home.module.css";
import setstyles from "../../../styles/testimoni.module.css";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const Testimoni = () => {
  var items = [
    {
      image1: "/company/BankPekalongan.svg",
      image2: "/company/bhimasena.svg",
      image3: "/company/DinasKesehatan.svg",
      image4: "/company/logoposekpekalongan.svg",
      description: "Probably the most random thing you have ever seen!",
      jabatan: "Kepala Dinas Kesehatan",
      nama: "Suparman S.E",
      komen:
        " Karyawannya telaten dan rungan di kantor berish dan mengkilap, rekomended banget",
    },
    {
      image1: "/company/Happypuppy.svg",
      image2: "/company/Hondamobil.svg",
      image3: "/company/logobandulan.svg",
      image4: "/company/polresbatang.svg",
      description: "Hello World!",
      jabatan: "",
      nama: "Ahmad Akbar",
      komen: "Kerja sangat Cepat dan Memuaskan",
    },
  ];
  var itemsmobile = [
    {
      image1: "/company/BankPekalongan.svg",
      image2: "/company/bhimasena.svg",
      image3: "/company/DinasKesehatan.svg",
      image4: "/company/logoposekpekalongan.svg",
      description: "Probably the most random thing you have ever seen!",
    },
  ];
  const menu = ({ width = 100, height = 100 }) => {
    return (
      <Carousel
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
        navButtonsProps={{
          className: styles.navbutton,
        }}
      >
        <Grid container direction={"row"} justifyContent="center" spacing={2}>
          {items.map((item, i) => (
            <Grid item>
              <Card
                style={{
                  paddingTop: 20,
                  paddingLeft: 20,
                  boxShadow: "0px 8px 20px rgba(29, 58, 88, 0.05)",
                  borderRadius: 24,
                }}
              >
                {" "}
                <Grid container direction={"row"} spacing={2}>
                  <Grid item>
                    {" "}
                    <Image
                      src="/face.svg"
                      alt="site logo"
                      width={width}
                      height={height}
                    />
                  </Grid>
                  <Grid xs={1} item container direction={"column"}>
                    {" "}
                    <Grid item width={298}>
                      <Typography
                        variant="caption"
                        className={setstyles.tittle}
                      >
                        {" "}
                        {item.komen}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      style={{ paddingTop: 10 }}
                      className={setstyles.subtittle}
                    >
                      <Typography variant="caption"> {item.nama}</Typography>
                    </Grid>
                    <Grid item height={50}>
                      <Typography
                        variant="caption"
                        className={setstyles.caption}
                      >
                        {" "}
                        {item.jabatan}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}{" "}
        </Grid>
      </Carousel>
    );
  };
  const menumobile = ({ width = 100, height = 100 }) => {
    return (
      <Carousel
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={true}
        navButtonsProps={{
          className: styles.navbutton,
        }}
      >
        <Grid container direction={"row"} justifyContent="center">
          {itemsmobile.map((item, i) => (
            <Grid item>
              <Card
                style={{
                  paddingTop: 20,
                  paddingLeft: 20,
                  marginLeft: 10,
                  marginRight: 10,
                  boxShadow: "0px 8px 20px rgba(29, 58, 88, 0.05)",
                  borderRadius: 24,
                }}
              >
                {" "}
                <Grid container direction={"row"} spacing={1}>
                  <Grid item>
                    {" "}
                    <Image
                      src="/face.svg"
                      alt="site logo"
                      width={width}
                      height={height}
                    />
                  </Grid>
                  <Grid xs={7} item container direction={"column"}>
                    {" "}
                    <Grid item>
                      <Typography
                        variant="caption"
                        className={setstyles.tittle}
                      >
                        {" "}
                        Karyawannya telaten dan rungan di kantor berish dan
                        mengkilap, rekomended banget
                      </Typography>
                    </Grid>
                    <Grid item className={setstyles.subtittle}>
                      <Typography variant="caption"> Suparman S.E</Typography>
                    </Grid>
                    <Grid item height={50} className={setstyles.caption}>
                      <Typography variant="caption"></Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}{" "}
        </Grid>
      </Carousel>
    );
  };
  return (
    <>
      <div className={styles.testimoni} id="testimoni">
        <div style={{ position: "relative" }}>
          {/*child 2  */}
          <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              textAlign={"center"}
              style={{ paddingBottom: 60 }}
            >
              {" "}
              <Typography variant="h5">Apa Kata Mereka</Typography>{" "}
            </Grid>
          </Grid>
          <Hidden mdDown={true}>
            {" "}
            <div> {menu({})}</div>
          </Hidden>
          <Hidden mdDown={false} mdUp={true}>
            {" "}
            <div> {menumobile({})}</div>
          </Hidden>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
