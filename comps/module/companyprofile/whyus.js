import { Typography, Grid, Stack } from "@mui/material";
import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import fontstyles from "../../../styles/whyus.module.css";

const item = ({ desc }) => {
  return (
    <Grid item>
      <Grid container direction={{ xs: "row" }} spacing={1} alignItems="center">
        <Grid item xs={1}>
          {" "}
          <Image src="/subtittle.svg" alt="site logo" width={50} height={36} />
        </Grid>

        <Grid item xs={11}>
          {" "}
          <Typography variant="caption" className={fontstyles.w_subtittle}>
            {desc}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Whyus = () => {
  return (
    <>
      <div className={styles.whyus} id="whyus">
        {/*parent */}
        <div className={styles.section6_child_bullet} />
        <div className={styles.section6_child_bullet2} />
        <div style={{ position: "relative" }}>
          {/*child 2  */}
          <Grid
            container
            direction={"row"}
            justifyContent="left"
            alignItems="left"
            sx={{
              paddingTop: { xs: "10px", md: "100px" },
              paddingLeft: { xs: "10px", md: "100px" },
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
              md={6}
              container
              direction={"column"}
              spacing={2}
              sx={{
                paddingTop: { xs: "10px" },
                paddingLeft: { xs: "10px" },
              }}
            >
              <Grid item>
                <Typography variant="h4" className={fontstyles.tittle}>
                  Why Use Services at DCN?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className={fontstyles.subtittle}>
                  PT. Dinar Cahya Negara selalu mengutamakan kualitas dan
                  pelayanan yang diberikan kepada klien. Mutu dan kualitas yang
                  terbaik sehigga bisa memuaskan para pengguna jasa kami. Kami
                  menawarkan harga yang sangat menarik dan tentu saja tanpa
                  mengesampingkan kualitas pelayanan kami.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" className={fontstyles.subtittle}>
                  Keuntungan jasa kami :
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction={"column"}
                spacing={2}
                style={{ paddingLeft: 50 }}
              >
                {item({ desc: "Pelayanan yang diberikan selalu prima " })}
                {item({
                  desc: "Harga bersaing namun jaminan kualitas pelayanan dan mutu terbaik",
                })}
                {item({
                  desc: "Kami selalu memberikan pelatihan sebelum ditempatkan dilokasi sehingga karyawan paham apa yang harus dikerjakan",
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* <div /> */}
              <img
                src="icon_section_61.svg"
                className={styles.section6_child}
              ></img>
              {/* <img className={styles.section6_child}> </img> */}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Whyus;
