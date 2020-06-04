function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin.module/admin.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/admin.module/admin.module.ts ***!
    \**********************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminModuleAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _movie_panel_movie_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./movie-panel/movie-panel.component */
    "./src/app/admin.module/movie-panel/movie-panel.component.ts");
    /* harmony import */


    var _cinema_panel_cinema_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cinema-panel/cinema-panel.component */
    "./src/app/admin.module/cinema-panel/cinema-panel.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'panel/movie',
        component: _movie_panel_movie_panel_component__WEBPACK_IMPORTED_MODULE_4__["MoviePanelComponent"]
      }, {
        path: 'admin/movie',
        component: _movie_panel_movie_panel_component__WEBPACK_IMPORTED_MODULE_4__["MoviePanelComponent"]
      }, {
        path: 'panel/cinema',
        component: _cinema_panel_cinema_panel_component__WEBPACK_IMPORTED_MODULE_5__["CinemaPanelComponent"]
      }, {
        path: 'admin/cinema',
        component: _cinema_panel_cinema_panel_component__WEBPACK_IMPORTED_MODULE_5__["CinemaPanelComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_movie_panel_movie_panel_component__WEBPACK_IMPORTED_MODULE_4__["MoviePanelComponent"], _cinema_panel_cinema_panel_component__WEBPACK_IMPORTED_MODULE_5__["CinemaPanelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_movie_panel_movie_panel_component__WEBPACK_IMPORTED_MODULE_4__["MoviePanelComponent"], _cinema_panel_cinema_panel_component__WEBPACK_IMPORTED_MODULE_5__["CinemaPanelComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: 'panel/movie',
            component: _movie_panel_movie_panel_component__WEBPACK_IMPORTED_MODULE_4__["MoviePanelComponent"]
          }, {
            path: 'admin/movie',
            component: _movie_panel_movie_panel_component__WEBPACK_IMPORTED_MODULE_4__["MoviePanelComponent"]
          }, {
            path: 'panel/cinema',
            component: _cinema_panel_cinema_panel_component__WEBPACK_IMPORTED_MODULE_5__["CinemaPanelComponent"]
          }, {
            path: 'admin/cinema',
            component: _cinema_panel_cinema_panel_component__WEBPACK_IMPORTED_MODULE_5__["CinemaPanelComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin.module/cinema-panel/cinema-panel-service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin.module/cinema-panel/cinema-panel-service.ts ***!
    \*******************************************************************/

  /*! exports provided: CinemaService */

  /***/
  function srcAppAdminModuleCinemaPanelCinemaPanelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CinemaService", function () {
      return CinemaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _admin_module_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../admin.module/message.service */
    "./src/app/admin.module/message.service.ts");

    var CinemaService = /*#__PURE__*/function () {
      function CinemaService(http, messageService) {
        _classCallCheck(this, CinemaService);

        this.http = http;
        this.messageService = messageService;
        this.moviesUrl = 'http://localhost:8080/cinema/getAll';
        this.movieUrl = 'http://localhost:8080/cinema/get/';
        this.MOD_url = 'http://localhost:8080/cinema/update';
        this.ADD_url = 'http://localhost:8080/cinema/add';
        this.DEL_url = 'http://localhost:8080/cinema/delete/';
        this.date = new Date();
        this.errorMessage = "An Error occured, try again";
      }

      _createClass(CinemaService, [{
        key: "getCinemas",
        value: function getCinemas() {
          return this.http.get(this.moviesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getCinema",
        value: function getCinema(id) {
          return this.http.get(this.movieUrl + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "postCinema",
        value: function postCinema(cinema) {
          var _this = this;

          return this.http.post(this.ADD_url, cinema).subscribe(function (res) {
            return console.log('HTTP response', res);
          }, function (err) {
            _this.date = new Date();

            _this.messageService.add(" [" + _this.date.toLocaleTimeString() + "] " + err.error + " | error code is: " + err.status);
          }, function () {
            return console.log('HTTP request completed.');
          });
        }
      }, {
        key: "deleteCinema",
        value: function deleteCinema(id) {
          var _this2 = this;

          return this.http["delete"](this.DEL_url + id).subscribe(function (res) {
            return console.log('HTTP response', res);
          }, function (err) {
            _this2.date = new Date();

            _this2.messageService.add(" [" + _this2.date.toLocaleTimeString() + "] " + err.error + " | error code is: " + err.status);
          }, function () {
            return console.log('HTTP request completed.');
          });
        }
      }, {
        key: "modifyCinema",
        value: function modifyCinema(cinema) {
          var _this3 = this;

          return this.http.put(this.MOD_url, cinema).subscribe(function (res) {
            return console.log('HTTP response', res);
          }, function (err) {
            _this3.date = new Date();

            _this3.messageService.add(" [" + _this3.date.toLocaleTimeString() + "] " + err.error + " | error code is: " + err.status);
          }, function () {
            return console.log('HTTP request completed.');
          });
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            errorMessage = "CPS An error occurred: ".concat(err.error.message);
            this.messageService.add("CPS An error occurred: ".concat(err.error.message));
          } else {
            errorMessage = "CPS Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
            this.messageService.add("CPS Server returned code: ".concat(err.status, ", error message is: ").concat(err.message));
          }

          this.errorMessage = errorMessage;
          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return CinemaService;
    }();

    CinemaService.ɵfac = function CinemaService_Factory(t) {
      return new (t || CinemaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_module_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
    };

    CinemaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CinemaService,
      factory: CinemaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CinemaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _admin_module_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin.module/cinema-panel/cinema-panel.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/admin.module/cinema-panel/cinema-panel.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CinemaPanelComponent */

  /***/
  function srcAppAdminModuleCinemaPanelCinemaPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CinemaPanelComponent", function () {
      return CinemaPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cinemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../cinemas */
    "./src/app/cinemas.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _cinema_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cinema-panel-service */
    "./src/app/admin.module/cinema-panel/cinema-panel-service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _admin_module_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../admin.module/message.service */
    "./src/app/admin.module/message.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["scroll"];

    function CinemaPanelComponent_span_0_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r8, " ");
      }
    }

    function CinemaPanelComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CinemaPanelComponent_span_0_p_3_Template, 2, 1, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
      }
    }

    function CinemaPanelComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.onLoad();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Load Cinemas from Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_9_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.onDisplay();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Display Ciemas from Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CinemaPanelComponent_div_10_div_1_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No cinemas are loaded");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CinemaPanelComponent_div_10_div_1_div_5_tbody_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_10_div_1_div_5_tbody_8_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var c_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r17["delete"](c_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r16.department);
      }
    }

    function CinemaPanelComponent_div_10_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Department");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CinemaPanelComponent_div_10_div_1_div_5_tbody_8_Template, 9, 2, "tbody", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.cinemas);
      }
    }

    function CinemaPanelComponent_div_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cinema List:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CinemaPanelComponent_div_10_div_1_p_4_Template, 2, 0, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CinemaPanelComponent_div_10_div_1_div_5_Template, 9, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.loaded);
      }
    }

    function CinemaPanelComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CinemaPanelComponent_div_10_div_1_Template, 6, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.display);
      }
    }

    function CinemaPanelComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New Cinema:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Department");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CinemaPanelComponent_div_18_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.cinema.department = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_18_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.submit(ctx_r21.cinema);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.cinema.department);
      }
    }

    function CinemaPanelComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_25_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.onLoad();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Load Cinemas from Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CinemaPanelComponent_div_26_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No cinemas are loaded");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CinemaPanelComponent_div_26_select_2_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cinema_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", cinema_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", cinema_r31.id, " | ", cinema_r31.department, " ");
      }
    }

    function CinemaPanelComponent_div_26_select_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CinemaPanelComponent_div_26_select_2_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r32.selected = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CinemaPanelComponent_div_26_select_2_option_1_Template, 2, 3, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r25.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.cinemas);
      }
    }

    function CinemaPanelComponent_div_26_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_26_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r34["delete"](ctx_r34.selected == null ? null : ctx_r34.selected.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CinemaPanelComponent_div_26_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_26_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r36.edit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Modify");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CinemaPanelComponent_div_26_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Selected cinema:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Department");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r28.selected == null ? null : ctx_r28.selected.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r28.selected == null ? null : ctx_r28.selected.department, " ");
      }
    }

    function CinemaPanelComponent_div_26_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Modify cinema:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Department");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CinemaPanelComponent_div_26_div_7_div_1_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r39.selected.department = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_div_26_div_7_div_1_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r41.modify(ctx_r41.selected);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Modify");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r38.selected == null ? null : ctx_r38.selected.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r38.selected.department);
      }
    }

    function CinemaPanelComponent_div_26_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CinemaPanelComponent_div_26_div_7_div_1_Template, 20, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.editing);
      }
    }

    function CinemaPanelComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CinemaPanelComponent_div_26_p_1_Template, 2, 0, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CinemaPanelComponent_div_26_select_2_Template, 2, 2, "select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CinemaPanelComponent_div_26_button_3_Template, 2, 0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CinemaPanelComponent_div_26_button_4_Template, 2, 0, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CinemaPanelComponent_div_26_div_5_Template, 15, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CinemaPanelComponent_div_26_div_7_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selected && !ctx_r5.editing);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.removingElement);
      }
    }

    var CinemaPanelComponent = /*#__PURE__*/function () {
      function CinemaPanelComponent(http, cinemaService, titleService, messageService) {
        _classCallCheck(this, CinemaPanelComponent);

        this.http = http;
        this.cinemaService = cinemaService;
        this.titleService = titleService;
        this.messageService = messageService;
        this.cinema = new _cinemas__WEBPACK_IMPORTED_MODULE_2__["Cinema"]();
        this.error = false;
        this.display = false;
        this.loaded = false;
        this.editing = false;
        this.displaingElement = false;
        this.addingElement = false;
        this.removingElement = false;
        this.titleService.setTitle("cinemas");
      }

      _createClass(CinemaPanelComponent, [{
        key: "displayDisplaingElement",
        value: function displayDisplaingElement() {
          this.displaingElement = !this.displaingElement;
        }
      }, {
        key: "displayAddingElement",
        value: function displayAddingElement() {
          this.addingElement = !this.addingElement;
        }
      }, {
        key: "displayRemovingElement",
        value: function displayRemovingElement() {
          this.removingElement = !this.removingElement;
        }
      }, {
        key: "ifError",
        value: function ifError() {
          this.scrollToBottom();

          if (this.messageService.messages) {
            this.error = true;
          }
        }
      }, {
        key: "submit",
        value: function submit(cinema) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.cinemaService.postCinema(cinema); //--------------------//

                    this.ifError();
                    this.onDisplay();
                    _context.next = 5;
                    return this.delay(100);

                  case 5:
                    this.onLoad();
                    this.onDisplay();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.cinemaService.deleteCinema(id); //--------------------//

                    this.ifError();
                    this.onDisplay();
                    _context2.next = 5;
                    return this.delay(100);

                  case 5:
                    this.onLoad();
                    this.onDisplay();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "modify",
        value: function modify(cinema) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.cinemaService.modifyCinema(cinema); //--------------------//

                    this.ifError();
                    this.onDisplay();
                    _context3.next = 5;
                    return this.delay(100);

                  case 5:
                    this.onLoad();
                    this.onDisplay();

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "edit",
        value: function edit() {
          this.editing = !this.editing;
        }
      }, {
        key: "onDisplay",
        value: function onDisplay() {
          this.display = !this.display;
        }
      }, {
        key: "onLoad",
        value: function onLoad() {
          var _this4 = this;

          this.cinemaService.getCinemas().subscribe({
            next: function next(cinemas) {
              _this4.cinemas = cinemas;
            }
          });
          this.loaded = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }]);

      return CinemaPanelComponent;
    }();

    CinemaPanelComponent.ɵfac = function CinemaPanelComponent_Factory(t) {
      return new (t || CinemaPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cinema_panel_service__WEBPACK_IMPORTED_MODULE_4__["CinemaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_module_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]));
    };

    CinemaPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CinemaPanelComponent,
      selectors: [["app-cinema-panel"]],
      viewQuery: function CinemaPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
        }
      },
      decls: 28,
      vars: 6,
      consts: [[4, "ngIf"], [1, "panel-component"], [1, "l-s"], [1, "panel-element"], [1, "panel-element-header"], [1, "unfold-button", 3, "click"], ["class", "panel-element-header", 4, "ngIf"], [1, "r-s"], ["class", "panel-element-detail", 4, "ngIf"], [2, "clear", "both", "width", "100%"], [1, "t-s"], ["scroll", ""], ["class", "message", 4, "ngFor", "ngForOf"], [1, "message"], [1, "action-button", 3, "click"], [1, "panel-element-detail"], [1, "panel-element-detail-header"], [1, "table"], [1, "table-header"], [2, "min-width", "2%", "max-width", "2%"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "table-element"], [1, "table-element-id"], [1, "table-element-department"], [1, "table-element-del"], [3, "click"], ["type", "text", "name", "department", "placeholder", "department", 3, "ngModel", "ngModelChange"], [1, "table-element-send"], [1, "submit", 3, "click"], ["class", "selector", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "action-button", "style", "border: 2px solid red", 3, "click", 4, "ngIf"], ["class", "action-button", "style", "border: 2px solid yellow", 3, "click", 4, "ngIf"], [1, "selector", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "action-button", 2, "border", "2px solid red", 3, "click"], [1, "action-button", 2, "border", "2px solid yellow", 3, "click"]],
      template: function CinemaPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CinemaPanelComponent_span_0_Template, 4, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Display list of cinemas");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_Template_button_click_7_listener() {
            return ctx.displayDisplaingElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u2926 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CinemaPanelComponent_div_9_Template, 5, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CinemaPanelComponent_div_10_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_Template_button_click_16_listener() {
            return ctx.displayAddingElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " \u2926 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CinemaPanelComponent_div_18_Template, 16, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Remove or Modify");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CinemaPanelComponent_Template_button_click_23_listener() {
            return ctx.displayRemovingElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u2926");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CinemaPanelComponent_div_25_Template, 3, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CinemaPanelComponent_div_26_Template, 8, 6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removingElement);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]],
      styles: [".t-s[_ngcontent-%COMP%]{\r\n    float: none;\r\n    background-color: black;\r\n    color: white;\r\n    margin: 2em;\r\n    max-height: 6em;\r\n    overflow-y: scroll;\r\n    width: 95%;\r\n    border: 4px solid rgb(0, 128, 128); \r\n    font-family: Consolas, monospace;\r\n    scroll-snap-stop: always;\r\n    scroll-snap-align: end;\r\n}\r\n\r\n.message[_ngcontent-%COMP%]{\r\n    scroll-snap-stop: always;\r\n    scroll-snap-align: end;\r\n}\r\n\r\n.l-s[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    float: left;\r\n}\r\n\r\n.r-s[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    float: right;\r\n}\r\n\r\n.panel-component[_ngcontent-%COMP%]{\r\n    background-color: rgb(112, 144, 128);\r\n    width: 95%;\r\n    min-height: 600px;\r\n    border: 4px solid rgb(0, 128, 128);\r\n    min-width: 34em;\r\n    font-size: 2em;\r\n    margin: 1em;\r\n}\r\n\r\n.panel-element-header[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n    background-color: rgb(100, 144, 116);\r\n    font-size: 30pt;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;\r\n    font-weight: 50;\r\n    margin:0.5% auto;\r\n    padding: 0em 0.2em;\r\n}\r\n\r\n.panel-element-detail-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: rgb(84, 166, 114);\r\n    font-size: 20pt;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-weight: 25;\r\n    margin:0.5% auto;\r\n    color: rgb(16, 86, 27);\r\n    margin-top: 0px;\r\n}\r\n\r\n.panel-element-detail-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top: 0px;}\r\n\r\n.panel-element[_ngcontent-%COMP%]{\r\n    background-color: rgb(142, 174, 158);\r\n    padding:1% 0px;\r\n    border: 1px solid rgb(0, 128, 128);\r\n}\r\n\r\n.panel-element-detail[_ngcontent-%COMP%]{\r\n    background-color: rgb(138, 197, 160);\r\n    padding-bottom: 2.2%;\r\n}\r\n\r\n\r\n\r\n.unfold-button[_ngcontent-%COMP%]{\r\n    background-color: #64907500;\r\n    background-color: hsla(143, 18%, 48%, 0);\r\n    background-color: rgba(100, 144, 117, 0);\r\n    background-color: transparent;\r\n    font-size: 39pt;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    color: rgb(167, 221, 184);\r\n    border: none;\r\n    float: right;\r\n    position: relative;\r\n    bottom: 1.05em;\r\n    clear: both;\r\n    height: 1em;\r\n    margin-bottom: -1em;\r\n}\r\n\r\n.action-button[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: rgb(10, 121, 27);\r\n    font-size: 15pt;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: 25;\r\n    margin:0.5% 0.5%;\r\n    color: rgb(255, 255, 255);\r\n    height: 4ex;\r\n    border: none;\r\n}\r\n\r\n.selector[_ngcontent-%COMP%]{\r\n    height: 1.94em;\r\n    bottom: -0.4px;\r\n    position: relative;\r\n    width: 30em;\r\n    text-align: center;\r\n    background-color: rgb(167, 221, 184);\r\n    font-size: 13pt;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    margin: 0.5% 0.5%;\r\n    color: rgb(10, 121, 27);\r\n    border: none;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%]{\r\n    background-color: rgb(249, 255, 255);\r\n    border: 1px solid black;\r\n    margin: 0% 5%;\r\n    min-width: 90%;\r\n    min-width: -webkit-fill-available;\r\n    min-width: -moz-available;\r\n    font-size: 13pt;\r\n    border-collapse: collapse;\r\n    table-layout: fixed;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\nborder: 1px solid black;\r\n}\r\n\r\n.table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    background-color: rgb(7, 92, 34);\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.table-row[_ngcontent-%COMP%]{\r\n    border-bottom: solid;\r\n}\r\n\r\n.table-element[_ngcontent-%COMP%]{\r\n    width: unset;\r\n}\r\n\r\n.table-element[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding:0px 1.5ex;\r\n}\r\n\r\n.table-element-send[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    direction: rtl;\r\n}\r\n\r\n.table-element-id[_ngcontent-%COMP%]{\r\n    width: 3.5%;\r\n}\r\n\r\n.table-element-action[_ngcontent-%COMP%]{\r\n    width: 2%;\r\n}\r\n\r\n.table-element-department[_ngcontent-%COMP%]{\r\n    width: 93%;\r\n}\r\n\r\n.table-element-del[_ngcontent-%COMP%]{\r\n    width: 3.5%;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    height: 5ex;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: stretch;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    border: none;\r\n    padding: 0px 5px;\r\n    height: stretch;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    font-style: italic;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: rgb(10, 121, 27);\r\n    font-size: 15pt;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: 25;\r\n    margin:0.5% 0.5%;\r\n    color: rgb(255, 255, 255);\r\n    height: 4ex;\r\n    border: none;\r\n    height: 100%;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    width: 100%;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    margin-bottom: -4ex;\r\n    border: 2px solid green;\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4ubW9kdWxlL2NpbmVtYS1wYW5lbC9jaW5lbWEtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZix1RUFBdUU7SUFDdkUsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFDQSxnQ0FBZ0MsZUFBZSxDQUFDOztBQUdoRDtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9CQUFvQjtBQUN4Qjs7QUFFQSwyQ0FBMkM7O0FBQzNDO0lBQ0ksMkJBQTJCO0lBQzNCLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixzSEFBc0g7SUFDdEgsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUF1QjtTQUF2Qix1QkFBdUI7QUFDM0I7O0FBQ0EsMkNBQTJDOztBQUUzQztJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFJQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsOENBQThDO0lBQzlDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi5tb2R1bGUvY2luZW1hLXBhbmVsL2NpbmVtYS1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnQtc3tcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDZlbTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMCwgMTI4LCAxMjgpOyBcclxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgbW9ub3NwYWNlO1xyXG4gICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLm1lc3NhZ2V7XHJcbiAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG5cclxuLmwtc3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnItc3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wYW5lbC1jb21wb25lbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxNDQsIDEyOCk7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMCwgMTI4LCAxMjgpO1xyXG4gICAgbWluLXdpZHRoOiAzNGVtO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLnBhbmVsLWVsZW1lbnQtaGVhZGVyICxoM3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDE0NCwgMTE2KTtcclxuICAgIGZvbnQtc2l6ZTogMzBwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWYgO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwO1xyXG4gICAgbWFyZ2luOjAuNSUgYXV0bztcclxuICAgIHBhZGRpbmc6IDBlbSAwLjJlbTtcclxufVxyXG5cclxuLnBhbmVsLWVsZW1lbnQtZGV0YWlsLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTY2LCAxMTQpO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1O1xyXG4gICAgbWFyZ2luOjAuNSUgYXV0bztcclxuICAgIGNvbG9yOiByZ2IoMTYsIDg2LCAyNyk7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLnBhbmVsLWVsZW1lbnQtZGV0YWlsLWhlYWRlciBoNHttYXJnaW4tdG9wOiAwcHg7fVxyXG5cclxuXHJcbi5wYW5lbC1lbGVtZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMTc0LCAxNTgpO1xyXG4gICAgcGFkZGluZzoxJSAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMTI4LCAxMjgpO1xyXG59XHJcblxyXG4ucGFuZWwtZWxlbWVudC1kZXRhaWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAxOTcsIDE2MCk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4yJTtcclxufVxyXG5cclxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cclxuLnVuZm9sZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5MDc1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDE0MywgMTglLCA0OCUsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDE0NCwgMTE3LCAwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAzOXB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiByZ2IoMTY3LCAyMjEsIDE4NCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDEuMDVlbTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMWVtO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTIxLCAyNyk7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1O1xyXG4gICAgbWFyZ2luOjAuNSUgMC41JTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDRleDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuXHJcbi5zZWxlY3RvcntcclxuICAgIGhlaWdodDogMS45NGVtO1xyXG4gICAgYm90dG9tOiAtMC40cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzBlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjcsIDIyMSwgMTg0KTtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAuNSUgMC41JTtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDEyMSwgMjcpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbn1cclxuLyojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cclxuXHJcbi50YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiAwJSA1JTtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgbWluLXdpZHRoOiAtbW96LWF2YWlsYWJsZTtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG4udGFibGUgdGFibGUsIHRoLCB0ZHtcclxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXIgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgOTIsIDM0KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi50YWJsZS1yb3d7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxufVxyXG5cclxuLnRhYmxlLWVsZW1lbnR7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbn1cclxuXHJcbi50YWJsZS1lbGVtZW50IHRke1xyXG4gICAgcGFkZGluZzowcHggMS41ZXg7XHJcbn1cclxuXHJcbi50YWJsZS1lbGVtZW50LXNlbmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG4udGFibGUtZWxlbWVudC1pZHtcclxuICAgIHdpZHRoOiAzLjUlO1xyXG59XHJcblxyXG4udGFibGUtZWxlbWVudC1hY3Rpb257XHJcbiAgICB3aWR0aDogMiU7XHJcbn1cclxuXHJcbi50YWJsZS1lbGVtZW50LWRlcGFydG1lbnR7XHJcbiAgICB3aWR0aDogOTMlO1xyXG59XHJcblxyXG4udGFibGUtZWxlbWVudC1kZWx7XHJcbiAgICB3aWR0aDogMy41JTtcclxufVxyXG5cclxuLnRhYmxlIHRyIHRke1xyXG4gICAgaGVpZ2h0OiA1ZXg7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhYmxlIHRyIHRkIGlucHV0IHtcclxuICAgIHdpZHRoOiBzdHJldGNoO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgaGVpZ2h0OiBzdHJldGNoO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuXHJcblxyXG4uc3VibWl0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAxMjEsIDI3KTtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogMjU7XHJcbiAgICBtYXJnaW46MC41JSAwLjUlO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGhlaWdodDogNGV4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNGV4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbiAgICBtYXJnaW46IDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CinemaPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-cinema-panel',
          templateUrl: './cinema-panel.component.html',
          styleUrls: ['./cinema-panel.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _cinema_panel_service__WEBPACK_IMPORTED_MODULE_4__["CinemaService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }, {
          type: _admin_module_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }];
      }, {
        myScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin.module/message.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin.module/message.service.ts ***!
    \*************************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppAdminModuleMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessageService = /*#__PURE__*/function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.messages = [];
        this.messaged = false;
      }

      _createClass(MessageService, [{
        key: "add",
        value: function add(message) {
          this.messages.push(message);
          this.messaged = true;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.messages = [];
          this.messaged = false;
        }
      }]);

      return MessageService;
    }();

    MessageService.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)();
    };

    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin.module/movie-panel/movie-panel.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin.module/movie-panel/movie-panel.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MoviePanelComponent */

  /***/
  function srcAppAdminModuleMoviePanelMoviePanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviePanelComponent", function () {
      return MoviePanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../movies */
    "./src/app/movies.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _movie_panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./movie-panel.service */
    "./src/app/admin.module/movie-panel/movie-panel.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _admin_module_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../admin.module/message.service */
    "./src/app/admin.module/message.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["scroll"];

    function MoviePanelComponent_span_0_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", message_r8, " ");
      }
    }

    function MoviePanelComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MoviePanelComponent_span_0_p_3_Template, 2, 1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
      }
    }

    function MoviePanelComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_8_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.onLoad();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Load Movies from Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_8_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.onDisplay();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Display Movies from Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No movies are loaded");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.id);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.id);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.id);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.id);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r35.deleteRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_17_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r38.deleteRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_18_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r41.deleteRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_19_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r44.deleteRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "x");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_20_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_20_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2013");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_20_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r49.expandRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_20_span_2_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_20_span_3_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r25.expanded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.expanded);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_21_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_21_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2013");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_21_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r54.expandRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_21_span_2_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_21_span_3_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r26.expanded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.expanded);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_22_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span");
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_22_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2013");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_22_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r59.expandRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_22_span_2_Template, 1, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_22_span_3_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r27.expanded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.expanded);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_23_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64);

          var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r62.expandRow(m_r16.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_tr_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Poster src.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Others");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.posterSrc);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.others);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_tbody_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_2_Template, 2, 1, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_3_Template, 2, 1, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_4_Template, 2, 1, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_5_Template, 2, 1, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_16_Template, 3, 0, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_17_Template, 3, 0, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_18_Template, 3, 0, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_19_Template, 3, 0, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_20_Template, 4, 2, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_21_Template, 4, 2, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_22_Template, 4, 2, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MoviePanelComponent_div_9_div_1_div_5_tbody_17_td_23_Template, 3, 0, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MoviePanelComponent_div_9_div_1_div_5_tbody_17_tr_24_Template, 7, 0, "tr", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MoviePanelComponent_div_9_div_1_div_5_tbody_17_tr_25_Template, 7, 3, "tr", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r16 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.expanded && ctx_r15.expandedId == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.expanded && ctx_r15.expandedId == m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && ctx_r15.expandedId == m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && ctx_r15.expandedId != m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.movieGenre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.releaseDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](m_r16.director);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.expanded && ctx_r15.expandedId == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.expanded && ctx_r15.expandedId == m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && ctx_r15.expandedId == m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && ctx_r15.expandedId != m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.expanded && ctx_r15.expandedId == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r15.expanded && ctx_r15.expandedId == m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && ctx_r15.expandedId == m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && ctx_r15.expandedId != m_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && m_r16.id == ctx_r15.expandedId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.expanded && m_r16.id == ctx_r15.expandedId);
      }
    }

    function MoviePanelComponent_div_9_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Genre");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Length");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Release Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Director");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MoviePanelComponent_div_9_div_1_div_5_tbody_17_Template, 26, 19, "tbody", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.movies);
      }
    }

    function MoviePanelComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Movie List:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MoviePanelComponent_div_9_div_1_p_4_Template, 2, 0, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MoviePanelComponent_div_9_div_1_div_5_Template, 18, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.loaded);
      }
    }

    function MoviePanelComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviePanelComponent_div_9_div_1_Template, 6, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.display);
      }
    }

    function MoviePanelComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "New movie:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Genre");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Length");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Director");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Poster src.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r66.movie.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r68.movie.movieGenre = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r69.movie.length = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r70.movie.director = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r71.movie.posterSrc = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Release Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "others");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r72.movie.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r73.movie.releaseDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_16_Template_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r74.movie.others = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_16_Template_button_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r75.submit(ctx_r75.movie);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.movieGenre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.director);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.posterSrc);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.releaseDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.movie.others);
      }
    }

    function MoviePanelComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_23_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r76.onLoad();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Load Movies from Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_24_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No movies are loaded");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_24_select_2_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", movie_r85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", movie_r85.title, " ");
      }
    }

    function MoviePanelComponent_div_24_select_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_select_2_Template_select_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r86.selected = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviePanelComponent_div_24_select_2_option_1_Template, 2, 2, "option", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r79.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r79.movies);
      }
    }

    function MoviePanelComponent_div_24_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_24_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r88["delete"](ctx_r88.selected == null ? null : ctx_r88.selected.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_24_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_24_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r90.edit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Modify");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function MoviePanelComponent_div_24_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Selected movie:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Genre");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Director");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Release Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r82.selected == null ? null : ctx_r82.selected.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r82.selected == null ? null : ctx_r82.selected.movieGenre, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r82.selected == null ? null : ctx_r82.selected.director, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r82.selected == null ? null : ctx_r82.selected.releaseDate, " ");
      }
    }

    function MoviePanelComponent_div_24_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Modify movie:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Genre");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Length");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Director");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Poster src.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r93.selected.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r95.selected.movieGenre = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r96.selected.length = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r97.selected.director = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r98.selected.posterSrc = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "description");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Release Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "others");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r99.selected.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r100.selected.releaseDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r101.selected.others = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MoviePanelComponent_div_24_div_7_div_1_Template_input_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r102.selected.id = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_div_24_div_7_div_1_Template_button_click_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r103.modify(ctx_r103.selected);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Modify");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.movieGenre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.director);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.posterSrc);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.releaseDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.others);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r92.selected.id);
      }
    }

    function MoviePanelComponent_div_24_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviePanelComponent_div_24_div_7_div_1_Template, 48, 9, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r83.editing);
      }
    }

    function MoviePanelComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoviePanelComponent_div_24_p_1_Template, 2, 0, "p", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MoviePanelComponent_div_24_select_2_Template, 2, 2, "select", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MoviePanelComponent_div_24_button_3_Template, 2, 0, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MoviePanelComponent_div_24_button_4_Template, 2, 0, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MoviePanelComponent_div_24_div_5_Template, 23, 4, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MoviePanelComponent_div_24_div_7_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.loaded);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selected);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selected && !ctx_r5.editing);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.removingElement);
      }
    }

    var MoviePanelComponent = /*#__PURE__*/function () {
      function MoviePanelComponent(http, movieService, titleService, messageService) {
        _classCallCheck(this, MoviePanelComponent);

        this.http = http;
        this.movieService = movieService;
        this.titleService = titleService;
        this.messageService = messageService;
        this.GETALL_url = 'http://localhost:8080/movie/getAll';
        this.movie = new _movies__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
        this.error = false;
        this.display = false;
        this.loaded = false;
        this.expanded = false;
        this.expandedId = 0;
        this.editing = false;
        this.displaingElement = false;
        this.addingElement = false;
        this.removingElement = false;
        this.errorMessage = "/movie/getAll is unavailable";
        this.titleService.setTitle("Movies");
      }

      _createClass(MoviePanelComponent, [{
        key: "displayDisplaingElement",
        value: function displayDisplaingElement() {
          this.displaingElement = !this.displaingElement;
        }
      }, {
        key: "displayAddingElement",
        value: function displayAddingElement() {
          this.addingElement = !this.addingElement;
        }
      }, {
        key: "displayRemovingElement",
        value: function displayRemovingElement() {
          this.removingElement = !this.removingElement;
        }
      }, {
        key: "ifError",
        value: function ifError() {
          this.scrollToBottom();

          if (this.messageService.messages) {
            this.error = true;
          }
        }
      }, {
        key: "submit",
        value: function submit(movie) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.movieService.postMovie(movie); //--------------------//

                    this.ifError();
                    this.onDisplay();
                    _context4.next = 5;
                    return this.delay(100);

                  case 5:
                    this.onLoad();
                    this.onDisplay();

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.movieService.deleteMovie(id); //--------------------//

                    this.ifError();
                    this.onDisplay();
                    _context5.next = 5;
                    return this.delay(100);

                  case 5:
                    this.onLoad();
                    this.onDisplay();

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "deleteRow",
        value: function deleteRow(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.movieService.deleteMovie(id); //--------------------//

                    this.ifError();
                    this.onDisplay();
                    _context6.next = 5;
                    return this.delay(100);

                  case 5:
                    this.onLoad();
                    this.onDisplay();

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "modify",
        value: function modify(movie) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    console.log(JSON.stringify(movie));
                    this.movieService.modifyMovie(movie); //--------------------//

                    this.ifError();
                    this.onDisplay();
                    _context7.next = 6;
                    return this.delay(100);

                  case 6:
                    this.onLoad();
                    this.onDisplay();

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "edit",
        value: function edit() {
          this.editing = !this.editing;
        }
      }, {
        key: "expandRow",
        value: function expandRow(id) {
          if (this.expandedId == 0) {
            this.expandedId = id;
            this.expanded = !this.expanded;
            return;
          }

          if (this.expandedId == id) {
            this.expanded = !this.expanded;
            this.expandedId = 0;
            return;
          }

          this.expandedId = id;
        }
      }, {
        key: "onDisplay",
        value: function onDisplay() {
          this.display = !this.display;
        }
      }, {
        key: "onLoad",
        value: function onLoad() {
          var _this5 = this;

          this.movieService.getMovies().subscribe({
            next: function next(movies) {
              _this5.movies = movies;
            },
            error: function error(err) {
              return _this5.errorMessage = err;
            }
          });
          this.loaded = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }]);

      return MoviePanelComponent;
    }();

    MoviePanelComponent.ɵfac = function MoviePanelComponent_Factory(t) {
      return new (t || MoviePanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_movie_panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_module_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]));
    };

    MoviePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MoviePanelComponent,
      selectors: [["app-movie-panel"]],
      viewQuery: function MoviePanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
        }
      },
      decls: 25,
      vars: 6,
      consts: [[4, "ngIf"], [1, "panel-component"], [1, "panel-element"], [1, "panel-element-header"], [1, "unfold-button", 3, "click"], ["class", "panel-element-header", 4, "ngIf"], ["class", "panel-element-detail", 4, "ngIf"], [1, "t-s"], ["scroll", ""], ["class", "pp", 4, "ngFor", "ngForOf"], [1, "pp"], [1, "action-button", 3, "click"], [1, "panel-element-detail"], [1, "panel-element-detail-header"], [1, "table"], [1, "table-header"], [2, "min-width", "2%", "max-width", "2%"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "table-element"], ["rowspan", "1", "class", "table-element-id", 4, "ngIf"], ["rowspan", "3", "class", "table-element-id", 4, "ngIf"], [1, "table-element-title"], [1, "table-element-genre"], [1, "table-element-length"], [1, "table-element-releaseDate"], [1, "table-element-director"], ["rowspan", "1", "class", "table-element-del", 4, "ngIf"], ["rowspan", "3", "class", "table-element-del", 4, "ngIf"], ["class", "table-header", 4, "ngIf"], ["class", "table-element", 4, "ngIf"], ["rowspan", "1", 1, "table-element-id"], ["rowspan", "3", 1, "table-element-id"], ["rowspan", "1", 1, "table-element-del"], [3, "click"], ["rowspan", "3", 1, "table-element-del"], ["colspan", "2"], ["colspan", "1"], ["colspan", "2", 1, "table-element-description"], ["colspan", "2", 1, "table-element-posterSrc"], ["colspan", "1", 1, "table-element-others"], ["type", "text", "name", "title", "placeholder", "title", 3, "ngModel", "ngModelChange"], [1, "table-element-movieGenre"], ["type", "text", "name", "movieGenre", "placeholder", "movieGenre", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "length", "placeholder", "length", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "director", "placeholder", "director", 3, "ngModel", "ngModelChange"], [1, "table-element-posterSrc"], ["type", "text", "name", "posterSrc", "placeholder", "posterSrc", 3, "ngModel", "ngModelChange"], [1, "table-element-description"], ["type", "text", "name", "description", "placeholder", "description", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "releaseDate", "placeholder", "releaseDate", 3, "ngModel", "ngModelChange"], [1, "table-element-others"], ["type", "text", "name", "others", "placeholder", "others", 3, "ngModel", "ngModelChange"], [1, "table-element-send"], [1, "submit", 3, "click"], ["class", "selector", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "action-button", "style", "border: 2px solid red", 3, "click", 4, "ngIf"], ["class", "action-button", "style", "border: 2px solid yellow", 3, "click", 4, "ngIf"], [1, ""], [1, "selector", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "action-button", 2, "border", "2px solid red", 3, "click"], [1, "action-button", 2, "border", "2px solid yellow", 3, "click"], [1, "table-element-title", 2, "width", "40%"], [1, "table-element-movieGenre", 2, "width", "20%"], [1, "table-element-director", 2, "width", "20%"], ["hidden", "", "type", "text", "name", "id", "placeholder", "id", 3, "ngModel", "ngModelChange"]],
      template: function MoviePanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MoviePanelComponent_span_0_Template, 4, 1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Display list of movies");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_Template_button_click_6_listener() {
            return ctx.displayDisplaingElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u2926 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MoviePanelComponent_div_8_Template, 5, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MoviePanelComponent_div_9_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_Template_button_click_14_listener() {
            return ctx.displayAddingElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u2926 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoviePanelComponent_div_16_Template, 47, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Remove or Modify");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoviePanelComponent_Template_button_click_21_listener() {
            return ctx.displayRemovingElement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u2926");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MoviePanelComponent_div_23_Template, 3, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MoviePanelComponent_div_24_Template, 10, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removingElement);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removingElement);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]],
      styles: [".t-s[_ngcontent-%COMP%]{\r\n    float: none;\r\n    background-color: black;\r\n    color: white;\r\n    margin: 2em;\r\n    max-height: 6em;\r\n    overflow-y: scroll;\r\n    width: 95%;\r\n    border: 4px solid rgb(0, 128, 128); \r\n    font-family: Consolas, monospace;\r\n    scroll-snap-stop: always;\r\n    scroll-snap-align: end;\r\n}\r\n\r\n.message[_ngcontent-%COMP%]{\r\n    scroll-snap-stop: always;\r\n    scroll-snap-align: end;\r\n}\r\n\r\n.panel-component[_ngcontent-%COMP%]{\r\n    background-color: rgb(112, 128, 144);\r\n    width: 95%;\r\n    min-height: 600px;\r\n    border: 4px solid rgb(0, 128, 128);\r\n    min-width: 34em;\r\n    font-size: 2em;\r\n    margin: 1em;\r\n}\r\n\r\n.panel-element-header[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{\r\n    background-color: rgb(100, 116, 144);\r\n    font-size: 30pt;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;\r\n    font-weight: 50;\r\n    margin:0.5% auto;\r\n    padding: 0em 0.2em;\r\n}\r\n\r\n.panel-element-detail-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: rgb(116, 147, 191);\r\n    font-size: 20pt;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-weight: 25;\r\n    margin:0.5% auto;\r\n    color: rgb(10, 27, 121);\r\n    margin-top: 0px;\r\n}\r\n\r\n.panel-element-detail-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top: 0px;}\r\n\r\n.panel-element[_ngcontent-%COMP%]{\r\n    background-color: rgb(142, 158, 174);\r\n    padding:1% 0px;\r\n    border: 1px solid teal;\r\n}\r\n\r\n.panel-element-detail[_ngcontent-%COMP%]{\r\n    background-color: rgb(138, 160, 197);\r\n    padding-bottom: 1px;\r\n}\r\n\r\n\r\n\r\n.unfold-button[_ngcontent-%COMP%]{\r\n    background-color: #64749000;\r\n    background-color: hsla(218, 18%, 48%, 0);\r\n    background-color: rgba(100, 116, 144, 0);\r\n    background-color: transparent;\r\n    font-size: 39pt;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    color: rgb(167, 184, 221);\r\n    border: none;\r\n    float: right;\r\n    position: relative;\r\n    bottom: 1.05em;\r\n    clear: both;\r\n    height: 1em;\r\n    margin-bottom: -1em;\r\n}\r\n\r\n.action-button[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: rgb(10, 27, 121);\r\n    font-size: 15pt;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: 25;\r\n    margin:0.5% 0.5%;\r\n    color: rgb(167, 184, 221);\r\n    height: 4ex;\r\n    border: none;\r\n}\r\n\r\n.selector[_ngcontent-%COMP%]{\r\n    height: 1.94em;\r\n    bottom: -0.4px;\r\n    position: relative;\r\n    width: 30em;\r\n    text-align: center;\r\n    background-color: rgb(167, 184, 221);\r\n    font-size: 13pt;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    margin: 0.5% 0.5%;\r\n    color: rgb(10, 27, 121);\r\n    border: none;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n}\r\n\r\n\r\n\r\n.table[_ngcontent-%COMP%]{\r\n    background-color: rgb(249, 255, 255);\r\n    border: 1px solid black;\r\n    margin: 0% 5%;\r\n    min-width: stretch;\r\n    min-width: -webkit-fill-available;\r\n    min-width: -moz-available;\r\n    font-size: 13pt;\r\n    border-collapse: collapse;\r\n    table-layout: fixed;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\nborder: 1px solid black;\r\n}\r\n\r\n.table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    background-color: rgb(40, 108, 255);\r\n    \r\n}\r\n\r\n.table-row[_ngcontent-%COMP%]{\r\n    border-bottom: solid;\r\n}\r\n\r\n.table-element[_ngcontent-%COMP%]{\r\n    width: unset;\r\n}\r\n\r\n.table-element[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding:0px 1.5ex;\r\n}\r\n\r\n.table-element-send[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    direction: rtl;\r\n}\r\n\r\n.table-element-id[_ngcontent-%COMP%]{\r\n    width: 3.5%;\r\n}\r\n\r\n.table-element-title[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n\r\n.table-element-genre[_ngcontent-%COMP%]{\r\n    width: 16.5%;\r\n}\r\n\r\n.table-element-length[_ngcontent-%COMP%]{\r\n    width: 8%;\r\n}\r\n\r\n.table-element-director[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n}\r\n\r\n.table-element-description[_ngcontent-%COMP%]{\r\n    width: 47%;\r\n}\r\n\r\n.table-element-releaseDate[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n}\r\n\r\n.table-element-others[_ngcontent-%COMP%]{\r\n    width: 20.1%;\r\n}\r\n\r\n.table-element-posterSrc[_ngcontent-%COMP%]{\r\n    width: 23%;\r\n}\r\n\r\n.table-element-action[_ngcontent-%COMP%]{\r\n    width: 2%;\r\n}\r\n\r\n.table-element-del[_ngcontent-%COMP%]{\r\n    width: 3.5%;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    height: 5ex;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: stretch;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    border: none;\r\n    padding: 0px 5px;\r\n    height: stretch;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: rgb(10, 27, 121);\r\n    font-size: 15pt;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: 25;\r\n    margin:0.5% 0.5%;\r\n    color: rgb(167, 184, 221);\r\n    height: 4ex;\r\n    border: none;\r\n    height: stretch;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    width: stretch;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    margin-bottom: -4ex;\r\n    border: 2px solid green;\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4ubW9kdWxlL21vdmllLXBhbmVsL21vdmllLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsdUVBQXVFO0lBQ3ZFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBQ0EsZ0NBQWdDLGVBQWUsQ0FBQzs7QUFHaEQ7SUFDSSxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUEsMkNBQTJDOztBQUMzQztJQUNJLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsOENBQThDO0lBQzlDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysc0hBQXNIO0lBQ3RILGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0FBQzNCOztBQUNBLDJDQUEyQzs7QUFFM0M7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksU0FBUztBQUNiOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFJQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZiw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLm1vZHVsZS9tb3ZpZS1wYW5lbC9tb3ZpZS1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnQtc3tcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDZlbTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMCwgMTI4LCAxMjgpOyBcclxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgbW9ub3NwYWNlO1xyXG4gICAgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzO1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLm1lc3NhZ2V7XHJcbiAgICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4ucGFuZWwtY29tcG9uZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTI4LCAxNDQpO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDAsIDEyOCwgMTI4KTtcclxuICAgIG1pbi13aWR0aDogMzRlbTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbi5wYW5lbC1lbGVtZW50LWhlYWRlciAsaDN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMTYsIDE0NCk7XHJcbiAgICBmb250LXNpemU6IDMwcHQ7XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmIDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDtcclxuICAgIG1hcmdpbjowLjUlIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwZW0gMC4yZW07XHJcbn1cclxuXHJcbi5wYW5lbC1lbGVtZW50LWRldGFpbC1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAxNDcsIDE5MSk7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjU7XHJcbiAgICBtYXJnaW46MC41JSBhdXRvO1xyXG4gICAgY29sb3I6IHJnYigxMCwgMjcsIDEyMSk7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuLnBhbmVsLWVsZW1lbnQtZGV0YWlsLWhlYWRlciBoNHttYXJnaW4tdG9wOiAwcHg7fVxyXG5cclxuXHJcbi5wYW5lbC1lbGVtZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMTU4LCAxNzQpO1xyXG4gICAgcGFkZGluZzoxJSAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0ZWFsO1xyXG59XHJcblxyXG4ucGFuZWwtZWxlbWVudC1kZXRhaWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM4LCAxNjAsIDE5Nyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xyXG4udW5mb2xkLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjE4LCAxOCUsIDQ4JSwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxNDQsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDM5cHQ7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHJnYigxNjcsIDE4NCwgMjIxKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMS4wNWVtO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xZW07XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwLCAyNywgMTIxKTtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogMjU7XHJcbiAgICBtYXJnaW46MC41JSAwLjUlO1xyXG4gICAgY29sb3I6IHJnYigxNjcsIDE4NCwgMjIxKTtcclxuICAgIGhlaWdodDogNGV4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuLnNlbGVjdG9ye1xyXG4gICAgaGVpZ2h0OiAxLjk0ZW07XHJcbiAgICBib3R0b206IC0wLjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NywgMTg0LCAyMjEpO1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMC41JSAwLjUlO1xyXG4gICAgY29sb3I6IHJnYigxMCwgMjcsIDEyMSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxufVxyXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMqL1xyXG5cclxuLnRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjU1LCAyNTUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDAlIDUlO1xyXG4gICAgbWluLXdpZHRoOiBzdHJldGNoO1xyXG4gICAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgbWluLXdpZHRoOiAtbW96LWF2YWlsYWJsZTtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG4udGFibGUgdGFibGUsIHRoLCB0ZHtcclxuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXIgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDEwOCwgMjU1KTtcclxuICAgIFxyXG59XHJcblxyXG4udGFibGUtcm93e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbn1cclxuXHJcbi50YWJsZS1lbGVtZW50e1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG59XHJcblxyXG4udGFibGUtZWxlbWVudCB0ZHtcclxuICAgIHBhZGRpbmc6MHB4IDEuNWV4O1xyXG59XHJcblxyXG4udGFibGUtZWxlbWVudC1zZW5ke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxufVxyXG5cclxuLnRhYmxlLWVsZW1lbnQtaWR7XHJcbiAgICB3aWR0aDogMy41JTtcclxufVxyXG5cclxuLnRhYmxlLWVsZW1lbnQtdGl0bGV7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbi50YWJsZS1lbGVtZW50LWdlbnJle1xyXG4gICAgd2lkdGg6IDE2LjUlO1xyXG59XHJcbi50YWJsZS1lbGVtZW50LWxlbmd0aHtcclxuICAgIHdpZHRoOiA4JTtcclxufVxyXG4udGFibGUtZWxlbWVudC1kaXJlY3RvcntcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLnRhYmxlLWVsZW1lbnQtZGVzY3JpcHRpb257XHJcbiAgICB3aWR0aDogNDclO1xyXG59XHJcblxyXG4udGFibGUtZWxlbWVudC1yZWxlYXNlRGF0ZXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi50YWJsZS1lbGVtZW50LW90aGVyc3tcclxuICAgIHdpZHRoOiAyMC4xJTtcclxufVxyXG5cclxuLnRhYmxlLWVsZW1lbnQtcG9zdGVyU3Jje1xyXG4gICAgd2lkdGg6IDIzJTtcclxufVxyXG5cclxuLnRhYmxlLWVsZW1lbnQtYWN0aW9ue1xyXG4gICAgd2lkdGg6IDIlO1xyXG59XHJcblxyXG4udGFibGUtZWxlbWVudC1kZWx7XHJcbiAgICB3aWR0aDogMy41JTtcclxufVxyXG5cclxuLnRhYmxlIHRyIHRke1xyXG4gICAgaGVpZ2h0OiA1ZXg7XHJcbn1cclxuXHJcblxyXG5cclxuLnRhYmxlIHRyIHRkIGlucHV0IHtcclxuICAgIHdpZHRoOiBzdHJldGNoO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgaGVpZ2h0OiBzdHJldGNoO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcclxufVxyXG5cclxuLnN1Ym1pdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMjcsIDEyMSk7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDI1O1xyXG4gICAgbWFyZ2luOjAuNSUgMC41JTtcclxuICAgIGNvbG9yOiByZ2IoMTY3LCAxODQsIDIyMSk7XHJcbiAgICBoZWlnaHQ6IDRleDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogc3RyZXRjaDtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGhlaWdodDogLW1vei1hdmFpbGFibGU7XHJcbiAgICB3aWR0aDogc3RyZXRjaDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTRleDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MoviePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-movie-panel',
          templateUrl: './movie-panel.component.html',
          styleUrls: ['./movie-panel.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _movie_panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }, {
          type: _admin_module_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }];
      }, {
        myScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin.module/movie-panel/movie-panel.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin.module/movie-panel/movie-panel.service.ts ***!
    \*****************************************************************/

  /*! exports provided: PanelService */

  /***/
  function srcAppAdminModuleMoviePanelMoviePanelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelService", function () {
      return PanelService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _admin_module_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../admin.module/message.service */
    "./src/app/admin.module/message.service.ts");

    var PanelService = /*#__PURE__*/function () {
      function PanelService(http, messageService) {
        _classCallCheck(this, PanelService);

        this.http = http;
        this.messageService = messageService;
        this.moviesUrl = 'http://localhost:8080/movie/getAll';
        this.movieUrl = 'http://localhost:8080/movie/get/';
        this.ADD_url = 'http://localhost:8080/movie/add';
        this.DEL_url = 'http://localhost:8080/movie/delete/';
        this.MOD_url = 'http://localhost:8080/movie/update';
        this.date = new Date();
      }

      _createClass(PanelService, [{
        key: "getMovies",
        value: function getMovies() {
          return this.http.get(this.moviesUrl).pipe( //tap(data =>console.log('Wszystko: ' + JSON.stringify(data))),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getMovie",
        value: function getMovie(id) {
          return this.http.get(this.movieUrl + id).pipe( //tap(data =>console.log('jeden: ' + JSON.stringify(data))),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "postMovie",
        value: function postMovie(movie) {
          var _this6 = this;

          return this.http.post(this.ADD_url, movie).subscribe(function (res) {
            return console.log('HTTP response', res);
          }, function (err) {
            _this6.date = new Date();

            _this6.messageService.add(" [" + _this6.date.toLocaleTimeString() + "] " + err.error + " | error code is: " + err.status);
          }, function () {
            return console.log('HTTP request completed.');
          });
        }
      }, {
        key: "deleteMovie",
        value: function deleteMovie(id) {
          var _this7 = this;

          return this.http["delete"](this.DEL_url + id).subscribe(function (res) {
            return console.log('HTTP response', res);
          }, function (err) {
            _this7.date = new Date();

            _this7.messageService.add(" [" + _this7.date.toLocaleTimeString() + "] " + err.error + " | error code is: " + err.status);
          }, function () {
            return console.log('HTTP request completed.');
          });
        }
      }, {
        key: "modifyMovie",
        value: function modifyMovie(movie) {
          var _this8 = this;

          return this.http.put(this.MOD_url, movie).subscribe(function (res) {
            return console.log('HTTP response', res);
          }, function (err) {
            _this8.date = new Date();

            _this8.messageService.add(" [" + _this8.date.toLocaleTimeString() + "] " + err.error + " | error code is: " + err.status);
          }, function () {
            return console.log('HTTP request completed.');
          });
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return PanelService;
    }();

    PanelService.ɵfac = function PanelService_Factory(t) {
      return new (t || PanelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_module_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
    };

    PanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PanelService,
      factory: PanelService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _admin_module_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'cinema';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _client_module_movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./client.module/movies/movie-detail.component */
    "./src/app/client.module/movies/movie-detail.component.ts");
    /* harmony import */


    var _client_module_cinema_cinema_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./client.module/cinema/cinema.component */
    "./src/app/client.module/cinema/cinema.component.ts");
    /* harmony import */


    var _client_module_client_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./client.module/client.module */
    "./src/app/client.module/client.module.ts");
    /* harmony import */


    var _admin_module_admin_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin.module/admin.module */
    "./src/app/admin.module/admin.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _client_module_client_module__WEBPACK_IMPORTED_MODULE_12__["ClientModule"], _admin_module_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: 'kino',
        component: _client_module_cinema_cinema_component__WEBPACK_IMPORTED_MODULE_11__["CinemaComponent"]
      }, {
        path: 'movie/:id',
        component: _client_module_movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailComponent"]
      }, {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _client_module_client_module__WEBPACK_IMPORTED_MODULE_12__["ClientModule"], _admin_module_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _client_module_client_module__WEBPACK_IMPORTED_MODULE_12__["ClientModule"], _admin_module_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
            path: 'kino',
            component: _client_module_cinema_cinema_component__WEBPACK_IMPORTED_MODULE_11__["CinemaComponent"]
          }, {
            path: 'movie/:id',
            component: _client_module_movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailComponent"]
          }, {
            path: '',
            redirectTo: 'welcome',
            pathMatch: 'full'
          }, {
            path: '**',
            redirectTo: 'welcome',
            pathMatch: 'full'
          }]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cinemas.ts":
  /*!****************************!*\
    !*** ./src/app/cinemas.ts ***!
    \****************************/

  /*! exports provided: Cinema */

  /***/
  function srcAppCinemasTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Cinema", function () {
      return Cinema;
    });

    var Cinema = /*#__PURE__*/function () {
      function Cinema() {
        _classCallCheck(this, Cinema);
      }

      _createClass(Cinema, [{
        key: "Cinema",
        value: function Cinema() {}
      }]);

      return Cinema;
    }();
    /***/

  },

  /***/
  "./src/app/client.module/cinema/cinema-proper.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/client.module/cinema/cinema-proper.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CinemaProperComponent */

  /***/
  function srcAppClientModuleCinemaCinemaProperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CinemaProperComponent", function () {
      return CinemaProperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CinemaProperComponent = /*#__PURE__*/function () {
      function CinemaProperComponent() {
        _classCallCheck(this, CinemaProperComponent);
      }

      _createClass(CinemaProperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CinemaProperComponent;
    }();

    CinemaProperComponent.ɵfac = function CinemaProperComponent_Factory(t) {
      return new (t || CinemaProperComponent)();
    };

    CinemaProperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CinemaProperComponent,
      selectors: [["app-cinema-proper"]],
      decls: 21,
      vars: 0,
      consts: [[1, "logo"], ["src", "assets/img/cebulak.png"], [1, "titleBar"], [1, "navigationMenu"]],
      template: function CinemaProperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cinema Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "START");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ELEM2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ELEM3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ELEM4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ELEM5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ELEM6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%]{\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 0.8em;\r\n    margin: 0% 2%;\r\n    background-color: rgb(30, 20, 20);\r\n}\r\n\r\n.titleBar[_ngcontent-%COMP%]{\r\n    background-color: rgb(101,46,1);\r\n    color: blanchedalmond;\r\n}\r\n\r\n\r\n\r\n.navigationMenu[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n    height: 6em;\r\n}\r\n\r\n.navigationMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50Lm1vZHVsZS9jaW5lbWEvY2luZW1hLXByb3Blci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0VBQXdFO0lBQ3hFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQSw4RUFBOEU7O0FBQzlFO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBQ0EsOEVBQThFIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50Lm1vZHVsZS9jaW5lbWEvY2luZW1hLXByb3Blci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBtYXJnaW46IDAlIDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCAyMCwgMjApO1xyXG59XHJcblxyXG4udGl0bGVCYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLDQ2LDEpO1xyXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcblxyXG4vKiNuYXZpZ2F0aW9uIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovXHJcbi5uYXZpZ2F0aW9uTWVudSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGhlaWdodDogNmVtO1xyXG59XHJcbi5uYXZpZ2F0aW9uTWVudSBhe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4vKkVORCNvZiNuYXZpZ2F0aW9uIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CinemaProperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cinema-proper',
          templateUrl: './cinema-proper.component.html',
          styleUrls: ['./cinema-proper.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client.module/cinema/cinema.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/client.module/cinema/cinema.component.ts ***!
    \**********************************************************/

  /*! exports provided: CinemaComponent */

  /***/
  function srcAppClientModuleCinemaCinemaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CinemaComponent", function () {
      return CinemaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cinema_proper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./cinema-proper.component */
    "./src/app/client.module/cinema/cinema-proper.component.ts");
    /* harmony import */


    var _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../movies/movies.component */
    "./src/app/client.module/movies/movies.component.ts");

    var CinemaComponent = /*#__PURE__*/function () {
      function CinemaComponent() {
        _classCallCheck(this, CinemaComponent);
      }

      _createClass(CinemaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CinemaComponent;
    }();

    CinemaComponent.ɵfac = function CinemaComponent_Factory(t) {
      return new (t || CinemaComponent)();
    };

    CinemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CinemaComponent,
      selectors: [["ng-component"]],
      decls: 2,
      vars: 0,
      template: function CinemaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cinema-proper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-movies");
        }
      },
      directives: [_cinema_proper_component__WEBPACK_IMPORTED_MODULE_1__["CinemaProperComponent"], _movies_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CinemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './cinema.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client.module/client.module.ts":
  /*!************************************************!*\
    !*** ./src/app/client.module/client.module.ts ***!
    \************************************************/

  /*! exports provided: ClientModule */

  /***/
  function srcAppClientModuleClientModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientModule", function () {
      return ClientModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _cinema_cinema_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cinema/cinema.component */
    "./src/app/client.module/cinema/cinema.component.ts");
    /* harmony import */


    var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movies/movies.component */
    "./src/app/client.module/movies/movies.component.ts");
    /* harmony import */


    var _movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./movies/movie-detail.component */
    "./src/app/client.module/movies/movie-detail.component.ts");
    /* harmony import */


    var _cinema_cinema_proper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cinema/cinema-proper.component */
    "./src/app/client.module/cinema/cinema-proper.component.ts");

    var ClientModule = function ClientModule() {
      _classCallCheck(this, ClientModule);
    };

    ClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ClientModule
    });
    ClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ClientModule_Factory(t) {
        return new (t || ClientModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'kino',
        component: _cinema_cinema_component__WEBPACK_IMPORTED_MODULE_4__["CinemaComponent"]
      }, {
        path: 'movie/:id',
        component: _movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClientModule, {
        declarations: [_cinema_cinema_component__WEBPACK_IMPORTED_MODULE_4__["CinemaComponent"], _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"], _movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"], _cinema_cinema_proper_component__WEBPACK_IMPORTED_MODULE_7__["CinemaProperComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_cinema_cinema_component__WEBPACK_IMPORTED_MODULE_4__["CinemaComponent"], _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"], _movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"], _cinema_cinema_proper_component__WEBPACK_IMPORTED_MODULE_7__["CinemaProperComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: 'kino',
            component: _cinema_cinema_component__WEBPACK_IMPORTED_MODULE_4__["CinemaComponent"]
          }, {
            path: 'movie/:id',
            component: _movies_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/client.module/movies/movie-detail.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/client.module/movies/movie-detail.component.ts ***!
    \****************************************************************/

  /*! exports provided: MovieDetailComponent */

  /***/
  function srcAppClientModuleMoviesMovieDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function () {
      return MovieDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./movies.service */
    "./src/app/client.module/movies/movies.service.ts");
    /* harmony import */


    var _cinema_cinema_proper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cinema/cinema-proper.component */
    "./src/app/client.module/cinema/cinema-proper.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MovieDetailComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Make a reservation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "user rating");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Direction");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Release date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#BLANK#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Runtime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Rating");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "#BLANK#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.movieGenre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("decription: ", ctx_r0.movie.description, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.movie.id, "/100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.director);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.movie.length, " min");
      }
    }

    var MovieDetailComponent = /*#__PURE__*/function () {
      function MovieDetailComponent(route, router, movieService) {
        _classCallCheck(this, MovieDetailComponent);

        this.route = route;
        this.router = router;
        this.movieService = movieService;
      }

      _createClass(MovieDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var param = this.route.snapshot.paramMap.get('id');
          {
            if (param != null) {
              var id = +param;
              this.getMovie(id);
            } else console.log('no route id');
          }
        }
      }, {
        key: "getMovie",
        value: function getMovie(id) {
          var _this9 = this;

          this.movieService.getMovie(id).subscribe({
            next: function next(movie) {
              return _this9.movie = movie;
            },
            error: function error(err) {
              return _this9.errorMessage = err;
            }
          });
        }
      }, {
        key: "onBack",
        value: function onBack() {
          this.router.navigate(['/kino']);
        }
      }]);

      return MovieDetailComponent;
    }();

    MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) {
      return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]));
    };

    MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieDetailComponent,
      selectors: [["app-movie-detail"]],
      decls: 3,
      vars: 1,
      consts: [[1, "md-component"], ["class", "md-box", 4, "ngIf"], [1, "md-box"], [1, "md-detail"], [1, "md-de-movie-bar"], [1, "md-de-genres"], [1, "md-de-description"], [1, "md-de-reservation"], [1, "button", 2, "direction", "rtl", "float", "right"], [1, "md-side-panel"], [1, "md-sp-rating"], [1, "md-sp-rating-rating"], [1, "md-sp-rating-value"], [1, "md-sp-rating-head"], [1, "md-sp-poster"], ["src", "assets/img/poster.png"], [1, "md-sp-list"]],
      template: function MovieDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cinema-proper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieDetailComponent_div_2_Template, 42, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
        }
      },
      directives: [_cinema_cinema_proper_component__WEBPACK_IMPORTED_MODULE_3__["CinemaProperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".md-component[_ngcontent-%COMP%]{\r\n    width: 96%;\r\n    margin: 4% 2%;\r\n    box-sizing: border-box;\r\n    min-width: 25em;\r\n}\r\n\r\n.md-box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\n\r\n\r\n.md-detail[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 81%;\r\n}\r\n\r\n.md-de-movie-bar[_ngcontent-%COMP%]{\r\n    word-wrap: break-word;\r\n    background-color: rgb(255, 248, 220);\r\n    margin:0px;\r\n    padding: 2%;\r\n}\r\n\r\n.md-de-movie-bar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-transform: uppercase;\r\n    text-align: left;\r\n    text-shadow: 0.04ex 0.04ex rgb(128, 128, 128);\r\n    margin: 0px;\r\n}\r\n\r\n.md-de-genres[_ngcontent-%COMP%]{\r\n    background-color: rgb(101, 46, 1);\r\n    width: 100%;\r\n}\r\n\r\n.md-de-genres[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    display: inline-flex;\r\n    color: seashell;\r\n    font-size: 1em;\r\n    margin: 0px 5%;\r\n    padding: 0.3ex;\r\n}\r\n\r\n.md-de-description[_ngcontent-%COMP%]{\r\n    background-color: rgb(75, 64, 51);\r\n    padding: 1em;\r\n    margin: 1em;\r\n    text-align: justify;\r\n    float: left;\r\n    width: inherit;\r\n    width: -webkit-fill-available;\r\n    font-size: 15pt;\r\n}\r\n\r\n.md-de-reservation[_ngcontent-%COMP%]{\r\n    float: left;\r\n    background-color: rgb(255, 248, 220);\r\n    margin: 0.7em;\r\n    width: 83%;\r\n    width: -webkit-fill-available;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    border: none;\r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n\r\n.md-side-panel[_ngcontent-%COMP%]{\r\n    width: 19%;\r\n    float: left;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.md-sp-rating[_ngcontent-%COMP%]{\r\n    background-color: rgb(75,64,51);\r\n    margin: 0% 2.5%;\r\n    padding: 2.5%;\r\n}\r\n\r\n.md-sp-rating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 30pt;\r\n}\r\n\r\n.md-sp-rating-rating[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.md-sp-rating-value[_ngcontent-%COMP%]{\r\n    font-size: 21pt;\r\n    margin: 0% 2.5%;\r\n}\r\n\r\n.md-sp-rating-star[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n.md-sp-rating-head[_ngcontent-%COMP%]{\r\n    clear: both;\r\n    text-align: center;\r\n    margin: 2.5% 0%;\r\n    color: rgb(255, 253, 245);\r\n}\r\n\r\n.md-sp-poster[_ngcontent-%COMP%]{\r\n    background: rgb(104,98,98);\r\n    background: linear-gradient(90deg, rgba(104,98,98,0.1) 0%, rgba(75,64,51,0.05) 100%);\r\n    width: 100%;\r\n}\r\n\r\n.md-sp-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    margin: 2.5%;\r\n}\r\n\r\n.md-sp-list[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    padding: 1ex;\r\n    color: rgb(255, 253, 245);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n    color: white;\r\n    background-color:rgb(101, 46, 1);\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    border: none;\r\n    border-radius: 5pt;\r\n    font-weight: 500;\r\n    font-size: 21pt;\r\n    padding: 0ex 1ex 0ex 1ex;\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(192, 192, 192);\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50Lm1vZHVsZS9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyREFBMkQ7SUFDM0QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw2Q0FBNkM7SUFDN0MsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9HQUFvRztJQUNwRyxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBLHdDQUF3Qzs7QUFDeEM7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsb0ZBQW9GO0lBQ3BGLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBR0M7SUFDRyxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsaURBQWlEO0FBQ3JEOztBQUVDO0lBQ0csb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcURDIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50Lm1vZHVsZS9tb3ZpZXMvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtY29tcG9uZW50e1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbjogNCUgMiU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWluLXdpZHRoOiAyNWVtO1xyXG59XHJcblxyXG4ubWQtYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLyojIyNMRUZUIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cclxuLm1kLWRldGFpbHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDgxJTtcclxufVxyXG5cclxuLm1kLWRlLW1vdmllLWJhcntcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OCwgMjIwKTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLm1kLWRlLW1vdmllLWJhciBoMntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC4wNGV4IDAuMDRleCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLm1kLWRlLWdlbnJlc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDQ2LCAxKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWQtZGUtZ2VucmVzIHB7XHJcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjb2xvcjogc2Vhc2hlbGw7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIG1hcmdpbjogMHB4IDUlO1xyXG4gICAgcGFkZGluZzogMC4zZXg7XHJcbn1cclxuXHJcbi5tZC1kZS1kZXNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNjQsIDUxKTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxufVxyXG5cclxuLm1kLWRlLXJlc2VydmF0aW9ue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIyMCk7XHJcbiAgICBtYXJnaW46IDAuN2VtO1xyXG4gICAgd2lkdGg6IDgzJTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLyojIyNSSUdIVCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cclxuLm1kLXNpZGUtcGFuZWx7XHJcbiAgICB3aWR0aDogMTklO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5tZC1zcC1yYXRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsNjQsNTEpO1xyXG4gICAgbWFyZ2luOiAwJSAyLjUlO1xyXG4gICAgcGFkZGluZzogMi41JTtcclxufVxyXG5cclxuLm1kLXNwLXJhdGluZyBpbWd7XHJcbiAgICB3aWR0aDogMzBwdDtcclxufVxyXG5cclxuLm1kLXNwLXJhdGluZy1yYXRpbmd7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZC1zcC1yYXRpbmctdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDIxcHQ7XHJcbiAgICBtYXJnaW46IDAlIDIuNSU7XHJcbn1cclxuXHJcbi5tZC1zcC1yYXRpbmctc3RhcntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1kLXNwLXJhdGluZy1oZWFke1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIuNSUgMCU7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjUzLCAyNDUpO1xyXG59XHJcblxyXG4ubWQtc3AtcG9zdGVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEwNCw5OCw5OCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTA0LDk4LDk4LDAuMSkgMCUsIHJnYmEoNzUsNjQsNTEsMC4wNSkgMTAwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1kLXNwLXBvc3RlciBpbWd7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAyLjUlO1xyXG59XHJcblxyXG4ubWQtc3AtbGlzdHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMWV4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1MywgMjQ1KTtcclxufVxyXG5cclxuXHJcbiAuYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTAxLCA0NiwgMSk7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjFwdDtcclxuICAgIHBhZGRpbmc6IDBleCAxZXggMGV4IDFleDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuIC5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxOTIsIDE5Mik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypcclxuXHJcbi5idXR0b24tYmFye1xyXG4gICAgbWFyZ2luOiAwJSA0JSAwJSA0JTtcclxuICAgIHBhZGRpbmc6IDElIDMuNyUgMSUgMy43JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tYmFyIC5idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig4NywgOTIsIDk3KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMGV4IDFleCAwZXggMWV4O1xyXG59XHJcblxyXG4uYnV0dG9uLWJhciAuYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTkyLCAxOTIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW92aWUtbGlzdHtcclxuICAgIG1hcmdpbjowJSA0JSAwJSA0JTtcclxufVxyXG5cclxuLm1vdmllLWJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjAsIDQ3KTtcclxuICAgIHBhZGRpbmc6IDBweCA0JSAwLjFweCA0JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLm1vdmllLWluLWJveCAuYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgNDYsIDEpO1xyXG59XHJcbi5tb3ZpZS1pbi1ib3ggLmJhciBwe1xyXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgY29sb3I6IHNlYXNoZWxsO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBtYXJnaW46IDBweCA1JTtcclxuICAgIHBhZGRpbmc6IDAuM2V4O1xyXG59XHJcblxyXG4ubW92aWUtaW4tYm94IC5kZXNjcmlwdGlvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTYsIDExNiwgODUpO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4O1xyXG59XHJcbiovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-detail',
          templateUrl: './movie-detail.component.html',
          styleUrls: ['./movie-detail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _movies_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client.module/movies/movies.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/client.module/movies/movies.component.ts ***!
    \**********************************************************/

  /*! exports provided: MoviesComponent */

  /***/
  function srcAppClientModuleMoviesMoviesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesComponent", function () {
      return MoviesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./movies.service */
    "./src/app/client.module/movies/movies.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        background: "white"
      };
    };

    function MoviesComponent_div_1_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r1.length, " min ");
      }
    }

    function MoviesComponent_div_1_hr_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 15);
      }
    }

    function MoviesComponent_div_1_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r1.director, " ");
      }
    }

    var _c1 = function _c1(a1) {
      return ["/movie", a1];
    };

    var _c2 = function _c2(a0) {
      return {
        color: a0
      };
    };

    function MoviesComponent_div_1_a_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MoviesComponent_div_1_a_9_Template_a_mouseover_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.hover = true;
        })("mouseleave", function MoviesComponent_div_1_a_9_Template_a_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.hover = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " details... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, movie_r1.id))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r5.hover == true ? "white" : "rgb(169, 169, 169)"));
      }
    }

    function MoviesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MoviesComponent_div_1_Template_div_mouseover_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var movie_r1 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.changeText = true && (ctx_r12.id = movie_r1.id);
        })("mouseleave", function MoviesComponent_div_1_Template_div_mouseleave_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.changeText = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MoviesComponent_div_1_p_5_Template, 2, 3, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MoviesComponent_div_1_hr_6_Template, 1, 0, "hr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MoviesComponent_div_1_p_7_Template, 2, 3, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MoviesComponent_div_1_a_9_Template, 3, 6, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeText && movie_r1.id == ctx_r0.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeText && movie_r1.id == ctx_r0.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeText && movie_r1.id == ctx_r0.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.changeText && movie_r1.id == ctx_r0.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, movie_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);
      }
    }

    var MoviesComponent = /*#__PURE__*/function () {
      function MoviesComponent(movieService) {
        _classCallCheck(this, MoviesComponent);

        this.movieService = movieService;
        this.movies = [];
        this.changeText = false;
        this.hover = false;
      }

      _createClass(MoviesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.movieService.getMovies().subscribe({
            next: function next(movies) {
              _this10.movies = movies;
            },
            error: function error(err) {
              return _this10.errorMessage = err;
            }
          });
        }
      }]);

      return MoviesComponent;
    }();

    MoviesComponent.ɵfac = function MoviesComponent_Factory(t) {
      return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]));
    };

    MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MoviesComponent,
      selectors: [["app-movies"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_movies_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]])],
      decls: 2,
      vars: 1,
      consts: [[1, "movies-component"], ["class", "movie-box", 4, "ngFor", "ngForOf"], [1, "movie-box"], [1, "box-insides"], [1, "movie-poster"], ["src", "assets/img/poster.png"], [1, "movie-detail", 3, "mouseover", "mouseleave"], ["class", "movie-detail-length", 3, "ngStyle", 4, "ngIf"], ["class", "movie-detail-line", 4, "ngIf"], ["class", "movie-detail-director", 3, "ngStyle", 4, "ngIf"], [1, "movie-detail-link-text", 2, "background-color", "unset"], ["class", "movie-detail-link-text", "style", "opacity: 1;", 3, "routerLink", "ngStyle", "mouseover", "mouseleave", 4, "ngIf"], [1, "movie-link", 3, "routerLink"], [1, "movie-title"], [1, "movie-detail-length", 3, "ngStyle"], [1, "movie-detail-line"], [1, "movie-detail-director", 3, "ngStyle"], [1, "movie-detail-link-text", 2, "opacity", "1", 3, "routerLink", "ngStyle", "mouseover", "mouseleave"], [1, "movie-detail-details-message-box", 2, "background-color", "rgb(73, 35, 8)"]],
      template: function MoviesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoviesComponent_div_1_Template, 14, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
      styles: [".movies-component[_ngcontent-%COMP%]{\r\n    width: 96%;\r\n    margin: auto;\r\n    box-sizing: border-box;\r\n    min-width: 25em;\r\n}\r\n\r\n\r\n.movie-link[_ngcontent-%COMP%]{\r\n    display:block;\r\n    text-decoration: none;\r\n    color: black;\r\n    position: relative;\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.movie-box[_ngcontent-%COMP%]{\r\n    width: 28ex;\r\n    margin: 2% 2%;\r\n    padding: 0px;\r\n    float: left;\r\n    overflow: hidden;\r\n    background: rgb(48,19,8);\r\n    background: linear-gradient(180deg, rgba(48,19,8,1) 0%, rgba(48,19,8,0.3993896142441351) 85%, rgba(48,19,8,0) 100%);\r\n}\r\n\r\n\r\n.movie-box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    opacity: 0.9;\r\n    background-color: rgba(101, 46, 1, 0.3);\r\n    transition: 0.3s;\r\n}\r\n\r\n\r\n.movie-poster[_ngcontent-%COMP%]{\r\n    width: 28ex;\r\n    position: relative;\r\n}\r\n\r\n\r\n.movie-title[_ngcontent-%COMP%]{\r\n    padding: 0.3em;\r\n    color: rgb(255, 255, 255);\r\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-weight: 400;\r\n    min-height: 3em;\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n.movie-detail[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0%;\r\n    z-index: 900;\r\n    font-size: 30pt;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.movie-detail-length[_ngcontent-%COMP%]{\r\n    font-size: 12pt;\r\n    background-color: white;\r\n    margin-bottom: 0px;\r\n    padding: 0.1ex;\r\n}\r\n\r\n\r\n.movie-detail-director[_ngcontent-%COMP%]{\r\n    text-transform: capitalize;\r\n    margin-top: 0px;\r\n    font-size: 15pt;\r\n    background-color: green;\r\n    padding: 0.2ex;\r\n}\r\n\r\n\r\n.movie-detail-line[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 2pt;\r\n    background: black;\r\n    border: none;\r\n    margin: 0px;\r\n}\r\n\r\n\r\n.movie-detail-link-text[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 60% 0%;\r\n    z-index: 1000;\r\n    text-decoration: none;\r\n    font-size: 25pt;\r\n    background-color: unset\r\n}\r\n\r\n\r\n.movie-detail-details-message-box[_ngcontent-%COMP%]{\r\n    border: solid 0pt rgb(163, 150, 140);\r\n    border-radius: 5pt;\r\n    width: -webkit-min-content;\r\n    width: -moz-min-content;\r\n    width: min-content;\r\n    padding: 0px 0.7ex;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50Lm1vZHVsZS9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixtSEFBbUg7QUFDdkg7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVOQUF1TjtJQUN2TixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZjtBQUNKOzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jbGllbnQubW9kdWxlL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZXMtY29tcG9uZW50e1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtaW4td2lkdGg6IDI1ZW07XHJcbn1cclxuXHJcblxyXG4ubW92aWUtbGlua3tcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW92aWUtYm94e1xyXG4gICAgd2lkdGg6IDI4ZXg7XHJcbiAgICBtYXJnaW46IDIlIDIlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDQ4LDE5LDgpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg0OCwxOSw4LDEpIDAlLCByZ2JhKDQ4LDE5LDgsMC4zOTkzODk2MTQyNDQxMzUxKSA4NSUsIHJnYmEoNDgsMTksOCwwKSAxMDAlKTtcclxufVxyXG5cclxuLm1vdmllLWJveCA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDQ2LCAxLCAwLjMpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLm1vdmllLXBvc3RlcntcclxuICAgIHdpZHRoOiAyOGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubW92aWUtdGl0bGV7XHJcbiAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtaW4taGVpZ2h0OiAzZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgei1pbmRleDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWwtbGVuZ3Roe1xyXG4gICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjFleDtcclxufVxyXG5cclxuLm1vdmllLWRldGFpbC1kaXJlY3RvcntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBwYWRkaW5nOiAwLjJleDtcclxufVxyXG5cclxuLm1vdmllLWRldGFpbC1saW5le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJwdDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWwtbGluay10ZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDYwJSAwJTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldFxyXG59XHJcblxyXG4ubW92aWUtZGV0YWlsLWRldGFpbHMtbWVzc2FnZS1ib3h7XHJcbiAgICBib3JkZXI6IHNvbGlkIDBwdCByZ2IoMTYzLCAxNTAsIDE0MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHQ7XHJcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMC43ZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0gIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movies',
          templateUrl: 'movies.component.html',
          styleUrls: ['./movies.component.css'],
          providers: [_movies_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]]
        }]
      }], function () {
        return [{
          type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/client.module/movies/movies.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/client.module/movies/movies.service.ts ***!
    \********************************************************/

  /*! exports provided: MovieService */

  /***/
  function srcAppClientModuleMoviesMoviesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieService", function () {
      return MovieService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MovieService = /*#__PURE__*/function () {
      function MovieService(http) {
        _classCallCheck(this, MovieService);

        this.http = http;
        this.moviesUrl = 'http://localhost:8080/movie/getAll';
        this.movieUrl = 'http://localhost:8080/movie/get/';
      }

      _createClass(MovieService, [{
        key: "getMovies",
        value: function getMovies() {
          return this.http.get(this.moviesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('Wszystko: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getMovie",
        value: function getMovie(id) {
          return this.http.get(this.movieUrl + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('jeden: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return MovieService;
    }();

    MovieService.ɵfac = function MovieService_Factory(t) {
      return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    MovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MovieService,
      factory: MovieService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movies.ts":
  /*!***************************!*\
    !*** ./src/app/movies.ts ***!
    \***************************/

  /*! exports provided: Movie */

  /***/
  function srcAppMoviesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Movie", function () {
      return Movie;
    });

    var Movie = /*#__PURE__*/function () {
      function Movie() {
        _classCallCheck(this, Movie);
      }

      _createClass(Movie, [{
        key: "Movie",
        value: function Movie() {}
      }]);

      return Movie;
    }();
    /***/

  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/kino"];
    };

    var _c1 = function _c1() {
      return ["/admin"];
    };

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(router) {
        _classCallCheck(this, WelcomeComponent);

        this.router = router;
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.navigate(['/welcome']);
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 7,
      vars: 4,
      consts: [[3, "routerLink"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome works!!!!!!!!!!!!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " nazwa kina\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " panel administracyjny\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Rafał\Documents\Angular\cinema\cinema\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map