import { Typography, Grid, Hidden } from "@mui/material";
import styles from "../../../styles/Home.module.css";
import setstyles from "../../../styles/client.module.css";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const Client = () => {
  var items = [
    {
      image1: "/company/BankPekalongan.svg",
      image2: "/company/bhimasena.svg",
      image3: "/company/DinasKesehatan.svg",
      image4: "/company/logoposekpekalongan.svg",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image1: "/company/Happypuppy.svg",
      image2: "/company/Hondamobil.svg",
      image3: "/company/logobandulan.svg",
      image4: "/company/polresbatang.svg",
      description: "Hello World!",
    },
    {
      image1: "/company/logohoteldafam.svg",
      image2: "/company/logojel.svg",
      image3: "/company/logopesonnahotel.svg",
      image4: "/company/timurbahari.svg",
      description: "Hello World!",
    },
  ];
  var itemsmobile = [
    { image: "/company/DinasKesehatan.svg" },
    {
      image: "/company/logoposekpekalongan.svg",
    },
    {
      image: "/company/BankPekalongan.svg",
    },
    { image: "/company/bhimasena.svg" },
    { image: "/company/Happypuppy.svg" },
    { image: "/company/Hondamobil.svg" },
    { image: "/company/logobandulan.svg" },
    {
      image: "/company/polresbatang.svg",
    },
    { image: "/company/logohoteldafam.svg" },
    { image: "/company/logojel.svg" },
    { image: "/company/logopesonnahotel.svg" },
    {
      image: "/company/timurbahari.svg",
    },
  ];
  const menu = ({ width = 200, height = 176 }) => {
    return (
      <Carousel
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
        navButtonsProps={{
          className: styles.navbutton,
        }}
        navButtonsWrapperProps={{
          style: { paddingLeft: 100, paddingRight: 100 },
        }}
        // style={{ height: "500px" }}
      >
        {items.map((item, i) => (
          <div style={{ minHeight: "180px" }}>
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
        // style={{ height: "500px" }}
      >
        {itemsmobile.map((item, i) => (
          <div style={{ minHeight: "180px" }}>
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
      <div className={styles.product} id="client">
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
                Trusted by Many
              </Typography>{" "}
            </Grid>
            <Grid item textAlign={"center"} style={{ paddingBottom: 60 }}>
              {" "}
              <Typography variant="h5" className={setstyles.tittle}>
                Company and Government
              </Typography>{" "}
            </Grid>
          </Grid>
          <Hidden mdDown={true}>
            <div> {menu({})}</div>
          </Hidden>
          <Hidden mdDown={false} mdUp={true}>
            <div> {menumobile({})}</div>
          </Hidden>
        </div>
      </div>
    </>
  );
};

export default Client;
