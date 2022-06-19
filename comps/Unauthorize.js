import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    top: "40%",
  },
  content: {
    height: "600px",
    width: "100%",
  },
  text: {
    padding: "20px",
  },
  unauthorized: {
    fontSize: "32px",
    fontWeight: "bold",
  },
}));

export default function Unauthorized() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.root}>
        <div className={classes.unauthorized}>401</div>
        <div className={classes.text}>Unauthorized</div>
      </div>
    </div>
  );
}
