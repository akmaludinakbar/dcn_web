import Layout from "../comps/LayoutProduct";
import { Typography, Grid } from "@mui/material";
import { menu } from "../comps/helpers";

export default function ratucleaning() {
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
              RATU CLEANING
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: 50 }}>
            <Typography variant="body1">Home Dirty Solution</Typography>
          </Grid>
          {menu({
            direction: "row",
            urlfoto: "/product/cleaningservice.jpeg",
            judul: "Vacuum Hydroclean",
            desc: "Vacuum kering (Dry Vacuum) yang dilakukan pada soft furniture guna untuk mengangkat debu dan tungau, dengan menggunakan media tampung air sehingga debu yang telah terhisap tidak akan terpancar keluar dari penampungannya.",
          })}
          {menu({
            direction: "row-reverse",
            urlfoto: "/product/cleaningservice.jpeg",
            judul: "Vaundry (Vacuum Laundry)",
            desc: "Pencucian yang dilakukan pada soft furniture dengan menggunakan alat hisap air yang super canggih, dimana nantinya soft furniture yang dicuci akan langsung kering. Alat kami mampu mengurangi kadar air selama proses pencucian, sehingga soft furniture yang dicuci tidak memerlukan waktu lama untuk proses pengeringannya.",
          })}
          {menu({
            direction: "row",
            urlfoto: "/product/cleaningservice.jpeg",
            judul: "Daily Cleaning",
            desc: "Pembersihan rumah yang dilakukan secara harian oleh team kami. Pembersihan yang dilakukan meliputi menyapu, mengepel, memotong rumput, dll. Selain harian, kami juga menyediakan jasa pembersihan rumah secara bulanan.",
          })}
          {menu({
            direction: "row-reverse",
            urlfoto: "/product/cleaningservice.jpeg",
            judul: "General Cleaning/ Office Cleaning / Home Cleaning",
            desc: "Jasa ini melayani pengelolaan kebersihan dalam satu lokasi secara menyeluruh dan detail yang bersifat insidental seperti pembersihan suatu proyek baru dan gedung /rumah setelah renovasi. Biasanya yang dibersihkan dalam general cleaning ini adalah sisa-sisa material seperti cipratan cat, bekas semen, maupun debu konstruksi. Tentunya bagi perushaan yang baru saja menempati kantor baru bisa menggunakan jasa ini untuk membersihkan dan mempercantik ruangan kantor. Selain itu untuk rumah yang baru saja direnovasi pastinya banyak material cat maupun semen yang masih membekas. Dengan adanya jasa general cleaning ini juga bisa mempermudah bagi perushaan maupun personal untuk mendapatkan ruangan yang bersih dan juga nyaman.",
          })}
        </Grid>
      </div>
    </Layout>
  );
}
