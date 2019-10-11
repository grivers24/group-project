(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  \n    <div id=\"sidebar\" *ngIf=\"usersService.hidden === false\">\n      <a routerLink=\"/\" >{{logout}} </a>\n    </div>\n    <div id=\"content\">\n  <router-outlet></router-outlet>\n  </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<a routerLink=\"../inventory\">Back to Inventory</a>\n\n<div>\n    <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <ul class=\"list-group\" *ngFor=\"let sneaker of sneakers; let i = index\">\n        <img [src]=\"sneaker.pictureUrl\">\n        <li id=\"id\" class=\"list-group-item\">Name: {{sneaker.name}} <br> Type: {{ sneaker.type }} <br> Price:{{sneaker.price | currency}}</li>\n        <section style=\"display: inline-flex\" >\n        <button id=\"btn\" class=\"btn btn-primary\" (click)=\"onRemove(i)\">Remove</button>\n        </section>           \n        </ul>\n        <br>\n        <button class=\"btn btn-primary\" type=\"submit\">Proceed To Checkout</button>\n    </form>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <h1>Checkout</h1>\n  <section style=\"display:inline-flex\"><a routerLink='../cart'>\n      <h2> Back to Cart</h2>\n    </a> <a routerLink='../inventory'>\n      <h2> Back to Browsing </h2>\n    </a></section>\n  <br>\n  <div>\n    <h3>Subtotal: </h3>\n    <p>{{getSum() | currency}}</p>\n    <h3>Tax: </h3>\n    <p>{{getTax() | currency}}</p>\n    <h3>Total: </h3>\n    <p>{{getTotal() | currency}}</p>\n\n    <button class=\"btn btn-primary\" (click)=\"submit()\">Final Check Out</button>\n\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <form #f=\"ngForm\">\n          <div id=\"user-data\" ngModelGroup=\"userData\" #userData=\"ngModelGroup\">\n            <div>\n              <label for=\"nameOnCard\">Name On Card</label>\n              <br />\n              <input type=\"text\" id=\"nameOnCard\" ngModel name=\"nameOnCard\" required />\n            </div>\n            <div>\n              <label for=\"cardNumber\">Card Number</label>\n              <br />\n              <input type=\"text\" id=\"cardNumber\" ngModel name=\"cardNumber\" required />\n            </div>\n            <div>\n              <label for=\"zipCode\">Billing Zip Code</label>\n              <br />\n              <input type=\"text\" id=\"zipCode\" ngModel name=\"zipCode\" required />\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>error-page works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guestSignIn/guestsignin.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guestSignIn/guestsignin.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\n<div class=\"container\">\n    <div class='row'>\n      <div class=\"col-xs-12\">\n            <form (ngSubmit)=\"onSubmit()\" #g=\"ngForm\">\n                <div id=\"user-data\" ngModelGroup=\"userData\" #userData=\"ngModelGroup\">\n                    <div class=\"form-group\"></div>\n                    <h4>Login As Guest</h4>\n                    <label for=\"firstname\">First Name</label>\n                    <input type=\"text\" id=\"firstname\" #n class=\"form-control\" ngModel name=\"firstname\" required/>\n\n                \n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"email\" id=\"email\" class=\"form-control\" ngModel name=\"email\" required />\n                </div>\n\n                <button [disabled]=\"g.valid===false\" class=\"btn btn-primary\" type=\"submit\">Login As Guest</button>\n            </div>\n            </form>\n        </div>\n\n\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class='row'>\n        \n    </div>\n</div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Create a variable that changes the greeting based on if you're logged in or not -->\n<body>\n<div>\n<header>\n<h1>Sneakers.Co</h1>\n\n<h3>Login as user or guest to view our selection!</h3>\n</header> \n<section style=\"display:flex\"><app-userlogin style=\"margin-left: 10%\"></app-userlogin><guest-sign-in style=\"margin-left:40%\"></guest-sign-in></section>\n\n</div>\n</body>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div>\n        <h1>Sneaker Inventory</h1>\n        <div>\n            <button class=\"btn btn-primary\" (click)=\"onGetSneakers()\">Get Sneakers</button><br>\n            <section style=\"display: inline-flex; display:none\">\n                <h3>Cart Total: $</h3>\n                <h3 id=\"total\">0</h3>\n            </section>\n            <!-- <p>{{action.onGetSneakers}}</p>  -->\n\n            <br>\n            <ul class=\"list-group\" *ngFor=\"let sneaker of sneakers; let i = index\">\n                <img [src]=\"sneaker.pictureUrl\">\n                <br>\n                <li id=\"id\" class=\"list-group-item\">{{sneaker.name}} <br> Type: {{sneaker.type}}<br>\n                    Price:{{sneaker.price | currency}} <br>In-Stock:{{sneaker.quantity}}</li>\n                <br>\n                <section style=\"display: inline-flex\">\n                    <button class=\"btn btn-primary\" id=\"btn\" (click)=\"onAdd(i)\">Add</button><button id=\"btn\"\n                        class=\"btn btn-primary\" (click)=\"onRemove(i)\">Remove</button>\n                </section>\n                <br>\n            </ul>\n\n        </div>\n        <app-cart></app-cart>\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"viewCart()\">View Cart</button>\n    </div>\n\n\n\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\n<p>Welcome {{ username }}</p>\n<a routerLink = \"inventory\">View Inventory</a>\n<a routerLink = \"cart\">View Cart</a>\n\n\n<router-outlet></router-outlet>\n</body>\n\n\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userlogin/userlogin.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userlogin/userlogin.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class='row'>\n        <div class=\"col-xs-12\">\n            <form (ngSubmit)=\"onLoginSubmit()\" #u=\"ngForm\">\n                \n                <div  id=\"user-data\" ngModelGroup=\"userData\" #userData=\"ngModelGroup\">\n                    <div class=\"form-group\"></div>\n                    <h4>Login As User</h4>\n\n                    <label for=\"username\" >Username </label>\n                    <input type=\"text\" id=\"username\" #n class=\"form-control\" ngModel name=\"username\" required/>\n                \n                <div class=\"form-group\">\n                    <label for=\"lastname\">Password</label>\n                    <input type=\"password\" id=\"password\" class=\"form-control\" ngModel name=\"password\" required/>\n                </div>\n\n                <button [disabled]=\"u.valid===false\" class=\"btn btn-primary\" type=\"submit\">Login</button>\n                </div>\n                \n            </form>\n        </div>\n\n    </div>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
            /* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
            /* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
            /* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'inventory', component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_4__["InventoryComponent"] },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
                { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"] },
                { path: 'not-found', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"], data: { customMessage: 'Looks like this page could not be found' } },
                { path: '**', redirectTo: '/not-found' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(usersService) {
                    this.usersService = usersService;
                    this.logout = "Logout";
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _guestSignIn_guestsignin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guestSignIn/guestsignin.component */ "./src/app/guestSignIn/guestsignin.component.ts");
            /* harmony import */ var _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userlogin/userlogin.component */ "./src/app/userlogin/userlogin.component.ts");
            /* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
            /* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
            /* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
            /* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/inventory/inventory.component.ts");
            /* harmony import */ var _sneaker_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sneaker.service */ "./src/app/sneaker.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _guestSignIn_guestsignin_component__WEBPACK_IMPORTED_MODULE_10__["GuestSignInComponent"],
                        _userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_11__["UserloginComponent"],
                        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__["ErrorPageComponent"],
                        _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"],
                        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutComponent"],
                        _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_15__["InventoryComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                    ],
                    providers: [_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"], _sneaker_service__WEBPACK_IMPORTED_MODULE_16__["SneakerService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cart/cart.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/cart/cart.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("form{\r\n    text-align: center;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    \r\n}\r\nimg{\r\n   \r\n    height: 100px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\r\n\r\n}\r\nimg:hover{\r\n    height: 210px;\r\n    width:  52%; \r\n}\r\nul{\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n#btn{\r\n    width: 350px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    background-color: black;\r\n}\r\nbutton{\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    background-color: black;\r\n}\r\n#btn:hover{\r\n    background-color: dodgerblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFDQTs7SUFFSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlFQUF5RTs7QUFFN0U7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUVBQXVFO0lBQ3ZFLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgXHJcbn1cclxuaW1ne1xyXG4gICBcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcblxyXG59XHJcbmltZzpob3ZlcntcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB3aWR0aDogIDUyJTsgXHJcbn1cclxudWx7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuI2J0bntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4jYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/cart/cart.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/cart/cart.component.ts ***!
          \****************************************/
        /*! exports provided: CartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function () { return CartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            /* harmony import */ var _sneaker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sneaker.service */ "./src/app/sneaker.service.ts");
            var CartComponent = /** @class */ (function () {
                function CartComponent(route, router, usersService) {
                    this.route = route;
                    this.router = router;
                    this.usersService = usersService;
                    this.sneakers = _sneaker_service__WEBPACK_IMPORTED_MODULE_4__["cart"];
                }
                CartComponent.prototype.ngOnInit = function () {
                    // this.usersService.show();
                    console.log(_sneaker_service__WEBPACK_IMPORTED_MODULE_4__["cart"]);
                };
                CartComponent.prototype.onRemove = function (i) {
                    this.sneakers.splice(i, 1);
                };
                CartComponent.prototype.onSubmit = function () {
                    this.router.navigate(['checkout'], { queryParamsHandling: "preserve" });
                };
                return CartComponent;
            }());
            CartComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
            ], CartComponent.prototype, "checkoutForm", void 0);
            CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
                })
            ], CartComponent);
            /***/ 
        }),
        /***/ "./src/app/checkout/checkout.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/checkout/checkout.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\nbutton{\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    background-color: black;\r\n}\r\nh1{ \r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1RUFBdUU7SUFDdkUsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJ1dHRvbntcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuaDF7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/checkout/checkout.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/checkout/checkout.component.ts ***!
          \************************************************/
        /*! exports provided: CheckoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () { return CheckoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _sneaker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sneaker.service */ "./src/app/sneaker.service.ts");
            var CheckoutComponent = /** @class */ (function () {
                function CheckoutComponent(usersService, route, router) {
                    this.usersService = usersService;
                    this.route = route;
                    this.router = router;
                    this.sneakers = _sneaker_service__WEBPACK_IMPORTED_MODULE_4__["cart"];
                    this.sum = 0;
                }
                CheckoutComponent.prototype.ngOnInit = function () {
                    console.log(this.sneakers);
                };
                CheckoutComponent.prototype.getSum = function () {
                    for (var i in this.sneakers) {
                        this.sum += this.sneakers[i].price;
                    }
                    return this.sum;
                };
                CheckoutComponent.prototype.getTax = function () {
                    return (.06 * this.sum);
                };
                CheckoutComponent.prototype.getTotal = function () {
                    return (this.getSum() + this.getTax()) / 2;
                };
                CheckoutComponent.prototype.submit = function () {
                    alert("Thank you! Your order will be processed");
                    this.router.navigate(["../inventory"], { relativeTo: this.route, queryParamsHandling: "preserve" });
                    this.sneakers = [];
                };
                return CheckoutComponent;
            }());
            CheckoutComponent.ctorParameters = function () { return [
                { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checkout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")).default]
                })
            ], CheckoutComponent);
            /***/ 
        }),
        /***/ "./src/app/error-page/error-page.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/error-page/error-page.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/error-page/error-page.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/error-page/error-page.component.ts ***!
          \****************************************************/
        /*! exports provided: ErrorPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () { return ErrorPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            var ErrorPageComponent = /** @class */ (function () {
                function ErrorPageComponent(usersService) {
                    this.usersService = usersService;
                }
                ErrorPageComponent.prototype.ngOnInit = function () {
                    this.usersService.show();
                };
                return ErrorPageComponent;
            }());
            ErrorPageComponent.ctorParameters = function () { return [
                { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
            ]; };
            ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error-page/error-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")).default]
                })
            ], ErrorPageComponent);
            /***/ 
        }),
        /***/ "./src/app/guestSignIn/guestsignin.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/guestSignIn/guestsignin.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0U2lnbkluL2d1ZXN0c2lnbmluLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/guestSignIn/guestsignin.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/guestSignIn/guestsignin.component.ts ***!
          \******************************************************/
        /*! exports provided: GuestSignInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestSignInComponent", function () { return GuestSignInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            var GuestSignInComponent = /** @class */ (function () {
                function GuestSignInComponent(route, router, usersService) {
                    this.route = route;
                    this.router = router;
                    this.usersService = usersService;
                }
                GuestSignInComponent.prototype.ngOnInit = function () {
                };
                GuestSignInComponent.prototype.onSubmit = function () {
                    var username = this.n.nativeElement.value;
                    this.router.navigate(["inventory"], { relativeTo: this.route, queryParamsHandling: "preserve" });
                    this.usersService.show();
                };
                return GuestSignInComponent;
            }());
            GuestSignInComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('g', { static: false })
            ], GuestSignInComponent.prototype, "signupForm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('n', { static: false })
            ], GuestSignInComponent.prototype, "n", void 0);
            GuestSignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'guest-sign-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guestsignin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/guestSignIn/guestsignin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guestsignin.component.css */ "./src/app/guestSignIn/guestsignin.component.css")).default]
                })
            ], GuestSignInComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("header{\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(usersService) {
                    this.usersService = usersService;
                }
                HomeComponent.prototype.ngOnDestroy = function () {
                };
                HomeComponent.prototype.ngOnInit = function () {
                    this.usersService.hide();
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/inventory/inventory.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/inventory/inventory.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    text-align: center;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    \r\n}\r\n\r\nimg{\r\n   \r\n    height: 200px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n\r\nimg:hover{\r\n    height: 210px;\r\n    width:  52%; \r\n}\r\n\r\n#btn{\r\n    width: 275px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    background-color: black;\r\n}\r\n\r\nbutton{\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    background-color: black;\r\n}\r\n\r\n#btn:hover{\r\n    background-color: dodgerblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCOztBQUVBOztJQUVJLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUVBQXlFO0FBQzdFOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksdUVBQXVFO0lBQ3ZFLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICAgIFxyXG59XHJcblxyXG5pbWd7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxufVxyXG5pbWc6aG92ZXJ7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgd2lkdGg6ICA1MiU7IFxyXG59XHJcbiNidG57XHJcbiAgICB3aWR0aDogMjc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuI2J0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/inventory/inventory.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/inventory/inventory.component.ts ***!
          \**************************************************/
        /*! exports provided: InventoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () { return InventoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _sneaker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sneaker.service */ "./src/app/sneaker.service.ts");
            var InventoryComponent = /** @class */ (function () {
                function InventoryComponent(sneakerService, route, router, usersService) {
                    this.sneakerService = sneakerService;
                    this.route = route;
                    this.router = router;
                    this.usersService = usersService;
                    this.sneakers = [];
                    this.total = [];
                    this.remove = [];
                    this.a = 0;
                }
                InventoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.username = this.route.snapshot.params['username'];
                    console.log(this.username);
                    this.paramsSubscrition = this.route.params.subscribe(function (params) {
                        _this.username = params['username'];
                    });
                    // this.usersService.show()
                };
                InventoryComponent.prototype.onGetSneakers = function () {
                    var _this = this;
                    this.sneakerService.getSneakers()
                        .subscribe(function (sneaker) { return _this.sneakers = sneaker; }, function (error) { return console.log(error); });
                    document.getElementsByTagName("section")[0].style.display = "block";
                    document.getElementsByTagName("section")[0].style.display = "inline-flex";
                };
                InventoryComponent.prototype.onAdd = function (i) {
                    var sneaker = this.sneakers[i];
                    var q = Number([sneaker.quantity]);
                    // let b = 1
                    // this.a = b++;
                    var y = Number([sneaker.price]);
                    this.total.push(y);
                    var r = this.total;
                    var sum = 0;
                    for (i = 0; i < this.total.length; i++) {
                        sum += r[i];
                        document.getElementById("total").innerHTML = String(sum);
                    }
                    _sneaker_service__WEBPACK_IMPORTED_MODULE_4__["cart"].push(sneaker);
                    console.log(_sneaker_service__WEBPACK_IMPORTED_MODULE_4__["cart"]);
                    if (sneaker.quantity > 0) {
                        sneaker.quantity -= 1;
                        this.sneakerService.updateSneakers(i, sneaker)
                            .subscribe(function (res) { return (console.log(res)); }, function (err) { console.log(err); });
                    }
                    else {
                        alert("We're sorry! This product has been sold out.");
                    }
                };
                InventoryComponent.prototype.onRemove = function (i) {
                    var r = this.total;
                    var x = this.sneakers;
                    alert("Are you Sure you want to remove " + x[i].name + " " + x[i].type + "?");
                    var y = Number([x[i].price]);
                    if (r.length === 1 && r.includes(y)) {
                        document.getElementById("total").innerHTML = "0 - Empty Cart";
                        r.pop();
                    }
                    else if (r.length >= 1 && r.includes(y)) {
                        r.splice(r.indexOf(y), 1);
                        var sum = 0;
                        for (i = 0; i < this.total.length; i++) {
                            sum += r[i];
                            document.getElementById("total").innerHTML = String(sum);
                        }
                    }
                };
                InventoryComponent.prototype.viewCart = function () {
                    this.router.navigate(["cart"], { queryParamsHandling: "preserve" });
                };
                InventoryComponent.prototype.ngOnDestroy = function () {
                    this.paramsSubscrition.unsubscribe();
                };
                return InventoryComponent;
            }());
            InventoryComponent.ctorParameters = function () { return [
                { type: _sneaker_service__WEBPACK_IMPORTED_MODULE_4__["SneakerService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SneakerName', { static: false })
            ], InventoryComponent.prototype, "sneakerName", void 0);
            InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-inventory',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inventory.component.css */ "./src/app/inventory/inventory.component.css")).default]
                })
            ], InventoryComponent);
            /***/ 
        }),
        /***/ "./src/app/sneaker.service.ts": 
        /*!************************************!*\
          !*** ./src/app/sneaker.service.ts ***!
          \************************************/
        /*! exports provided: SneakerService, cart, a */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SneakerService", function () { return SneakerService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cart", function () { return cart; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return a; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var SneakerService = /** @class */ (function () {
                function SneakerService(http) {
                    this.http = http;
                    this.apiRoot = "https://sneakers-901e3.firebaseio.com/Sneakers";
                    this.jsonAddon = ".json";
                }
                SneakerService.prototype.getSneakers = function () {
                    return this.http.get("" + this.apiRoot + this.jsonAddon);
                };
                SneakerService.prototype.saveSneakers = function (sneakers) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                    return this.http.put("" + this.apiRoot + this.jsonAddon, sneakers, { headers: headers })
                        .subscribe(function (res) { console.log(res); }, function (err) {
                        console.log(err.error);
                        console.log(err.name);
                        console.log(err.message);
                        console.log(err.status);
                    });
                };
                SneakerService.prototype.updateSneakers = function (index, sneaker) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                    return this.http.patch(this.apiRoot + "/" + index + "/" + this.jsonAddon, sneaker, { headers: headers });
                };
                SneakerService.prototype.deleteSneaker = function (index) {
                    return this.http.delete("" + this.apiRoot + index + "/" + this.jsonAddon);
                };
                SneakerService.prototype.searchSneaker = function (searchIndex) {
                    return this.http.get("" + this.apiRoot + searchIndex + this.jsonAddon);
                };
                return SneakerService;
            }());
            SneakerService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SneakerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SneakerService);
            var cart = [];
            var a = 1;
            /***/ 
        }),
        /***/ "./src/app/user/user.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/user/user.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/user/user.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/user/user.component.ts ***!
          \****************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            var UserComponent = /** @class */ (function () {
                function UserComponent(route, usersService) {
                    this.route = route;
                    this.usersService = usersService;
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.username = this.route.snapshot.params['username'];
                    console.log(this.username);
                    this.paramsSubscrition = this.route.params.subscribe(function (params) {
                        _this.username = params['username'];
                    });
                };
                UserComponent.prototype.ngOnDestroy = function () {
                    this.paramsSubscrition.unsubscribe();
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
            ]; };
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/userlogin/userlogin.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/userlogin/userlogin.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJsb2dpbi91c2VybG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/userlogin/userlogin.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/userlogin/userlogin.component.ts ***!
          \**************************************************/
        /*! exports provided: UserloginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserloginComponent", function () { return UserloginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
            var UserloginComponent = /** @class */ (function () {
                function UserloginComponent(route, router, usersService) {
                    this.route = route;
                    this.router = router;
                    this.usersService = usersService;
                }
                UserloginComponent.prototype.ngOnInit = function () {
                };
                UserloginComponent.prototype.onLoginSubmit = function () {
                    var username = this.n.nativeElement.value;
                    this.router.navigate(["inventory"], { relativeTo: this.route, queryParamsHandling: "preserve" });
                    this.usersService.show();
                };
                return UserloginComponent;
            }());
            UserloginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('u', { static: false })
            ], UserloginComponent.prototype, "loginForm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('n', { static: false })
            ], UserloginComponent.prototype, "n", void 0);
            UserloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-userlogin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userlogin/userlogin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userlogin.component.css */ "./src/app/userlogin/userlogin.component.css")).default]
                })
            ], UserloginComponent);
            /***/ 
        }),
        /***/ "./src/app/users.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/users.service.ts ***!
          \**********************************/
        /*! exports provided: UsersService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function () { return UsersService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UsersService = /** @class */ (function () {
                function UsersService() {
                    this.hidden = true;
                }
                UsersService.prototype.hide = function () { this.hidden = true; };
                UsersService.prototype.show = function () { this.hidden = false; };
                UsersService.prototype.toggle = function () { this.hidden = !this.hidden; };
                return UsersService;
            }());
            UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UsersService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Consultant\Downloads\UPDATED--Sneaker App 10-10-20191011T150118Z-001\UPDATED--Sneaker App 10-10\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map