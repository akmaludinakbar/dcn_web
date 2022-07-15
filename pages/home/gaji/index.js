import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import absoluteUrl from "next-absolute-url";
import AddIcon from "@mui/icons-material/Add";
import TambahGajiScreen from "./tambahgaji";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
  Dialog,
  Slide,
  AccordionSummary,
  TableHead,
  MenuItem,
  TableRow,
  Select,
  TableCell,
  TableBody,
  AccordionDetails,
} from "@mui/material";
import { formatRupiah } from "../../../comps/helpers";
import LayoutHome from "../../../comps/LayoutHome";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { format } from "date-fns";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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

export default function Gaji(props) {
  const { listnamapegawai } = props;
  const [data, setData] = useState(props.data);
  const [nama, setNama] = useState(null);
  const [tanggalmasuk, setTanggalMasuk] = useState(null);
  const [lokasikerja, setLokasiKerja] = useState(null);
  const [tanggalkeluar, setTanggalKeluar] = useState(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [datadetail, setdatadetail] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setdatadetail(null);
    setOpen(false);
    getData("", "");
  };

  const handleTanggalMasuk = (newValue) => {
    setTanggalMasuk(format(newValue, "yyyy-MM-dd"));
  };

  const getDataDetail = (id) => {
    let obj = {
      id,
    };
    let stringifyReq = JSON.stringify(obj);
    fetch(`${window.location.origin}/api/gaji/detail`, {
      method: "POST",
      body: stringifyReq,
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.status == 200) {
          setdatadetail(response.data);
          handleClickOpen();
        } else {
          alert("!! ERROR " + response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getData = (nama, tanggal_gaji) => {
    let obj = {
      nama: nama,
      tanggal_gaji: tanggal_gaji,
    };
    let stringifyReq = JSON.stringify(obj);
    fetch(`${window.location.origin}/api/gaji/list`, {
      method: "POST",
      body: stringifyReq,
    })
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setData(response.data);
        } else {
          alert("!! ERROR " + response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteData = (id) => {
    let obj = {
      id,
    };
    let stringifyReq = JSON.stringify(obj);
    fetch(`${window.location.origin}/api/gaji/delete`, {
      method: "DELETE",
      body: stringifyReq,
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.status == 200) {
          alert(response.data.message);
          getData("", "");
        }
      })
      .catch(function (error) {
        alert(error);
      });
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
                      <Grid item xs={2}>
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
                          {listnamapegawai &&
                            listnamapegawai.map((option) => (
                              <MenuItem key={option["id"]} value={option["id"]}>
                                {option["nama"]}
                              </MenuItem>
                            ))}
                        </Select>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={2}>
                        {" "}
                        Tanggal Gaji
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            inputFormat="MM/dd/yyyy"
                            maxDate={Date.now()}
                            fullWidth
                            value={tanggalmasuk}
                            onChange={handleTanggalMasuk}
                            renderInput={(params) => (
                              <TextField size="small" {...params} />
                            )}
                          />
                        </LocalizationProvider>
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
                            setNama(null);
                            setTanggalMasuk(null);
                            getData("", "");
                          }}
                        >
                          Reset
                        </Button>
                      </Grid>

                      <Grid item>
                        <Button
                          variant="contained"
                          onClick={() => {
                            console.log(nama);
                            console.log(tanggalmasuk);
                            getData(
                              nama,
                              tanggalmasuk == null ? "" : tanggalmasuk
                            );
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
            <span>
              {" "}
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen}
                style={{ float: "right" }}
                startIcon={<AddIcon />}
              >
                Tambah Data Gaji
              </Button>
            </span>
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
                      <TableCell align="left">Nama</TableCell>
                      <TableCell align="left">Tanggal Gaji</TableCell>
                      <TableCell align="left">Jumlah Penerimaan</TableCell>
                      <TableCell align="left">Jumlah Potongan</TableCell>
                      <TableCell align="left">Gaji Bersih</TableCell>
                      <TableCell align="left">Aksi</TableCell>
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
                            {item.Tanggal_gaji}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {formatRupiah(item.Jumlah_penerimaan)}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {formatRupiah(item.Jumlah_potongan)}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {formatRupiah(
                              parseInt(item.Jumlah_penerimaan) -
                                parseInt(item.Jumlah_potongan)
                            ) || "-"}
                          </StyledTableCell>

                          <StyledTableCell align="left">
                            <Grid
                              container
                              direction={"row"}
                              spacing={2}
                              justifyContent="flex-start"
                              alignItems="flex-start"
                            >
                              <Grid item>
                                {" "}
                                <EditIcon
                                  color="info"
                                  onClick={(e) => getDataDetail(item.id)}
                                />
                              </Grid>
                              <Grid item>
                                {" "}
                                <DeleteForeverIcon
                                  color="warning"
                                  onClick={() => {
                                    window.confirm(
                                      "Yakin Ingin Menghapus Data?"
                                    )
                                      ? deleteData(item.id)
                                      : "";
                                  }}
                                />
                              </Grid>
                            </Grid>
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
        <Dialog
          disableEscapeKeyDown
          fullScreen
          open={open}
          onClose={handleClose}
        >
          <TambahGajiScreen
            handleClose={handleClose}
            listnamapegawai={listnamapegawai}
            data={datadetail}
          />
        </Dialog>
      </div>
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { protocol, host } = absoluteUrl(req);
  const values = {
    nama: "",
    tanggal_gaji: "",
  };
  let stringifyReq = JSON.stringify(values);
  var urlEmployers = `${protocol}//${host}/api/gaji/list`;
  var resEmployers = await fetch(urlEmployers, {
    method: "POST",
    body: stringifyReq,
  });
  const employerList = await resEmployers.json();

  var urlListPekerja = `${protocol}//${host}/api/pekerja/list2`;
  var resListPekerja = await fetch(urlListPekerja, {
    method: "GET",
  });
  const listnamapegawai = await resListPekerja.json();

  return {
    props: {
      data: employerList.data || [],
      listnamapegawai: listnamapegawai.data || [],
    },
  };
}

Gaji.Layout = LayoutHome;
