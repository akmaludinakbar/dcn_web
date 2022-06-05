"use strict";
(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 6859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lokasi),
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__);










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
function Lokasi(props) {
    const { data  } = props;
    const { 0: Id , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: namaLokasi , 1: setnamaLokasi  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: kordinatX , 1: setkordinatX  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: kordinatY , 1: setkordinatY  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const classes = useStyles();
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
                                                    "Nama Lokasi Kerja"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 5,
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                                        size: "small",
                                                        fullWidth: true,
                                                        value: namaLokasi,
                                                        onChange: (e)=>setnamaLokasi(e.target.value)
                                                        ,
                                                        placeholder: "Bank Mandiri Batang"
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
                                                    "Titik Kordinat X"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 5,
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                                        size: "small",
                                                        value: kordinatX,
                                                        type: "number",
                                                        fullWidth: true,
                                                        onChange: (e)=>setkordinatX(e.target.value)
                                                        ,
                                                        placeholder: "-6.9054885671866995"
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
                                                    "Titik Kordinat Y"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                xs: 5,
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                                                        size: "small",
                                                        fullWidth: true,
                                                        type: "number",
                                                        onChange: (e)=>setkordinatY(e.target.value)
                                                        ,
                                                        value: kordinatY,
                                                        placeholder: "109.7180930661242"
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
                                                        let obj = {
                                                            id: Id,
                                                            lokasikerja: namaLokasi,
                                                            kordinatx: kordinatX,
                                                            kordinaty: kordinatY
                                                        };
                                                        let stringifyReq = JSON.stringify(obj);
                                                        fetch(`${window.location.origin}/api/lokasi/edit`, {
                                                            method: "POST",
                                                            body: stringifyReq
                                                        }).then((resp)=>resp.json()
                                                        ).then((response)=>{
                                                            console.log(response);
                                                            if (response.status == 200) {
                                                                alert("Data Update.!!");
                                                                next_router__WEBPACK_IMPORTED_MODULE_8___default().reload();
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                                                item: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                    variant: "contained",
                                                    onClick: ()=>{
                                                        let obj = {
                                                            lokasikerja: namaLokasi,
                                                            kordinatx: kordinatX,
                                                            kordinaty: kordinatY
                                                        };
                                                        let stringifyReq = JSON.stringify(obj);
                                                        fetch(`${window.location.origin}/api/lokasi/tambah`, {
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
                                                                    next_router__WEBPACK_IMPORTED_MODULE_8___default().reload();
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
                                                                children: "Nama Lokasi"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Kordinat x"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "left",
                                                                children: "Kordinat y"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {
                                                                align: "center",
                                                                children: "Aksi"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {
                                                    children: data.map((item, itemIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTableRow, {
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
                                                                    children: item.NamaLokasiKerja
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.KordinatY
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledTableCell, {
                                                                    align: "left",
                                                                    children: item.KordinatX
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTableCell, {
                                                                    align: "center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                            "data-testid": "btn-delete-" + item.id,
                                                                            onClick: ()=>{
                                                                                let obj = {
                                                                                    id: item.id
                                                                                };
                                                                                let stringifyReq = JSON.stringify(obj);
                                                                                fetch(`${window.location.origin}/api/lokasi/delete`, {
                                                                                    method: "DELETE",
                                                                                    body: stringifyReq
                                                                                }).then((resp)=>resp.json()
                                                                                ).then((response)=>{
                                                                                    console.log(response.status);
                                                                                    if (response.status == 200) {
                                                                                        alert("data dihapus");
                                                                                        next_router__WEBPACK_IMPORTED_MODULE_8___default().reload();
                                                                                    }
                                                                                }).catch(function(error) {
                                                                                    alert(error);
                                                                                });
                                                                            },
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                style: {
                                                                                    color: "red"
                                                                                }
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                                            "data-testid": "btn-detail-" + item.id,
                                                                            onClick: ()=>{
                                                                                setId(item.id);
                                                                                setnamaLokasi(item.NamaLokasiKerja);
                                                                                setkordinatX(item.KordinatX);
                                                                                setkordinatY(item.KordinatY);
                                                                            },
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                                                        })
                                                                    ]
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
    var urlEmployers = "http://localhost:8090/lokasikerja";
    var resEmployers = await fetch(urlEmployers, {
        method: "GET"
    });
    const employerList = await resEmployers.json();
    return {
        props: {
            data: employerList || []
        }
    };
}
Lokasi.Layout = _comps_LayoutHome__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z;


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
var __webpack_exports__ = __webpack_require__.X(0, [190,675,945,209,968], () => (__webpack_exec__(6859)));
module.exports = __webpack_exports__;

})();