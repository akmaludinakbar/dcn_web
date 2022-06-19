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
exports.id = "pages/api/lokasi/list";
exports.ids = ["pages/api/lokasi/list"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/lokasi/list.js":
/*!**********************************!*\
  !*** ./pages/api/lokasi/list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    //   let parm = JSON.parse(req.body);\n    let resp = {\n        status: 0\n    };\n    await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://localhost:8090\" + \"/lokasikerja\").then(function(response) {\n        if (response.status == 200) {\n            resp.status = 200;\n            resp.data = response.data;\n            res.json(JSON.stringify(resp));\n        } else {\n            resp.status = response.status;\n            res.json(JSON.stringify(resp));\n        }\n    }).catch(function(error) {\n        console.log(error);\n        resp.status = 999;\n        res.json(JSON.stringify(resp));\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9rYXNpL2xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLGlFQUFNLE9BQWdCQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2xDLEVBQXFDO0lBQ3JDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7UUFBQ0MsTUFBTSxFQUFFLENBQUM7SUFBQyxDQUFDO0lBQ3hCLEtBQUssQ0FBQ0osZ0RBQ0EsQ0FBQ00sdUJBQW9CLEdBQUcsQ0FBYyxlQUN6Q0csSUFBSSxDQUFDLFFBQVEsQ0FBRUMsUUFBUSxFQUFFLENBQUM7UUFDekIsRUFBRSxFQUFFQSxRQUFRLENBQUNOLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUMzQkQsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRztZQUNqQkQsSUFBSSxDQUFDUSxJQUFJLEdBQUdELFFBQVEsQ0FBQ0MsSUFBSTtZQUN6QlQsR0FBRyxDQUFDVSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDWCxJQUFJO1FBQzlCLENBQUMsTUFBTSxDQUFDO1lBQ05BLElBQUksQ0FBQ0MsTUFBTSxHQUFHTSxRQUFRLENBQUNOLE1BQU07WUFDN0JGLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsSUFBSTtRQUM5QixDQUFDO0lBQ0gsQ0FBQyxFQUNBWSxLQUFLLENBQUMsUUFBUSxDQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7UUFDakJiLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7UUFDakJGLEdBQUcsQ0FBQ1UsSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsSUFBSTtJQUM5QixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2FwaS9sb2thc2kvbGlzdC5qcz8wZWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vICAgbGV0IHBhcm0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgbGV0IHJlc3AgPSB7IHN0YXR1czogMCB9O1xuICBhd2FpdCBheGlvc1xuICAgIC5nZXQocHJvY2Vzcy5lbnYuQkFTRV9VUkwgKyBcIi9sb2thc2lrZXJqYVwiKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgcmVzcC5zdGF0dXMgPSAyMDA7XG4gICAgICAgIHJlc3AuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHJlcy5qc29uKEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3Auc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICByZXMuanNvbihKU09OLnN0cmluZ2lmeShyZXNwKSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXNwLnN0YXR1cyA9IDk5OTtcbiAgICAgIHJlcy5qc29uKEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJyZXEiLCJyZXMiLCJyZXNwIiwic3RhdHVzIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lokasi/list.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/lokasi/list.js"));
module.exports = __webpack_exports__;

})();