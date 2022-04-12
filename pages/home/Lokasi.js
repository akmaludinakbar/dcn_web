import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import LayoutHome from "../../comps/LayoutHome";
import Router from "next/router";

export default function Lokasi() {
  return (
    <>
      <LayoutHome>
        <Button
          style={{ marginTop: 200 }}
          onClick={(e) => {
            Router.push("/home");
          }}
        >
          loaski
        </Button>
      </LayoutHome>
    </>
  );
}
