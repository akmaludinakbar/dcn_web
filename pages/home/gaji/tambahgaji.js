import * as React from "react";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import { format } from "date-fns";
import Toolbar from "@mui/material/Toolbar";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import { useFormik } from "formik";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import NumberFormat from "react-number-format";
const validationSchema = yup.object({
  nama: yup.string("Enter your password").required("Nama Tidak Boleh Kosong"),
  jabatan: yup
    .string("Enter your password")
    .required("Jabatan Tidak Boleh Kosong"),
  tanggal_gaji: yup
    .string("Enter your password")
    .required("Tanggal gaji Tidak Boleh Kosong"),
});
const capitalizeFirst = (str) => {
  var str1 = str.split("_").join(" ");
  return str1.charAt(0).toUpperCase() + str1.slice(1);
};
export default function FullScreenDialog(props) {
  const { handleClose, listnamapegawai, data } = props;
  const [isSubmitting, setisSubmitting] = React.useState(false);
  const hitungjumlahpenerimaan = () => {
    return (
      parseInt(
        formik.values.gaji_pokok == "" ? "0" : formik.values.gaji_pokok
      ) +
      parseInt(formik.values.pulsa == "" ? "0" : formik.values.pulsa) +
      parseInt(
        formik.values.tunjangan_hari_raya == ""
          ? "0"
          : formik.values.tunjangan_hari_raya
      ) +
      parseInt(
        formik.values.tunjangan_kehadiran == ""
          ? "0"
          : formik.values.tunjangan_kehadiran
      ) +
      parseInt(
        formik.values.tunjangan_luar_kota == ""
          ? "0"
          : formik.values.tunjangan_luar_kota
      ) +
      parseInt(formik.values.dedikasi == "" ? "0" : formik.values.dedikasi) +
      parseInt(
        formik.values.bpjs_ketenagakerjaan == ""
          ? "0"
          : formik.values.bpjs_ketenagakerjaan
      )
    );
  };

  const hitungjumlahpotongan = () => {
    return (
      parseInt(
        formik.values.setoran_bpjs_kesehatan == ""
          ? "0"
          : formik.values.setoran_bpjs_kesehatan
      ) +
      parseInt(
        formik.values.setoran_bpjs_ketenagakerjaan == ""
          ? "0"
          : formik.values.setoran_bpjs_ketenagakerjaan
      ) +
      parseInt(
        formik.values.potongan_kehadiran == ""
          ? "0"
          : formik.values.potongan_kehadiran
      ) +
      parseInt(
        formik.values.kasbon_gaji == "" ? "0" : formik.values.kasbon_gaji
      )
    );
  };

  const hitungjumlahgajibersih = () => {
    let jumlah = hitungjumlahpenerimaan() - hitungjumlahpotongan();
    return jumlah;
  };

  const handletanggalgaji = (newValue) => {
    formik.setFieldValue("tanggal_gaji", format(newValue, "yyyy-MM-dd"));
  };

  const money = [
    "pulsa",
    "gaji_pokok",
    "tunjangan_hari_raya",
    "tunjangan_kehadiran",
    "tunjangan_luar_kota",
    "dedikasi",
    "bpjs_ketenagakerjaan",
    "setoran_bpjs_kesehatan",
    "setoran_bpjs_ketenagakerjaan",
    "potongan_kehadiran",
    "kasbon_gaji",
    "gaji_bersih",
    "jumlah_penerimaan",
    "jumlah_potongan",
  ];

  const formik = useFormik({
    initialValues: {
      nama: data && data.Nama,
      jabatan: (data && data.jabatan) || "",
      tanggal_gaji: (data && data.Tanggal_gaji) || "",
      gaji_pokok: (data && data.gaji_pokok) || "",
      pulsa: (data && data.pulsa) || "",
      tunjangan_hari_raya: (data && data.tunjangan_hari_raya) || "",
      tunjangan_kehadiran: (data && data.tunjangan_kehadiran) || "",
      tunjangan_luar_kota: (data && data.tunjangan_luar_kota) || "",
      dedikasi: (data && data.dedikasi) || "",
      bpjs_ketenagakerjaan: (data && data.bpjs_ketenagakerjaan) || "",
      setoran_bpjs_kesehatan: (data && data.setoran_bpjs_kesehatan) || "",
      setoran_bpjs_ketenagakerjaan:
        (data && data.setoran_bpjs_ketenagakerjaan) || "",
      potongan_kehadiran: (data && data.potongan_kehadiran) || "",
      kasbon_gaji: (data && data.kasbon_gaji) || "",
      gaji_bersih: (data && data.gaji_bersih) || "",
      jumlah_penerimaan: (data && data.Jumlah_penerimaan) || "",
      jumlah_potongan: (data && data.Jumlah_potongan) || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let stringifyReq = JSON.stringify(values);
      fetch(
        data == null
          ? `${window.location.origin}/api/gaji/tambah`
          : `${window.location.origin}/api/gaji/edit?id=${data.id}`,
        {
          method: "POST",
          body: stringifyReq,
        }
      )
        .then((resp) => resp.json())
        .then((response) => {
          if (response.status == 200) {
            alert(response.data.message);
            data == null ? "" : handleClose();
          } else {
            alert(response.data.message);
          }
        })
        .catch(function (error) {
          alert(error);
          console.log(error);
        });
    },
  });

  const TextfieldCustom = ({
    id = "",
    isdropdown = false,
    isdate = false,
    ismoney = false,
  }) => {
    return (
      <Grid item md={4}>
        {ismoney ? (
          <NumberFormat
            decimalSeparator=","
            isNumericString
            fullWidth
            prefix="Rp"
            label={capitalizeFirst(id)}
            style={{ width: "100%" }}
            disabled={id.includes("jumlah") || id == "gaji_bersih"}
            thousandSeparator="."
            defaultValue={formik.values[id] || null}
            value={
              id == "gaji_bersih"
                ? hitungjumlahgajibersih()
                : id == "jumlah_potongan"
                ? hitungjumlahpotongan()
                : id == "jumlah_penerimaan"
                ? hitungjumlahpenerimaan()
                : formik.values[id] || null
            }
            onBlur={formik.handleBlur}
            customInput={TextField}
            id={id}
            name={id}
            InputLabelProps={{
              shrink: true,
              style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: id.includes("jumlah_penerimaan")
                  ? "black"
                  : id.includes("jumlah_potongan")
                  ? "black"
                  : "",
                // whiteSpace: props.isMobileView ? "initial" : "nowrap",
              },
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: props.isMobileView ? "3vw" : "1vw",
                backgroundColor: id.includes("jumlah_penerimaan")
                  ? "#0080004d"
                  : id.includes("jumlah_potongan")
                  ? "#ff000033"
                  : "white",
              },
            }}
            onChange={async (e) => {
              await formik.setFieldValue(
                [id],
                e.target.value.split("Rp").join("").split(".").join("")
              );
              // if (potongan.includes(id.substring(0, id.indexOf("_")))) {
              //   hitungjumlahpenerimaan();
              // } else {
              //   hitungjumlahpenerimaan();
              // }
            }}
          />
        ) : isdate ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              maxDate={Date.now()}
              fullWidth
              disabled={data == null ? false : true}
              label={capitalizeFirst(id)}
              value={formik.values.tanggal_gaji}
              onChange={handletanggalgaji}
              renderInput={(params) => (
                <TextField
                  onBlur={formik.handleBlur}
                  error={formik.touched[id] && Boolean(formik.errors[id])}
                  helperText={formik.touched[id] && formik.errors[id]}
                  size="large"
                  fullWidth
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        ) : isdropdown ? (
          <Autocomplete
            fullWidth
            disablePortal
            disabled={data == null ? false : true}
            value={(listnamapegawai || []).find(
              (e) => e["nama"] == formik.values[id]
            )}
            id={id}
            onChange={(event, newValue) => {
              formik.setFieldValue("nama", newValue["nama"]);
              formik.setFieldValue("id_pekerja", newValue["id"]);
            }}
            options={listnamapegawai}
            getOptionLabel={(listnamapegawai) =>
              (listnamapegawai && listnamapegawai["nama"]) || ""
            }
            getOptionSelected={(option, selectedValue) =>
              option["id"] === selectedValue["id"]
            }
            renderInput={(params) => (
              <TextField
                onBlur={formik.handleBlur}
                error={formik.touched[id] && Boolean(formik.errors[id])}
                helperText={formik.touched[id] && formik.errors[id]}
                {...params}
                fullWidth
                label={capitalizeFirst(id)}
              />
            )}
          />
        ) : (
          <TextField
            fullWidth
            id={id}
            name={id}
            label={capitalizeFirst(id)}
            value={formik.values[id]}
            onChange={formik.handleChange}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
          />
        )}
      </Grid>
    );
  };

  return (
    <span>
      {/* <pre style={{ textAlign: "left" }}>{JSON.stringify(formik, null, 2)}</pre> */}
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {data == null
              ? "    Input Data Gaji Bulanan"
              : "    Edit Data Gaji Bulanan"}
          </Typography>
          <Button
            type="submit"
            color="inherit"
            disabled={isSubmitting}
            onClick={() => {
              formik.setFieldValue(
                "gaji_bersih",
                `${hitungjumlahgajibersih()}`
              );
              formik.setFieldValue(
                "jumlah_penerimaan",
                `${hitungjumlahpenerimaan()}`
              );
              formik.setFieldValue(
                "jumlah_potongan",
                `${hitungjumlahpotongan()}`
              );
              formik.handleSubmit();
            }}
          >
            save
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction="row" spacing={3}>
            {Object.keys(formik.initialValues).map((key, i) => {
              let ismoney = false;
              for (i = 0; i <= money.length; i++) {
                if (key == money[i]) {
                  ismoney = true;
                }
              }
              return TextfieldCustom({
                id: `${key}`,
                isdropdown: key == "nama",
                isdate: key == "tanggal_gaji",
                ismoney: ismoney,
              });
            })}
          </Grid>
        </form>
      </div>
    </span>
  );
}
