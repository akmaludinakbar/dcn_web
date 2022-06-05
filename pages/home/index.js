import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import LayoutHome from "../../comps/LayoutHome";
import Router from "next/router";

export default function Home() {
  return (
    <>
      <Button
        onClick={(e) => {
          Router.push("/home/Lokasi");
        }}
        style={{ marginTop: 200 }}
      >
        lanjut
      </Button>
    </>
  );
}
Home.Layout = LayoutHome;
