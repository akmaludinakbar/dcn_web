import { Typography, Grid, Button, Card } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";

const item1 = (variant) => {
  return (
    <Grid item md={3} container direction={"column"} spacing={3}>
      <Grid item container direction={"row"} spacing={2}>
        <Grid item>
          {" "}
          <Image src="/minilogo.svg" alt="site logo" width={36} height={36} />
        </Grid>
        <Grid item style={{ marginTop: "5px" }}>
          <Typography className={styles.tittle}>
            PT. Dinar Cahaya Negara
          </Typography>{" "}
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography textAlign={"start"} className={styles.b_tittle}>
            Alamat Kantor
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            style={{ textAlign: "start", display: "grid" }}
            variant={variant}
          >
            Jalan gajah mada no 12 proyonanggan tengah , batang , jawa tengah
            indonesia , 51211
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography textAlign={"start"} className={styles.b_tittle}>
            Telepon/Fax
          </Typography>
        </Grid>{" "}
        <Grid item>
          <Typography textAlign={"start"} variant={variant}>
            0813-2747-1506
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"column"}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography textAlign={"start"} className={styles.b_tittle}>
            Email
          </Typography>
        </Grid>{" "}
        <Grid item>
          {" "}
          <Typography textAlign={"start"} variant={variant}>
            pt.dinarcahayanegara@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const item2 = (item1, item2, item3, item4, item5) => {
  return (
    <Grid item md={3} container direction={"column"} spacing={2}>
      <Grid item>
        <Typography textAlign={"start"} className={styles.b_tittle}>
          {item1}
        </Typography>
      </Grid>
      <Grid item>
        <Typography textAlign={"start"}>{item2}</Typography>{" "}
      </Grid>
      <Grid item>
        <Typography textAlign={"start"}>{item3}</Typography>{" "}
      </Grid>
      <Grid item>
        <Typography textAlign={"start"}>{item4}</Typography>{" "}
      </Grid>
      <Grid item>
        <Typography textAlign={"start"}>{item5}</Typography>{" "}
      </Grid>
    </Grid>
  );
};

const item3 = (item1, item2, item3, item4) => {
  return (
    <Grid item md={3} container direction={"column"} spacing={2}>
      <Grid item>
        <Typography textAlign={"start"} className={styles.b_tittle}>
          {item1}
        </Typography>
      </Grid>
      <Grid item container direction={"row"} spacing={2}>
        <Grid item>
          {" "}
          <FacebookIcon></FacebookIcon>
        </Grid>
        <Grid item>
          <Typography textAlign={"start"}>{item2}</Typography>
        </Grid>
      </Grid>
      <Grid item container direction={"row"} spacing={2}>
        <Grid item>
          {" "}
          <TwitterIcon></TwitterIcon>
        </Grid>
        <Grid item>
          <Typography textAlign={"start"}>{item3}</Typography>
        </Grid>
      </Grid>
      <Grid item container direction={"row"} spacing={2}>
        <Grid item>
          {" "}
          <InstagramIcon></InstagramIcon>
        </Grid>
        <Grid item>
          <Typography textAlign={"start"}>{item4}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Footer = () => {
  const variant = "caption";
  return (
    <footer id="footer">
      <Grid
        container
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        spacing={3}
      >
        <Grid
          item
          container
          direction={"row"}
          xs={12}
          style={{ paddingLeft: 50 }}
          spacing={4}
          // sx={{ letterSpacing: { xs: 12, md: 12 } }}
        >
          {item1(variant)}
          {item2(
            "Layanan",
            "Corporate",
            "Customer Service",
            "Mitra",
            "Offline"
          )}
          {item2("Tentang", "Cerita Kami", "Benefits", "Team", "Karir")}

          {item3("Follow Kami", "Facebook", "Twitter", "Instagram")}
        </Grid>
        <Grid item md={5}>
          <Typography textAlign={"center"}>
            {" "}
            Copyright © 2022. PT.DINAR CAHAYA NEGARA. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
