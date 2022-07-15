import { Typography, Grid, Card } from "@mui/material";
import Image from "next/image";
export const menu = ({
  judul = "",
  direction,
  desc = "",
  items = [{ product: "" }],
  urlfoto = "",
}) => {
  return (
    <Grid
      item
      container
      direction={direction}
      justifyContent="center"
      alignItems="center"
      style={{ padding: 50 }}
      spacing={5}
    >
      <Grid item xs={12} md={4}>
        {" "}
        <Card style={{ width: 350, height: 200 }}>
          {" "}
          <Image src={`${urlfoto}`} alt="site logo" width={350} height={200} />
        </Card>
      </Grid>
      <Grid item xs={6} container direction={"column"} spacing={2}>
        <Grid item>
          <Typography
            variant="h5"
            style={{ color: "black", fontWeight: "bold" }}
          >
            {judul}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{desc}</Typography>
        </Grid>
        {items.map((item, i) => (
          <Grid item container direction={"row"}>
            <Grid item>{items.length == 1 ? "" : "-"}</Grid>
            <Grid item>
              <Typography>{item.product}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export const formatRupiah = (val, prefix) => {
  var val_string = ("" + val).replace(".", ",");
  var split = val_string.split(",");
  var sisa = split[0].length % 3;
  var rupiah = split[0].substr(0, sisa);
  var ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return rupiah == "" ? "-" : `${prefix || "Rp"}${rupiah}`;
};
