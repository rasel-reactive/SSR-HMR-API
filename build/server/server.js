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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/dev.js":
/*!***********************!*\
  !*** ./config/dev.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//  dev keys\nmodule.exports = {\n  DB_URI: \"mongodb://localhost/ssr-db\",\n  COOKIE_SESSION: \"xbvbo84854ert543fdgfdgf5435\",\n  FRONTEND: 'http://localhost:3000',\n  PORT: \"4000\"\n};\n\n//# sourceURL=webpack:///./config/dev.js?");

/***/ }),

/***/ "./config/keys.js":
/*!************************!*\
  !*** ./config/keys.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("if (false) {} else {\n  // we are in development mode\n  module.exports = __webpack_require__(/*! ./dev */ \"./config/dev.js\");\n}\n\n//# sourceURL=webpack:///./config/keys.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-session */ \"cookie-session\");\n/* harmony import */ var cookie_session__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_session__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/keys */ \"./config/keys.js\");\n/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/User */ \"./server/models/User.js\");\n/* harmony import */ var _passport_passportLocal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./passport/passportLocal */ \"./server/passport/passportLocal.js\");\n/* harmony import */ var _routes_authRoutes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/authRoutes */ \"./server/routes/authRoutes.js\");\n/* harmony import */ var _routes_userRoutes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/userRoutes */ \"./server/routes/userRoutes.js\");\n\n\n\n\n\n // const expressSession = require(\"express-session\");\n\n\n // model........\n\n // passport initial............\n\n // import roures........\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use(cors__WEBPACK_IMPORTED_MODULE_6___default()());\n  app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\n  app.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n    extended: true\n  }));\n  app.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev'));\n  app.use(cookie_session__WEBPACK_IMPORTED_MODULE_4___default()({\n    name: \"hjjjjj\",\n    maxAge: 7 * 24 * 60 * 60 * 1000,\n    keys: [_config_keys__WEBPACK_IMPORTED_MODULE_7___default.a.COOKIE_SESSION]\n  })); // ! or\n  // app.use(expressSession({\n  //   resave: true,\n  //   saveUninitialized: true,\n  //   secret: \"Secret\"\n  // }))\n  // passport session and initialize\n\n  app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.initialize()); // Set logged user obj inside req obj\n\n  app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.session()); // check our auth status........\n\n  app.use(function (req, res, next) {\n    // console.log(\"req user\", req.user);\n    // console.log(\"req session\", req.session);\n    next();\n  }); // routes registed......\n\n  Object(_routes_authRoutes__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(app);\n  Object(_routes_userRoutes__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(app);\n  mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_keys__WEBPACK_IMPORTED_MODULE_7___default.a.DB_URI, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  }).then(function () {\n    console.log(\"databased conneted...\");\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n});\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/helper/createStore.js":
/*!**************************************!*\
  !*** ./server/helper/createStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/reducers */ \"./src/reducers/index.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req) {\n  //! only when page initial api call then apply it. mean,\n  //- ( it only apply server side api call... )\n  // when initial api call we need pass headers inside cookie and set target url.\n  // cause initial api call axios dont't no our target url (backend api which u set by proxy). \n  // and also initial api call axios don't set by default cookie.\n  // To Solution ==> (when page initial call api.  ==> only then apply it )\n  // we create axios instance and set baseUrl and cookie \n  // const axiosInstance = Axios.create({\n  //   baseURL :\"http://localhost:4001\",\n  //   headers: { \"cookie\": req.get(\"cookie\") || '' }\n  // })\n  // if not separate backend\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n    baseURL: \"http://localhost:4000/api\",\n    headers: {\n      \"cookie\": req.get(\"cookie\") || ''\n    }\n  });\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_src_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(axiosInstance)));\n  return store;\n});\n/* Note: \r\n.   reduxThunk has a extra method ( withExtraArgument )\r\n    we pass any data to call it \r\n    and we get this value from action when define dispatch action \r\n    like  ==> // (dispatch, getState, outData)=>{}\r\n*/\n\n//# sourceURL=webpack:///./server/helper/createStore.js?");

/***/ }),

/***/ "./server/helper/renderer.js":
/*!***********************************!*\
  !*** ./server/helper/renderer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/Routes */ \"./src/Routes.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.url,\n    context: {}\n  }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_src_Routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"])))); // send html without redux data.........\n\n  return template(content, store);\n});\n;\n\nfunction template(content, store) {\n  return \"\\n    <html lang=\\\"en\\\">\\n    <head>\\n      <meta charset=\\\"UTF-8\\\">\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n      <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n      <meta name=\\\"themes\\\" content=\\\"#f43454\\\">\\n      <title>Server Side Rendering</title>\\n      <link rel=\\\"stylesheet\\\" href=\\\"static/css/main.css\\\">\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\".concat(content, \"</div>\\n      <script>\\n        window.INITIAL_STATE = \").concat(JSON.stringify(store.getState()), \"\\n      </script>\\n      <script src=\\\"static/js/bundle.js\\\"></script>\\n    </body>\\n    </html>\\n  \");\n}\n\n//# sourceURL=webpack:///./server/helper/renderer.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  username: String,\n  email: String,\n  password: String,\n  avatar: String\n}, {\n  timestamp: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', userSchema);\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ }),

