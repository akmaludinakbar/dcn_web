import React from "react";
import { makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    margin: "0 auto",
    top: "40%",
  },
  content: {
    height: "150px",
    width: "100%",
  },
  text: {
    padding: "20px",
    fontFamily: "Montserrat",
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.root}>
        <CircularProgress color="secondary" />
        <div className={classes.text}>Sedang Memuat . . .</div>
      </div>
    </div>
  );
}
