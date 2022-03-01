(self["webpackChunkreact_proyect"] = self["webpackChunkreact_proyect"] || []).push([["src_components_CoinsTable_CoinsTable_jsx"],{

/***/ "./src/components/CoinsTable/CoinsTable.jsx":
/*!**************************************************!*\
  !*** ./src/components/CoinsTable/CoinsTable.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Table/Table.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableHead/TableHead.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableRow/TableRow.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableCell/TableCell.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TableBody/TableBody.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _context_CryptoContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CryptoContext */ "./src/context/CryptoContext.js");
/* harmony import */ var _Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Carousel/Carousel */ "./src/components/Carousel/Carousel.jsx");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/Pagination/Pagination.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CoinsTable = function CoinsTable() {
  var _handleSearch;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();

  var _CryptoState = (0,_context_CryptoContext__WEBPACK_IMPORTED_MODULE_1__.CryptoState)(),
      currency = _CryptoState.currency,
      symbol = _CryptoState.symbol,
      coins = _CryptoState.coins,
      loading = _CryptoState.loading,
      fetchCoins = _CryptoState.fetchCoins;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchCoins(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  var darkTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default)({
    palette: {
      primary: {
        main: "#ffff"
      },
      type: "dark"
    }
  });

  var handleSearch = function handleSearch() {
    return coins.filter(function (coin) {
      return coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search);
    });
  };

  var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default)(function () {
    return {
      row: {
        backgroundColor: "#16171a",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#131111"
        },
        fontFamily: "Open Sans"
      },
      pagination: {
        "& .MuiPaginationItem-root": {
          color: "gold"
        }
      }
    };
  });
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
    theme: darkTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "h4",
    style: {
      margin: 18,
      fontFamily: "Open Sans"
    }
  }, "Precios de las Criptodivisas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
    label: "Busqueda de Criptomoneda",
    style: {
      marginBottom: 20,
      width: "100%"
    },
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    style: {
      backgroundColor: "#EEBC1D"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, null, ["Divisa", "Precio", "Cambios en las últimas 24 hrs", "Valor de mercado"].map(function (head) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
      style: {
        color: "black",
        fontWeight: "700",
        fontFamily: "Open Sans"
      },
      key: head,
      align: head === "Divisa" ? "justify" : "center"
    }, head);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.default, null, handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map(function (row) {
    var profit = row.price_change_percentage_24h > 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
      onClick: function onClick() {
        return history.push("/coins/".concat(row.id));
      },
      className: classes.row,
      key: row.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
      component: "th",
      scope: "row",
      style: {
        display: "flex",
        gap: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: row === null || row === void 0 ? void 0 : row.image,
      alt: row.name,
      height: "50",
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        textTransform: "uppercase",
        fontSize: 22
      }
    }, row.symbol), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      style: {
        color: "darkgrey"
      }
    }, row.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
      align: "center"
    }, symbol, " ", (0,_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__.numberWithCommas)(row.current_price.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
      align: "center",
      style: {
        color: profit > 0 ? "rgb(14,203,129" : "red",
        fontWeight: 500
      }
    }, profit && " ", row.price_change_percentage_24h.toFixed(2), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
      align: "center"
    }, symbol, " ", (0,_Carousel_Carousel__WEBPACK_IMPORTED_MODULE_2__.numberWithCommas)(row.market_cap.toString().slice(0, -6)), "MM"));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_16__.default, {
    style: {
      padding: 20,
      width: "100%",
      display: "flex",
      justifyContent: "center"
    },
    classes: {
      ul: classes.pagination
    },
    count: (((_handleSearch = handleSearch()) === null || _handleSearch === void 0 ? void 0 : _handleSearch.length) / 10).toFixed(0),
    onChange: function onChange(_, value) {
      setPage(value);
      window.scroll(0, 450);
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CoinsTable);

/***/ })

}]);
//# sourceMappingURL=src_components_CoinsTable_CoinsTable_jsx.bundle.js.map