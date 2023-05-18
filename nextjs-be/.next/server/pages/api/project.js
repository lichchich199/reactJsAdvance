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
exports.id = "pages/api/project";
exports.ids = ["pages/api/project"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./pages/api/project.js":
/*!******************************!*\
  !*** ./pages/api/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default()(req, res, {\n        // Options\n        methods: [\n            \"POST\"\n        ],\n        origin: \"*\",\n        optionsSuccessStatus: 200\n    });\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    var projectData = req.body;\n    var project;\n    switch(projectData?.mode){\n        case \"GET\":\n            delete projectData.mode;\n            project = await prisma.project.findUnique({\n                where: {\n                    id: projectData.id\n                }\n            });\n            break;\n        case \"DELETE\":\n            delete projectData.mode;\n            project = await prisma.project.delete({\n                where: {\n                    id: projectData.id\n                }\n            });\n            break;\n        case \"ADD\":\n            delete projectData.mode;\n            project = await prisma.project.create({\n                data: projectData\n            });\n            break;\n        case \"EDIT\":\n            delete projectData.mode;\n            project = await prisma.project.update({\n                where: {\n                    id: projectData.id\n                },\n                data: projectData\n            });\n            break;\n        case \"GETLIST\":\n            delete projectData.mode;\n            project = await prisma.project.findMany({\n                where: {\n                    name: {\n                        contains: projectData.name || \"\"\n                    }\n                }\n            });\n            break;\n        default:\n            break;\n    }\n    res.json(project);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvamVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUNYO0FBRW5DLE1BQU1FLFNBQVMsSUFBSUYsd0RBQVlBO0FBRS9CLGlFQUFlLE9BQU9HLEtBQUtDLE1BQVE7SUFDL0IsTUFBTUgsa0RBQVFBLENBQUNFLEtBQUtDLEtBQUs7UUFDckIsVUFBVTtRQUNWQyxTQUFTO1lBQUM7U0FBTztRQUNqQkMsUUFBUTtRQUNSQyxzQkFBc0I7SUFDeEI7SUFFRixJQUFHSixJQUFJSyxNQUFNLEtBQUssUUFBUTtRQUN0QixPQUFPSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVM7UUFBb0I7SUFDOUQsQ0FBQztJQUVELElBQUlDLGNBQWNULElBQUlVLElBQUk7SUFDMUIsSUFBSUM7SUFDSixPQUFRRixhQUFhRztRQUNqQixLQUFLO1lBQ0QsT0FBT0gsWUFBWUcsSUFBSTtZQUN2QkQsVUFBVSxNQUFNWixPQUFPWSxPQUFPLENBQUNFLFVBQVUsQ0FBQztnQkFDdENDLE9BQU87b0JBQ0hDLElBQUlOLFlBQVlNLEVBQUU7Z0JBQ3RCO1lBQ0o7WUFDQSxLQUFNO1FBQ1YsS0FBSztZQUNELE9BQU9OLFlBQVlHLElBQUk7WUFDdkJELFVBQVUsTUFBTVosT0FBT1ksT0FBTyxDQUFDSyxNQUFNLENBQUM7Z0JBQ2xDRixPQUFPO29CQUNIQyxJQUFJTixZQUFZTSxFQUFFO2dCQUN0QjtZQUNKO1lBQ0EsS0FBTTtRQUNWLEtBQUs7WUFDRCxPQUFPTixZQUFZRyxJQUFJO1lBQ3ZCRCxVQUFVLE1BQU1aLE9BQU9ZLE9BQU8sQ0FBQ00sTUFBTSxDQUFDO2dCQUNsQ0MsTUFBTVQ7WUFDVjtZQUNBLEtBQU07UUFDVixLQUFLO1lBQ0QsT0FBT0EsWUFBWUcsSUFBSTtZQUN2QkQsVUFBVSxNQUFNWixPQUFPWSxPQUFPLENBQUNRLE1BQU0sQ0FBQztnQkFDbENMLE9BQU87b0JBQ0hDLElBQUlOLFlBQVlNLEVBQUU7Z0JBQ3RCO2dCQUNBRyxNQUFNVDtZQUNWO1lBQ0EsS0FBTTtRQUNWLEtBQUs7WUFDRCxPQUFPQSxZQUFZRyxJQUFJO1lBQ3ZCRCxVQUFVLE1BQU1aLE9BQU9ZLE9BQU8sQ0FBQ1MsUUFBUSxDQUFDO2dCQUNwQ04sT0FBTztvQkFDSE8sTUFBTTt3QkFDRkMsVUFBVWIsWUFBWVksSUFBSSxJQUFJO29CQUNsQztnQkFDSjtZQUNKO1lBQ0EsS0FBTTtRQUVWO1lBQ0ksS0FBTTtJQUNkO0lBQ0FwQixJQUFJTSxJQUFJLENBQUNJO0FBQ2IsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9qZWN0LmpzP2Y3MTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCBOZXh0Q29ycyBmcm9tICduZXh0anMtY29ycyc7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGF3YWl0IE5leHRDb3JzKHJlcSwgcmVzLCB7XHJcbiAgICAgICAgLy8gT3B0aW9uc1xyXG4gICAgICAgIG1ldGhvZHM6IFsnUE9TVCddLFxyXG4gICAgICAgIG9yaWdpbjogJyonLFxyXG4gICAgICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDAsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCd9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJvamVjdERhdGEgPSByZXEuYm9keTtcclxuICAgIHZhciBwcm9qZWN0O1xyXG4gICAgc3dpdGNoIChwcm9qZWN0RGF0YT8ubW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0RGF0YS5tb2RlO1xyXG4gICAgICAgICAgICBwcm9qZWN0ID0gYXdhaXQgcHJpc21hLnByb2plY3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0RGF0YS5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICBkZWxldGUgcHJvamVjdERhdGEubW9kZTtcclxuICAgICAgICAgICAgcHJvamVjdCA9IGF3YWl0IHByaXNtYS5wcm9qZWN0LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0RGF0YS5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBREQnOlxyXG4gICAgICAgICAgICBkZWxldGUgcHJvamVjdERhdGEubW9kZTtcclxuICAgICAgICAgICAgcHJvamVjdCA9IGF3YWl0IHByaXNtYS5wcm9qZWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9qZWN0RGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdFRElUJzpcclxuICAgICAgICAgICAgZGVsZXRlIHByb2plY3REYXRhLm1vZGU7XHJcbiAgICAgICAgICAgIHByb2plY3QgPSBhd2FpdCBwcmlzbWEucHJvamVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcHJvamVjdERhdGEuaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9qZWN0RGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdHRVRMSVNUJzpcclxuICAgICAgICAgICAgZGVsZXRlIHByb2plY3REYXRhLm1vZGU7XHJcbiAgICAgICAgICAgIHByb2plY3QgPSBhd2FpdCBwcmlzbWEucHJvamVjdC5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IHByb2plY3REYXRhLm5hbWUgfHwgJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmVzLmpzb24ocHJvamVjdClcclxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJOZXh0Q29ycyIsInByaXNtYSIsInJlcSIsInJlcyIsIm1ldGhvZHMiLCJvcmlnaW4iLCJvcHRpb25zU3VjY2Vzc1N0YXR1cyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicHJvamVjdERhdGEiLCJib2R5IiwicHJvamVjdCIsIm1vZGUiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsImRlbGV0ZSIsImNyZWF0ZSIsImRhdGEiLCJ1cGRhdGUiLCJmaW5kTWFueSIsIm5hbWUiLCJjb250YWlucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/project.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/project.js"));
module.exports = __webpack_exports__;

})();