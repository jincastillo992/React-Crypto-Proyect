(self["webpackChunkreact_proyect"] = self["webpackChunkreact_proyect"] || []).push([["src_pages_Coinpage_Coinpage_jsx"],{

/***/ "./src/components/CoinInfo/CoinInfo.jsx":
/*!**********************************************!*\
  !*** ./src/components/CoinInfo/CoinInfo.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var _config_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/Api */ "./src/config/Api.js");
/* harmony import */ var _context_CryptoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/CryptoContext */ "./src/context/CryptoContext.js");
/* harmony import */ var _SelectButton_SelectButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../SelectButton/SelectButton */ "./src/components/SelectButton/SelectButton.jsx");
/* harmony import */ var _config_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/data */ "./src/config/data.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var CoinInfo = function CoinInfo(_ref) {
  var coin = _ref.coin;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      historicData = _useState2[0],
      setHistoricData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      days = _useState4[0],
      setDays = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      flag = _useState6[0],
      setflag = _useState6[1];

  var _CryptoState = (0,_context_CryptoContext__WEBPACK_IMPORTED_MODULE_4__.CryptoState)(),
      currency = _CryptoState.currency;

  var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default)(function (theme) {
    return {
      container: _defineProperty({
        width: "75%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        padding: 40
      }, theme.breakpoints.down("md"), {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0
      })
    };
  });
  var classes = useStyles();

  var fetchHistoricData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _yield$axios$get, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_config_Api__WEBPACK_IMPORTED_MODULE_3__.HistoricalChart)(coin.id, days, currency));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setflag(true);
              setHistoricData(data.prices);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchHistoricData() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetchHistoricData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, currency]);
  var darkTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default)({
    palette: {
      primary: {
        main: "#ffff"
      },
      type: "dark"
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
    theme: darkTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.container
  }, !historicData | flag === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    style: {
      color: "gold"
    },
    size: 250,
    thickness: 1
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
    data: {
      labels: historicData.map(function (coin) {
        var date = new Date(coin[0]);
        var time = date.getHours() > 12 ? "".concat(date.getHours() - 12, ":").concat(date.getMinutes(), " PM") : "".concat(date.getHours(), ":").concat(date.getMinutes(), " AM");
        return days === 1 ? time : date.toLocaleDateString();
      }),
      datasets: [{
        data: historicData.map(function (coin) {
          return coin[1];
        }),
        label: "Precio ( \xFAltimos ".concat(days, " d\xEDas ) en ").concat(currency),
        borderColor: "#EEBC1D"
      }]
    },
    options: {
      elements: {
        point: {
          radius: 2
        }
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      display: "flex",
      marginTop: 20,
      justifyContent: "space-around",
      width: "100%"
    }
  }, _config_data__WEBPACK_IMPORTED_MODULE_6__.chartDays.map(function (day) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SelectButton_SelectButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      key: day.value,
      onClick: function onClick() {
        setDays(day.value);
        setflag(false);
      },
      selected: day.value === days
    }, day.label);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CoinInfo);

/***/ }),

/***/ "./src/components/SelectButton/SelectButton.jsx":
/*!******************************************************!*\
  !*** ./src/components/SelectButton/SelectButton.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



var SelectButton = function SelectButton(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      onClick = _ref.onClick;
  var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.default)({
    selectbutton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Open Sans",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black"
      },
      width: "22%" //   margin: 5,

    }
  });
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: onClick,
    className: classes.selectbutton
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (SelectButton);

/***/ }),

/***/ "./src/config/data.js":
/*!****************************!*\
  !*** ./src/config/data.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chartDays": function() { return /* binding */ chartDays; }
/* harmony export */ });
var chartDays = [{
  label: "24 Horas",
  value: 1
}, {
  label: "30 Días",
  value: 30
}, {
  label: "3 Meses",
  value: 90
}, {
  label: "1 Año",
  value: 365
}];

/***/ }),

/***/ "./src/pages/Coinpage/Coinpage.jsx":
/*!*****************************************!*\
  !*** ./src/pages/Coinpage/Coinpage.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom/cjs/react-router-dom.min */ "./node_modules/react-router-dom/cjs/react-router-dom.min.js");
