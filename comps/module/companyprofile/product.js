import { Typography, Grid, Button, Card } from "@mui/material";
import styles from "../../../styles/Home.module.css";
import stylesfont from "../../../styles/product.module.css";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const menu = ({ url, tittle, desc, route = "" }) => {
  return (
    <Grid item xs={11} md={3}>
      {" "}
      <Card elevation={0} style={{ border: "1px solid #DFE4E6" }}>
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Image src={url} alt="site logo" width={209} height={220} />
          </Grid>
          <Grid item>
            <Typography variant="h6" className={stylesfont.p_judul}>
              {tittle}
            </Typography>
          </Grid>
          <Grid item width={200} height={110} textAlign={"center"}>
            <Typography variant="caption" className={stylesfont.p_subjudul}>
              {desc}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              style={{
                textTransform: "none",
                marginBottom: 40,
                marginTop: 10,
                color: "#00ABEB",
                boxShadow: "0px 8px 21px rgba(0, 123, 169, 0.09)",
                borderRadius: "8px",

                border: "1px solid #00ABEB",
              }}
              variant="outlined"
              endIcon={<ArrowForwardIosIcon style={{ fontSize: "8" }} />}
            >
              See More
            </Button>
          </Grid>
        </Grid>
      </Card>{" "}
    </Grid>
  );
};
const Product = () => {
  return (
    <>
      <div className={styles.product} id="product">
        {/*parent */}
        <div className={styles.section5_child_bullet} />
        <div style={{ position: "relative" }}>
          {/*child 2  */}
          <Grid
            container
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              {" "}
              <Typography
                variant="h5"
                textAlign={"center"}
                className={stylesfont.tittle}
              >
                More Than Just Manpower Supply
              </Typography>{" "}
            </Grid>
            <Grid
              item
              textAlign={"center"}
              sx={{ width: { md: 500 }, paddingTop: { md: 2, xs: 2 } }}
            >
              {" "}
              <Typography variant="caption" className={stylesfont.subtittle}>
                Perusahaan kami memiliki berbagai macam produk yang siap untuk
                menunjang kebutuhan perusahaan anda.
              </Typography>
            </Grid>
            <Grid
              item
              container
              sx={{
                flexDirection: { xs: "row", md: "row" },
                paddingLeft: { md: 20 },
                paddingRight: { md: 20 },
              }}
              // direction={"row"}
              // justifyContent="space-evenly"
              justifyContent="center"
              alignItems="center"
              spacing={4}
              style={{ paddingTop: 60 }}
            >
              {menu({
                url: "/section5_4.svg",
                tittle: "HR Development",
                desc: "DCN Integrated Corporate Solution akan menyediakan sumber daya yang komprehensif dan berkualitas.",
              })}
              {menu({
                url: "/section5_1.svg",
                tittle: "Security Service",
                desc: "DCN Intergrated Corporate Solution akan memberikan pelayanan jasa pengamanan yang berkualitas secara komprehensif dan berkualitas.",
              })}
              {menu({
                url: "/section5_2.svg",
                tittle: "Ratu Cleaning",
                desc: "DCN Intergrated Corporate Solution memberikan pelayanan di Bidang Kebersihan atau Cleaning Service.",
              })}
              {menu({
                url: "/section5_3.svg",
                tittle: "Catering Service",
                desc: "DCN Intergrated Corporate Solution siap menyediakan menu yang bergizi sesuai keinginan klien baik Menu Sarapan , Menu siang , maupun Menu malam. ",
              })}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Product;
