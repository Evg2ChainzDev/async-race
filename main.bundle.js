/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/style.scss?");

/***/ }),

/***/ "./src/InterConst/constants.ts":
/*!*************************************!*\
  !*** ./src/InterConst/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"svgPath\": () => (/* binding */ svgPath)\n/* harmony export */ });\nconst svgPath = `\n\t\t<path d=\"M493.887,266.528c-8.45,0-61.45,0-70.423,0l-56.54-107.752c-3.129-5.963-9.307-9.697-16.04-9.697h-49.503v-8.657h10.363\n\t\t\tc10.003,0,18.113-8.11,18.113-18.113V62.714c0-10.003-8.11-18.113-18.113-18.113H118.882c-10.003,0-18.113,8.11-18.113,18.113\n\t\t\tv59.594c0,10.003,8.11,18.113,18.113,18.113h10.363v8.657H85.162c-6.475,0-12.54,3.528-15.731,9.133L2.383,275.662\n\t\t\tC0.831,278.39,0,281.567,0,284.641c0,12.253,0,103.011,0,117.446C0,412.09,8.11,420.2,18.113,420.2c8.448,0,61.232,0,70.207,0\n\t\t\tc18.145,62.896,107.658,62.966,125.823,0h64.413c18.148,62.906,107.653,62.949,125.81,0h89.521\n\t\t\tc10.003,0,18.113-8.11,18.113-18.113V284.641C512,274.638,503.89,266.528,493.887,266.528z M165.471,140.423h99.684v8.657h-99.684\n\t\t\tV140.423z M58.723,383.975H36.226v-22.497h22.497V383.975z M49.311,266.528l37.768-66.159l48.661,66.159H49.311z M121.977,402.082\n\t\t\tc0-37.753,56.477-38.968,58.466-1.57c0.022,0.519,0.037,1.042,0.037,1.576c0,0.025,0.004,0.049,0.004,0.075\n\t\t\tC180.379,440.748,121.977,440.726,121.977,402.082z M218.399,266.529h-37.69l-59.74-81.223h97.43V266.529z M267.672,361.475\n\t\t\th-23.345c-10.003,0-18.113-8.11-18.113-18.113c0-10.003,8.11-18.113,18.113-18.113h23.345c10.003,0,18.113,8.11,18.113,18.113\n\t\t\tC285.785,353.365,277.675,361.475,267.672,361.475z M341.467,431.336c-16.13,0-29.255-13.124-29.255-29.254\n\t\t\tc0-37.718,56.522-38.924,58.456-1.528c0.021,0.505,0.036,1.014,0.036,1.534c0,0.016,0.002,0.03,0.002,0.046\n\t\t\tC370.68,418.24,357.574,431.336,341.467,431.336z M254.625,266.528v-81.223h85.308l42.619,81.223H254.625z M475.774,325.251\n\t\t\th-22.497v-22.497h22.497V325.251z\"/>\n`;\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/InterConst/constants.ts?");

/***/ }),

/***/ "./src/controller/controller.ts":
/*!**************************************!*\
  !*** ./src/controller/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListenersToHeader\": () => (/* binding */ addListenersToHeader),\n/* harmony export */   \"initSessionStor\": () => (/* binding */ initSessionStor)\n/* harmony export */ });\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/view */ \"./src/view/view.ts\");\n// import { getDataCars } from './getDataCars';\r\n\r\nconst addListenersToHeader = function () {\r\n    const garageLnk = document.querySelector('.garage-link');\r\n    garageLnk.addEventListener('click', () => {\r\n        (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawGarage)();\r\n    });\r\n    const winnersLnk = document.querySelector('.winners-link');\r\n    winnersLnk.addEventListener('click', () => {\r\n        (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawWinners)();\r\n    });\r\n};\r\nconst initSessionStor = function () {\r\n    sessionStorage.setItem('garagePage', '1');\r\n};\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/controller/controller.ts?");

/***/ }),

