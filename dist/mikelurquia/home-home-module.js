(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 0, consts: [["id", "home"], [1, "container", "mt-5"], [1, "lead"], [1, "row"], [1, "col-12"], [1, "card-deck"], [1, "card"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png", "alt", "Card image cap", 1, "card-img-top", "justify-content-center", "align-self-center", "mt-1", "p-2"], [1, "card-body", "mb-0", "pb-0"], [1, "card-title", "text-center"], ["src", "data:image/png;base64,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", "alt", "Card image cap", 1, "card-img-top", "justify-content-center", "align-self-center", "mt-1", "p-3"], ["src", "https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png", "alt", "Card image cap", 1, "card-img-top", "justify-content-center", "align-self-center", "mt-1", "p-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I am a front and back-end developer. I work with state of the art web technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BOOTSTRAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NESTJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");





const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
    /*children: [
      { path: '', redirectTo: 'layout' },
      { path: 'layout',          component: LayoutComponent },
      { path: 'robotdetail/:id', component: RobotDetailComponent }
    ]*/
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map