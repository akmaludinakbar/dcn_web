import { Typography, Grid, Hidden } from "@mui/material";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
const Dashboard = () => {
  return (
    <>
      <div className={styles.first} id="dashboard">
        <div className={styles.section1_child_bullet} />
        <div className={styles.section1_child_bullet2} />

        <Grid
          container
          xs
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: { xs: "flex-start", md: "center" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
          style={{ marginTop: 0, padding: 20, height: "100vh" }}
        >
          <Grid item xs={12} md={6}>
            <Image
              src="/firsts.png"
              alt="site logo"
              width={600}
              height={500}
            ></Image>
          </Grid>
          <Grid item xs={12} md={5} container direction={"column"} spacing={2}>
            <Grid item>
              <Typography variant="h4" className={styles.fontfirst}>
                Professional Manpower Supply
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={styles.fontfirst2}>
                PT. DINAR CAHAYA NEGARA merupakan perusahaan yang bergerak
                dibidang Manppower Supply disegala bidang dan terlengkap
                se-Pulau Jawa
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
