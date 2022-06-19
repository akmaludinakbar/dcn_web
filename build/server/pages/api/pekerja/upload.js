"use strict";
(() => {
var exports = {};
exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8941:
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const formidable = __webpack_require__(2616), fs = __webpack_require__(7147), path = __webpack_require__(1017), FormData = __webpack_require__(8941);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res1)=>{
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files)=>{
        const formData = new FormData();
        console.log(fs.createReadStream(path.join(__dirname, files.file.originalFilename)));
        formData.append("file", fs.createReadStream(path.join(__dirname, files.file.originalFilename)));
        const options = {
            method: "POST",
            body: formData
        };
        await fetch("https://api.dinarcahayanegara.com" + "/upload", options).then(function(res) {
            console.log("kesinsi");
            console.log(res);
        // if (res.ok) {
        //   alert("Perfect! ");
        // } else if (res.status == 401) {
        //   alert("Oops! ");
        // }
        }, function(e) {
            console.log(e);
        });
    });
});
const config = {
    api: {
        bodyParser: false
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7443));
module.exports = __webpack_exports__;

})();