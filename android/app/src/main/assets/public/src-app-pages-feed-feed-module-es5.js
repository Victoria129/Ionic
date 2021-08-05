(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-feed-feed-module"], {
    /***/
    "BYsb":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function BYsb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='secondary'>\n    <ion-title><ion-icon name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>Feeds</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h5 style=\"text-align: center;\">Discover what's new</h5>\n  <app-feeds></app-feeds>\n</ion-content>\n\n\n\n\n\n";
      /***/
    },

    /***/
    "CX0p":
    /*!*******************************************!*\
      !*** ./src/app/pages/feed/feed.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function CX0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#dfeaff;\n}\nion-content ion-icon {\n  padding-top: 10px;\n}\nion-header {\n  text-align: center;\n}\nion-toolbar ion-title {\n  text-align: center;\n  padding-bottom: 30px;\n  padding-right: 70px;\n}\nion-toolbar ion-title ion-icon {\n  padding-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0FBRUo7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFHRTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0k7RUFDRSxtQkFBQTtBQUNOIiwiZmlsZSI6ImZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZGZlYWZmO1xyXG4gIGlvbi1pY29ue1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgaW9uLXRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcbn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "QUIo":
    /*!***************************************************!*\
      !*** ./src/app/pages/feed/feed-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: FeedPageRoutingModule */

    /***/
    function QUIo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function () {
        return FeedPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feed.page */
      "nmju");

      var routes = [{
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
      }];

      var FeedPageRoutingModule = function FeedPageRoutingModule() {
        _classCallCheck(this, FeedPageRoutingModule);
      };

      FeedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedPageRoutingModule);
      /***/
    },

    /***/
    "SwR0":
    /*!*******************************************!*\
      !*** ./src/app/pages/feed/feed.module.ts ***!
      \*******************************************/

    /*! exports provided: FeedPageModule */

    /***/
    function SwR0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
        return FeedPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feed-routing.module */
      "QUIo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _feed_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./feed.page */
      "nmju");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var FeedPageModule = function FeedPageModule() {
        _classCallCheck(this, FeedPageModule);
      };

      FeedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_7__["FeedPage"]]
      })], FeedPageModule);
      /***/
    },

    /***/
    "nmju":
    /*!*****************************************!*\
      !*** ./src/app/pages/feed/feed.page.ts ***!
      \*****************************************/

    /*! exports provided: FeedPage */

    /***/
    function nmju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
        return FeedPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./feed.page.html */
      "BYsb");
      /* harmony import */


      var _feed_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./feed.page.scss */
      "CX0p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FeedPage = /*#__PURE__*/function () {
        function FeedPage() {
          _classCallCheck(this, FeedPage);
        }

        _createClass(FeedPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }]);

        return FeedPage;
      }();

      FeedPage.ctorParameters = function () {
        return [];
      };

      FeedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed',
        template: _raw_loader_feed_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FeedPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-feed-feed-module-es5.js.map