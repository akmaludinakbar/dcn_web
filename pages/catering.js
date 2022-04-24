import Layout from "../comps/LayoutProduct";
import { Typography, Grid } from "@mui/material";
import { menu } from "../comps/helpers";

export default function catering() {
  return (
    <Layout>
      <div style={{ marginTop: 100 }}>
        <Grid
          container
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h5">CATERING</Typography>
          </Grid>

          {menu({
            direction: "row",
            judul: "",
            desc: "Kami menyediakan pelayanan jasa catering untuk berbagai acara seperti wedding, meeting, perkantoran dan lainnya. Makanan yang kami sajikan dibuat oleh chef yang memiliki sertifikat sehingga terjamin kualitas dan higenitasnya. Harga yang kami tawarkan mulai dari Rp. 8.500 per pack – Rp. 103.000 per packnya.",
          })}
        </Grid>
      </div>
    </Layout>
  );
}
