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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default()(req, res, {\n        // Options\n        methods: [\n            \"GET\"\n        ],\n        origin: \"*\",\n        optionsSuccessStatus: 200\n    });\n    //Find the absolute path of the json directory\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"/public/static\");\n    //Read the json data file data.json\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/location.json\", \"utf8\");\n    //Return the content of the data file in json format\n    var data = req.body;\n    if (data && data.postalCode) {\n        var arrContent = JSON.parse(fileContents);\n        var result = arrContent.filter((obj)=>{\n            var postalCodeMin = parseInt(obj.postalCodeMin);\n            var postalCodeMax = parseInt(obj.postalCodeMax);\n            var postalCode = parseInt(data.postalCode);\n            return postalCode >= postalCodeMin && postalCode <= postalCodeMax;\n        });\n        res.status(200).json(JSON.stringify(result));\n    } else {\n        res.status(200).json(fileContents);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9jYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QjtBQUNZO0FBQ0Q7QUFFcEIsZUFBZUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUgsa0RBQVFBLENBQUNFLEtBQUtDLEtBQUs7UUFDckIsVUFBVTtRQUNWQyxTQUFTO1lBQUM7U0FBTTtRQUNoQkMsUUFBUTtRQUNSQyxzQkFBc0I7SUFDeEI7SUFFQSw4Q0FBOEM7SUFDOUMsTUFBTUMsZ0JBQWdCVixnREFBUyxDQUFDWSxRQUFRQyxHQUFHLElBQUk7SUFDL0MsbUNBQW1DO0lBQ25DLE1BQU1DLGVBQWUsTUFBTVosaURBQVcsQ0FBQ1EsZ0JBQWdCLGtCQUFrQjtJQUN6RSxvREFBb0Q7SUFDdEQsSUFBSU0sT0FBT1gsSUFBSVksSUFBSTtJQUNuQixJQUFHRCxRQUFRQSxLQUFLRSxVQUFVLEVBQUU7UUFDeEIsSUFBSUMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDUDtRQUM1QixJQUFJUSxTQUFTSCxXQUFXSSxNQUFNLENBQUNDLENBQUFBLE1BQU87WUFDbEMsSUFBSUMsZ0JBQWdCQyxTQUFTRixJQUFJQyxhQUFhO1lBQzlDLElBQUlFLGdCQUFnQkQsU0FBU0YsSUFBSUcsYUFBYTtZQUM5QyxJQUFJVCxhQUFhUSxTQUFTVixLQUFLRSxVQUFVO1lBQ3pDLE9BQU9BLGNBQWNPLGlCQUFpQlAsY0FBY1M7UUFDeEQ7UUFDRnJCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVCxLQUFLVSxTQUFTLENBQUNSO0lBQ3hDLE9BQU87UUFDTGhCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDZjtJQUV2QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9sb2NhdGlvbi5qcz9jNTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IE5leHRDb3JzIGZyb20gJ25leHRqcy1jb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGF3YWl0IE5leHRDb3JzKHJlcSwgcmVzLCB7XHJcbiAgICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICAgIG1ldGhvZHM6IFsnR0VUJ10sXHJcbiAgICAgICAgb3JpZ2luOiAnKicsXHJcbiAgICAgICAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCxcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAvL0ZpbmQgdGhlIGFic29sdXRlIHBhdGggb2YgdGhlIGpzb24gZGlyZWN0b3J5XHJcbiAgICAgIGNvbnN0IGpzb25EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJy9wdWJsaWMvc3RhdGljJyk7XHJcbiAgICAgIC8vUmVhZCB0aGUganNvbiBkYXRhIGZpbGUgZGF0YS5qc29uXHJcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IGZzLnJlYWRGaWxlKGpzb25EaXJlY3RvcnkgKyAnL2xvY2F0aW9uLmpzb24nLCAndXRmOCcpO1xyXG4gICAgICAvL1JldHVybiB0aGUgY29udGVudCBvZiB0aGUgZGF0YSBmaWxlIGluIGpzb24gZm9ybWF0XHJcbiAgICB2YXIgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgaWYoZGF0YSAmJiBkYXRhLnBvc3RhbENvZGUpIHtcclxuICAgICAgICB2YXIgYXJyQ29udGVudCA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnRzKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXJyQ29udGVudC5maWx0ZXIob2JqID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvc3RhbENvZGVNaW4gPSBwYXJzZUludChvYmoucG9zdGFsQ29kZU1pbik7XHJcbiAgICAgICAgICAgIHZhciBwb3N0YWxDb2RlTWF4ID0gcGFyc2VJbnQob2JqLnBvc3RhbENvZGVNYXgpO1xyXG4gICAgICAgICAgICB2YXIgcG9zdGFsQ29kZSA9IHBhcnNlSW50KGRhdGEucG9zdGFsQ29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3N0YWxDb2RlID49IHBvc3RhbENvZGVNaW4gJiYgcG9zdGFsQ29kZSA8PSBwb3N0YWxDb2RlTWF4XHJcbiAgICAgICAgfSlcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZpbGVDb250ZW50cyk7XHJcblxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsIk5leHRDb3JzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZHMiLCJvcmlnaW4iLCJvcHRpb25zU3VjY2Vzc1N0YXR1cyIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlIiwiZGF0YSIsImJvZHkiLCJwb3N0YWxDb2RlIiwiYXJyQ29udGVudCIsIkpTT04iLCJwYXJzZSIsInJlc3VsdCIsImZpbHRlciIsIm9iaiIsInBvc3RhbENvZGVNaW4iLCJwYXJzZUludCIsInBvc3RhbENvZGVNYXgiLCJzdGF0dXMiLCJqc29uIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/location.js\n");

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