/***/ "./server/passport/passportLocal.js":
/*!******************************************!*\
  !*** ./server/passport/passportLocal.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar LocalStrategey = __webpack_require__(/*! passport-local */ \"passport-local\").Strategy;\n\nvar bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar User = mongoose.model(\"User\");\npassport.use(new LocalStrategey({\n  usernameField: 'email'\n},\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password, done) {\n    var user, matched;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return User.findOne({\n              email: email\n            });\n\n          case 2:\n            user = _context.sent;\n\n            if (user) {\n              _context.next = 5;\n              break;\n            }\n\n            return _context.abrupt(\"return\", done(null, false, {\n              message: \"Not Register via this Email Yet\",\n              path: 'email'\n            }));\n\n          case 5:\n            _context.next = 7;\n            return bcryptjs.compare(password, user.password);\n\n          case 7:\n            matched = _context.sent;\n\n            if (matched) {\n              _context.next = 10;\n              break;\n            }\n\n            return _context.abrupt(\"return\", done(null, false, {\n              message: \"Invalid Password\",\n              path: 'password'\n            }));\n\n          case 10:\n            return _context.abrupt(\"return\", done(null, user));\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}())); // get user after done() fun call  \n// set it memory ==> req session (get it req.session)\n\npassport.serializeUser(function (user, done) {\n  done(null, user.id);\n}); // set it current user inside req object..... (get it req.user)\n\npassport.deserializeUser(function (userId, done) {\n  User.findById(userId, function (err, user) {\n    done(err, _.pick(user, ['username', 'email', '_id']));\n  });\n});\n\n//# sourceURL=webpack:///./server/passport/passportLocal.js?");

/***/ }),

