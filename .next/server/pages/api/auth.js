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
exports.id = "pages/api/auth";
exports.ids = ["pages/api/auth"];
exports.modules = {

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ "(api)/./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);\nnode_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { token  } = req.body;\n    let resp = {\n        status: false\n    };\n    const bearer = `Bearer ${token}`;\n    var url = \"https://api.dinarcahayanegara.com\" + \"/checksession\";\n    const result = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, {\n        method: \"POST\",\n        headers: {\n            Authorization: bearer\n        }\n    });\n    const data = await result;\n    resp.status = data.status == 200 ? true : false;\n    // console.log(data);\n    res.json(resp);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QjtBQUU5QixpRUFBTSxPQUFnQkMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDMUIsR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBQztRQUFDQyxNQUFNLEVBQUUsS0FBSztJQUFDLENBQUM7SUFDNUIsS0FBSyxDQUFDQyxNQUFNLElBQUksT0FBTyxFQUFFSixLQUFLO0lBQzlCLEdBQUcsQ0FBQ0ssR0FBRyxHQUFHQyxtQ0FBb0IsR0FBRyxDQUFlO0lBQ2hELEtBQUssQ0FBQ0csTUFBTSxHQUFHLEtBQUssQ0FBQ1osc0RBQUssQ0FBQ1EsR0FBRyxFQUFFLENBQUM7UUFDL0JLLE1BQU0sRUFBRSxDQUFNO1FBQ2RDLE9BQU8sRUFBRSxDQUFDO1lBQUNDLGFBQWEsRUFBRVIsTUFBTTtRQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQ1MsSUFBSSxHQUFHLEtBQUssQ0FBQ0osTUFBTTtJQUN6QlAsSUFBSSxDQUFDQyxNQUFNLEdBQUdVLElBQUksQ0FBQ1YsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSztJQUMvQyxFQUFxQjtJQUNyQkosR0FBRyxDQUFDZSxJQUFJLENBQUNaLElBQUk7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vcGFnZXMvYXBpL2F1dGguanM/NWFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHJlcS5ib2R5O1xuICBsZXQgcmVzcCA9IHsgc3RhdHVzOiBmYWxzZSB9O1xuICBjb25zdCBiZWFyZXIgPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgdmFyIHVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMICsgXCIvY2hlY2tzZXNzaW9uXCI7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBiZWFyZXIgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdDtcbiAgcmVzcC5zdGF0dXMgPSBkYXRhLnN0YXR1cyA9PSAyMDAgPyB0cnVlIDogZmFsc2U7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXMuanNvbihyZXNwKTtcbn07XG4iXSwibmFtZXMiOlsiZmV0Y2giLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImJvZHkiLCJyZXNwIiwic3RhdHVzIiwiYmVhcmVyIiwidXJsIiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwicmVzdWx0IiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth.js"));
module.exports = __webpack_exports__;

})();