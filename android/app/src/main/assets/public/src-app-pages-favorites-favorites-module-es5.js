(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-favorites-favorites-module"], {
    /***/
    "BdBH":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favorites/favorites.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function BdBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#dfeaff;\n}\nion-content ion-icon {\n  padding-top: 10px;\n}\nion-header {\n  text-align: center;\n}\nion-toolbar ion-title {\n  text-align: center;\n  padding-bottom: 30px;\n  padding-right: 70px;\n}\nion-toolbar ion-title ion-icon {\n  padding-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXZvcml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjtBQUNBO0VBQ0Usa0JBQUE7QUFFRjtBQUVFO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBSTtFQUNFLG1CQUFBO0FBRU4iLCJmaWxlIjoiZmF2b3JpdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2RmZWFmZjtcclxuICBpb24taWNvbntcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5pb24taGVhZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgaW9uLXRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcbn1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "ICDV":
    /*!*************************************************************!*\
      !*** ./src/app/pages/favorites/favorites-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: FavoritesPageRoutingModule */

    /***/
    function ICDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function () {
        return FavoritesPageRoutingModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _favorites_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./favorites.page */
      "gZ2K");

      var routes = [{
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_4__["FavoritesPage"]
      }];

      var FavoritesPageRoutingModule = function FavoritesPageRoutingModule() {
        _classCallCheck(this, FavoritesPageRoutingModule);
      };

      FavoritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot()],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoritesPageRoutingModule);
      /***/
    },

    /***/
    "JSWD":
    /*!*****************************************************!*\
      !*** ./src/app/pages/favorites/favorites.module.ts ***!
      \*****************************************************/

    /*! exports provided: FavoritesPageModule */

    /***/
    function JSWD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function () {
        return FavoritesPageModule;
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


      var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorites-routing.module */
      "ICDV");
      /* harmony import */


      var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favorites.page */
      "gZ2K");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "j1ZV");

      var FavoritesPageModule = function FavoritesPageModule() {
        _classCallCheck(this, FavoritesPageModule);
      };

      FavoritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
      })], FavoritesPageModule);
      /***/
    },

    /***/
    "dRO/":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function dRO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='secondary'>\n    <ion-title><ion-icon name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>Favorites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n\n\n\n";
      /***/
    },

    /***/
    "gZ2K":
    /*!***************************************************!*\
      !*** ./src/app/pages/favorites/favorites.page.ts ***!
      \***************************************************/

    /*! exports provided: FavoritesPage */

    /***/
    function gZ2K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesPage", function () {
        return FavoritesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./favorites.page.html */
      "dRO/");
      /* harmony import */


      var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./favorites.page.scss */
      "BdBH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FavoritesPage = /*#__PURE__*/function () {
        function FavoritesPage() {
          _classCallCheck(this, FavoritesPage);
        }

        _createClass(FavoritesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            window.history.back();
          }
        }]);

        return FavoritesPage;
      }();

      FavoritesPage.ctorParameters = function () {
        return [];
      };

      FavoritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-favorites',
        template: _raw_loader_favorites_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FavoritesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-pages-favorites-favorites-module-es5.js.map