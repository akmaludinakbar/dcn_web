"use strict";
(() => {
var exports = {};
exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 9270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Absensi),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _comps_LayoutHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_x_date_pickers_DesktopDatePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4764);
/* harmony import */ var _mui_x_date_pickers_DesktopDatePicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_DesktopDatePicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5753);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4046);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_13__);














function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein
    };
}
const StyledTableCell = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell)(({ theme  })=>({
        [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__.tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white
        },
        [`&.${_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__.tableCellClasses.body}`]: {
            fontSize: 14
        }
    })
);
const StyledTableRow = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow)(({ theme  })=>({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0
        }
    })
);
const rows = [
    createData("Frozen yoghurt", 159, 6, 24),
    createData("Ice cream sandwich", 237, 9, 37),
    createData("Eclair", 262, 16, 24),
    createData("Cupcake", 305, 3.7, 67),
    createData("Gingerbread", 356, 16, 49), 
];
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)((theme)=>({
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
function Absensi(props) {
    const { listlokasikerja , listnamapegawai  } = props;
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.data);
    const { 0: nama , 1: setNama  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: tanggalmasuk , 1: setTanggalMasuk  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: lokasikerja , 1: setLokasiKerja  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: tanggalkeluar , 1: setTanggalKeluar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const classes = useStyles();
    const handleTanggalMasuk = (newValue)=>{
        setTanggalMasuk((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(newValue, "yyyy-MM-dd"));
    };
    const handleTanggalKeluar = (newValue)=>{
        setTanggalKeluar((0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(newValue, "yyyy-MM-dd"));
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                direction: "row",
                spacing: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionSummary, {
                                        expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                                        "aria-controls": "panel1a-content",
                                        id: "panel1a-header",
                                        style: {
                                            backgroundColor: "#0486cfa1"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            children: "Filters"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionDetails, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                            container: true,
                                            direction: "row",
                                            style: {
                                                padding: 20
                                            },
                                            spacing: 1,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    container: true,
                                                    direction: "row",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 4,
                                                            children: [
                                                                " ",
                                                                "Nama"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 5,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                                                    labelId: "demo-simple-select-label-2",
                                                                    id: "demo-simple-select-2",
                                                                    displayEmpty: true,
                                                                    fullWidth: true,
                                                                    size: "small",
                                                                    value: `${nama}`,
                                                                    onChange: (e)=>setNama(e.target.value)
                                                                    ,
                                                                    children: listnamapegawai && listnamapegawai.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                            value: option["nama"],
                                                                            children: option["nama"]
                                                                        }, option["nama"])
                                                                    )
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    container: true,
                                                    direction: "row",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 4,
                                                            children: [
                                                                " ",
                                                                "Tempat Kerja"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 5,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                                                    labelId: "demo-simple-select-label",
                                                                    id: "demo-simple-select",
                                                                    displayEmpty: true,
                                                                    fullWidth: true,
                                                                    size: "small",
                                                                    value: `${lokasikerja}`,
                                                                    onChange: (e)=>setLokasiKerja(e.target.value)
                                                                    ,
                                                                    children: listlokasikerja && listlokasikerja.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                                                                            value: option["NamaLokasiKerja"],
                                                                            children: option["NamaLokasiKerja"]
                                                                        }, option["NamaLokasiKerja"])
                                                                    )
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    container: true,
                                                    direction: "row",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 4,
                                                            children: [
                                                                " ",
                                                                "Tanggal Masuk"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 5,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_12__.LocalizationProvider, {
                                                                    dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_13__.AdapterDateFns,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DesktopDatePicker__WEBPACK_IMPORTED_MODULE_11__.DesktopDatePicker, {
                                                                        inputFormat: "MM/dd/yyyy",
                                                                        maxDate: Date.now(),
                                                                        fullWidth: true,
                                                                        value: tanggalmasuk,
                                                                        onChange: handleTanggalMasuk,
                                                                        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                                                                ...params
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    container: true,
                                                    direction: "row",
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 4,
                                                            children: [
                                                                " ",
                                                                "Tanggal Keluar"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            xs: 5,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_12__.LocalizationProvider, {
                                                                    dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_13__.AdapterDateFns,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_DesktopDatePicker__WEBPACK_IMPORTED_MODULE_11__.DesktopDatePicker, {
                                                                        inputFormat: "MM/dd/yyyy",
                                                                        fullWidth: true,
                                                                        maxDate: Date.now(),
                                                                        value: tanggalkeluar,
                                                                        onChange: handleTanggalKeluar,
                                                                        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                                                                ...params
                                                                            })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                    item: true,
                                                    xs: 12,
                                                    container: true,
                                                    direction: "row",
                                                    justifyContent: "flex-end",
                                                    alignItems: "flex-end",
                                                    spacing: 2,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                variant: "contained",
                                                                color: "warning",
                                                                onClick: ()=>{
                                                                    setNama(null);
                                                                    setTanggalKeluar(null);
                                                                    setTanggalMasuk(null);
                                                                    setLokasiKerja(null);
                                                                    let obj = {
                                                                        nama: "",
                                                                        tanggal_masuk: "",
                                                                        tanggal_keluar: "",
                                                                        tempat_kerja: ""
                                                                    };
                                                                    let stringifyReq = JSON.stringify(obj);
                                                                    fetch(`${window.location.origin}/api/pekerja/list`, {
                                                                        method: "POST",
                                                                        body: stringifyReq
                                                                    }).then((resp)=>resp.json()
                                                                    ).then((response)=>{
                                                                        if (response.status == 200) {
                                                                            setData(response.data);
                                                                        } else {
                                                                            alert("!! ERROR " + response.data);
                                                                        }
                                                                    }).catch(function(error) {
                                                                        console.log(error);
                                                                    });
                                                                },
                                                                children: "Reset"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                            item: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                variant: "contained",
                                                                onClick: ()=>{
                                                                    let obj = {
                                                                        nama: nama,
                                                                        tanggal_masuk: tanggalmasuk,
                                                                        tanggal_keluar: tanggalkeluar,
                                                                        tempat_kerja: lokasikerja
                                                                    };
                                                                    let stringifyReq = JSON.stringify(obj);
                                                                    fetch(`${window.location.origin}/api/pekerja/list`, {
                                                                        method: "POST",
                                                                        body: stringifyReq
                                                                    }).then((resp)=>resp.json()
                                                                    ).then((response)=>{
                                                                        if (response.status == 200) {
                                                                            setData(response.data);
                                                                        } else {
                                                                            alert("!! ERROR " + response.data);
                                                                        }
                                                                    }).catch(function(error) {
                                                                        console.log(error);
                                                                    });
                                                                },
                                                                children: "Filter"
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
                            children: [
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableContainer, {
                                    component: _mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {
                                            sx: {
                                                minWidth: 650
                                            },
                                            size: "small",
                                            "aria-label": "simple table",
                                            className: classes.table,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, {
                                                    style: {
                                                        backgroundColor: "#0486cfa1"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                children: "#"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Nama"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Tempat Kerja"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Jam Masuk"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Jam Keluar"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Foto Masuk"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Foto Keluar"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Keterangan"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {
                                                    children: data && data.map((item, itemIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTableRow, {
                                                            hover: true,
                                                            sx: {
                                                                "&:last-child td, &:last-child th": {
                                                                    border: 0
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: itemIndex + 1
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    component: "th",
                                                                    scope: "row",
                                                                    children: item.nama
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.lokasi
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.jam_masuk
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.jam_keluar
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.url_foto_masuk == "" ? "" : `http://localhost:64045/${item.url_foto_masuk}`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.url_foto_keluar == "" ? "" : `http://localhost:64045/${item.url_foto_keluar}`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.keterangan
                                                                })
                                                            ]
                                                        }, itemIndex)
                                                    )
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableFooter, {
                                            className: classes.footer,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TablePagination, {
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
    var urlEmployers = "https://api.dinarcahayanegara.com" + "/absensi";
    var resEmployers = await fetch(urlEmployers, {
        method: "POST"
    });
    const employerList = await resEmployers.json();
    var urlListLokasi = "https://api.dinarcahayanegara.com" + "/lokasikerja";
    var resListLokasi = await fetch(urlListLokasi, {
        method: "GET"
    });
    const Listlokasikerja = await resListLokasi.json();
    var urlListPekerja = "https://api.dinarcahayanegara.com" + "/pekerja";
    var resListPekerja = await fetch(urlListPekerja, {
        method: "GET"
    });
    const listnamapegawai = await resListPekerja.json();
    return {
        props: {
            data: employerList || [],
            listlokasikerja: Listlokasikerja || [],
            listnamapegawai: listnamapegawai || []
        }
    };
}
Absensi.Layout = _comps_LayoutHome__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z;


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

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

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

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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
var __webpack_exports__ = __webpack_require__.X(0, [190,675,945,209,968], () => (__webpack_exec__(9270)));
module.exports = __webpack_exports__;

})();