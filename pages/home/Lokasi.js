import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Grid,
  Button,
  Card,
  TextField,
  TableContainer,
  TableFooter,
  TablePagination,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LayoutHome from "../../comps/LayoutHome";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Router from "next/router";
import EditIcon from "@mui/icons-material/Edit";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const useStyles = makeStyles((theme) => ({
  table: {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1);",
  },
  btn: {
    color: "#326144",
    width: "120px",
    marginLeft: "10px",
    padding: "7px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #326144",
  },
  menu: {
    display: "flex",
    padding: "10px 30px 10px 30px",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btn_search: {
    backgroundColor: "#326144",
    color: "white",
    padding: "7px",
    width: "120px",
  },
  icon: {
    color: "green",
  },
  table_footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    //  backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1);",
    padding: 10,
    width: "30%",
  },
  options: {
    width: "100%",
  },
  formControl: {
    width: "100%",
  },
  footer_modal: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20%",
  },
  defaultContent: {
    padding: "10px",
  },
  hidden: {
    display: "none",
  },
  btn_back: {
    backgroundColor: "#326144",
  },
  vip_chip: {
    backgroundColor: "#232735",
    color: "white",
  },
}));

export default function Lokasi(props) {
  const { data } = props;
  const [Id, setId] = useState();
  const [namaLokasi, setnamaLokasi] = useState("");
  const [kordinatX, setkordinatX] = useState("");
  const [kordinatY, setkordinatY] = useState("");
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid container direction={"row"} spacing={3}>
          <Grid item xs={12}>
            <Card>
              <Grid
                container
                direction={"row"}
                style={{ padding: 20 }}
                spacing={1}
              >
                <Grid item xs={12} container direction={"row"}>
                  {" "}
                  <Grid item xs={4}>
                    {" "}
                    Nama Lokasi Kerja
                  </Grid>
                  <Grid item xs={5}>
                    {" "}
                    <TextField
                      size="small"
                      fullWidth
                      value={namaLokasi}
                      onChange={(e) => setnamaLokasi(e.target.value)}
                      placeholder="Bank Mandiri Batang"
                    ></TextField>
                  </Grid>
                </Grid>{" "}
                <Grid item xs={12} container direction={"row"}>
                  {" "}
                  <Grid item xs={4}>
                    {" "}
                    Titik Kordinat X
                  </Grid>
                  <Grid item xs={5}>
                    {" "}
                    <TextField
                      size="small"
                      value={kordinatX}
                      type="number"
                      fullWidth
                      onChange={(e) => setkordinatX(e.target.value)}
                      placeholder="-6.9054885671866995"
                    ></TextField>
                  </Grid>
                </Grid>{" "}
                <Grid item xs={12} container direction={"row"}>
                  {" "}
                  <Grid item xs={4}>
                    {" "}
                    Titik Kordinat Y
                  </Grid>
                  <Grid item xs={5}>
                    {" "}
                    <TextField
                      size="small"
                      fullWidth
                      type="number"
                      onChange={(e) => setkordinatY(e.target.value)}
                      value={kordinatY}
                      placeholder="109.7180930661242"
                    ></TextField>
                  </Grid>
                </Grid>{" "}
                <Grid
                  item
                  xs={12}
                  container
                  direction={"row"}
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  spacing={2}
                >
                  <Grid item>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => {
                        let obj = {
                          id: Id,
                          lokasikerja: namaLokasi,
                          kordinatx: kordinatX,
                          kordinaty: kordinatY,
                        };
                        let stringifyReq = JSON.stringify(obj);
                        fetch(`${window.location.origin}/api/lokasi/edit`, {
                          method: "POST",
                          body: stringifyReq,
                        })
                          .then((resp) => resp.json())
                          .then((response) => {
                            console.log(response);
                            if (response.status == 200) {
                              alert("Data Update.!!");
                              Router.reload();
                            } else {
                              alert("!! ERROR " + response.data);
                            }
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                      }}
                    >
                      Edit
                    </Button>
                  </Grid>

                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={() => {
                        let obj = {
                          lokasikerja: namaLokasi,
                          kordinatx: kordinatX,
                          kordinaty: kordinatY,
                        };
                        let stringifyReq = JSON.stringify(obj);
                        fetch(`${window.location.origin}/api/lokasi/tambah`, {
                          method: "POST",
                          body: stringifyReq,
                        })
                          .then((resp) => resp.json())
                          .then((response) => {
                            console.log(response);
                            if (response.status == 200) {
                              if (response.data == "Data Sudah Pernah Ada") {
                                alert(response.data);
                              } else {
                                alert(response.data);
                                Router.reload();
                              }
                            } else {
                              alert("!! ERROR " + response.data);
                            }
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                      }}
                    >
                      Tambah
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              {" "}
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="simple table"
                  className={classes.table}
                >
                  <TableHead style={{ backgroundColor: "#0486cfa1" }}>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell align="left">Nama Lokasi</TableCell>
                      <TableCell align="left">Kordinat x</TableCell>
                      <TableCell align="left">Kordinat y</TableCell>
                      <TableCell align="center">Aksi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((item, itemIndex) => (
                      <StyledTableRow
                        hover
                        key={itemIndex}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <StyledTableCell align="left">
                          {itemIndex + 1}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {item.NamaLokasiKerja}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.KordinatY}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.KordinatX}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Button
                            data-testid={"btn-delete-" + item.id}
                            onClick={() => {
                              let obj = {
                                id: item.id,
                              };
                              let stringifyReq = JSON.stringify(obj);
                              fetch(
                                `${window.location.origin}/api/lokasi/delete`,
                                {
                                  method: "DELETE",
                                  body: stringifyReq,
                                }
                              )
                                .then((resp) => resp.json())
                                .then((response) => {
                                  console.log(response.status);
                                  if (response.status == 200) {
                                    alert("data dihapus");
                                    Router.reload();
                                  }
                                })
                                .catch(function (error) {
                                  alert(error);
                                });
                            }}
                          >
                            <DeleteIcon style={{ color: "red" }} />
                          </Button>
                          <Button
                            data-testid={"btn-detail-" + item.id}
                            onClick={() => {
                              setId(item.id);
                              setnamaLokasi(item.NamaLokasiKerja);
                              setkordinatX(item.KordinatX);
                              setkordinatY(item.KordinatY);
                            }}
                          >
                            <EditIcon />
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
                <TableFooter className={classes.footer}>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    colSpan={3}
                    //count={count}
                    // rowsPerPage={rowsPerPage}
                    //page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows per page" },
                      native: true,
                    }}
                    // onChangePage={handleChangePage}
                    // onChangeRowsPerPage={handleChangeRowsPerPage}
                    // ActionsComponent={TablePaginationActions}
                  />
                </TableFooter>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  var urlEmployers = "http://localhost:8090/lokasikerja";
  var resEmployers = await fetch(urlEmployers, {
    method: "GET",
  });
  const employerList = await resEmployers.json();
  return {
    props: {
      data: employerList || [],
    },
  };
}

Lokasi.Layout = LayoutHome;
