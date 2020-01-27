/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/custom-datasource.js":
/*!**********************************!*\
  !*** ./src/custom-datasource.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloDatasource = __webpack_require__(/*! apollo-datasource */ "apollo-datasource");

class CustomDatasource extends _apolloDatasource.DataSource {
  constructor() {
    super();
    this.customers = {
      customer1: {
        id: 'customer1',
        name: 'john',
        surname: 'doe',
        orders: [{
          id: 'order1'
        }, {
          id: 'order2'
        }]
      },
      customer2: {
        id: 'customer2',
        name: 'sean',
        surname: 'spencer',
        orders: [{
          id: 'order4'
        }]
      }
    };
  }

  async getCustomer(id) {
    return Promise.resolve(this.customers[id]);
  }

}

var _default = CustomDatasource;
exports.default = _default;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _server = _interopRequireDefault(__webpack_require__(/*! ./server.js */ "./src/server.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  PORT: port
} = process.env;

_server.default.listen({
  port
}, () => {
  console.log(`🚀 Server ready at ${port}`);
});

/***/ }),

/***/ "./src/schema.graphql":
/*!****************************!*\
  !*** ./src/schema.graphql ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = `type Customer {
  id: ID!
  firstName: String
  lastName: String
}

type Query {
  customer(id: ID!): Customer
}
`

/***/ }),

/***/ "./src/schema.js":
/*!***********************!*\
  !*** ./src/schema.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  Query: {
    customer: (_, {
      id
    }, {
      dataSources: {
        customDatasource
      }
    }) => customDatasource.getCustomer(id)
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServer = __webpack_require__(/*! apollo-server */ "apollo-server");

var _schema = _interopRequireDefault(__webpack_require__(/*! ./schema.js */ "./src/schema.js"));

var _schema2 = _interopRequireDefault(__webpack_require__(/*! ./schema.graphql */ "./src/schema.graphql"));

var _customDatasource = _interopRequireDefault(__webpack_require__(/*! ./custom-datasource.js */ "./src/custom-datasource.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = new _apolloServer.ApolloServer({
  typeDefs: _schema2.default,
  resolvers: _schema.default,
  dataSources: () => ({
    customDatasource: new _customDatasource.default()
  })
});
var _default = server;
exports.default = _default;

/***/ }),

/***/ "apollo-datasource":
/*!************************************!*\
  !*** external "apollo-datasource" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-datasource");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map