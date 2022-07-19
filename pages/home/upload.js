import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import absoluteUrl from "next-absolute-url";
import PanoramaIcon from "@mui/icons-material/Panorama";
import {
  Typography,
  Grid,
  Button,
  Card,
  Link,
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
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LayoutHome from "../../comps/LayoutHome";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tableCellClasses } from "@mui/material/TableCell";
import Router from "next/router";
import EditIcon from "@mui/icons-material/Edit";
import { AttachFile } from "@mui/icons-material";

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

export default function Upload(props) {
  const { pekerja, listlokasikerja, statuspekerjaan } = props;
  const [lokasikerja, setLokasiKerja] = useState(null);
  const [data, setData] = useState(props.data);
  const [Id, setId] = useState();
  const [file, setfile] = useState();
  const [namafile, setnamafile] = useState("");
  const [status, setStatus] = useState();
  const [jenispekerjaan, setJenisPekerjaan] = useState();
  const [namaPekerjaan, setNamaPekerjaan] = useState("");
  const [detailPekerjaan, setDetailPekerjaan] = useState("");
  const [nama, setNama] = useState("");
  const [created_at, setCreated_at] = useState(null);
  const classes = useStyles();
  const handleCreated_at = (newValue) => {
    setCreated_at(format(newValue, "yyyy-MM-dd"));
  };

  const pesertalabel = (id) => {
    var data = pekerja.find((val) => val.id == id);
    return data.nama;
  };
  const setUpload = async () => {
    const formData = new FormData();
    formData.append("id_pekerja", nama);
    formData.append("file", file);
    formData.append("detail", namafile);
    const options = {
      method: "POST",
      body: formData,
    };
    await fetch(process.env.BASE_URL + `/uploadfile`, options).then(
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
        Router.reload();
        alert("Success");
      }
    );
  };
  const deletedata = (id, url) => {
    let obj = {
      id: id,
      url: url.split("document/").join(""),
    };
    let stringifyReq = JSON.stringify(obj);
    fetch(`${window.location.origin}/api/file/delete`, {
      method: "DELETE",
      body: stringifyReq,
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.status == 200) {
          alert("data dihapus");
          getList();
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };

  function getList() {
    let obj = {
      nama: "",
    };
    let stringifyReq = JSON.stringify(obj);
    fetch(`${window.location.origin}/api/file/list`, {
      method: "POST",
      body: stringifyReq,
    })
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
  }
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
                  <Typography>Edit / Tambah File</Typography>
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
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Detail/Nama File
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <TextField
                          size="small"
                          value={namafile}
                          helperText="*eg. Document PPH 21"
                          multiline
                          fullWidth
                          onChange={(e) => setnamafile(e.target.value)}
                          placeholder=""
                        ></TextField>
                      </Grid>
                    </Grid>{" "}
                    <Grid item xs={12} container direction={"row"}>
                      {" "}
                      <Grid item xs={4}>
                        {" "}
                        Upload File
                      </Grid>
                      <Grid item xs={5}>
                        {" "}
                        <TextField
                          size="small"
                          value={file && file.name}
                          disabled
                          multiline
                          fullWidth
                          //   onChange={(e) => setfile(e.target.value)}
                          placeholder=""
                        ></TextField>
                      </Grid>
                      <Grid item>
                        {" "}
                        <Button
                          style={{ marginLeft: 10 }}
                          variant="outlined"
                          component="label"
                          onChange={(e) => {
                            // alert(item.id);

                            setfile(e.target.files[0]);
                            // setUpload(
                            //   e.target.files[0],
                            //   item.id,
                            //   item.url_foto
                            // );
                          }}
                        >
                          Upload File
                          <input
                            type="file"
                            accept="application/pdf,application/vnd.ms-excel,.xls,.xlsx"
                            hidden
                          />
                        </Button>
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
                      {/* <Grid item>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => {
                            let obj = {
                              id: Id,
                              nama_pekerjaan: namaPekerjaan,
                              detail: detailPekerjaan,
                              id_pekerja: nama,
                              jenis_pekerjaan: jenispekerjaan,
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
                                  getList();
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
                      </Grid> */}

                      <Grid item>
                        <Button variant="contained" onClick={() => setUpload()}>
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
                            fetch(`${window.location.origin}/api/file/list`, {
                              method: "POST",
                              body: stringifyReq,
                            })
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
                              id_pekerja: nama,
                            };
                            let stringifyReq = JSON.stringify(obj);
                            fetch(`${window.location.origin}/api/file/list`, {
                              method: "POST",
                              body: stringifyReq,
                            })
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
                      <TableCell align="left">Nama Pekerja </TableCell>
                      <TableCell align="left"> </TableCell>
                      <TableCell align="left">Detail File</TableCell>
                      <TableCell align="left">File</TableCell>
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
                            {pesertalabel(item.Id_pekerja)}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {item.Created_at}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {item.Detail}
                          </StyledTableCell>

                          <StyledTableCell align="left">
                            {item.Url_file == "" ? (
                              ""
                            ) : (
                              <Link
                                href={`${process.env.BASE_URL}/${item.Url_file}`}
                                target="_blank"
                              >
                                {item.Url_file.split("document/").join("")}
                              </Link>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Button
                              data-testid={"btn-delete-" + item.id}
                              onClick={() => {
                                window.confirm("Yakin Ingin Menghapus Data?")
                                  ? deletedata(item.id, item.Url_file)
                                  : "";
                              }}
                            >
                              <DeleteIcon style={{ color: "red" }} />
                            </Button>
                            {/* <Button
                              data-testid={"btn-detail-" + item.id}
                              onClick={() => {
                                setId(item.id);
                                setJenisPekerjaan(item.Jenis_pekerjaan);
                                setNamaPekerjaan(item.Nama_pekerjaan);
                                setDetailPekerjaan(item.Detail_Pekerjaan);
                                setNama(item.Id_Pekerja);
                              }}
                            >
                              <EditIcon />
                            </Button> */}
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
export async function getServerSideProps({ req }) {
  const { protocol, host } = absoluteUrl(req);
  let obj = {
    id_pekerja: "",
  };
  let stringifyReq = JSON.stringify(obj);
  var urlEmployers = `${protocol}//${host}/api/file/list`;
  var resEmployers = await fetch(urlEmployers, {
    method: "POST",
    body: stringifyReq,
  });
  const employerList = await resEmployers.json();

  var urlPekerja = `${protocol}//${host}/api/pekerja/list2`;
  var resPekerja = await fetch(urlPekerja, {
    method: "GET",
  });
  const PekerjaList = await resPekerja.json();

  return {
    props: {
      data: employerList.data || [],
      pekerja: PekerjaList.data || [],
    },
  };
}

Upload.Layout = LayoutHome;
