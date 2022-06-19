import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import moment from "moment";
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
  MenuItem,
  Select,
  TableHead,
  TableRow,
  TableCell,
  Autocomplete,
  Avatar,
  TableBody,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import LayoutHome from "../../comps/LayoutHome";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Router from "next/router";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import EditIcon from "@mui/icons-material/Edit";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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

export default function Pekerja(props) {
  const { data, listlokasikerja } = props;
  const [Id, setId] = useState();
  const [nama, setNama] = useState("");
  const [idlokasikerja, setIdlokasikerja] = useState(undefined);
  const [telepon, setTelepon] = useState("");
  const [idimg, setIdimg] = useState("");
  const [urlfoto, setUrlfoto] = useState("");
  const fileInput = React.useRef();
  const classes = useStyles();
  const [tanggallahir, setTanggallahir] = React.useState(null);

  const handleChange = (newValue) => {
    var datum = Date.parse(newValue);
    setTanggallahir(`${datum / 1000}`);
  };

  const setUpload = async (files, id, url_foto) => {
    // var imagedata = files[0];
    // console.log("keinsi");
    // console.log(imagedata);
    // var data = new FormData();
    // data.append("File", imagedata);
    const formData = new FormData();
    formData.append("url_foto", url_foto);
    formData.append("file", files);
    const options = {
      method: "POST",
      body: formData,
      // If you add this, upload won't work
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // }
    };
    await fetch(process.env.BASE_URL + `/upload/${id}`, options).then(
      function (res) {
        alert("Tes");
        console.log(res);
        // if (res.ok) {
        //   alert("Perfect! ");
        // } else if (res.status == 401) {
        //   alert("Oops! ");
        // }
      },
      function (e) {
        console.log(e);

        Router.reload();
        alert("Success");
      }
    );
  };
  const itemList = [
    { value: "Car Winner", id: "casinofob" },
    { value: "PD 556", id: "-2084633992" },
    { value: "Cluckin Drink", id: "cbdrink" },
    { value: "Blink", id: "spellbook-blink" },
  ];

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
                {/* <Grid item xs={12} container direction={"row"}>
                  {" "}
                  <Grid
                    item
                    xs={5}
                    style={{ paddingLeft: 35, paddingBottom: 30 }}
                  >
                    {" "}
                    <Avatar
                      alt="Remy Sharp"
                      sx={{ width: 90, height: 90 }}
                      //src={process.env.BASE_URL+`/images/${item.url_foto}`}
                    />
                  </Grid>
                </Grid>{" "} */}
                <Grid item container direction="row" xs={12} spacing={1}>
                  <Grid item xs={10} container direction={"row"} spacing={1}>
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Nama
                      </Grid>
                      <Grid item xs>
                        {" "}
                        <TextField
                          size="small"
                          fullWidth
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          placeholder="Robert"
                        ></TextField>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Nomor Telepon
                      </Grid>
                      <Grid item xs>
                        {" "}
                        <TextField
                          size="small"
                          value={telepon}
                          type="number"
                          fullWidth
                          onChange={(e) => setTelepon(e.target.value)}
                          placeholder="0812256372123"
                        ></TextField>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Tujuan Penempatan
                      </Grid>
                      <Grid item xs>
                        {" "}
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          displayEmpty
                          fullWidth
                          size="small"
                          value={`${idlokasikerja}`}
                          onChange={(e) => setIdlokasikerja(e.target.value)}
                        >
                          {listlokasikerja.map((option) => (
                            <MenuItem key={option["id"]} value={option["id"]}>
                              {option["NamaLokasiKerja"]}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Tanggal Lahir
                      </Grid>
                      <Grid item xs>
                        {" "}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            inputFormat="MM/dd/yyyy"
                            fullWidth
                            maxDate={Date.now()}
                            value={
                              tanggallahir == null
                                ? null
                                : `${moment.unix(tanggallahir)}`
                            }
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>{" "}
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{ paddingLeft: "3vw", paddingTop: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      sx={{ width: 150, height: 150 }}
                      src={urlfoto}
                    />
                  </Grid>
                </Grid>
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
                        // nama: parm.nama,
                        // nomor_telepon: parm.nomor_telepon,
                        // id_lokasi_kerja: parm.id_lokasi_kerja,
                        // tgl_lahir:parm.tgl_lahir
                        let obj = {
                          id: Id,
                          nama: nama,
                          nomor_telepon: telepon,
                          id_lokasi_kerja: idlokasikerja,
                          tgl_lahir: tanggallahir,
                        };
                        let stringifyReq = JSON.stringify(obj);
                        fetch(`${window.location.origin}/api/pekerja/edit`, {
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
                          nama: nama.replace(/\s?$/, ""),
                          nomor_telepon: telepon,
                          id_lokasi_kerja: idlokasikerja,
                          tgl_lahir: tanggallahir,
                        };
                        let stringifyReq = JSON.stringify(obj);
                        //                       nama := keyVal["nama"]
                        // nomor_telepon := keyVal["nomor_telepon"]
                        // id_lokasi_kerja := keyVal["id_lokasi_kerja"]
                        // password := keyVal["password"]
                        // tgl_lahir := keyVal["tgl_lahir"]
                        fetch(`${window.location.origin}/api/pekerja/tambah`, {
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
                      <TableCell align="left"></TableCell>
                      <TableCell align="left">Nama </TableCell>
                      <TableCell align="left">Username </TableCell>
                      <TableCell align="left">Telepon</TableCell>
                      <TableCell align="left">Penempatan</TableCell>
                      <TableCell align="left">Tgl Lahir</TableCell>
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
                          <Avatar
                            alt="Remy Sharp"
                            src={process.env.BASE_URL + `/${item.url_foto}`}
                          />
                          {/* {item.url_foto} */}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {item.nama}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {item.username}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {item.nomor_telepon}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.NamaLokasiKerja}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {item.tgllahir == "-"
                            ? null
                            : `${moment
                                .unix(item.tgllahir)
                                .format("MM-DD-YYYY")}`}
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
                                `${window.location.origin}/api/pekerja/delete`,
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
                              setNama(item.nama);
                              setIdlokasikerja("56");
                              setTanggallahir(item.tgllahir);

                              setTelepon(item.nomor_telepon);
                              setUrlfoto(
                                process.env.BASE_URL + `/${item.url_foto}`
                              );
                            }}
                          >
                            <EditIcon />
                          </Button>
                          <Button
                            // variant="contained"
                            component="label"
                            onChange={(e) => {
                              // alert(item.id);
                              // console.log(e.target.files[0]);
                              setUpload(
                                e.target.files[0],
                                item.id,
                                item.url_foto
                              );
                            }}
                          >
                            <UploadFileIcon style={{ color: "orange" }} />
                            <input type="file" hidden />
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
  var urlEmployers = process.env.BASE_URL + "/pekerja";
  var resEmployers = await fetch(urlEmployers, {
    method: "GET",
  });
  const employerList = await resEmployers.json();

  var urlDatareferensiLokasiPekerja = process.env.BASE_URL + "/lokasikerja";
  var resDatareferensi = await fetch(urlDatareferensiLokasiPekerja, {
    method: "GET",
  });
  const LokasiKerjaList = await resDatareferensi.json();
  return {
    props: {
      data: employerList || [],
      listlokasikerja: LokasiKerjaList || [],
    },
  };
}

Pekerja.Layout = LayoutHome;
