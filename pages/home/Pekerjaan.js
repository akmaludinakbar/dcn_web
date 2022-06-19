import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";
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
  Accordion,
  AccordionSummary,
  Select,
  MenuItem,
  Chip,
  TableHead,
  TableRow,
  TableCell,
  AccordionDetails,
  TableBody,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LayoutHome from "../../comps/LayoutHome";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

export default function Pekerjaan(props) {
  const { pekerja, listlokasikerja, statuspekerjaan } = props;
  const [lokasikerja, setLokasiKerja] = useState(null);
  const [data, setData] = useState(props.data);
  const [Id, setId] = useState();
  const [status, setStatus] = useState();
  const [namaPekerjaan, setNamaPekerjaan] = useState("");
  const [detailPekerjaan, setDetailPekerjaan] = useState("");
  const [nama, setNama] = useState("");
  const [created_at, setCreated_at] = useState(null);
  const classes = useStyles();
  const handleCreated_at = (newValue) => {
    setCreated_at(format(newValue, "yyyy-MM-dd"));
  };
  return (
    <>
      <div>
        <Grid container direction={"row"} spacing={3}>
          <Grid item xs={12}>
            <Card>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ backgroundColor: "#0486cfa1" }}
                >
                  <Typography>Edit / Tambah Pekerjaan</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                        Nama Pekerjaan
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <TextField
                          size="small"
                          multiline
                          fullWidth
                          value={namaPekerjaan}
                          onChange={(e) => setNamaPekerjaan(e.target.value)}
                          placeholder="Pembaikan Kapal"
                        ></TextField>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Detail Pekerjaan
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <TextField
                          size="small"
                          value={detailPekerjaan}
                          multiline
                          type="number"
                          fullWidth
                          onChange={(e) => setDetailPekerjaan(e.target.value)}
                          placeholder=""
                        ></TextField>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Nama Pekerja
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <Select
                          labelId="demo-simple-select-label-2"
                          id="demo-simple-select-2"
                          displayEmpty
                          fullWidth
                          size="small"
                          value={`${nama}`}
                          onChange={(e) => setNama(e.target.value)}
                        >
                          {pekerja &&
                            pekerja.map((option) => (
                              <MenuItem key={option["id"]} value={option["id"]}>
                                {option["nama"]}
                              </MenuItem>
                            ))}
                        </Select>
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
                              nama_pekerjaan: namaPekerjaan,
                              detail: detailPekerjaan,
                              id_pekerja: nama,
                            };
                            let stringifyReq = JSON.stringify(obj);
                            fetch(
                              `${window.location.origin}/api/pekerjaan/edit`,
                              {
                                method: "POST",
                                body: stringifyReq,
                              }
                            )
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
                              nama_pekerjaan: namaPekerjaan,
                              detail: detailPekerjaan,
                              id_pekerja: nama,
                            };
                            let stringifyReq = JSON.stringify(obj);
                            fetch(
                              `${window.location.origin}/api/pekerjaan/tambah`,
                              {
                                method: "POST",
                                body: stringifyReq,
                              }
                            )
                              .then((resp) => resp.json())
                              .then((response) => {
                                console.log(response);
                                if (response.status == 200) {
                                  if (
                                    response.data == "Data Sudah Pernah Ada"
                                  ) {
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
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ backgroundColor: "#0486cfa1" }}
                >
                  <Typography>Filters</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                        Nama
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <Select
                          labelId="demo-simple-select-label-2"
                          id="demo-simple-select-2"
                          displayEmpty
                          fullWidth
                          size="small"
                          value={`${nama}`}
                          onChange={(e) => setNama(e.target.value)}
                        >
                          {pekerja &&
                            pekerja.map((option) => (
                              <MenuItem key={option["id"]} value={option["id"]}>
                                {option["nama"]}
                              </MenuItem>
                            ))}
                        </Select>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Tempat Kerja
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          displayEmpty
                          fullWidth
                          size="small"
                          value={`${lokasikerja}`}
                          onChange={(e) => setLokasiKerja(e.target.value)}
                        >
                          {listlokasikerja &&
                            listlokasikerja.map((option) => (
                              <MenuItem
                                key={option["NamaLokasiKerja"]}
                                value={option["NamaLokasiKerja"]}
                              >
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
                        Tanggal Pekerjaan
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            inputFormat="MM/dd/yyyy"
                            maxDate={Date.now()}
                            fullWidth
                            value={created_at}
                            onChange={handleCreated_at}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Status Pekerjaan
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          displayEmpty
                          fullWidth
                          size="small"
                          value={`${status}`}
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          {statuspekerjaan &&
                            statuspekerjaan.map((option) => (
                              <MenuItem
                                key={option["label"]}
                                value={option["label"]}
                              >
                                {option["label"]}
                              </MenuItem>
                            ))}
                        </Select>
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
                            setId(null);
                            setNamaPekerjaan(null);
                            setDetailPekerjaan(null);
                            setCreated_at(null);
                            setNama(null);
                            setStatus(null);
                            setLokasiKerja(null);
                            let obj = {
                              nama: "",
                              tempat_kerja: "",
                              tanggal_pekerjaan: "",
                              status: "",
                            };
                            let stringifyReq = JSON.stringify(obj);
                            fetch(
                              `${window.location.origin}/api/pekerjaan/list`,
                              {
                                method: "POST",
                                body: stringifyReq,
                              }
                            )
                              .then((resp) => resp.json())
                              .then((response) => {
                                if (response.status == 200) {
                                  setData(response.data);
                                } else {
                                  alert("!! ERROR " + response.data);
                                }
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                          }}
                        >
                          Reset
                        </Button>
                      </Grid>

                      <Grid item>
                        <Button
                          variant="contained"
                          onClick={() => {
                            let obj = {
                              nama: nama,
                              tempat_kerja: lokasikerja,
                              tanggal_pekerjaan: created_at,
                              status: status,
                            };
                            let stringifyReq = JSON.stringify(obj);
                            fetch(
                              `${window.location.origin}/api/pekerjaan/list`,
                              {
                                method: "POST",
                                body: stringifyReq,
                              }
                            )
                              .then((resp) => resp.json())
                              .then((response) => {
                                if (response.status == 200) {
                                  setData(response.data);
                                } else {
                                  alert("!! ERROR " + response.data);
                                }
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                          }}
                        >
                          Filter
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
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

                      <TableCell align="left">Nama </TableCell>
                      <TableCell align="left"> </TableCell>
                      <TableCell align="left">Nama Pekerjaan</TableCell>
                      <TableCell align="left">Detail Pekerjaan</TableCell>
                      <TableCell align="left">Perusahaan </TableCell>
                      <TableCell align="left">Keterangan</TableCell>
                      <TableCell align="left">Foto Pekerjaan</TableCell>
                      <TableCell align="left">Status Pekerjaan</TableCell>
                      <TableCell align="center">Aksi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data &&
                      data.map((item, itemIndex) => (
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
                            {item.Nama}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {item.Created_at}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                            {item.Nama_pekerjaan}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {item.Detail_Pekerjaan}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {item.NamaLokasiKerja}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {item.Keterangan}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {item.Url_Foto_Pekerjaan}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Chip
                              label={item.Status_Pekerjaan}
                              style={{
                                color: "white",
                                backgroundColor:
                                  item.Status_Pekerjaan == "pending"
                                    ? "orange"
                                    : "green",
                              }}
                            />
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
                                  `${window.location.origin}/api/pekerjaan/delete`,
                                  {
                                    method: "DELETE",
                                    body: stringifyReq,
                                  }
                                )
                                  .then((resp) => resp.json())
                                  .then((response) => {
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
                                setNamaPekerjaan(item.Nama_pekerjaan);
                                setDetailPekerjaan(item.Detail_Pekerjaan);
                                setNama(item.Id_Pekerja);
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
  var urlEmployers = "http://api.dinarcahayanegara.com/pekerjaan";
  var resEmployers = await fetch(urlEmployers, {
    method: "POST",
  });
  const employerList = await resEmployers.json();

  var urlPekerja = "http://api.dinarcahayanegara.com/pekerja";
  var resPekerja = await fetch(urlPekerja, {
    method: "GET",
  });
  const PekerjaList = await resPekerja.json();

  var urlListLokasi = "http://api.dinarcahayanegara.com/lokasikerja";
  var resListLokasi = await fetch(urlListLokasi, {
    method: "GET",
  });
  const Listlokasikerja = await resListLokasi.json();
  return {
    props: {
      data: employerList || [],
      listlokasikerja: Listlokasikerja || [],
      pekerja: PekerjaList || [],
      statuspekerjaan: [{ label: "pending" }, { label: "dikerjakan" }],
    },
  };
}

Pekerjaan.Layout = LayoutHome;
