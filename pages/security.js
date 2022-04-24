import Layout from "../comps/LayoutProduct";
import { Typography, Grid } from "@mui/material";
import { menu } from "../comps/helpers";

export default function transportasi() {
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
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              SECURITY
            </Typography>
          </Grid>

          {menu({
            direction: "row",
            urlfoto: "/product/security.jpeg",
            judul: "",
            desc: "Salah satu bentuk dukungan PT. Dinar Cahaya Negara kepada bisnis anda adalah penjagaan keamanan (security). Para security profesional kami memastikan bahwa lingkungan kerja anda terjaga keamanannya baik bagi karyawan, tamu, dan tenant maupun aset perusahaan. Tenaga security kami memiliki sertifikat kompetensi gada pratama, sepervisor gada madya dan manager sertifikat gada utama dari kepolisian Republik Indonesia. Dengan kompetensi dan teamwork yang baik, security kami siap untuk menjaga keamanan di area lingkungan kerja anda.",
          })}
        </Grid>
      </div>
    </Layout>
  );
}