/***/ "./server/routes/authRoutes.js":
/*!*************************************!*\
  !*** ./server/routes/authRoutes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_7___default.a.model(\"User\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.post(\"/api/auth/login\",\n  /*#__PURE__*/\n  function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res, next) {\n      var schema, _schema$validate, error, customError, user, _customError, newError, errors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _error;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.object({\n                email: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().email({\n                  minDomainSegments: 2,\n                  tlds: {\n                    allow: [\"com\", \"net\"]\n                  }\n                }).required(),\n                password: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().min(3).required()\n              });\n              _context.prev = 1;\n              // initial user given input validate........\n              _schema$validate = schema.validate(req.body, {\n                abortEarly: false\n              }), error = _schema$validate.error;\n\n              if (!error) {\n                _context.next = 8;\n                break;\n              }\n\n              customError = new Error();\n              customError.statusCode = 401;\n              customError.error = error;\n              throw customError;\n\n            case 8:\n              _context.next = 10;\n              return User.findOne({\n                email: req.body.email\n              });\n\n            case 10:\n              user = _context.sent;\n\n              if (user) {\n                _context.next = 17;\n                break;\n              }\n\n              _customError = new Error();\n              _customError.statusCode = 401;\n              newError = {\n                details: [{\n                  message: \"This Email is not yet Registered\",\n                  path: [\"email\"]\n                }]\n              };\n              _customError.error = newError;\n              throw _customError;\n\n            case 17:\n              // if u put it bottom u need call it with (req, res, next) and we got more control\n              // Passport hit............\n              passport__WEBPACK_IMPORTED_MODULE_3___default.a.authenticate(\"local\", function (err, user, info) {\n                // this callback custom cb extend more control\n                // when we throw error from passport strategy ( password not or user not found )\n                if (!user) return res.send(\"User not Found\");\n                req.logIn(user, function (err) {\n                  if (err) return next(err);\n                  res.send(user);\n                });\n              })(req, res, next);\n              _context.next = 44;\n              break;\n\n            case 20:\n              _context.prev = 20;\n              _context.t0 = _context[\"catch\"](1);\n              errors = {};\n\n              if (!_context.t0.error) {\n                _context.next = 43;\n                break;\n              }\n\n              _iteratorNormalCompletion = true;\n              _didIteratorError = false;\n              _iteratorError = undefined;\n              _context.prev = 27;\n\n              for (_iterator = _context.t0.error.details[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                _error = _step.value;\n                errors[_error.path[0]] = _error.message;\n              }\n\n              _context.next = 35;\n              break;\n\n            case 31:\n              _context.prev = 31;\n              _context.t1 = _context[\"catch\"](27);\n              _didIteratorError = true;\n              _iteratorError = _context.t1;\n\n            case 35:\n              _context.prev = 35;\n              _context.prev = 36;\n\n              if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                _iterator[\"return\"]();\n              }\n\n            case 38:\n              _context.prev = 38;\n\n              if (!_didIteratorError) {\n                _context.next = 41;\n                break;\n              }\n\n              throw _iteratorError;\n\n            case 41:\n              return _context.finish(38);\n\n            case 42:\n              return _context.finish(35);\n\n            case 43:\n              return _context.abrupt(\"return\", res.send(errors));\n\n            case 44:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 20], [27, 31, 35, 43], [36,, 38, 42]]);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n  app.post(\"/api/auth/register\",\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res, next) {\n      var schema, _schema$validate2, error, customError, user, newError, _customError2, salt, hashedPassword, errors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _error2;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.object({\n                username: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().min(3).required(),\n                email: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().email({\n                  minDomainSegments: 2,\n                  tlds: {\n                    allow: [\"com\", \"net\"]\n                  }\n                }).required(),\n                password: _hapi_joi__WEBPACK_IMPORTED_MODULE_4___default.a.string().min(3).required()\n              });\n              _context2.prev = 1;\n              _schema$validate2 = schema.validate(req.body, {\n                abortEarly: false\n              }), error = _schema$validate2.error;\n\n              if (!error) {\n                _context2.next = 8;\n                break;\n              }\n\n              customError = new Error();\n              customError.statusCode = 401;\n              customError.error = error;\n              throw customError;\n\n            case 8:\n              _context2.next = 10;\n              return User.findOne({\n                email: req.body.email\n              });\n\n            case 10:\n              user = _context2.sent;\n\n              if (!user) {\n                _context2.next = 17;\n                break;\n              }\n\n              newError = {\n                details: [{\n                  message: \"This Email Already registered\",\n                  path: [\"email\"]\n                }]\n              };\n              _customError2 = new Error();\n              _customError2.statusCode = 401;\n              _customError2.error = newError;\n              throw _customError2;\n\n            case 17:\n              _context2.next = 19;\n              return bcryptjs__WEBPACK_IMPORTED_MODULE_5___default.a.genSalt(10);\n\n            case 19:\n              salt = _context2.sent;\n              _context2.next = 22;\n              return bcryptjs__WEBPACK_IMPORTED_MODULE_5___default.a.hash(req.body.password, salt);\n\n            case 22:\n              hashedPassword = _context2.sent;\n              _context2.next = 25;\n              return new User(_objectSpread({}, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.pick(req.body, [\"email\", \"username\"]), {\n                password: hashedPassword\n              })).save();\n\n            case 25:\n              user = _context2.sent;\n              res.send(\"Resigter Success\");\n              _context2.next = 53;\n              break;\n\n            case 29:\n              _context2.prev = 29;\n              _context2.t0 = _context2[\"catch\"](1);\n              errors = {};\n\n              if (!_context2.t0.error) {\n                _context2.next = 52;\n                break;\n              }\n\n              _iteratorNormalCompletion2 = true;\n              _didIteratorError2 = false;\n              _iteratorError2 = undefined;\n              _context2.prev = 36;\n\n              for (_iterator2 = _context2.t0.error.details[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                _error2 = _step2.value;\n                errors[_error2.path[0]] = _error2.message;\n              }\n\n              _context2.next = 44;\n              break;\n\n            case 40:\n              _context2.prev = 40;\n              _context2.t1 = _context2[\"catch\"](36);\n              _didIteratorError2 = true;\n              _iteratorError2 = _context2.t1;\n\n            case 44:\n              _context2.prev = 44;\n              _context2.prev = 45;\n\n              if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n                _iterator2[\"return\"]();\n              }\n\n            case 47:\n              _context2.prev = 47;\n\n              if (!_didIteratorError2) {\n                _context2.next = 50;\n                break;\n              }\n\n              throw _iteratorError2;\n\n            case 50:\n              return _context2.finish(47);\n\n            case 51:\n              return _context2.finish(44);\n\n            case 52:\n              res.send(errors);\n\n            case 53:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 29], [36, 40, 44, 52], [45,, 47, 51]]);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }()); // Logout Route..........\n\n  app.get(\"/api/auth/logout\", function (req, res, next) {\n    req.logout();\n    res.status(200).json({\n      message: \"Logout Success......\"\n    });\n  }); // currentUser Route.......\n\n  app.get(\"/api/auth/current-user\", function (req, res, next) {\n    res.send(req.user);\n  });\n});\n\n//# sourceURL=webpack:///./server/routes/authRoutes.js?");

/***/ }),

/***/ "./server/routes/userRoutes.js":
/*!*************************************!*\
  !*** ./server/routes/userRoutes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.model(\"User\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.get(\"/api/users\", function (req, res, next) {\n    res.send([{\n      name: \"Rasel\"\n    }]);\n  });\n});\n\n//# sourceURL=webpack:///./server/routes/userRoutes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helper_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/renderer */ \"./server/helper/renderer.js\");\n/* harmony import */ var _helper_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper/createStore */ \"./server/helper/createStore.js\");\n/* harmony import */ var _src_Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Routes */ \"./src/Routes.js\");\n/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/keys */ \"./config/keys.js\");\n/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app */ \"./server/app.js\");\n\n\n\n // react SSR staff.......\n\n\n\n // client Side Root App ( Virtual Dom )\n\n\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, '/')));\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"build\"));\n // our backend bussness logic\n\n\nObject(_app__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(server); // connect our backend-rest-api via proxy........\n// server.use('/api', expressHttpProxy('http://localhost:4001', {\n//   proxyReqOptDecorator(opts){\n//     opts.headers['x-forwarded-host'] = 'localhost:4000'\n//     return opts\n//   }\n// }))\n// For Dev Tools\n// Get Live Client bundle js and css file from 3000 port using proxy server......\n\nserver.use([\"/static\", \"/sockjs-node\"], http_proxy_middleware__WEBPACK_IMPORTED_MODULE_3___default()({\n  target: \"http://localhost:3000\",\n  ws: true,\n  logLevel: \"error\",\n  changeOrigin: true\n})); // express give responsible any route to react router. \n\nserver.get(\"*\", function (req, res) {\n  var store = Object(_helper_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req); // NOTE: Problem. We need essential data to page render from server.\n  // 1. So. we need api call before server send html.\n  // 2. Here, we call loadData function which (make api call) and get data.\n  // 3. finaly server side redux store fill via his essential data.\n  // 4. and server send ( html + data ) + server side redux store  \n  //  matchRoutes <== pull client-site route each object (which you define as a Array)\n  //  we recieved (loadData) function. which is set route object. and it comming every page.\n\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"matchRoutes\"])(_src_Routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store) : null;\n  }); // wait server render html.... (cause we need also data)\n\n  Promise.all(promises).then(function () {\n    var content = Object(_helper_renderer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req, store); // now server side redux store is full fill via data.....\n    // (cause.. here loadData function execute finished)\n    // and now send response html + data + and (server side redux store )\n\n    res.send(content);\n  });\n});\nvar PORT = _config_keys__WEBPACK_IMPORTED_MODULE_8___default.a.PORT;\nserver.listen(PORT, function () {\n  return console.log(\"server is running on http://localhost:\".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _actions_authAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/authAction */ \"./src/actions/authAction.js\");\n/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Navigation/Navigation */ \"./src/components/Navigation/Navigation.jsx\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _React$Component);\n\n  function App() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// this.props.fetchCurrentUser()    \n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"App\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"header\", {\n        className: \"header\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null))), Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(this.props.route.routes));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nfunction loadData(store) {\n  return store.dispatch(Object(_actions_authAction__WEBPACK_IMPORTED_MODULE_8__[\"fetchCurrentUser\"])());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(null, {\n    fetchCurrentUser: _actions_authAction__WEBPACK_IMPORTED_MODULE_8__[\"fetchCurrentUser\"]\n  })(App),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/UsersListPage */ \"./src/pages/UsersListPage.jsx\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/pages/HomePage.jsx\");\n/* harmony import */ var _pages_AboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/AboutPage */ \"./src/pages/AboutPage.jsx\");\n/* harmony import */ var _pages_auth_LoginPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth/LoginPage */ \"./src/pages/auth/LoginPage.jsx\");\n/* harmony import */ var _pages_auth_RegisterPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/RegisterPage */ \"./src/pages/auth/RegisterPage.jsx\");\n/* harmony import */ var _pages_DashboardPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/DashboardPage */ \"./src/pages/DashboardPage.jsx\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar routes = [_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n  routes: [_objectSpread({}, _pages_HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    path: \"/\",\n    exact: true\n  }), _objectSpread({}, _pages_DashboardPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    path: \"/dashboard\"\n  }), {\n    component: _pages_AboutPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    path: \"/about\"\n  }, _objectSpread({}, _pages_UsersListPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    path: \"/users\"\n  }), _objectSpread({}, _pages_auth_LoginPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    path: \"/login\"\n  }), _objectSpread({}, _pages_auth_RegisterPage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    path: \"/register\"\n  })]\n})];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes); // NOTE:: here page == { component: PageName, loadData: function }\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/actions/authAction.js":
/*!***********************************!*\
  !*** ./src/actions/authAction.js ***!
  \***********************************/
/*! exports provided: register, login, fetchCurrentUser, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCurrentUser\", function() { return fetchCurrentUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ \"./src/actions/types.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // Register Api Call........\n\nvar register = function register(userData, history) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState, api) {\n        var _ref2, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return api.post(\"/auth/register\", _objectSpread({}, userData));\n\n              case 3:\n                _ref2 = _context.sent;\n                data = _ref2.data;\n                history.push(\"/login\");\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_4__[\"SIGN_UP\"]\n                });\n                _context.next = 12;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](0);\n                console.log(_context.t0);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 9]]);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n}; //~ login action.......\n\nvar login = function login(userData) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch, getState, api) {\n        var _ref4, data, payload;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return api.post(\"/auth/login\", _objectSpread({}, userData));\n\n              case 3:\n                _ref4 = _context2.sent;\n                data = _ref4.data;\n\n                if (data) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\");\n\n              case 7:\n                console.log(data);\n                payload = {\n                  avatar: data.avatar,\n                  username: data.username,\n                  userId: data._id,\n                  email: data.email\n                };\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_4__[\"LOGIN\"],\n                  payload: payload\n                });\n                _context2.next = 15;\n                break;\n\n              case 12:\n                _context2.prev = 12;\n                _context2.t0 = _context2[\"catch\"](0);\n                console.log(_context2.t0);\n\n              case 15:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 12]]);\n      }));\n\n      return function (_x4, _x5, _x6) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n}; //~ auto login when componopentDidMount ==> client site\n\nvar fetchCurrentUser = function fetchCurrentUser() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch, getState, api) {\n        var res, data, payload;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.prev = 0;\n                _context3.next = 3;\n                return api.get(\"/auth/current-user\");\n\n              case 3:\n                res = _context3.sent;\n                // console.log(res);\n                data = res.data;\n                console.log(\"currentUser : \", data);\n\n                if (data) {\n                  _context3.next = 8;\n                  break;\n                }\n\n                return _context3.abrupt(\"return\");\n\n              case 8:\n                payload = {\n                  username: data.username,\n                  userId: data._id,\n                  email: data.email,\n                  avatar: data.avatar\n                };\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_4__[\"LOGIN\"],\n                  payload: payload\n                });\n                _context3.next = 15;\n                break;\n\n              case 12:\n                _context3.prev = 12;\n                _context3.t0 = _context3[\"catch\"](0);\n                console.log(_context3.t0);\n\n              case 15:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[0, 12]]);\n      }));\n\n      return function (_x7, _x8, _x9) {\n        return _ref5.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar logout = function logout() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch, getState, api) {\n        var res;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                _context4.next = 2;\n                return api.get(\"/auth/logout\");\n\n              case 2:\n                res = _context4.sent;\n\n                if (res.status === 200) {\n                  dispatch({\n                    type: _types__WEBPACK_IMPORTED_MODULE_4__[\"LOGOUT\"],\n                    payload: {}\n                  });\n                }\n\n              case 4:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      return function (_x10, _x11, _x12) {\n        return _ref6.apply(this, arguments);\n      };\n    }()\n  );\n};\n\n//# sourceURL=webpack:///./src/actions/authAction.js?");

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: FETCH_USERS, FETCH_USER, LOGIN, LOGOUT, SIGN_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USER\", function() { return FETCH_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN\", function() { return LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT\", function() { return LOGOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP\", function() { return SIGN_UP; });\nvar FETCH_USERS = 'fetch_users';\nvar FETCH_USER = 'fetch_user';\nvar LOGIN = \"login\";\nvar LOGOUT = \"logout\";\nvar SIGN_UP = \"signup\";\n\n//# sourceURL=webpack:///./src/actions/types.js?");

/***/ }),

/***/ "./src/actions/userAction.js":
/*!***********************************!*\
  !*** ./src/actions/userAction.js ***!
  \***********************************/
/*! exports provided: fetchUsers, fetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"./src/actions/types.js\");\n\n\n\n // Get All User Array\n\nvar fetchUsers = function fetchUsers() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState, api) {\n        var _ref2, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return api.get(\"/users\");\n\n              case 3:\n                _ref2 = _context.sent;\n                data = _ref2.data;\n                console.log(data);\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_USERS\"],\n                  payload: data\n                });\n                _context.next = 12;\n                break;\n\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](0);\n                console.log(_context.t0);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 9]]);\n      }));\n\n      return function (_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n}; // Get Single User Object ......\n\nvar fetchUser = function fetchUser(userId) {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch, getState, api) {\n        var _ref4, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return api.get(\"/users\" + userId);\n\n              case 2:\n                _ref4 = _context2.sent;\n                data = _ref4.data;\n                dispatch({\n                  type: _types__WEBPACK_IMPORTED_MODULE_3__[\"FETCH_USER\"],\n                  payload: data\n                });\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x4, _x5, _x6) {\n        return _ref3.apply(this, arguments);\n      };\n    }()\n  );\n};\n\n//# sourceURL=webpack:///./src/actions/userAction.js?");

/***/ }),

