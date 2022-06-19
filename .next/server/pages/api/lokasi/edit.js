"use strict";
(() => {
var exports = {};
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let parm = JSON.parse(req.body);
    let resp = {
        status: 0
    };
    axios__WEBPACK_IMPORTED_MODULE_0___default().put(//process.env.USER_LOGIN_PESERTA +
    "api.dinarcahayanegara.com" + `/lokasikerja/${parm.id}`, {
        lokasikerja: parm.lokasikerja,
        kordinatx: parm.kordinatx,
        kordinaty: parm.kordinaty
    }).then(function(response) {
        if (response.status == 200) {
            resp.status = 200;
            resp.data = response.data;
            res.json(JSON.stringify(resp));
        } else {
            resp.status = response.status;
            res.json(JSON.stringify(resp));
        }
    }).catch(function(error) {
        resp.status = error.response.status;
        res.json(JSON.stringify(resp));
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(95));
module.exports = __webpack_exports__;

})();