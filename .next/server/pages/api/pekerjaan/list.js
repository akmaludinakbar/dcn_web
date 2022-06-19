"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/pekerjaan/list";
exports.ids = ["pages/api/pekerjaan/list"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/pekerjaan/list.js":
/*!*************************************!*\
  !*** ./pages/api/pekerjaan/list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let parm = JSON.parse(req.body);\n    let resp = {\n        status: 0\n    };\n    axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://localhost:8090\" + `/pekerjaan`, {\n        nama: parm.nama,\n        tanggal_pekerjaan: parm.tanggal_pekerjaan,\n        tempat_kerja: parm.tempat_kerja,\n        status: parm.status\n    }).then(function(response) {\n        if (response.status == 200) {\n            resp.status = 200;\n            resp.data = response.data;\n            res.json(JSON.stringify(resp));\n        } else {\n            resp.status = response.status;\n            res.json(JSON.stringify(resp));\n        }\n    }).catch(function(error) {\n        console.log(error);\n        resp.status = 999;\n        res.json(JSON.stringify(resp));\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGVrZXJqYWFuL2xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLGlFQUFNLE9BQWdCQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2xDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osR0FBRyxDQUFDSyxJQUFJO0lBQzlCLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7UUFBQ0MsTUFBTSxFQUFFLENBQUM7SUFBQyxDQUFDO0lBQ3hCUixpREFDTyxDQUFDVSx1QkFBb0IsSUFBSSxVQUFVLEdBQUcsQ0FBQztRQUMxQ0csSUFBSSxFQUFFVixJQUFJLENBQUNVLElBQUk7UUFDZkMsaUJBQWlCLEVBQUVYLElBQUksQ0FBQ1csaUJBQWlCO1FBQ3pDQyxZQUFZLEVBQUVaLElBQUksQ0FBQ1ksWUFBWTtRQUMvQlAsTUFBTSxFQUFFTCxJQUFJLENBQUNLLE1BQU07SUFDckIsQ0FBQyxFQUNBUSxJQUFJLENBQUMsUUFBUSxDQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixFQUFFLEVBQUVBLFFBQVEsQ0FBQ1QsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQzNCRCxJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO1lBQ2pCRCxJQUFJLENBQUNXLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJO1lBQ3pCaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDZixJQUFJLENBQUNnQixTQUFTLENBQUNiLElBQUk7UUFDOUIsQ0FBQyxNQUFNLENBQUM7WUFDTkEsSUFBSSxDQUFDQyxNQUFNLEdBQUdTLFFBQVEsQ0FBQ1QsTUFBTTtZQUM3Qk4sR0FBRyxDQUFDaUIsSUFBSSxDQUFDZixJQUFJLENBQUNnQixTQUFTLENBQUNiLElBQUk7UUFDOUIsQ0FBQztJQUNILENBQUMsRUFDQWMsS0FBSyxDQUFDLFFBQVEsQ0FBRUMsS0FBSyxFQUFFLENBQUM7UUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO1FBQ2pCZixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO1FBQ2pCTixHQUFHLENBQUNpQixJQUFJLENBQUNmLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQ2IsSUFBSTtJQUM5QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9wZWtlcmphYW4vbGlzdC5qcz81OTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBwYXJtID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gIGxldCByZXNwID0geyBzdGF0dXM6IDAgfTtcbiAgYXhpb3NcbiAgICAucG9zdChwcm9jZXNzLmVudi5CQVNFX1VSTCArIGAvcGVrZXJqYWFuYCwge1xuICAgICAgbmFtYTogcGFybS5uYW1hLFxuICAgICAgdGFuZ2dhbF9wZWtlcmphYW46IHBhcm0udGFuZ2dhbF9wZWtlcmphYW4sXG4gICAgICB0ZW1wYXRfa2VyamE6IHBhcm0udGVtcGF0X2tlcmphLFxuICAgICAgc3RhdHVzOiBwYXJtLnN0YXR1cyxcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgcmVzcC5zdGF0dXMgPSAyMDA7XG4gICAgICAgIHJlc3AuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHJlcy5qc29uKEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3Auc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICByZXMuanNvbihKU09OLnN0cmluZ2lmeShyZXNwKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXNwLnN0YXR1cyA9IDk5OTtcbiAgICAgIHJlcy5qc29uKEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJyZXMiLCJwYXJtIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInJlc3AiLCJzdGF0dXMiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwibmFtYSIsInRhbmdnYWxfcGVrZXJqYWFuIiwidGVtcGF0X2tlcmphIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImpzb24iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pekerjaan/list.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pekerjaan/list.js"));
module.exports = __webpack_exports__;

})();