/***/ "./src/components/Form/Input.css":
/*!***************************************!*\
  !*** ./src/components/Form/Input.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/components/Form/Input.css?");

/***/ }),

/***/ "./src/components/Form/Input.jsx":
/*!***************************************!*\
  !*** ./src/components/Form/Input.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.css */ \"./src/components/Form/Input.css\");\n/* harmony import */ var _Input_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Input_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Input = function Input(_ref) {\n  var name = _ref.name,\n      _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'text' : _ref$type,\n      label = _ref.label,\n      value = _ref.value,\n      onClick = _ref.onClick,\n      onBlur = _ref.onBlur,\n      onChange = _ref.onChange,\n      placeholder = _ref.placeholder,\n      errors = _ref.errors,\n      tauched = _ref.tauched;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"input_group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: [\"label\", errors && tauched ? \"error_alert\" : \"\"].join(\" \"),\n    htmlFor: name\n  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: [\"input\", errors && errors[name] && tauched ? \"input_error\" : \"\", errors && !errors[name] && tauched ? \"input_success\" : \"\"].join(\" \"),\n    name: name,\n    type: type,\n    value: value,\n    placeholder: placeholder,\n    onChange: onChange,\n    onBlur: onBlur,\n    onClick: onClick\n  }), errors && tauched ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error_alert\"\n  }, errors[name]) : '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n//# sourceURL=webpack:///./src/components/Form/Input.jsx?");