/***/ "./src/db/DataCar.ts":
/*!***************************!*\
  !*** ./src/db/DataCar.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carBrands\": () => (/* binding */ carBrands),\n/* harmony export */   \"carModels\": () => (/* binding */ carModels)\n/* harmony export */ });\nconst carBrands = [\r\n    'Audi',\r\n    'Alfa Romeo',\r\n    'Alpina',\r\n    'Aston Martin',\r\n    'Axon',\r\n    'Ford',\r\n    'Ferrari',\r\n    'Fiat',\r\n    'GAZ',\r\n    'GMC',\r\n    'Honda',\r\n    'Hummer',\r\n    'Hyundai',\r\n    'Infiniti',\r\n    'Isuzu',\r\n    'JAC',\r\n    'Jaguar',\r\n    'Jeep',\r\n    'Kamaz',\r\n    'Lada',\r\n    'Lexus',\r\n    'Lotus',\r\n    'MAN',\r\n    'Maybach',\r\n    'MAZ',\r\n    'Mazda',\r\n    'McLaren',\r\n    'Nissan',\r\n    'Opel',\r\n    'Paccar',\r\n    'Pagani',\r\n    'Pontiac',\r\n    'Porsche',\r\n    'Renault',\r\n    'Škoda',\r\n    'Smart',\r\n    'Subaru',\r\n    'Suzuki',\r\n    'Tesla',\r\n    'Toyota',\r\n    'UAZ',\r\n    'Volvo',\r\n    'ZAZ',\r\n    'XPeng',\r\n    'TVR',\r\n    'Saab',\r\n    'RAM',\r\n    'Chevrolet',\r\n    'Mazzanti',\r\n    'Daewoo',\r\n    'Zaporozhets',\r\n];\r\nconst carModels = [\r\n    'Gran Turismo',\r\n    'RS',\r\n    'Roadster',\r\n    'S',\r\n    'X',\r\n    '3',\r\n    'Y',\r\n    'Cybertruck',\r\n    'X5',\r\n    'X7',\r\n    'X3',\r\n    'X6',\r\n    'GT4',\r\n    'FXX',\r\n    '599 GTO',\r\n    'Enzo',\r\n    '458 Italia',\r\n    '250 GTO',\r\n    'Priora',\r\n    '4x4',\r\n    'Rio',\r\n    'Focus',\r\n    'Kalina',\r\n    'Vesta',\r\n    'Spark',\r\n    'Lacetti',\r\n    'Nexia',\r\n    'Matiz',\r\n    'Cobalt',\r\n    'Captiva',\r\n    'A7',\r\n    'A5',\r\n    'A3',\r\n    'A8',\r\n    'TT',\r\n    'Corolla',\r\n    'Camry',\r\n    'RAV4',\r\n    'Impreza',\r\n    'WRX',\r\n    'ES',\r\n    'LS',\r\n    'RX',\r\n    'GX',\r\n    'LX',\r\n    'GS',\r\n    'LC500',\r\n    'Gallardo',\r\n    'Aventador',\r\n    '911',\r\n    'Cayenne',\r\n    'FX37',\r\n];\r\n\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/db/DataCar.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/view */ \"./src/view/view.ts\");\n/* harmony import */ var _controller_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/controller */ \"./src/controller/controller.ts\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\n\r\n(0,_controller_controller__WEBPACK_IMPORTED_MODULE_1__.initSessionStor)();\r\n(0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawHeader)();\r\n(0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawGarage)();\r\n(0,_controller_controller__WEBPACK_IMPORTED_MODULE_1__.addListenersToHeader)(); // add event listeners\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/index.ts?");

/***/ }),

