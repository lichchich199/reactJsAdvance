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
exports.id = "pages/api/location";
exports.ids = ["pages/api/location"];
exports.modules = {

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/location.js":
/*!*******************************!*\
  !*** ./pages/api/location.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default()(req, res, {\n        // Options\n        methods: [\n            \"GET\"\n        ],\n        origin: \"*\",\n        optionsSuccessStatus: 200\n    });\n    //Find the absolute path of the json directory\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"/public/static\");\n    //Read the json data file data.json\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/location.json\", \"utf8\");\n    //Return the content of the data file in json format\n    res.status(200).json(fileContents);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9jYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QjtBQUNZO0FBQ0Q7QUFFcEIsZUFBZUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUgsa0RBQVFBLENBQUNFLEtBQUtDLEtBQUs7UUFDckIsVUFBVTtRQUNWQyxTQUFTO1lBQUM7U0FBTTtRQUNoQkMsUUFBUTtRQUNSQyxzQkFBc0I7SUFDMUI7SUFDRiw4Q0FBOEM7SUFDOUMsTUFBTUMsZ0JBQWdCVixnREFBUyxDQUFDWSxRQUFRQyxHQUFHLElBQUk7SUFDL0MsbUNBQW1DO0lBQ25DLE1BQU1DLGVBQWUsTUFBTVosaURBQVcsQ0FBQ1EsZ0JBQWdCLGtCQUFrQjtJQUN6RSxvREFBb0Q7SUFDcERKLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9jYXRpb24uanM/YzU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XHJcbmltcG9ydCBOZXh0Q29ycyBmcm9tICduZXh0anMtY29ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBhd2FpdCBOZXh0Q29ycyhyZXEsIHJlcywge1xyXG4gICAgICAgIC8vIE9wdGlvbnNcclxuICAgICAgICBtZXRob2RzOiBbJ0dFVCddLFxyXG4gICAgICAgIG9yaWdpbjogJyonLFxyXG4gICAgICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDAsXHJcbiAgICB9KTtcclxuICAvL0ZpbmQgdGhlIGFic29sdXRlIHBhdGggb2YgdGhlIGpzb24gZGlyZWN0b3J5XHJcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnL3B1YmxpYy9zdGF0aWMnKTtcclxuICAvL1JlYWQgdGhlIGpzb24gZGF0YSBmaWxlIGRhdGEuanNvblxyXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IGZzLnJlYWRGaWxlKGpzb25EaXJlY3RvcnkgKyAnL2xvY2F0aW9uLmpzb24nLCAndXRmOCcpO1xyXG4gIC8vUmV0dXJuIHRoZSBjb250ZW50IG9mIHRoZSBkYXRhIGZpbGUgaW4ganNvbiBmb3JtYXRcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihmaWxlQ29udGVudHMpO1xyXG59Il0sIm5hbWVzIjpbInBhdGgiLCJwcm9taXNlcyIsImZzIiwiTmV4dENvcnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kcyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwianNvbkRpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/location.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/location.js"));
module.exports = __webpack_exports__;

})();