/***/ }),

/***/ "./src/components/Navigation/Navigation.jsx":
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_authAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/authAction */ \"./src/actions/authAction.js\");\n/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation.scss */ \"./src/components/Navigation/Navigation.scss\");\n/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navigation_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Navigation = function Navigation(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"main_navigation\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"main_nav\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    exact: true,\n    to: \"/\"\n  }, \" Home \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/about\"\n  }, \" About \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/users\"\n  }, \" Users \"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"auth_nav\"\n  }, props.auth.userId ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/dashboard\"\n  }, props.auth.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    onClick: props.logout\n  }, \"Logout\"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/login\"\n  }, \"Login\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    to: \"/register\"\n  }, \"Register\")))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    auth: state.auth\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, {\n  login: _actions_authAction__WEBPACK_IMPORTED_MODULE_3__[\"login\"],\n  logout: _actions_authAction__WEBPACK_IMPORTED_MODULE_3__[\"logout\"]\n})(Navigation));\n\n//# sourceURL=webpack:///./src/components/Navigation/Navigation.jsx?");

/***/ }),

/***/ "./src/components/Navigation/Navigation.scss":
/*!***************************************************!*\
  !*** ./src/components/Navigation/Navigation.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/components/Navigation/Navigation.scss?");

/***/ }),

