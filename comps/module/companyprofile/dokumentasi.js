import { Typography, Grid, Hidden } from "@mui/material";
import styles from "../../../styles/Home.module.css";
import setstyles from "../../../styles/dokumentasi.module.css";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const Dokumentasi = () => {
  var items = [
    {
      image1: "/galery/1.svg",
      image2: "/galery/2.svg",
      image3: "/galery/3.svg",
      image4: "/galery/4.svg",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image1: "/galery/3.svg",
      image2: "/galery/4.svg",
      image3: "/galery/2.svg",
      image4: "/galery/1.svg",
      description: "Hello World!",
    },
    {
      image1: "/galery/2.svg",
      image2: "/galery/4.svg",
      image3: "/galery/1.svg",
      image4: "/galery/3.svg",
      description: "Hello World!",
    },
  ];
  var itemsmobile = [
    { image: "/galery/1.svg" },
    {
      image: "/galery/2.svg",
    },
    {
      image: "/galery/3.svg",
    },
    { image: "/galery/4.svg" },
    { image: "/galery/3.svg" },
    { image: "/galery/2.svg" },
    { image: "/galery/1.svg" },
    {
      image: "/galery/4.svg",
    },
    { image: "/galery/3.svg" },
    { image: "/galery/2.svg" },
    { image: "/galery/1.svg" },
    {
      image: "/galery/4.svg",
    },
  ];
  const menu = ({ width = 301, height = 226 }) => {
    return (
      <Carousel
        navButtonsProps={{
          className: styles.navbutton,
        }}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
        navButtonsWrapperProps={{
          style: { paddingLeft: 100, paddingRight: 100 },
        }}
      >
        {items.map((item, i) => (
          <div style={{ minHeight: "260px" }}>
            {" "}
            <Grid
              container
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                {" "}
                <Image
                  src={item.image1}
                  alt="site logo"
                  width={width}
                  height={height}
                />
              </Grid>
              <Grid item>
                {" "}
                <Image
                  src={item.image2}
                  alt="site logo"
                  width={width}
                  height={height}
                />
              </Grid>
              <Grid item>
                {" "}
                <Image
                  src={item.image3}
                  alt="site logo"
                  width={width}
                  height={height}
                />
              </Grid>
              <Grid item>
                {" "}
                <Image
                  src={item.image4}
                  alt="site logo"
                  width={width}
                  height={height}
                />
              </Grid>
            </Grid>
          </div>
        ))}
      </Carousel>
    );
  };

  const menumobile = ({ width = 200, height = 176 }) => {
    return (
      <Carousel
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={true}
        indicators={false}

        // style={{ height: "500px" }}
      >
        {itemsmobile.map((item, i) => (
          <div style={{ minHeight: "260px" }}>
            {" "}
            <Grid
              container
              direction={"row"}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                {" "}
                <Image
                  src={item.image}
                  alt="site logo"
                  width={width}
                  height={height}
                />
              </Grid>
            </Grid>
          </div>
        ))}
      </Carousel>
    );
  };
  return (
    <>
      <div className={styles.dokumentasi} id="dokumentasi">
        <div style={{ position: "relative" }}>
          {/*child 2  */}
          <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              {" "}
              <Typography variant="h5" className={setstyles.tittle}>
                See What We've Done
              </Typography>{" "}
            </Grid>
            <Grid item textAlign={"center"} style={{ paddingBottom: 60 }}>
              {" "}
              <Typography variant="caption" className={setstyles.subtittle}>
                DCN Integrated Corporate Solution telah banyak menyelesaikan
                tugasnya, berikut dokumentasi kami.
              </Typography>{" "}
            </Grid>
          </Grid>
          <Hidden mdDown={true}>{menu({})}</Hidden>
          <Hidden mdDown={false} mdUp={true}>
            {menumobile({})}
          </Hidden>
        </div>
      </div>
    </>
  );
};

export default Dokumentasi;
