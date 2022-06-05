"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ comps_LayoutHome)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./comps/Footer.js
var Footer = __webpack_require__(2073);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/ChevronLeft"
var ChevronLeft_ = __webpack_require__(6959);
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);
// EXTERNAL MODULE: external "@mui/icons-material/ChevronRight"
var ChevronRight_ = __webpack_require__(2818);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/icons-material/MoveToInbox"
var MoveToInbox_ = __webpack_require__(8307);
var MoveToInbox_default = /*#__PURE__*/__webpack_require__.n(MoveToInbox_);
// EXTERNAL MODULE: external "@mui/icons-material/Mail"
var Mail_ = __webpack_require__(9026);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./comps/NavbarHome.js






















const drawerWidth = 240;
const Main = (0,styles_.styled)("main", {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: `-${drawerWidth}px`,
        ...open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }),
            marginLeft: 0
        }
    })
);
const AppBar = (0,styles_.styled)((AppBar_default()), {
    shouldForwardProp: (prop)=>prop !== "open"
})(({ theme , open  })=>({
        transition: theme.transitions.create([
            "margin",
            "width"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create([
                "margin",
                "width"
            ], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    })
);
const DrawerHeader = (0,styles_.styled)("div")(({ theme  })=>({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    })
);
let url = [
    {
        path: "/home",
        name: "Dashboard"
    },
    {
        path: "/home/Pekerja",
        name: "Pekerja"
    },
    {
        path: "/home/Lokasi",
        name: "Tambah Lokasi"
    },
    {
        path: "/home/Pekerjaan",
        name: "Tambah Pekerjaan"
    }, 
];
function NavbarHome({ children  }) {
    const theme = (0,styles_.useTheme)();
    const [open, setOpen] = external_react_.useState(false);
    const [tittle, settittle] = external_react_.useState("Dashboard");
    const { asPath , pathname  } = (0,router_.useRouter)();
    const handleDrawerOpen = ()=>{
        setOpen(true);
    };
    const handleDrawerClose = ()=>{
        setOpen(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AppBar, {
                position: "fixed",
                open: open,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerOpen,
                            edge: "start",
                            sx: {
                                mr: 2,
                                ...open && {
                                    display: "none"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            noWrap: true,
                            component: "div",
                            children: tittle
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                sx: {
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box"
                    }
                },
                variant: "persistent",
                anchor: "left",
                open: open,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DrawerHeader, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            onClick: handleDrawerClose,
                            children: theme.direction === "ltr" ? /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((ChevronRight_default()), {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                        children: url.map((text, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                                button: true,
                                onClick: (e)=>{
                                    settittle(text.name);
                                    router_default().push(text.path);
                                },
                                style: text.path != asPath ? {} : {
                                    backgroundColor: text.path == asPath ? "#d8d8d8" : ""
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                        children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: text.name
                                    })
                                ]
                            }, text.name)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Main, {
                open: open,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DrawerHeader, {}),
                    children
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./comps/NavbarMobile.js
var NavbarMobile = __webpack_require__(4209);
;// CONCATENATED MODULE: ./comps/LayoutHome.js






const LayoutHome = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(NavbarHome, {
        children: children
    }));
};
/* harmony default export */ const comps_LayoutHome = (LayoutHome);


/***/ })

};
;