/***/ "./src/pages/AboutPage.jsx":
/*!*********************************!*\
  !*** ./src/pages/AboutPage.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"About Page\");\n});\n\n//# sourceURL=webpack:///./src/pages/AboutPage.jsx?");

/***/ }),

/***/ "./src/pages/DashboardPage.jsx":
/*!*************************************!*\
  !*** ./src/pages/DashboardPage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar DashboardPage = function DashboardPage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Dummy User Dashboard\"), props.auth.isAuthenticated && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Wellcome to Mr. \", props.auth.username));\n};\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var auth = _ref.auth;\n  return {\n    auth: auth\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(DashboardPage)\n});\n\n//# sourceURL=webpack:///./src/pages/DashboardPage.jsx?");

/***/ }),

/***/ "./src/pages/HomePage.jsx":
/*!********************************!*\
  !*** ./src/pages/HomePage.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar HomePage = function HomePage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Home Page\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: HomePage\n});\n\n//# sourceURL=webpack:///./src/pages/HomePage.jsx?");

/***/ }),

/***/ "./src/pages/UsersListPage.jsx":
/*!*************************************!*\
  !*** ./src/pages/UsersListPage.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _actions_userAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/userAction */ \"./src/actions/userAction.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar UsersList =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UsersList, _Component);\n\n  function UsersList() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UsersList);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UsersList)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"renderUsers\", function () {\n      return _this.props.users.map(function (user) {\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"ul\", {\n          key: user._id\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"li\", null, user.username));\n      });\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UsersList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.fetchUsers();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h1\", null, \"User List\"), this.renderUsers());\n    }\n  }]);\n\n  return UsersList;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nvar mapToStateProps = function mapToStateProps(state) {\n  return {\n    users: state.users\n  };\n}; //? Why ==> LoadData Function ?\n// we call frist time before server send html.\n// cause: we need all users Data, and we send from (html+user data) both.\n// client site js recieved this data (user data), and pass redux initial State.\n\n\nvar loadData = function loadData(store) {\n  return store.dispatch(Object(_actions_userAction__WEBPACK_IMPORTED_MODULE_9__[\"fetchUsers\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapToStateProps, {\n    fetchUsers: _actions_userAction__WEBPACK_IMPORTED_MODULE_9__[\"fetchUsers\"]\n  })(UsersList),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./src/pages/UsersListPage.jsx?");

