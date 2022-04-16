import { Typography, Grid, Button, Stack, Paper } from "@mui/material";
import styles from "../../../styles/Home.module.css";
import setstyles from "../../../styles/visimisi.module.css";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import MobileStepper from "@mui/material/MobileStepper";

import * as React from "react";
import { spacing } from "@mui/system";

const stack = (desc) => {
  return (
    <Stack direction={{ xs: "row" }} spacing={1} className={setstyles.item}>
      <CircleIcon
        sx={{
          fontSize: 5,
          paddingTop: 1,
          color: desc == "" ? "transparent" : "black",
        }}
      />
      <Typography variant="caption" className={setstyles.subtittle}>
        {desc}
      </Typography>
    </Stack>
  );
};

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const VisiMisi = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  var items = [
    {
      name: "VISI",
      description1: "Service by Hearts (Melayani dengan sepenuh hati)",
      description2:
        "Menjadi perusahaan penyedia jasa pekerjaan yang terpercaya dan profesional",
      description3:
        "Mengutamakan pelayanan prima dan mempunyai manfaat optimal bagi perusahaan client.",
      description4: "",
      image: "/section3_icon.svg",
    },
    {
      name: "MISI",
      description1: "Meraih kepuasan pelanggan",
      description2: "Pelayanan yang berkualitas",
      description3: "Keamanan dan kenyamanan di segala prospek",
      description4: "Menciptakan pekerja yang profesional",
      image: "/section3_icon2.svg",
    },
    {
      name: "MOTTO",
      description1:
        "Menjadi team yang solid untuk kemajuan perusahaan serta tempat usaha yang kami layani. Karena kepuasan dan kepercayaan anda adalah masa depan kami.",
      description2: "",
      description3: "",
      description4: "",
      image: "/section3_icon3.svg",
    },
  ];
  const maxSteps = items.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      <div className={styles.visimisi} id="visimisi">
        {/*parent */}
        <div className={styles.section3_child_bullet} />
        <div className={styles.section3_child} />

        <div style={{ position: "relative" }}>
          {/*child 2  */}
          <Carousel
            indicators={false}
            interval={4000}
            animation="fade"
            navButtonsAlwaysVisible={true}
            // navButtonsAlwaysInvisible={true}

            navButtonsWrapperProps={{
              className: setstyles.navweb,
            }}
            navButtonsProps={{
              className: styles.navbutton,
            }}

            // navButtonsProps={{
            //   // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            //   style: {
            //     backgroundColor: "white",
            //     color: "#9BA1A8",
            //     marginLeft: 650,
            //     marginRight: 90,
            //     boxShadow:
            //       "0px 12.0455px 29.2013px rgba(220, 223, 227, 0.35), 0px 2.85px 14.1767px rgba(220, 223, 227, 0.1)",
            //     // borderRadius: 0,
            //   },
            // }}
          >
            {items.map((item, i) => (
              // <Item key={i} item={item} />

              <Grid
                container
                sx={{
                  flexDirection: { xs: "column-reverse", md: "row" },
                }}
                spacing={{ xs: 3, md: 0 }}
              >
                <Grid item xs={12} md={7}>
                  <Image
                    src={item.image}
                    alt="site logo"
                    width={487}
                    height={359}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={5}
                  container
                  direction={"column"}
                  spacing={2}
                >
                  <Grid item sx={{ width: { xs: "100vw", md: "300px" } }}>
                    <Typography variant="h4" className={setstyles.tittle}>
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item width={400} container direction={"column"}>
                    {stack(item.description1)}
                    {stack(item.description2)}
                    {stack(item.description3)}
                    {stack(item.description4)}
                  </Grid>

                  <Grid
                    item
                    sx={{
                      marginTop: { xs: 1, md: "10px" },
                    }}
                  >
                    <MobileStepper
                      variant="dots"
                      steps={items.length}
                      position="static"
                      activeStep={i}
                      sx={{
                        alignContent: "center",
                        justifyContent: "center",

                        width: 300,
                        backgroundColor: "transparent",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default VisiMisi;
