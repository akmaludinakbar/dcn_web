"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ cookie)
});

;// CONCATENATED MODULE: external "cookie-cutter"
const external_cookie_cutter_namespaceObject = require("cookie-cutter");
var external_cookie_cutter_default = /*#__PURE__*/__webpack_require__.n(external_cookie_cutter_namespaceObject);
;// CONCATENATED MODULE: ./comps/helpers/cookie.js

const cookie = {
    get: (key)=>external_cookie_cutter_default().get(key)
    ,
    set: (key, value, options)=>external_cookie_cutter_default().set(key, value, {
            path: '/',
            ...options
        })
};



/***/ }),

/***/ 7470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./comps/helpers/cookie.js + 1 modules
var cookie = __webpack_require__(2120);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./comps/loading.js




const useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            margin: "0 auto",
            top: "40%"
        },
        content: {
            height: "150px",
            width: "100%"
        },
        text: {
            padding: "20px",
            fontFamily: "Montserrat"
        }
    })
);
function Loading() {
    const classes = useStyles();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.content,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.root,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {
                    color: "secondary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.text,
                    children: "Sedang Memuat . . ."
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./comps/Unauthorize.js



const Unauthorize_useStyles = (0,styles_.makeStyles)((theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            top: "40%"
        },
        content: {
            height: "600px",
            width: "100%"
        },
        text: {
            padding: "20px"
        },
        unauthorized: {
            fontSize: "32px",
            fontWeight: "bold"
        }
    })
);
function Unauthorized() {
    const classes = Unauthorize_useStyles();
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.content,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.root,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.unauthorized,
                    children: "401"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.text,
                    children: "Unauthorized"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps , router  }) {
    const Layout = Component.Layout || EmptyLayout;
    const [isAuthenticated, setIsAuthenticated] = external_react_default().useState(router.pathname.includes("home") ? false : true);
    const [isLoading, setIsLoading] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        if (router.pathname.includes("home")) {
            checkToken();
        }
    }, []);
    const checkToken = async ()=>{
        setIsLoading(true);
        let url = `${window.location.origin}/api/auth`;
        // token: cookie.get("token"),
        let data = {
            token: cookie/* cookie.get */.p.get("token")
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        try {
            let json = await res.json();
            setIsAuthenticated(json.status);
            setIsLoading(false);
        } catch (e) {
            setIsAuthenticated(false);
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(Loading, {}));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: isAuthenticated ? /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Unauthorized, {})
    }));
}
const EmptyLayout = ({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    })
;
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 9484:
/***/ ((module) => {

module.exports = require("@mui/styles");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7470));
module.exports = __webpack_exports__;

})();