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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/Y2VkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/module.js\n");

/***/ }),

/***/ "./src/app/components/app.js":
/*!***********************************!*\
  !*** ./src/app/components/app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass App {\n  constructor() {}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvY29tcG9uZW50cy9hcHAuanM/ZmZhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/app.js\n");

/***/ }),

/***/ "./src/app/components/datacenter.js":
/*!******************************************!*\
  !*** ./src/app/components/datacenter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ \"./src/app/components/server.js\");\n\n\n\nconst SETTINGS = {\n  ClassName: {\n    CONTAINER: 'server-canvas__container',\n    SERVER_TOGGLE: 'server-toggles'\n  },\n  Id: {\n    TEMPLATE: 'server'\n  },\n  INITIAL_SERVERS: 4\n};\n\nclass Datacenter {\n  constructor() {\n    this.container = document.querySelector(`.${SETTINGS.ClassName.CONTAINER}`);\n\n    this.serverToggles = document.querySelector(`.${SETTINGS.ClassName.SERVER_TOGGLE}`);\n\n    this.servers = [];\n\n    this._createInitialServers();\n\n    this._bindListeners();\n  }\n\n  _bindListeners() {\n    this.onToggleClick = this._onToggleClick.bind(this);\n    this.serverToggles.addEventListener('click', this.onToggleClick);\n  }\n\n  _createInitialServers() {\n    for (let i = 0; i < SETTINGS.INITIAL_SERVERS; i++) {\n      this.renderServer();\n    }\n  }\n\n  renderServer() {\n    const temp = document.querySelector(`#${SETTINGS.Id.TEMPLATE}`).innerHTML;\n    const tempFn = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"template\"])(temp);\n    const id = this.servers.length + 1;\n    const markup = tempFn({ id: id });\n    this.container.innerHTML += markup;\n\n    // const serverTemplate = document.querySelector(`#${SETTINGS.Id.TEMPLATE}`).innerHTML;\n    // const tempFn = template(serverTemplate);\n    // const tempHTML = tempFn({ id: id });\n    // this.container.innerHTML += tempHTML;\n    this.servers.push(new _server__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id));\n  }\n\n  removeServer() {\n    if (servers.length > 0) {\n      const server = servers.pop();\n      server.dispose();\n    }\n  }\n\n  _onToggleClick(evt) {\n    const id = evt.target.getAttribute('data-toggle-id');\n\n    if (id === 'add') {\n      this.renderServer();\n    } else if (id === 'remove') {\n      this.removeServer();\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Datacenter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWNlbnRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2NvbXBvbmVudHMvZGF0YWNlbnRlci5qcz8wMzEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xuXG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgQ2xhc3NOYW1lOiB7XG4gICAgQ09OVEFJTkVSOiAnc2VydmVyLWNhbnZhc19fY29udGFpbmVyJyxcbiAgICBTRVJWRVJfVE9HR0xFOiAnc2VydmVyLXRvZ2dsZXMnXG4gIH0sXG4gIElkOiB7XG4gICAgVEVNUExBVEU6ICdzZXJ2ZXInXG4gIH0sXG4gIElOSVRJQUxfU0VSVkVSUzogNFxufVxuXG5jbGFzcyBEYXRhY2VudGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtTRVRUSU5HUy5DbGFzc05hbWUuQ09OVEFJTkVSfWApO1xuXG4gICAgdGhpcy5zZXJ2ZXJUb2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7U0VUVElOR1MuQ2xhc3NOYW1lLlNFUlZFUl9UT0dHTEV9YCk7XG5cbiAgICB0aGlzLnNlcnZlcnMgPSBbXTtcblxuICAgIHRoaXMuX2NyZWF0ZUluaXRpYWxTZXJ2ZXJzKCk7XG5cbiAgICB0aGlzLl9iaW5kTGlzdGVuZXJzKCk7XG4gIH1cblxuICBfYmluZExpc3RlbmVycygpIHtcbiAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLl9vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXJ2ZXJUb2dnbGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgfVxuXG4gIF9jcmVhdGVJbml0aWFsU2VydmVycygpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgU0VUVElOR1MuSU5JVElBTF9TRVJWRVJTOyBpKyspIHtcbiAgICAgIHRoaXMucmVuZGVyU2VydmVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2VydmVyKCkge1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtTRVRUSU5HUy5JZC5URU1QTEFURX1gKS5pbm5lckhUTUw7XG4gICAgY29uc3QgdGVtcEZuID0gdGVtcGxhdGUodGVtcCk7XG4gICAgY29uc3QgaWQgPSB0aGlzLnNlcnZlcnMubGVuZ3RoICsgMTtcbiAgICBjb25zdCBtYXJrdXAgPSB0ZW1wRm4oeyBpZDogaWR9KTtcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgKz0gbWFya3VwO1xuXG4gICAgLy8gY29uc3Qgc2VydmVyVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtTRVRUSU5HUy5JZC5URU1QTEFURX1gKS5pbm5lckhUTUw7XG4gICAgLy8gY29uc3QgdGVtcEZuID0gdGVtcGxhdGUoc2VydmVyVGVtcGxhdGUpO1xuICAgIC8vIGNvbnN0IHRlbXBIVE1MID0gdGVtcEZuKHsgaWQ6IGlkIH0pO1xuICAgIC8vIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCArPSB0ZW1wSFRNTDtcbiAgICB0aGlzLnNlcnZlcnMucHVzaChuZXcgU2VydmVyKGlkKSk7XG4gIH1cblxuICByZW1vdmVTZXJ2ZXIoKSB7XG4gICAgaWYoc2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZXJ2ZXIgPSBzZXJ2ZXJzLnBvcCgpO1xuICAgICAgc2VydmVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBfb25Ub2dnbGVDbGljayhldnQpIHtcbiAgICBjb25zdCBpZCA9IGV2dC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS1pZCcpO1xuXG4gICAgaWYgKGlkID09PSAnYWRkJykge1xuICAgICAgdGhpcy5yZW5kZXJTZXJ2ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGlkID09PSAncmVtb3ZlJykge1xuICAgICAgdGhpcy5yZW1vdmVTZXJ2ZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YWNlbnRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBQ0E7QUF1REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/components/datacenter.js\n");

/***/ }),

/***/ "./src/app/components/server.js":
/*!**************************************!*\
  !*** ./src/app/components/server.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app/components/app.js\");\n\n\nclass Server {\n  constructor(id) {\n    this.id = id;\n\n    this.apps = [];\n  }\n\n  addApp() {\n    if (this.apps.length < 2) {\n      this.apps.push(new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    }\n  }\n\n  dispose() {}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Server);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvY29tcG9uZW50cy9zZXJ2ZXIuanM/N2RkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuY2xhc3MgU2VydmVyIHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICB0aGlzLmFwcHMgPSBbXTtcbiAgfVxuXG4gIGFkZEFwcCgpIHtcbiAgICBpZih0aGlzLmFwcHMubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5hcHBzLnB1c2gobmV3IEFwcCgpKTtcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBaUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/components/server.js\n");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_datacenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/datacenter */ \"./src/app/components/datacenter.js\");\n\n\n\n\nnew _components_datacenter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9hcHAvaW5kZXguanM/NmZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgRGF0YWNlbnRlciBmcm9tICcuL2NvbXBvbmVudHMvZGF0YWNlbnRlcic7XG5cbm5ldyBEYXRhY2VudGVyKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/index.js\n");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL21haW4uc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzE0M2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/main.scss\n");

/***/ })

/******/ });