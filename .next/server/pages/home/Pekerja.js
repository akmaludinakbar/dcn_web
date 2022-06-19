"use strict";
(() => {
var exports = {};
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 4084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Pekerja),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/UploadFile"
const UploadFile_namespaceObject = require("@mui/icons-material/UploadFile");
var UploadFile_default = /*#__PURE__*/__webpack_require__.n(UploadFile_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Delete"
var Delete_ = __webpack_require__(3188);
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);
// EXTERNAL MODULE: ./comps/LayoutHome.js + 1 modules
var LayoutHome = __webpack_require__(968);
// EXTERNAL MODULE: external "@mui/material/styles"
var material_styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/TableCell"
var TableCell_ = __webpack_require__(5612);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@mui/x-date-pickers/DesktopDatePicker"
var DesktopDatePicker_ = __webpack_require__(4764);
// EXTERNAL MODULE: external "@mui/icons-material/Edit"
var Edit_ = __webpack_require__(6902);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "@mui/x-date-pickers/LocalizationProvider"
var LocalizationProvider_ = __webpack_require__(5753);
// EXTERNAL MODULE: external "@mui/x-date-pickers/AdapterDateFns"
var AdapterDateFns_ = __webpack_require__(4046);
;// CONCATENATED MODULE: ./pages/home/Pekerja.js















const StyledTableCell = (0,material_styles_.styled)(material_.TableCell)(({ theme  })=>({
        [`&.${TableCell_.tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white
        },
        [`&.${TableCell_.tableCellClasses.body}`]: {
            fontSize: 14
        }
    })
);
const StyledTableRow = (0,material_styles_.styled)(material_.TableRow)(({ theme  })=>({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0
        }
    })
);
const useStyles = (0,styles_.makeStyles)((theme)=>({
        table: {
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1);"
        },
        btn: {
            color: "#326144",
            width: "120px",
            marginLeft: "10px",
            padding: "7px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #326144"
        },
        menu: {
            display: "flex",
            padding: "10px 30px 10px 30px",
            alignItems: "center",
            justifyContent: "flex-end"
        },
        btn_search: {
            backgroundColor: "#326144",
            color: "white",
            padding: "7px",
            width: "120px"
        },
        icon: {
            color: "green"
        },
        table_footer: {
            display: "flex",
            justifyContent: "flex-end"
        },
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            //  backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1);",
            padding: 10,
            width: "30%"
        },
        options: {
            width: "100%"
        },
        formControl: {
            width: "100%"
        },
        footer_modal: {
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20%"
        },
        defaultContent: {
            padding: "10px"
        },
        hidden: {
            display: "none"
        },
        btn_back: {
            backgroundColor: "#326144"
        },
        vip_chip: {
            backgroundColor: "#232735",
            color: "white"
        }
    })
);
function Pekerja(props) {
    const { data , listlokasikerja  } = props;
    const { 0: Id , 1: setId  } = (0,external_react_.useState)();
    const { 0: nama , 1: setNama  } = (0,external_react_.useState)("");
    const { 0: idlokasikerja , 1: setIdlokasikerja  } = (0,external_react_.useState)(undefined);
    const { 0: telepon , 1: setTelepon  } = (0,external_react_.useState)("");
    const { 0: idimg , 1: setIdimg  } = (0,external_react_.useState)("");
    const { 0: urlfoto , 1: setUrlfoto  } = (0,external_react_.useState)("");
    const fileInput = external_react_default().useRef();
    const classes = useStyles();
    const [tanggallahir, setTanggallahir] = external_react_default().useState(null);
    const handleChange = (newValue)=>{
        var datum = Date.parse(newValue);
        setTanggallahir(`${datum / 1000}`);
    };
    const setUpload = async (files, id, url_foto)=>{
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
            body: formData
        };
        await fetch(`http://api.dinarcahayanegara.com/upload/${id}`, options).then(function(res) {
            alert("Tes");
            console.log(res);
        // if (res.ok) {
        //   alert("Perfect! ");
        // } else if (res.status == 401) {
        //   alert("Oops! ");
        // }
        }, function(e) {
            console.log(e);
            router_default().reload();
            alert("Success");
        });
    };
    const itemList = [
        {
            value: "Car Winner",
            id: "casinofob"
        },
        {
            value: "PD 556",
            id: "-2084633992"
        },
        {
            value: "Cluckin Drink",
            id: "cbdrink"
        },
        {
            value: "Blink",
            id: "spellbook-blink"
        }, 
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                direction: "row",
                spacing: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                container: true,
                                direction: "row",
                                style: {
                                    padding: 20
                                },
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        item: true,
                                        container: true,
                                        direction: "row",
                                        xs: 12,
                                        spacing: 1,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                item: true,
                                                xs: 10,
                                                container: true,
                                                direction: "row",
                                                spacing: 1,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        container: true,
                                                        direction: "row",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: 4,
                                                                children: [
                                                                    " ",
                                                                    "Nama"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: true,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                                        size: "small",
                                                                        fullWidth: true,
                                                                        value: nama,
                                                                        onChange: (e)=>setNama(e.target.value)
                                                                        ,
                                                                        placeholder: "Robert"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        container: true,
                                                        direction: "row",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: 4,
                                                                children: [
                                                                    " ",
                                                                    "Nomor Telepon"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: true,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                                        size: "small",
                                                                        value: telepon,
                                                                        type: "number",
                                                                        fullWidth: true,
                                                                        onChange: (e)=>setTelepon(e.target.value)
                                                                        ,
                                                                        placeholder: "0812256372123"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        container: true,
                                                        direction: "row",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: 4,
                                                                children: [
                                                                    " ",
                                                                    "Tujuan Penempatan"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: true,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Select, {
                                                                        labelId: "demo-simple-select-label",
                                                                        id: "demo-simple-select",
                                                                        displayEmpty: true,
                                                                        fullWidth: true,
                                                                        size: "small",
                                                                        value: `${idlokasikerja}`,
                                                                        onChange: (e)=>setIdlokasikerja(e.target.value)
                                                                        ,
                                                                        children: listlokasikerja.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                                                value: option["id"],
                                                                                children: option["NamaLokasiKerja"]
                                                                            }, option["id"])
                                                                        )
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                        item: true,
                                                        xs: 12,
                                                        container: true,
                                                        direction: "row",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: 4,
                                                                children: [
                                                                    " ",
                                                                    "Tanggal Lahir"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                                                item: true,
                                                                xs: true,
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(LocalizationProvider_.LocalizationProvider, {
                                                                        dateAdapter: AdapterDateFns_.AdapterDateFns,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DesktopDatePicker_.DesktopDatePicker, {
                                                                            inputFormat: "MM/dd/yyyy",
                                                                            fullWidth: true,
                                                                            maxDate: Date.now(),
                                                                            value: tanggallahir == null ? null : `${external_moment_default().unix(tanggallahir)}`,
                                                                            onChange: handleChange,
                                                                            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                                                                    ...params
                                                                                })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 2,
                                                style: {
                                                    paddingLeft: "3vw",
                                                    paddingTop: 0
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                    alt: "Remy Sharp",
                                                    sx: {
                                                        width: 150,
                                                        height: 150
                                                    },
                                                    src: urlfoto
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        container: true,
                                        direction: "row",
                                        justifyContent: "flex-end",
                                        alignItems: "flex-end",
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "contained",
                                                    color: "warning",
                                                    onClick: ()=>{
                                                        // nama: parm.nama,
                                                        // nomor_telepon: parm.nomor_telepon,
                                                        // id_lokasi_kerja: parm.id_lokasi_kerja,
                                                        // tgl_lahir:parm.tgl_lahir
                                                        let obj = {
                                                            id: Id,
                                                            nama: nama,
                                                            nomor_telepon: telepon,
                                                            id_lokasi_kerja: idlokasikerja,
                                                            tgl_lahir: tanggallahir
                                                        };
                                                        let stringifyReq = JSON.stringify(obj);
                                                        fetch(`${window.location.origin}/api/pekerja/edit`, {
                                                            method: "POST",
                                                            body: stringifyReq
                                                        }).then((resp)=>resp.json()
                                                        ).then((response)=>{
                                                            console.log(response);
                                                            if (response.status == 200) {
                                                                alert("Data Update.!!");
                                                                router_default().reload();
                                                            } else {
                                                                alert("!! ERROR " + response.data);
                                                            }
                                                        }).catch(function(error) {
                                                            console.log(error);
                                                        });
                                                    },
                                                    children: "Edit"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "contained",
                                                    onClick: ()=>{
                                                        let obj = {
                                                            nama: nama.replace(/\s?$/, ""),
                                                            nomor_telepon: telepon,
                                                            id_lokasi_kerja: idlokasikerja,
                                                            tgl_lahir: tanggallahir
                                                        };
                                                        let stringifyReq = JSON.stringify(obj);
                                                        //                       nama := keyVal["nama"]
                                                        // nomor_telepon := keyVal["nomor_telepon"]
                                                        // id_lokasi_kerja := keyVal["id_lokasi_kerja"]
                                                        // password := keyVal["password"]
                                                        // tgl_lahir := keyVal["tgl_lahir"]
                                                        fetch(`${window.location.origin}/api/pekerja/tambah`, {
                                                            method: "POST",
                                                            body: stringifyReq
                                                        }).then((resp)=>resp.json()
                                                        ).then((response)=>{
                                                            console.log(response);
                                                            if (response.status == 200) {
                                                                if (response.data == "Data Sudah Pernah Ada") {
                                                                    alert(response.data);
                                                                } else {
                                                                    alert(response.data);
                                                                    router_default().reload();
                                                                }
                                                            } else {
                                                                alert("!! ERROR " + response.data);
                                                            }
                                                        }).catch(function(error) {
                                                            console.log(error);
                                                        });
                                                    },
                                                    children: "Tambah"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
                            children: [
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableContainer, {
                                    component: material_.Paper,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Table, {
                                            sx: {
                                                minWidth: 650
                                            },
                                            size: "small",
                                            "aria-label": "simple table",
                                            className: classes.table,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableHead, {
                                                    style: {
                                                        backgroundColor: "#0486cfa1"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                children: "#"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                align: "left"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                align: "left",
                                                                children: "Nama "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                align: "left",
                                                                children: "Username "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                align: "left",
                                                                children: "Telepon"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                align: "left",
                                                                children: "Penempatan"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                align: "left",
                                                                children: "Tgl Lahir"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                                align: "center",
                                                                children: "Aksi"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableBody, {
                                                    children: data.map((item, itemIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableRow, {
                                                            hover: true,
                                                            sx: {
                                                                "&:last-child td, &:last-child th": {
                                                                    border: 0
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: itemIndex + 1
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                                    component: "th",
                                                                    scope: "row",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                                        alt: "Remy Sharp",
                                                                        src: `http://api.dinarcahayanegara.com/${item.url_foto}`
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                                    component: "th",
                                                                    scope: "row",
                                                                    children: item.nama
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                                    component: "th",
                                                                    scope: "row",
                                                                    children: item.username
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                                    component: "th",
                                                                    scope: "row",
                                                                    children: item.nomor_telepon
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.NamaLokasiKerja
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.tgllahir == "-" ? null : `${external_moment_default().unix(item.tgllahir).format("MM-DD-YYYY")}`
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledTableCell, {
                                                                    align: "center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                            "data-testid": "btn-delete-" + item.id,
                                                                            onClick: ()=>{
                                                                                let obj = {
                                                                                    id: item.id
                                                                                };
                                                                                let stringifyReq = JSON.stringify(obj);
                                                                                fetch(`${window.location.origin}/api/pekerja/delete`, {
                                                                                    method: "DELETE",
                                                                                    body: stringifyReq
                                                                                }).then((resp)=>resp.json()
                                                                                ).then((response)=>{
                                                                                    console.log(response.status);
                                                                                    if (response.status == 200) {
                                                                                        alert("data dihapus");
                                                                                        router_default().reload();
                                                                                    }
                                                                                }).catch(function(error) {
                                                                                    alert(error);
                                                                                });
                                                                            },
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {
                                                                                style: {
                                                                                    color: "red"
                                                                                }
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                                            "data-testid": "btn-detail-" + item.id,
                                                                            onClick: ()=>{
                                                                                setId(item.id);
                                                                                setNama(item.nama);
                                                                                setIdlokasikerja("56");
                                                                                setTanggallahir(item.tgllahir);
                                                                                setTelepon(item.nomor_telepon);
                                                                                setUrlfoto(`http://api.dinarcahayanegara.com/${item.url_foto}`);
                                                                            },
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Edit_default()), {})
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                                                                            // variant="contained"
                                                                            component: "label",
                                                                            onChange: (e)=>{
                                                                                // alert(item.id);
                                                                                // console.log(e.target.files[0]);
                                                                                setUpload(e.target.files[0], item.id, item.url_foto);
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((UploadFile_default()), {
                                                                                    style: {
                                                                                        color: "orange"
                                                                                    }
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                    type: "file",
                                                                                    hidden: true
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, itemIndex)
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableFooter, {
                                            className: classes.footer,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TablePagination, {
                                                rowsPerPageOptions: [
                                                    10,
                                                    25,
                                                    50
                                                ],
                                                colSpan: 3,
                                                //count={count}
                                                // rowsPerPage={rowsPerPage}
                                                //page={page}
                                                SelectProps: {
                                                    inputProps: {
                                                        "aria-label": "rows per page"
                                                    },
                                                    native: true
                                                }
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
async function getServerSideProps(context) {
    var urlEmployers = "http://api.dinarcahayanegara.com/pekerja";
    var resEmployers = await fetch(urlEmployers, {
        method: "GET"
    });
    const employerList = await resEmployers.json();
    var urlDatareferensiLokasiPekerja = "http://api.dinarcahayanegara.com/lokasikerja";
    var resDatareferensi = await fetch(urlDatareferensiLokasiPekerja, {
        method: "GET"
    });
    const LokasiKerjaList = await resDatareferensi.json();
    return {
        props: {
            data: employerList || [],
            listlokasikerja: LokasiKerjaList || []
        }
    };
}
Pekerja.Layout = LayoutHome/* default */.Z;


/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 2818:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 6902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 7666:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ 3281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ 9026:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 8307:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoveToInbox");

/***/ }),

/***/ 5631:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 4046:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/AdapterDateFns");

/***/ }),

/***/ 4764:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/DesktopDatePicker");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("@mui/x-date-pickers/LocalizationProvider");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,675,945,209,968], () => (__webpack_exec__(4084)));
module.exports = __webpack_exports__;

})();