/***/ "./src/utils/CarMenuButtonsFunc.ts":
/*!*****************************************!*\
  !*** ./src/utils/CarMenuButtonsFunc.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ABtnFunc\": () => (/* binding */ ABtnFunc),\n/* harmony export */   \"BBtnFunc\": () => (/* binding */ BBtnFunc),\n/* harmony export */   \"removeCarBtnFunc\": () => (/* binding */ removeCarBtnFunc),\n/* harmony export */   \"selectCarBtnFunc\": () => (/* binding */ selectCarBtnFunc)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst removeCarBtnFunc = function (target) {\r\n    var _a;\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const dataCarId = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.dataset.carId;\r\n        yield fetch(`http://127.0.0.1:3000/garage/${dataCarId}`, {\r\n            method: 'DELETE',\r\n        });\r\n    });\r\n};\r\nconst selectCarBtnFunc = function (target) {\r\n    var _a;\r\n    const dataCarId = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.dataset.carId;\r\n    if (dataCarId == sessionStorage.selectedCarId) {\r\n        sessionStorage.selectedCarId = '';\r\n    }\r\n    else {\r\n        sessionStorage.selectedCarId = dataCarId;\r\n    }\r\n};\r\nconst ABtnFunc = function (target) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const divCarContainer = target.closest('.car-container');\r\n        const dataCarId = divCarContainer.dataset.carId;\r\n        const ABtn = divCarContainer.querySelector('.a-btn');\r\n        const BBtn = divCarContainer.querySelector('.b-btn');\r\n        ABtn.setAttribute('disabled', '');\r\n        BBtn.removeAttribute('disabled');\r\n        console.log(dataCarId);\r\n        const carStartedResponse = yield fetch(`http://127.0.0.1:3000/engine?id=${dataCarId}&status=started`, {\r\n            method: 'PATCH',\r\n        });\r\n        console.log(carStartedResponse);\r\n        const carResp = yield carStartedResponse.json();\r\n        const time = Math.round(carResp.distance / carResp.velocity);\r\n        // console.log(time);\r\n        const animatedSvg = divCarContainer.querySelector('svg');\r\n        animatedSvg.style.animationName = 'carAnimation';\r\n        animatedSvg.style.animationDuration = `${time.toString()}ms`;\r\n        const engineResponse = yield fetch(`http://127.0.0.1:3000/engine?id=${dataCarId}&status=drive`, {\r\n            method: 'PATCH',\r\n        });\r\n        // const engineResponseFinal = await engineResponse.json();\r\n        if (!engineResponse.ok) {\r\n            console.log('car broken');\r\n            animatedSvg.style.animationPlayState = 'paused';\r\n        }\r\n        ;\r\n    });\r\n};\r\nconst BBtnFunc = function (target) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const divCarContainer = target.closest('.car-container');\r\n        const dataCarId = divCarContainer.dataset.carId;\r\n        const ABtn = divCarContainer.querySelector('.a-btn');\r\n        const BBtn = divCarContainer.querySelector('.b-btn');\r\n        BBtn.setAttribute('disabled', '');\r\n        ABtn.removeAttribute('disabled');\r\n        const ddd = yield fetch(`http://127.0.0.1:3000/engine?id=${dataCarId}&status=stoped`, {\r\n            method: 'PATCH',\r\n        });\r\n        const animatedSvg = divCarContainer.querySelector('svg');\r\n        animatedSvg.style.animationName = '';\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/utils/CarMenuButtonsFunc.ts?");

/***/ }),

