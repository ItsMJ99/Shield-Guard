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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_2_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_2_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js */ \"https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_2_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_2_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__]);\n([https_www_gstatic_com_firebasejs_9_2_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_2_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\r\n\r\n\r\n// import { initializeApp } from \"firebase/app\";\r\n// import { getFirestore, getDocs, collection, addDoc, onAuthStateChanged } from \"firebase/firestore\";\r\n\r\nconst firebaseConfig = {\r\n    apiKey: \"AIzaSyD5t1c_-5hy0mwAlmNngRI2QOnA8XJgYwg\",\r\n    authDomain: \"shield-guard-44ecf.firebaseapp.com\",\r\n    databaseURL: \"https://shield-guard-44ecf-default-rtdb.firebaseio.com\",\r\n    projectId: \"shield-guard-44ecf\",\r\n    storageBucket: \"shield-guard-44ecf.appspot.com\",\r\n    messagingSenderId: \"792292181818\",\r\n    appId: \"1:792292181818:web:e5f05e1714526cc0e2b203\"\r\n};\r\n\r\n//init firebase\r\nconst app = (0,https_www_gstatic_com_firebasejs_9_2_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\n//init service\r\nconst db = (0,https_www_gstatic_com_firebasejs_9_2_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\nconst auth = (0,https_www_gstatic_com_firebasejs_9_2_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\n\r\n//refers to the collection to access\r\nconst colRef = (0,https_www_gstatic_com_firebasejs_9_2_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'society registration requests')\r\n\r\n//add records to Firestore\r\nconst addSocReq = document.querySelector('.societyRegistration')\r\naddSocReq.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n    ;(0,https_www_gstatic_com_firebasejs_9_2_0_firebase_firestore_js__WEBPACK_IMPORTED_MODULE_1__.addDoc)(colRef, {\r\n        owner_fname: addSocReq.o_fname.value,\r\n        owner_mname: addSocReq.o_mname.value,\r\n        owner_lname: addSocReq.o_lname.value,\r\n        owner_email: addSocReq.o_email.value,\r\n        owner_password: addSocReq.o_password.value,\r\n        owner_confirm_password: addSocReq.o_confirm_password.value,\r\n        owner_phoneno: addSocReq.o_phoneno.value,\r\n        owner_dob: addSocReq.o_dob.value,\r\n        owner_gender: addSocReq.o_gender.value,\r\n        owner_address: addSocReq.o_address.value,\r\n        owner_state: addSocReq.o_state.value,\r\n        owner_district: addSocReq.o_district.value,\r\n        owner_pincode: addSocReq.o_pincode.value,\r\n        society_name: addSocReq.s_name.value,\r\n        society_address: addSocReq.s_address.value,\r\n        society_state: addSocReq.s_state.value,\r\n        society_district: addSocReq.s_district.value,\r\n        society_pincode: addSocReq.s_pincode.value,\r\n        society_email: addSocReq.s_email.value,\r\n        society_phoneno: addSocReq.s_phoneno.value,\r\n        society_FoundingDay: addSocReq.s_date.value,\r\n        society_admins: addSocReq.s_admins.value,\r\n\r\n    }).then(() => {\r\n        addSocReq.reset()\r\n    })\r\n})\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://pbl_project/./src/config.js?");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/config.js");
/******/ 	
/******/ })()
;