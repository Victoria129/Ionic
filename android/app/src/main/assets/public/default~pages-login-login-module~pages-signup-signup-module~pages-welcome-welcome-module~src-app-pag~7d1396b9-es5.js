(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-signup-signup-module~pages-welcome-welcome-module~src-app-pag~7d1396b9"], {
    /***/
    "+PL+":
    /*!*****************************************************!*\
      !*** ./src/app/components/start/start.component.ts ***!
      \*****************************************************/

    /*! exports provided: StartComponent */

    /***/
    function PL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
        return StartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./start.component.html */
      "kPKb");
      /* harmony import */


      var _start_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./start.component.scss */
      "MNc6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var StartComponent = /*#__PURE__*/function () {
        function StartComponent(router) {
          _classCallCheck(this, StartComponent);

          this.router = router;
        }

        _createClass(StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToLoginPage",
          value: function navigateToLoginPage() {
            this.router.navigate(['login']);
          }
        }]);

        return StartComponent;
      }();

      StartComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StartComponent);
      /***/
    },

    /***/
    "8+mF":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function mF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n  <ion-slides pager=\"true\"[options]=\"{pagination: false}\">\n\n    <ion-slide>\n      <h2>ChilOut</h2>\n      <h3>Nature Calls</h3>\n      <app-logo></app-logo>\n      <h5>Let your self loose.</h5>\n      <h5>Give your self a chance.</h5>\n      <h5>When nature calls,</h5>\n      <h5>run to it!</h5>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>Inspiration</h2>\n      <h4>Find what inspires you!</h4>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Singing Birds</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Horses</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Water Springs</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">In the Woods</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Piano</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Saxophone</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Morning Breeze</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Random</ion-button>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>There's more!</h2>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Singing Birds</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Horses</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Water Springs</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">In the Woods</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Piano</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Saxophone</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Random</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"danger\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Saxophone</ion-button>\n      <ion-button expand=\"block\" shape='block' type=\"submit\" color=\"dark\" class=\"sign-btn\" (click)=\"navigateToLoginPage()\">Random</ion-button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n";
      /***/
    },

    /***/
    "EiNB":
    /*!*******************************************************!*\
      !*** ./src/app/components/slides/slides.component.ts ***!
      \*******************************************************/

    /*! exports provided: SlidesComponent */

    /***/
    function EiNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidesComponent", function () {
        return SlidesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./slides.component.html */
      "8+mF");
      /* harmony import */


      var _slides_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./slides.component.scss */
      "Lslk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SlidesComponent = /*#__PURE__*/function () {
        function SlidesComponent(router) {
          _classCallCheck(this, SlidesComponent);

          this.router = router;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
        }

        _createClass(SlidesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToLoginPage",
          value: function navigateToLoginPage() {
            this.router.navigate(['login']);
          }
        }]);

        return SlidesComponent;
      }();

      SlidesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      SlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-slides',
        template: _raw_loader_slides_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_slides_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SlidesComponent);
      /***/
    },

    /***/
    "Lslk":
    /*!*********************************************************!*\
      !*** ./src/app/components/slides/slides.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Lslk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide {\n  display: block;\n}\nion-slide h2 {\n  padding: 20px 20px;\n  font-weight: bold;\n}\nion-slide h3 {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxjQUFBO0FBREo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksaUJBQUE7QUFBUiIsImZpbGUiOiJzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGV7XHJcblxyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaDJ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "MNc6":
    /*!*******************************************************!*\
      !*** ./src/app/components/start/start.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function MNc6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ion-button {\n  width: auto;\n  height: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "Vre5":
    /*!*******************************************************!*\
      !*** ./src/app/components/feeds/feeds.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Vre5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo-main-cont.demo-comp-listview {\n  padding: 0;\n}\n\n.demo-comp-listview .demo-note {\n  margin: 10px;\n}\n\n.md-mailbox .mbsc-lv-item {\n  line-height: 20px;\n  padding: 10px 10px 10px 60px;\n}\n\n.md-mail-icon {\n  width: 40px;\n  line-height: 40px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #fff;\n  text-align: center;\n  text-shadow: none;\n}\n\n.md-mail-date {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 12px;\n}\n\n.md-mail-from {\n  font-size: 14px;\n}\n\n.md-mail-subject {\n  font-size: 12px;\n}\n\n.md-mail-empty {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmZWVkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFxQyxVQUFBO0FBRXJDOztBQURBO0VBQWlDLFlBQUE7QUFLakM7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0FBTUo7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSEE7RUFDSSxhQUFBO0FBTUoiLCJmaWxlIjoiZmVlZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1tYWluLWNvbnQuZGVtby1jb21wLWxpc3R2aWV3IHsgcGFkZGluZzogMDsgfVxyXG4uZGVtby1jb21wLWxpc3R2aWV3IC5kZW1vLW5vdGUgeyBtYXJnaW46IDEwcHg7IH1cclxuXHJcbi5tZC1tYWlsYm94IC5tYnNjLWx2LWl0ZW0ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA2MHB4O1xyXG59XHJcblxyXG4ubWQtbWFpbC1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1kLW1haWwtZGF0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1kLW1haWwtZnJvbSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tZC1tYWlsLXN1YmplY3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWQtbWFpbC1lbXB0eSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "WsrV":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/feeds/feeds.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WsrV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <mbsc-listview [options]=\"listviewSettings\" class=\"md-mailbox\">\n    <mbsc-listview-item *ngFor=\"let item of data\">\n        <div class=\"md-mail-icon\" [style.background]=\"'#' + item.color\">{{item.mono}}</div>\n        <div class=\"md-mail-date\">{{item.date}}</div>\n        <div class=\"md-mail-from\">{{item.name}}</div>\n        <div class=\"md-mail-subject\">{{item.subj}}</div>\n    </mbsc-listview-item>\n  </mbsc-listview>\n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "gnXD":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function gnXD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<img src='assets/images/nature.jpg'>\n\n\n";
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _slides_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slides/slides.component */
      "EiNB");
      /* harmony import */


      var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./start/start.component */
      "+PL+");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logo/logo.component */
      "o5g6");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./feeds/feeds.component */
      "w+7p");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_7__["FeedsComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_7__["FeedsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "kPKb":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function kPKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-button expand=\"block\" color=\"secondary\" (click)=\"navigateToLoginPage()\">Start</ion-button>\n\n\n\n\n";
      /***/
    },

    /***/
    "o5g6":
    /*!***************************************************!*\
      !*** ./src/app/components/logo/logo.component.ts ***!
      \***************************************************/

    /*! exports provided: LogoComponent */

    /***/
    function o5g6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
        return LogoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./logo.component.html */
      "gnXD");
      /* harmony import */


      var _logo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logo.component.scss */
      "yrnK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LogoComponent = /*#__PURE__*/function () {
        function LogoComponent() {
          _classCallCheck(this, LogoComponent);
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoComponent;
      }();

      LogoComponent.ctorParameters = function () {
        return [];
      };

      LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-logo',
        template: _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_logo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogoComponent);
      /***/
    },

    /***/
    "w+7p":
    /*!*****************************************************!*\
      !*** ./src/app/components/feeds/feeds.component.ts ***!
      \*****************************************************/

    /*! exports provided: FeedsComponent */

    /***/
    function w7p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedsComponent", function () {
        return FeedsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feeds_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feeds.component.html */
      "WsrV");
      /* harmony import */


      var _feeds_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feeds.component.scss */
      "Vre5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FeedsComponent = /*#__PURE__*/function () {
        function FeedsComponent() {
          var _this = this;

          _classCallCheck(this, FeedsComponent);

          this.data = [{
            color: '4c66a4',
            mono: 'F',
            date: 'Nov 4',
            name: 'Facebook',
            subj: 'Your weekly page update'
          }, {
            color: '287BBC',
            mono: 'L',
            date: 'Nov 1',
            name: 'LinkedIn',
            subj: 'Michael has endorsed you!'
          }, {
            color: '5185a8',
            mono: 'M',
            date: 'Oct 31',
            name: 'Mobiscroll',
            subj: 'October update'
          }, {
            color: '1a3665',
            mono: 'P',
            date: 'Oct 31',
            name: 'PayPal',
            subj: 'Stay fashionable in the cold with PayPal'
          }, {
            color: 'dd4b39',
            mono: 'G',
            date: 'Oct 28',
            name: 'Google+',
            subj: 'John Doe added you back on Google+'
          }, {
            color: '5185a8',
            mono: 'M',
            date: 'Oct 27',
            name: 'Mobiscroll',
            subj: 'Password reset information'
          }];
          this.listviewSettings = {
            theme: 'ios',
            themeVariant: 'dark',
            stages: [{
              percent: -30,
              action: function action(event, inst) {
                _this.remove(event.index);

                return false;
              },
              undo: true
            }, {
              percent: 30,
              action: function action(event, inst) {
                _this.remove(event.index);

                return false;
              },
              undo: true
            }]
          };
        }

        _createClass(FeedsComponent, [{
          key: "remove",
          value: function remove(index) {
            this.data.splice(index, 1);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FeedsComponent;
      }();

      FeedsComponent.ctorParameters = function () {
        return [];
      };

      FeedsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feeds',
        template: _raw_loader_feeds_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feeds_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeedsComponent);
      /***/
    },

    /***/
    "yrnK":
    /*!*****************************************************!*\
      !*** ./src/app/components/logo/logo.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function yrnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-login-login-module~pages-signup-signup-module~pages-welcome-welcome-module~src-app-pag~7d1396b9-es5.js.map