/***/ "./src/utils/addListenersToGarage.ts":
/*!*******************************************!*\
  !*** ./src/utils/addListenersToGarage.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListenersToCarMenu\": () => (/* binding */ addListenersToCarMenu),\n/* harmony export */   \"addListenersToGarageArrows\": () => (/* binding */ addListenersToGarageArrows),\n/* harmony export */   \"addListenersToGarageMenu\": () => (/* binding */ addListenersToGarageMenu)\n/* harmony export */ });\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/view */ \"./src/view/view.ts\");\n/* harmony import */ var _getDataCars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataCars */ \"./src/utils/getDataCars.ts\");\n/* harmony import */ var _generateRandom100Cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateRandom100Cars */ \"./src/utils/generateRandom100Cars.ts\");\n/* harmony import */ var _CarMenuButtonsFunc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CarMenuButtonsFunc */ \"./src/utils/CarMenuButtonsFunc.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\nconst addListenersToGarageMenu = function () {\r\n    const createCarBtn = document.querySelector('.create-car-btn');\r\n    createCarBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\r\n        const newCarName = document.querySelector('#createCarName').value || 'New Car';\r\n        const newCarColor = document.querySelector('#createCarColor').value;\r\n        const car = { name: newCarName, color: newCarColor };\r\n        const postNewCar = function () {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                yield fetch(`http://127.0.0.1:3000/garage`, {\r\n                    method: 'POST',\r\n                    headers: {\r\n                        'Content-Type': 'application/json',\r\n                    },\r\n                    body: JSON.stringify(car),\r\n                });\r\n            });\r\n        };\r\n        yield postNewCar(); // перед любой асинхронной функцией могу ставить евеит если надо\r\n        (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawGarage)();\r\n    }));\r\n    const updateCarBtn = document.querySelector('.update-car-btn');\r\n    updateCarBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\r\n        console.log('update click');\r\n        if (sessionStorage.selectedCarId == '') {\r\n            return;\r\n        }\r\n        const updateCarName = document.querySelector('#updateCarName').value;\r\n        const updateCarColor = document.querySelector('#updateCarColor').value;\r\n        const car = { name: updateCarName, color: updateCarColor };\r\n        const updateSelectedCar = function () {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                const selectedCarId = sessionStorage.getItem('selectedCarId');\r\n                console.log(selectedCarId);\r\n                yield fetch(`http://127.0.0.1:3000/garage/${selectedCarId}`, {\r\n                    method: 'PUT',\r\n                    headers: {\r\n                        'Content-Type': 'application/json',\r\n                    },\r\n                    body: JSON.stringify(car),\r\n                });\r\n            });\r\n        };\r\n        yield updateSelectedCar();\r\n        (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawGarage)();\r\n    }));\r\n    const generateCarsBtn = document.querySelector('.generate-cars-btn');\r\n    generateCarsBtn.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\r\n        (0,_generateRandom100Cars__WEBPACK_IMPORTED_MODULE_2__.generateRandom100Cars)();\r\n    }));\r\n};\r\nconst addListenersToCarMenu = function () {\r\n    const carsContainer = document.querySelector('.cars-container');\r\n    carsContainer.addEventListener('click', (ev) => __awaiter(this, void 0, void 0, function* () {\r\n        const target = ev.target;\r\n        const clickedClass = target.className;\r\n        switch (clickedClass) {\r\n            case 'remove-car-btn': {\r\n                yield (0,_CarMenuButtonsFunc__WEBPACK_IMPORTED_MODULE_3__.removeCarBtnFunc)(target);\r\n                (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawGarage)();\r\n                break;\r\n            }\r\n            case 'select-car-btn': {\r\n                (0,_CarMenuButtonsFunc__WEBPACK_IMPORTED_MODULE_3__.selectCarBtnFunc)(target);\r\n                (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawGarage)();\r\n                break;\r\n            }\r\n            case 'a-btn': {\r\n                (0,_CarMenuButtonsFunc__WEBPACK_IMPORTED_MODULE_3__.ABtnFunc)(target);\r\n                break;\r\n            }\r\n            case 'b-btn': {\r\n                (0,_CarMenuButtonsFunc__WEBPACK_IMPORTED_MODULE_3__.BBtnFunc)(target);\r\n            }\r\n        }\r\n    }));\r\n};\r\nconst addListenersToGarageArrows = function () {\r\n    const garagePageContainer = document.querySelector('.garage-pagination-container');\r\n    garagePageContainer.addEventListener('click', (ev) => __awaiter(this, void 0, void 0, function* () {\r\n        const target = ev.target;\r\n        let currPage = Number(sessionStorage.garagePage);\r\n        // console.log(currPage);\r\n        const clickedClass = target.className;\r\n        switch (clickedClass) {\r\n            case 'garage-left-btn': {\r\n                if (currPage > 1) {\r\n                    currPage -= 1;\r\n                    sessionStorage.garagePage = currPage;\r\n                }\r\n                break;\r\n            }\r\n            case 'garage-right-btn': {\r\n                const allCars = yield (0,_getDataCars__WEBPACK_IMPORTED_MODULE_1__.getDataAllCars)();\r\n                const maxPage = Math.ceil(allCars.length / 7);\r\n                if (currPage < maxPage) {\r\n                    currPage += 1;\r\n                    sessionStorage.garagePage = currPage;\r\n                }\r\n            }\r\n        }\r\n        (0,_view_view__WEBPACK_IMPORTED_MODULE_0__.drawGarage)();\r\n    }));\r\n};\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/utils/addListenersToGarage.ts?");

/***/ }),

/***/ "./src/utils/generateRandom100Cars.ts":
/*!********************************************!*\
  !*** ./src/utils/generateRandom100Cars.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandom100Cars\": () => (/* binding */ generateRandom100Cars)\n/* harmony export */ });\n/* harmony import */ var _generateRandomCarSColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateRandomCarSColor */ \"./src/utils/generateRandomCarSColor.ts\");\n/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/view */ \"./src/view/view.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nconst generateRandom100Cars = function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        console.log('function generateRandom100Cars works');\r\n        for (let i = 0; i < 100; i++) {\r\n            const randomCarColor = (0,_generateRandomCarSColor__WEBPACK_IMPORTED_MODULE_0__.generateRandomColor)();\r\n            const randomCarName = (0,_generateRandomCarSColor__WEBPACK_IMPORTED_MODULE_0__.generateRandomName)();\r\n            const car = { name: randomCarName, color: randomCarColor };\r\n            const postNewCar = function () {\r\n                return __awaiter(this, void 0, void 0, function* () {\r\n                    fetch(`http://127.0.0.1:3000/garage`, {\r\n                        method: 'POST',\r\n                        headers: {\r\n                            'Content-Type': 'application/json',\r\n                        },\r\n                        body: JSON.stringify(car),\r\n                    });\r\n                    // fetch возвращает промис\r\n                });\r\n            };\r\n            yield postNewCar();\r\n        }\r\n        (0,_view_view__WEBPACK_IMPORTED_MODULE_1__.drawGarage)();\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/utils/generateRandom100Cars.ts?");

