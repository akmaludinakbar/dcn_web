import React from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  CardActions,
  TextField,
  Box,
} from "@mui/material";
import Router from "next/router";
export default function Login() {
  const [password, setpassword] = React.useState("");
  const [username, setusername] = React.useState("");
  const [status, setstatus] = React.useState("");

  function changeValue(e, type, set) {
    setstatus("");
    const value = e.target.value;
    const nextState = {};
    nextState[type] = value;
    set(value);
  }
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(317.81deg, #2C3294 -15.68%, #00ABEB 157.9%)",
        }}
      >
        <Grid item xs={12} md={3}>
          <Card style={{ borderRadius: 10 }}>
            <CardHeader style={{ textAlign: "center" }} title="Login" />
            <Divider />
            <CardContent>
              <Grid container direction={"column"} spacing={2}>
                <Grid item>
                  <TextField
                    fullWidth
                    id="username"
                    value={username}
                    onChange={(e) => changeValue(e, "username", setusername)}
                    label="Username"
                    type="username"
                    autoComplete="current-username"
                  ></TextField>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="outlined-password-input"
                    value={password}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => changeValue(e, "password", setpassword)}
                  ></TextField>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                onClick={(e) => {
                  let obj = {
                    username: username,
                    password: password,
                  };
                  let stringifyReq = JSON.stringify(obj);
                  fetch(`${window.location.origin}/api/login`, {
                    method: "POST",
                    body: stringifyReq,
                  })
                    .then((resp) => resp.json())
                    .then((response) => {
                      if (response.data.status == undefined) {
                        //gagal login
                        setstatus(response.data);
                      } else {
                        setstatus(response.data.status);
                        Router.push("/home");
                      }
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                Login
              </Button>
              <Typography
                variant="caption"
                style={{ paddingLeft: 20, color: "red" }}
              >
                {status}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