/***/ }),

/***/ "./src/pages/auth/LoginPage.jsx":
/*!**************************************!*\
  !*** ./src/pages/auth/LoginPage.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _actions_authAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/authAction */ \"./src/actions/authAction.js\");\n/* harmony import */ var _components_Form_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Form/Input */ \"./src/components/Form/Input.jsx\");\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar LoginPage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(LoginPage, _React$Component);\n\n  function LoginPage() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginPage);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(LoginPage)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      data: {\n        email: {\n          value: \"\",\n          tauched: false\n        },\n        password: {\n          value: \"\",\n          tauched: false\n        }\n      },\n      errors: null\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"validateChange\", function (e) {\n      var errors = {};\n\n      if ([e.target.name] == 'email') {\n        if (e.target.value == '') {\n          errors.email = \"Not Allowed Empty\";\n        } else if (e.target.value.length <= 2) {\n          errors.email = \"Email Length must be greater than 3 Character\";\n        } else {\n          errors.email = '';\n        }\n      }\n\n      if ([e.target.name] == 'password') {\n        if (e.target.value == '') {\n          errors.password = \"Not Allowed Empty Password\";\n        } else if (e.target.value.length <= 2) {\n          errors.password = \"Password Length must be greater than 3 Character\";\n        } else {\n          errors.password = '';\n        }\n      }\n\n      return Object.keys(errors).length ? errors : null;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleClick\", function (e) {\n      var errors = _this.validateChange(e);\n\n      _this.setState(_objectSpread({}, _this.state, {\n        errors: _objectSpread({}, _this.state.errors, {}, errors),\n        data: _objectSpread({}, _this.state.data, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, e.target.name, _objectSpread({}, _this.state.data[e.target.name], {\n          tauched: true\n        })))\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleChange\", function (e) {\n      var errors = _this.validateChange(e);\n\n      _this.setState(_objectSpread({}, _this.state, {\n        errors: _objectSpread({}, _this.state.errors, {}, errors),\n        data: _objectSpread({}, _this.state.data, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, e.target.name, _objectSpread({}, _this.state.data[e.target.name], {\n          value: e.target.value,\n          tauched: true\n        })))\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleBlur\", function (e) {\n      _this.setState(_objectSpread({}, _this.state, {\n        data: _objectSpread({}, _this.state.data, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, e.target.name, _objectSpread({}, _this.state.data[e.target.name], {\n          tauched: true\n        })))\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n\n      _this.props.login({\n        email: _this.state.data.email.value,\n        password: _this.state.data.password.value\n      });\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoginPage, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"form_container\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h2\", null, \"Login Here.............\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        label: \"Email\",\n        name: \"email\",\n        value: this.state.data.email.value,\n        onChange: this.handleChange,\n        onBlur: this.handleBlur,\n        onClick: this.handleClick,\n        placeholder: \"Enter Your Email\",\n        errors: this.state.errors,\n        tauched: this.state.data['email'].tauched\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        label: \"Password\",\n        name: \"password\",\n        value: this.state.data.password.value,\n        onChange: this.handleChange,\n        onBlur: this.handleBlur,\n        onClick: this.handleClick,\n        placeholder: \"Enter Your Password\",\n        errors: this.state.errors,\n        tauched: this.state.data['password'].tauched\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        type: \"Submit\"\n      }, \"Login\")));\n    }\n  }]);\n\n  return LoginPage;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(null, {\n    login: _actions_authAction__WEBPACK_IMPORTED_MODULE_9__[\"login\"]\n  })(LoginPage)\n});\n\n//# sourceURL=webpack:///./src/pages/auth/LoginPage.jsx?");

/***/ }),