/***/ }),

/***/ "./src/utils/generateRandomCarSColor.ts":
/*!**********************************************!*\
  !*** ./src/utils/generateRandomCarSColor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandomColor\": () => (/* binding */ generateRandomColor),\n/* harmony export */   \"generateRandomName\": () => (/* binding */ generateRandomName)\n/* harmony export */ });\n/* harmony import */ var _db_DataCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db/DataCar */ \"./src/db/DataCar.ts\");\n\r\nfunction generateRandomColor() {\r\n    const randomColor = Math.floor(Math.random() * 16777215).toString(16);\r\n    return `#${randomColor}`;\r\n}\r\nfunction generateRandomName() {\r\n    const randomBrand = _db_DataCar__WEBPACK_IMPORTED_MODULE_0__.carBrands[Math.floor(Math.random() * _db_DataCar__WEBPACK_IMPORTED_MODULE_0__.carBrands.length)];\r\n    const randomColor = _db_DataCar__WEBPACK_IMPORTED_MODULE_0__.carModels[Math.floor(Math.random() * _db_DataCar__WEBPACK_IMPORTED_MODULE_0__.carModels.length)];\r\n    return `${randomBrand} ${randomColor}`;\r\n}\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/utils/generateRandomCarSColor.ts?");

/***/ }),

/***/ "./src/utils/getDataCars.ts":
/*!**********************************!*\
  !*** ./src/utils/getDataCars.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataAllCars\": () => (/* binding */ getDataAllCars),\n/* harmony export */   \"getDataCars\": () => (/* binding */ getDataCars)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst getDataCars = function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const garagePage = sessionStorage.getItem('garagePage');\r\n        const data = yield fetch(`http://127.0.0.1:3000/garage?_page=${garagePage}&_limit=7`);\r\n        const newCarData = yield data.json();\r\n        return newCarData;\r\n    });\r\n};\r\nconst getDataAllCars = function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const data = yield fetch(`http://127.0.0.1:3000/garage`);\r\n        const newCarData = yield data.json();\r\n        return newCarData;\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/utils/getDataCars.ts?");

/***/ }),

/***/ "./src/utils/getWinnersCars.ts":
/*!*************************************!*\
  !*** ./src/utils/getWinnersCars.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWinnersCars\": () => (/* binding */ getWinnersCars)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst getWinnersCars = function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const data = yield fetch('http://127.0.0.1:3000/winners');\r\n        const newWinData = yield data.json();\r\n        return newWinData;\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/utils/getWinnersCars.ts?");

/***/ }),

/***/ "./src/view/view.ts":
/*!**************************!*\
  !*** ./src/view/view.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawGarage\": () => (/* binding */ drawGarage),\n/* harmony export */   \"drawHeader\": () => (/* binding */ drawHeader),\n/* harmony export */   \"drawWinners\": () => (/* binding */ drawWinners)\n/* harmony export */ });\n/* harmony import */ var _InterConst_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InterConst/constants */ \"./src/InterConst/constants.ts\");\n/* harmony import */ var _utils_getDataCars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getDataCars */ \"./src/utils/getDataCars.ts\");\n/* harmony import */ var _utils_getWinnersCars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getWinnersCars */ \"./src/utils/getWinnersCars.ts\");\n/* harmony import */ var _utils_addListenersToGarage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/addListenersToGarage */ \"./src/utils/addListenersToGarage.ts\");\n// если из промиса надо что-то достать. то надо использовать евеит.\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\nconst drawHeader = function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const body = document.querySelector('body');\r\n        body.innerHTML = `<header><button class=\"garage-link\">To Garage</button><button href=\"#\" class=\"winners-link\">To Winners</button></header>\n  <main></main>`;\r\n    });\r\n};\r\nconst drawGarage = function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const dataCar = yield (0,_utils_getDataCars__WEBPACK_IMPORTED_MODULE_1__.getDataCars)();\r\n        const dataAllCar = yield (0,_utils_getDataCars__WEBPACK_IMPORTED_MODULE_1__.getDataAllCars)();\r\n        const garagePage = sessionStorage.getItem('garagePage');\r\n        const selectedCarId = sessionStorage.getItem('selectedCarId');\r\n        const main = document.querySelector('main');\r\n        //draw garage menu\r\n        main.innerHTML = `<div class=\"garage-menu\">\n                        <div class=\"create-section\">\n                          <input type=\"text\" id=\"createCarName\" required minlength=\"4\" maxlength=\"18\" size=\"18\">\n                          <input type=\"color\" id=\"createCarColor\" value=\"#e66465\">\n                          <button class=\"create-car-btn\">create car</button>\n                        </div>\n                        <div class=\"update-section\">\n                          <input type=\"text\" id=\"updateCarName\" minlength=\"4\" maxlength=\"18\" size=\"18\" disabled>\n                          <input type=\"color\" id=\"updateCarColor\" value=\"#e66465\">\n                          <button class=\"update-car-btn\">update car</button>\n                        </div>\n                        <div class=\"rrg-section\">\n                          <button class=\"generate-cars-btn\">generate cars</button>\n                        </div>\n                      </div>\n                      <div class=\"cars-container\"><span>Garage (${dataAllCar.length}) </span><span>Page № ${garagePage}</span></div>`;\r\n        const carsContainer = document.querySelector('.cars-container');\r\n        if (selectedCarId !== ( false || '')) {\r\n            const inputUpdateCarName = document.querySelector('#updateCarName');\r\n            inputUpdateCarName.removeAttribute('disabled');\r\n        }\r\n        // draw cars list\r\n        dataCar.forEach((el) => {\r\n            const appendedCar = document.createElement('div');\r\n            appendedCar.dataset.carId = `${el.id}`;\r\n            appendedCar.classList.add('car-container');\r\n            appendedCar.innerHTML = `<button class=\"select-car-btn\">select</button><button class=\"remove-car-btn\">remove</button><span class=\"car-name\">${el.name}</span>\n        <div class=\"ABsSVGcontainer\">\n        <button class=\"a-btn\">A</button><button class=\"b-btn\" disabled>B</button>                         \n        <svg class=\"svgCar\" viewBox=\"0 0 512 512\" width=\"60\">\n                                  <g style=\"fill: ${el.color}\">${_InterConst_constants__WEBPACK_IMPORTED_MODULE_0__.svgPath}</g>\n                                  \n                               </svg>\n        </div>   `;\r\n            carsContainer.append(appendedCar);\r\n        });\r\n        // console.log(selectedCar);\r\n        const selectCarDiv = document.querySelector(`[data-car-id = \"${selectedCarId}\"]`);\r\n        selectCarDiv === null || selectCarDiv === void 0 ? void 0 : selectCarDiv.classList.add('selected');\r\n        // console.log(selectCarDiv);\r\n        if (selectCarDiv !== null) {\r\n            const selectedCarName = selectCarDiv.querySelector('.car-name').innerText;\r\n            const updateCarName = document.querySelector('#updateCarName');\r\n            updateCarName.value = selectedCarName;\r\n        }\r\n        // draw garage arrows\r\n        const paginationContainer = document.createElement('div');\r\n        paginationContainer.className = 'garage-pagination-container';\r\n        main.append(paginationContainer);\r\n        paginationContainer.innerHTML =\r\n            '<div> <button class=\"garage-left-btn\"> < </button><button class=\"garage-right-btn\"> > </button> </div>';\r\n        (0,_utils_addListenersToGarage__WEBPACK_IMPORTED_MODULE_3__.addListenersToGarageMenu)();\r\n        (0,_utils_addListenersToGarage__WEBPACK_IMPORTED_MODULE_3__.addListenersToCarMenu)();\r\n        (0,_utils_addListenersToGarage__WEBPACK_IMPORTED_MODULE_3__.addListenersToGarageArrows)();\r\n    });\r\n};\r\nconst drawWinners = function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const dataWinners = yield (0,_utils_getWinnersCars__WEBPACK_IMPORTED_MODULE_2__.getWinnersCars)();\r\n        console.log(dataWinners);\r\n        const main = document.querySelector('main');\r\n        main.innerHTML = `<div class=\"winners-container\"></div>`;\r\n        const winnersContainer = document.querySelector('.winners-container');\r\n        dataWinners.forEach((el) => {\r\n            const appendedWinner = document.createElement('div');\r\n            appendedWinner.innerHTML = `<span class=\"winner-name\">winner id: ${el.id} wins: ${el.wins} time: ${el.time}</span>`;\r\n            winnersContainer.append(appendedWinner);\r\n        });\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/view/view.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;