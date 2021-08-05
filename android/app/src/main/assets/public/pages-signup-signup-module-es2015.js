(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "UUSl":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "eOyQ");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "XHxw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");










let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "XHxw":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "vfPX");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "bYg9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let SignupPage = class SignupPage {
    constructor(formbuilder, authService, loadingCtrl, alertCtrl, router, navCtr) {
        this.formbuilder = formbuilder;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.navCtr = navCtr;
        this.validationMessage = {
            email: [
                { type: "required", message: "Please enter your Email" },
                { type: "pattern", message: "The Email entered is incorrect. Try again" }
            ],
            username: [
                { type: "required", message: "Please enter your Username!" },
                { type: "minlength", message: "The Username entered is incorrect. Try again" }
            ],
            password: [
                { type: "required", message: "Please enter your Password!" },
                { type: "minlength", message: "The Email entered is incorrect. Try again" }
            ]
        };
        this.loading = this.loadingCtrl;
    }
    ngOnInit() {
        this.validationFormUser = this.formbuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.(com|co|za|org)')
            ])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
            ]))
        });
    }
    registerUser(value) {
        this.showalert();
        try {
            this.authService.userRegistration(value).then(response => {
                console.log(response);
                if (response.user) {
                    response.user.updateProfile({
                        displayName: value.names,
                        email: value.email,
                        password: value.password
                    });
                    this.loading.dismiss();
                    this.router.navigate(['./tabs']);
                }
            }, error => {
                this.loading.dismiss();
                this.errorLoading(error.message);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    errorLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.alertCtrl.create({
                header: "Error Registering",
                message: message,
                buttons: [{
                        text: 'ok',
                        handler: () => {
                            this.navCtr.navigateBack(['signup']);
                        }
                    }]
            });
            yield loading.present();
        });
    }
    showalert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var loader = yield this.alertCtrl.create({
                message: "please wait....",
            });
            loader.present();
        });
    }
    goBack() {
        window.history.back();
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ }),

/***/ "bYg9":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  font-size: 10px;\n  font-weight: 200px;\n  color: #e40202;\n}\n\n.loader {\n  border: 6px solid #f3f3f3;\n  border-radius: 100%;\n  border-top: 5px solid #118cdd;\n  width: 20px;\n  height: 20px;\n  animation: spin 1.3s linear infinite;\n}\n\n.social-btns {\n  text-align: center;\n}\n\n.social-btns ion-button {\n  border-radius: 100px;\n  padding-left: 5px;\n  width: 40px;\n}\n\nion-toolbar ion-title {\n  text-align: center;\n  padding-bottom: 30px;\n  padding-right: 70px;\n}\n\nion-toolbar ion-title ion-icon {\n  padding-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFDRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBSUU7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFSTtFQUNFLG1CQUFBO0FBQU4iLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjI4LCAyLCAyKTtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiA2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMTE4Y2RkO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDEuM3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4uc29jaWFsLWJ0bnMgIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gIGlvbi10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNzBweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG59XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "eOyQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "XHxw");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "vfPX":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div>\n    <ion-toolbar color='secondary'>\n      <ion-title><ion-icon name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>SignUp</ion-title>\n    </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"center\">\n    <h1>Create Account</h1>\n  </div>\n\n  <form [formGroup]=\"validationFormUser\" (ngSubmit)=\"registerUser(validationFormUser.value)\">\n    <div class=\"wrapform\">\n\n        <ion-item>\n         <ion-input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\"></ion-input>\n        </ion-item>\n        <div>\n          <ng-container *ngFor=\"let validation of validationMessage.email\">\n            <div class=\"error-message\" *ngIf=\"validationFormUser.get('email').hasError(validation.type)&&(validationFormUser.get('email').dirty || validationFormUser.get('email').touched)\">\n              {{validation.message}}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-input type='text' name=\"username\" formControlName=\"username\" placeholder=\"Username\"></ion-input>\n        </ion-item>\n\n        <div>\n          <ng-container *ngFor=\"let validation of validationMessage.username\">\n            <div class=\"error-message\" *ngIf=\"validationFormUser.get('username').hasError(validation.type)&&(validationFormUser.get('username').dirty || validationFormUser.get('username').touched)\">\n              {{validation.message}}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-input type='Password' name=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n        </ion-item>\n\n        <div>\n          <ng-container *ngFor=\"let validation of validationMessage.password\">\n            <div class=\"error-message\" *ngIf=\"validationFormUser.get('password').hasError(validation.type)&&(validationFormUser.get('password').dirty || validationFormUser.get('password').touched)\">\n              {{validation.message}}\n            </div>\n          </ng-container>\n        </div>\n\n        <div>\n          <p>Already have an account?<a routerLink='/login'> Log In</a></p>\n        </div>\n\n        <ion-button expand=\"full\" shape='round' color=\"danger\" type=\"submit\" class=\"sign-btn\" [disabled]=\"!validationFormUser.valid\">SignUp</ion-button>\n\n    </div>\n  </form>\n\n  <div style=\"color:rgb(85, 156, 214);padding-top:30px; text-align:center\">\n    <p>Or signup Via</p>\n  </div>\n\n  <div class=\"social-btns\">\n    <ion-button fill=\"clear\" class=\"facebookbtn ion-no-padding\">\n      <ion-img src=\"./assets/images/facebook.png\"></ion-img>\n    </ion-button>\n    <ion-button fill=\"clear\" class=\"applebtn ion-no-padding\">\n      <ion-img src=\"./assets/images/apple.png\"></ion-img>\n    </ion-button>\n    <ion-button fill=\"clear\" class=\"googlebtn ion-no-padding\">\n      <ion-img src=\"./assets/images/googleplus.jpg\"></ion-img>\n    </ion-button>\n  </div>\n</ion-content>\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map