/* harmony import */ var _components_CoinInfo_CoinInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CoinInfo/CoinInfo */ "./src/components/CoinInfo/CoinInfo.jsx");
/* harmony import */ var _config_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/Api */ "./src/config/Api.js");
/* harmony import */ var _context_CryptoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/CryptoContext */ "./src/context/CryptoContext.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var _components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Carousel/Carousel */ "./src/components/Carousel/Carousel.jsx");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _Firebase_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Firebase/firebase */ "./src/pages/Firebase/firebase.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Coinpage = function Coinpage() {
  var _useParams = (0,react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_9__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      coin = _useState2[0],
      setCoin = _useState2[1];

  var _CryptoState = (0,_context_CryptoContext__WEBPACK_IMPORTED_MODULE_4__.CryptoState)(),
      currency = _CryptoState.currency,
      symbol = _CryptoState.symbol,
      user = _CryptoState.user,
      favorites = _CryptoState.favorites,
      setAlert = _CryptoState.setAlert;

  var fetchCoin = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _yield$axios$get, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_config_Api__WEBPACK_IMPORTED_MODULE_3__.SingleCoin)(id));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              setCoin(data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchCoin() {
      return _ref.apply(this, arguments);
    };
  }();

  console.log(coin);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetchCoin(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default)(function (theme) {
    var _sidebar, _marketData;

    return {
      container: _defineProperty({
        display: "flex"
      }, theme.breakpoints.down("md"), {
        flexDirection: "column",
        alignItems: "center"
      }),
      sidebar: (_sidebar = {
        width: "30%"
      }, _defineProperty(_sidebar, theme.breakpoints.down("md"), {
        width: "100%"
      }), _defineProperty(_sidebar, "display", "flex"), _defineProperty(_sidebar, "flexDirection", "column"), _defineProperty(_sidebar, "alignItems", "center"), _defineProperty(_sidebar, "marginTop", 25), _defineProperty(_sidebar, "borderRight", "2px solid grey"), _sidebar),
      heading: {
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Open Sans"
      },
      description: {
        width: "100%",
        fontFamily: "Open Sans",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "justify"
      },
      marketData: (_marketData = {
        alignSelf: "start",
        padding: 25,
        paddingTop: 10,
        width: "100%"
      }, _defineProperty(_marketData, theme.breakpoints.down("md"), {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }), _defineProperty(_marketData, theme.breakpoints.down("xs"), {
        alignItems: "start"
      }), _marketData)
    };
  });
  var inFavorites = favorites.includes(coin === null || coin === void 0 ? void 0 : coin.id);

  var addToFavorites = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var coinRef;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              coinRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_Firebase_firebase__WEBPACK_IMPORTED_MODULE_8__.db, "favorites", user.uid);
              _context2.prev = 1;
              _context2.next = 4;
              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.setDoc)(coinRef, {
                coins: favorites ? [].concat(_toConsumableArray(favorites), [coin.id]) : [coin.id]
              });

            case 4:
              setAlert({
                open: true,
                message: "".concat(coin.name, " agregado a tu lista de favoritos"),
                type: "success"
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](1);
              setAlert({
                open: true,
                message: _context2.t0.message,
                type: "error"
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 7]]);
    }));

    return function addToFavorites() {
      return _ref2.apply(this, arguments);
    };
  }();

  var removeFromFavorites = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var coinRef;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              coinRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_Firebase_firebase__WEBPACK_IMPORTED_MODULE_8__.db, "favorites", user.uid);
              _context3.prev = 1;
              _context3.next = 4;
              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.setDoc)(coinRef, {
                coins: favorites.filter(function (fav) {
                  return fav !== (coin === null || coin === void 0 ? void 0 : coin.id);
                })
              }, {
                merge: "true"
              });

            case 4:
              setAlert({
                open: true,
                message: "".concat(coin.name, " quitado a tu lista de favoritos"),
                type: "success"
              });
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](1);
              setAlert({
                open: true,
                message: _context3.t0.message,
                type: "error"
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 7]]);
    }));

    return function removeFromFavorites() {
      return _ref3.apply(this, arguments);
    };
  }();

  var classes = useStyles();
  if (!coin) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, {
    style: {
      backgroundColor: "gold"
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.sidebar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: coin === null || coin === void 0 ? void 0 : coin.image.large,
    alt: coin === null || coin === void 0 ? void 0 : coin.name,
    height: "200",
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "h3",
    className: classes.heading
  }, coin === null || coin === void 0 ? void 0 : coin.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "subtitle1",
    className: classes.description
  }, (0,react_html_parser__WEBPACK_IMPORTED_MODULE_5__.default)(coin === null || coin === void 0 ? void 0 : coin.description.es.split(". ")[0]), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.marketData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "h5",
    className: classes.heading
  }, "Rank:"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "h5",
    style: {
      fontFamily: "Open Sans"
    }
  }, coin === null || coin === void 0 ? void 0 : coin.market_cap_rank)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "h5",
    className: classes.heading
  }, "Precio actual:"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "h5",
    style: {
      fontFamily: "Open Sans"
    }
  }, symbol, " ", (0,_components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_6__.numberWithCommas)(coin === null || coin === void 0 ? void 0 : coin.market_data.current_price[currency.toLowerCase()]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "h5",
    className: classes.heading
  }, "Valor de Mercado:"), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    variant: "h5",
    style: {
      fontFamily: "Open Sans"
    }
  }, symbol, " ", (0,_components_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_6__.numberWithCommas)(coin === null || coin === void 0 ? void 0 : coin.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6)), " MM")), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
    variant: "outlined",
    style: {
      width: "100%",
      height: 40,
      backgroundColor: inFavorites ? "#ff0000" : "#EEBC1D"
    },
    onClick: inFavorites ? removeFromFavorites : addToFavorites
  }, inFavorites ? "Quitar de favoritos" : "Agregar a favoritos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_CoinInfo_CoinInfo__WEBPACK_IMPORTED_MODULE_2__.default, {
    coin: coin
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Coinpage);

/***/ }),

/***/ "?ec29":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=src_pages_Coinpage_Coinpage_jsx.bundle.js.map