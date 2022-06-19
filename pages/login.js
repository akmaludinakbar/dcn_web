import React from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  TextField,
  Paper,
} from "@mui/material";
import { cookie } from "../comps/helpers/cookie";
import Image from "next/image";
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
        <Grid item xs={10}>
          <Card style={{ borderRadius: 10, minHeight: 400 }}>
            {/* <CardHeader style={{ textAlign: "center" }} title="Login" />
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
            </CardActions> */}
            <Grid direction={"row"} container>
              <Grid
                item
                xs={6}
                md={4}
                container
                direction="column"
                alignItems="center"
              >
                <Grid item style={{ paddingTop: 30 }}>
                  <Image
                    src="/DCN.svg"
                    alt="site logo"
                    height={40}
                    width={40}
                  />
                </Grid>
                <Grid item>
                  {" "}
                  <Typography variant="body1" fontWeight={"bold"}>
                    Login
                  </Typography>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography variant="caption">
                    Welcome, Dcn Management System
                  </Typography>
                </Grid>
                <Grid item style={{ paddingTop: 10, width: "80%" }}>
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
                <Grid item style={{ paddingTop: 20, width: "80%" }}>
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
                <Grid item style={{ paddingTop: 20, width: "70%" }}>
                  <Button
                    fullWidth
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
                            console.log(response.data.token);
                            cookie.set("token", response.data.token);
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
                </Grid>
              </Grid>
              <Grid item xs={6} md={8}>
                <Paper style={{ position: "relative", color: "black" }}>
                  <Image
                    src="/internal/login.jpeg"
                    alt="site logo"
                    height={113}
                    width={200}
                    layout="responsive"
                  />
                  <Typography
                    style={{
                      zIndex: "100",
                      position: "absolute",
                      top: 100,
                      left: "20px",
                    }}
                    fontWeight="bold"
                    variant="h3"
                  >
                    Professional
                  </Typography>
                  <Typography
                    style={{
                      zIndex: "100",
                      position: "absolute",
                      top: 150,
                      left: "20px",
                    }}
                    fontWeight="bold"
                    variant="h3"
                  >
                    Manpower Supply
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
