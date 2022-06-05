"use strict";
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LayoutProduct)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./comps/Footer.js
var Footer = __webpack_require__(2073);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__(4845);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowUp"
var KeyboardArrowUp_ = __webpack_require__(9881);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
;// CONCATENATED MODULE: ./comps/navbarproduct/Navbar.js








const Navbar = ()=>{
    const [anchorEl, setAnchorEl] = external_react_.useState(null);
    const open = Boolean(anchorEl);
    const router = (0,router_.useRouter)();
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const scrollToTop = (id, h)=>{
        const blue = document.getElementById(id);
        let position = blue.getBoundingClientRect();
        // scrolls to 20px above element
        window.scrollTo(position.left, position.top + window.scrollY - 90, {
            top: 400,
            behavior: "smooth"
        });
    // let i = h || 0;
    // if (i <= position.top + window.scrollY - 90) {
    //   setTimeout(() => {
    //     window.scrollTo(position.left, i);
    //     scrollToTop(id, i + 40);
    //   }, 1);
    // }
    // document.getElementById(id).scrollIntoView(true, {
    //   block: "start",
    //   inline: "end",
    //   behavior: "smooth",
    // });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            spacing: 1,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/DCN.svg",
                            alt: "site logo",
                            width: 48,
                            height: 35
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    xs: 10,
                    item: true,
                    container: true,
                    direction: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "subtitle2",
                                children: "DINAR CAHAYA NEGARA"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            width: 270,
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    variant: "caption",
                                    align: "left",
                                    style: {
                                        wordWrap: "break-word",
                                        display: "block",
                                        lineHeight: 1
                                    },
                                    children: "Integrated Corporate Solution Focus on developing your coMpany, leave the rest to us"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    xs: 1,
                    item: true,
                    container: true,
                    direction: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        item: true,
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                onClick: ()=>{
                                    router.push("/");
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Home"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const navbarproduct_Navbar = (Navbar);

// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./comps/navbarproduct/NavbarMobile.js







const NavbarMobile = ()=>{
    const [anchorEl, setAnchorEl] = external_react_.useState(null);
    const open = Boolean(anchorEl);
    const router = (0,router_.useRouter)();
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            spacing: 1,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    item: true,
                    xs: 2,
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/DCN.svg",
                            alt: "site logo",
                            width: 48,
                            height: 35
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    xs: 8,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "subtitle2",
                        children: "DINAR CAHAYA NEGARA"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    xs: true,
                    item: true,
                    container: true,
                    direction: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            id: "basic-button",
                            "aria-controls": open ? "basic-menu" : undefined,
                            "aria-haspopup": "true",
                            "aria-expanded": open ? "true" : undefined,
                            onClick: handleClick
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Menu, {
                            id: "basic-menu",
                            anchorEl: anchorEl,
                            open: open,
                            onClose: handleClose,
                            PaperProps: {
                                className: (Home_module_default()).navmobile,
                                style: {
                                    width: "100vw",
                                    left: "0px",
                                    boxShadow: "none",
                                    marginTop: "15px",
                                    textAlign: "center",
                                    maxWidth: "none",
                                    transform: "none"
                                }
                            },
                            MenuListProps: {
                                style: {
                                    color: "#6B7580",
                                    maxWidth: "100vw",
                                    boxShadow: "none",
                                    padding: 0
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                onClick: ()=>{
                                    router.push("/");
                                },
                                style: {
                                    display: "block"
                                },
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Backdrop, {
                            sx: {
                                color: "#fff",
                                zIndex: (theme)=>theme.zIndex.drawer + 1
                            },
                            open: open,
                            onClick: handleClose
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const navbarproduct_NavbarMobile = (NavbarMobile);

;// CONCATENATED MODULE: ./comps/LayoutProduct.js






const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Hidden, {
                smDown: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(navbarproduct_Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Hidden, {
                smUp: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(navbarproduct_NavbarMobile, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    }));
};
/* harmony default export */ const LayoutProduct = (Layout);


/***/ }),

/***/ 2388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);



const menu = ({ judul ="" , direction , desc ="" , items =[
    {
        product: ""
    }
] , urlfoto ="" ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        item: true,
        container: true,
        direction: direction,
        justifyContent: "center",
        alignItems: "center",
        style: {
            padding: 50
        },
        spacing: 5,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 12,
                md: 4,
                children: [
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
                        style: {
                            width: 350,
                            height: 200
                        },
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                src: `${urlfoto}`,
                                alt: "site logo",
                                width: 350,
                                height: 200
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 6,
                container: true,
                direction: "column",
                spacing: 2,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "h5",
                            style: {
                                color: "black",
                                fontWeight: "bold"
                            },
                            children: judul
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            variant: "body1",
                            children: desc
                        })
                    }),
                    items.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            container: true,
                            direction: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    children: items.length == 1 ? "" : "-"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    item: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        children: item.product
                                    })
                                })
                            ]
                        })
                    )
                ]
            })
        ]
    }));
};


/***/ })

};
;