/***/ "./src/pages/auth/RegisterPage.jsx":
/*!*****************************************!*\
  !*** ./src/pages/auth/RegisterPage.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _actions_authAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/authAction */ \"./src/actions/authAction.js\");\n/* harmony import */ var _components_Form_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Form/Input */ \"./src/components/Form/Input.jsx\");\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar RegisterPage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RegisterPage, _React$Component);\n\n  function RegisterPage() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RegisterPage);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RegisterPage)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"state\", {\n      data: {\n        email: {\n          value: \"\",\n          tauched: false\n        },\n        username: {\n          value: \"\",\n          tauched: false\n        },\n        password: {\n          value: \"\",\n          tauched: false\n        }\n      },\n      errors: null\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"validateChange\", function (e) {\n      var errors = {};\n\n      if ([e.target.name] == 'email') {\n        if (e.target.value == '') {\n          errors.email = \"Not Allowed Empty\";\n        } else if (e.target.value.length <= 2) {\n          errors.email = \"Email Length must be greater than 3 Character\";\n        } else {\n          errors.email = '';\n        }\n      }\n\n      if ([e.target.name] == 'username') {\n        if (e.target.value == '') {\n          errors.username = \"Not Allowed Empty username\";\n        } else if (e.target.value.length <= 2) {\n          errors.username = \"username Length must be greater than 3 Character\";\n        } else {\n          errors.username = '';\n        }\n      }\n\n      if ([e.target.name] == 'password') {\n        if (e.target.value == '') {\n          errors.password = \"Not Allowed Empty Password\";\n        } else if (e.target.value.length <= 2) {\n          errors.password = \"Password Length must be greater than 3 Character\";\n        } else {\n          errors.password = '';\n        }\n      }\n\n      return Object.keys(errors).length ? errors : null;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleClick\", function (e) {\n      var errors = _this.validateChange(e);\n\n      _this.setState(_objectSpread({}, _this.state, {\n        errors: _objectSpread({}, _this.state.errors, {}, errors),\n        data: _objectSpread({}, _this.state.data, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, e.target.name, _objectSpread({}, _this.state.data[e.target.name], {\n          tauched: true\n        })))\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleChange\", function (e) {\n      var errors = _this.validateChange(e);\n\n      _this.setState(_objectSpread({}, _this.state, {\n        errors: _objectSpread({}, _this.state.errors, {}, errors),\n        data: _objectSpread({}, _this.state.data, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, e.target.name, _objectSpread({}, _this.state.data[e.target.name], {\n          value: e.target.value,\n          tauched: true\n        })))\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleBlur\", function (e) {\n      _this.setState(_objectSpread({}, _this.state, {\n        data: _objectSpread({}, _this.state.data, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, e.target.name, _objectSpread({}, _this.state.data[e.target.name], {\n          tauched: true\n        })))\n      }));\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n      var userData = {\n        email: _this.state.data.email.value,\n        username: _this.state.data.username.value,\n        password: _this.state.data.password.value\n      };\n\n      _this.props.register(userData, _this.props.history);\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RegisterPage, [{\n    key: \"render\",\n    value: function render() {\n      console.log(this.state.errors);\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"form_container\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"h2\", null, \"Register Here.............\"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        label: \"Email\",\n        name: \"email\",\n        value: this.state.data.email.value,\n        onChange: this.handleChange,\n        onBlur: this.handleBlur,\n        onClick: this.handleClick,\n        placeholder: \"Enter Your Email\",\n        errors: this.state.errors,\n        tauched: this.state.data['email'].tauched\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        label: \"Username\",\n        name: \"username\",\n        value: this.state.data.username.value,\n        onChange: this.handleChange,\n        onBlur: this.handleBlur,\n        onClick: this.handleClick,\n        placeholder: \"Enter Your Username\",\n        errors: this.state.errors,\n        tauched: this.state.data['username'].tauched\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Form_Input__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        label: \"Password\",\n        name: \"password\",\n        value: this.state.data.password.value,\n        onChange: this.handleChange,\n        onBlur: this.handleBlur,\n        onClick: this.handleClick,\n        placeholder: \"Enter Your Password\",\n        errors: this.state.errors,\n        tauched: this.state.data['password'].tauched\n      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"button\", {\n        type: \"Submit\"\n      }, \"Register\")));\n    }\n  }]);\n\n  return RegisterPage;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(null, {\n    register: _actions_authAction__WEBPACK_IMPORTED_MODULE_9__[\"register\"]\n  })(RegisterPage)\n});\n\n//# sourceURL=webpack:///./src/pages/auth/RegisterPage.jsx?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ \"./src/actions/types.js\");\n\n\n\nvar authReducer = function authReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"LOGIN\"]:\n      return action.payload;\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"LOGOUT\"]:\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\nvar usersReducer = function usersReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_USERS\"]:\n      return action.payload;\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_USER\"]:\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  auth: authReducer,\n  users: usersReducer\n}));\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/assertThisInitialized\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/assertThisInitialized%22?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/joi\");\n\n//# sourceURL=webpack:///external_%22@hapi/joi%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-proxy-middleware\");\n\n//# sourceURL=webpack:///external_%22http-proxy-middleware%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });