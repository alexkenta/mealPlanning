(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_plans_plans_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/plans/plans.component */ "./src/app/plans/plans.component.ts");
/* harmony import */ var _app_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _app_recipes_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/recipes/add-recipe/add-recipe.component */ "./src/app/recipes/add-recipe/add-recipe.component.ts");
/* harmony import */ var _app_recipes_view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/recipes/view-recipe/view-recipe.component */ "./src/app/recipes/view-recipe/view-recipe.component.ts");
/* harmony import */ var _app_log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/log-reg/log-reg.component */ "./src/app/log-reg/log-reg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _app_log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_6__["LogRegComponent"] },
    { path: 'recipes', component: _app_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"], children: [
            { path: '', component: _app_recipes_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_4__["AddRecipeComponent"] },
            { path: 'add', component: _app_recipes_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_4__["AddRecipeComponent"] },
            { path: 'view/:id', component: _app_recipes_view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_5__["ViewRecipeComponent"] }
        ] },
    { path: 'plans', component: _app_plans_plans_component__WEBPACK_IMPORTED_MODULE_2__["PlansComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainWrapper {\r\n    background-image: url(https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg);\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n    margin-top: 20px;\r\n}\r\nh1 {\r\n    text-align: center;\r\n    color: #4F8ABE;\r\n    font-family: 'Righteous', cursive;\r\n    font-size: 65px;\r\n}\r\n#mainContent {\r\n    min-height: 300px;\r\n    border: solid 2px gray;\r\n    padding: 10px;\r\n    background-color: white;\r\n    opacity: 0.85;\r\n    margin-bottom: 20px;\r\n}\r\n#nav {\r\n    margin: auto;\r\n}\r\na {\r\n    color: #4F8ABE;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainWrapper\">\n  <h1>mealPlan</h1>\n  <hr>\n  <div id=\"nav\">\n    <a [routerLink]=\"['/']\">home | </a>\n    <a [routerLink]=\"['/recipes']\">recipes | </a>\n    <a [routerLink]=\"['plans']\">meal plans | </a>\n    <a (click)=\"logout()\">logout</a>\n  </div>\n  <div id=\"mainContent\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout().subscribe();
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _meal_planning_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meal-planning.service */ "./src/app/meal-planning.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipes/recipes.component */ "./src/app/recipes/recipes.component.ts");
/* harmony import */ var _plans_plans_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plans/plans.component */ "./src/app/plans/plans.component.ts");
/* harmony import */ var _recipes_view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes/view-recipe/view-recipe.component */ "./src/app/recipes/view-recipe/view-recipe.component.ts");
/* harmony import */ var _recipes_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recipes/add-recipe/add-recipe.component */ "./src/app/recipes/add-recipe/add-recipe.component.ts");
/* harmony import */ var _log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./log-reg/log-reg.component */ "./src/app/log-reg/log-reg.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_8__["RecipesComponent"],
                _plans_plans_component__WEBPACK_IMPORTED_MODULE_9__["PlansComponent"],
                _recipes_view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_10__["ViewRecipeComponent"],
                _recipes_add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_11__["AddRecipeComponent"],
                _log_reg_log_reg_component__WEBPACK_IMPORTED_MODULE_12__["LogRegComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieModule"].forRoot()
            ],
            providers: [_meal_planning_service__WEBPACK_IMPORTED_MODULE_4__["MealPlanningService"], _auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    AuthService.prototype.login = function (user) {
        return this.http.post('/login', user);
    };
    AuthService.prototype.register = function (user) {
        return this.http.post('/register', user);
    };
    AuthService.prototype.logout = function () {
        return this.http.delete('/logout');
    };
    AuthService.prototype.isAuthed = function () {
        var expired = parseInt(this.cookieService.get('expiration'), 10);
        var userID = this.cookieService.get('userID');
        var session = this.cookieService.get('session');
        return session && expired && userID && expired > Date.now();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/log-reg/log-reg.component.css":
/*!***********************************************!*\
  !*** ./src/app/log-reg/log-reg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    width: 150px;\r\n}\r\n\r\n.error {\r\n    font-size: 80%;\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/log-reg/log-reg.component.html":
/*!************************************************!*\
  !*** ./src/app/log-reg/log-reg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h1>Login</h1>\n      <form #login=\"ngForm\" (submit)=\"onLogin(login.value)\">\n        <label for=\"email\">Email: </label>\n        <input type=\"text\" name=\"email\"\n        required\n        [(ngModel)]=\"user.email\"\n        #email=\"ngModel\"\n        >\n        <br>\n        <label for=\"password\">Password: </label>\n        <input type=\"password\" name=\"password\"\n        required\n        [(ngModel)]=\"user.password\"\n        #password=\"ngModel\"\n        >\n        <br>\n        <p *ngIf=\"loginFailed\" class=\"error\">Invalid email/password</p>\n        <input class=\"btn-primary\" type=\"submit\" value=\"Login\">\n      </form>\n    </div>\n    <div class=\"col-md-4\">\n      <h1>Registration</h1>\n      <form #register=\"ngForm\" (submit)=\"onRegister()\">\n        <label for=\"email\">Email: </label>\n        <input type=\"text\" name=\"email\"\n        required\n        [(ngModel)]=\"newUser.email\"\n        #email=\"ngModel\"\n        >\n        <p *ngIf=\"email.touched && email.invalid\" class=\"error\">Please enter a valid email</p>\n        <br>\n        <label for=\"password\">Password: </label>\n        <input type=\"password\" name=\"password\"\n        required\n        minlength=\"7\"\n        [(ngModel)]=\"newUser.password\"\n        #password=\"ngModel\"\n        >\n        <p *ngIf=\"password.touched && password.invalid\" class=\"error\">Password must be atleast 7 characters</p>\n        <br>\n        <label for=\"pwconfirm\">Confirm Password: </label>\n        <input type=\"password\" name=\"pwconfirm\"\n        required\n        [(ngModel)]=\"newUser.pwconfirm\"\n        #pwconfirm = \"ngModel\"\n        [pattern] = 'password.value'>\n        <br>\n        <p *ngIf=\"pwconfirm.touched && pwconfirm.invalid\" class=\"error\">Confirm password must match password</p>\n        <input [disabled]=\"!register.valid\" class=\"btn-primary\" type=\"submit\" value=\"Register\">\n      </form>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/log-reg/log-reg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/log-reg/log-reg.component.ts ***!
  \**********************************************/
/*! exports provided: LogRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogRegComponent", function() { return LogRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogRegComponent = /** @class */ (function () {
    function LogRegComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.newUser = {
            email: '',
            password: '',
            pwconfirm: '',
        };
        this.user = {
            email: '',
            password: ''
        };
        this.registrationErrors = [];
        this.errors = [];
        this.loginFailed = false;
    }
    LogRegComponent.prototype.onLogin = function (user) {
        var _this = this;
        console.log(user);
        this.auth.login(user)
            .subscribe(function () {
            _this.router.navigateByUrl('plans');
        }, function (error) {
            console.log("logRegComp > Login", error);
            _this.loginFailed = true;
        });
    };
    LogRegComponent.prototype.onRegister = function () {
        var _this = this;
        console.log("registering user", this.newUser);
        this.auth.register(this.newUser)
            .subscribe(function () {
            _this.router.navigateByUrl('plans');
        }, function (error) {
            console.log("LogRegComponent > Register", error);
        });
    };
    LogRegComponent.prototype.ngOnInit = function () {
    };
    LogRegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-reg',
            template: __webpack_require__(/*! ./log-reg.component.html */ "./src/app/log-reg/log-reg.component.html"),
            styles: [__webpack_require__(/*! ./log-reg.component.css */ "./src/app/log-reg/log-reg.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogRegComponent);
    return LogRegComponent;
}());



/***/ }),

/***/ "./src/app/meal-planning.service.ts":
/*!******************************************!*\
  !*** ./src/app/meal-planning.service.ts ***!
  \******************************************/
/*! exports provided: MealPlanningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlanningService", function() { return MealPlanningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MealPlanningService = /** @class */ (function () {
    function MealPlanningService(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    MealPlanningService.prototype.getAllRecipes = function () {
        var _this = this;
        this.http.get('/allRecipes')
            .subscribe(function (response) {
            console.log("success", response);
            _this.subject.next(response);
        }, function (err) {
            console.log("error");
        });
    };
    MealPlanningService.prototype.addToPlan = function (recipeId, dayOfWeek, userId) {
        console.log("MP Service > add to plan > recipeId, dow, uId", recipeId, dayOfWeek, userId);
        return this.http.put('/addPlan/' + recipeId + '/' + dayOfWeek + '/' + userId, recipeId, dayOfWeek);
    };
    MealPlanningService.prototype.removeFromPlan = function (user, day) {
        console.log("MP Service > removeFromPlan");
        return this.http.put('/removeFromPlan/' + user + '/' + day, day);
    };
    MealPlanningService.prototype.getOneRecipe = function (id) {
        console.log("get one recipe", id);
        return this.http.get('/getOneRecipe/' + id);
    };
    MealPlanningService.prototype.addNewRecipe = function (recipe) {
        console.log("hitting SERVICE > ADD NEW RECIPE");
        return this.http.post('/addNewRecipe', recipe);
    };
    MealPlanningService.prototype.getUser = function (userID) {
        console.log("MEAL SERVICE > userId", userID);
        return this.http.get('/thisUser/' + userID);
    };
    MealPlanningService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MealPlanningService);
    return MealPlanningService;
}());



/***/ }),

/***/ "./src/app/plans/plans.component.css":
/*!*******************************************!*\
  !*** ./src/app/plans/plans.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th {\r\n    /* width: 150px; */\r\n    text-align: center;\r\n}\r\ntd {\r\n    text-align: center;\r\n}\r\nli {\r\n    list-style-type: none;\r\n    text-align: left;\r\n}\r\n.removeButton {\r\n    font-size: 50%; margin-left: 5px;\r\n}"

/***/ }),

/***/ "./src/app/plans/plans.component.html":
/*!********************************************!*\
  !*** ./src/app/plans/plans.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"currentUser\">you are logged in as {{currentUser.email}}</p>\n<p *ngIf=\"!currentUser\">you must be logged in to start a meal plan</p>\n\n<table class=\"table\">\n  <thead>\n    <th>Monday</th>\n    <th>Tuesday</th>\n    <th>Wednesday</th>\n    <th>Thursday</th>\n    <th>Friday</th>\n    <th>Saturday</th>\n    <th>Sunday</th>\n  </thead>\n  <tbody>\n    <tr>\n      <td *ngIf=\"currentUser.mon\">{{currentUser.mon.name}} \n        <button class=\"btn-danger removeButton\" (click)=\"removeFromPlan('mon')\">remove</button>\n      </td>\n      <td *ngIf=\"!currentUser.mon\">nothing yet</td>\n        \n      <td *ngIf=\"currentUser.tues\">{{currentUser.tues.name}} \n        <button class=\"btn-danger removeButton\" (click)=\"removeFromPlan('tues')\">remove</button>\n      </td>\n      <td *ngIf=\"!currentUser.tues\">nothing yet</td>\n      \n      <td *ngIf=\"currentUser.wed\">{{currentUser.wed.name}}\n          <button class=\"btn-danger removeButton\" (click)=\"removeFromPlan('wed')\">remove</button>\n      </td>\n      <td *ngIf=\"!currentUser.wed\">nothing yet</td>\n      \n      <td *ngIf=\"currentUser.thurs\">{{currentUser.thurs.name}}\n          <button class=\"btn-danger removeButton\" (click)=\"removeFromPlan('thurs')\">remove</button>\n      </td>\n      <td *ngIf=\"!currentUser.thurs\">nothing yet</td>\n\n      <td *ngIf=\"currentUser.fri\">{{currentUser.fri.name}}\n          <button class=\"btn-danger removeButton\" (click)=\"removeFromPlan('fri')\">remove</button>\n      </td>\n      <td *ngIf=\"!currentUser.fri\">nothing yet</td>\n      \n      <td *ngIf=\"currentUser.sat\">{{currentUser.sat.name}}\n          <button class=\"btn-danger removeButton\" (click)=\"removeFromPlan('sat')\">remove</button>\n      </td>\n      <td *ngIf=\"!currentUser.sat\">nothing yet</td>\n      \n      <td *ngIf=\"currentUser.sun\">{{currentUser.sun.name}}\n          <button class=\"btn-danger removeButton\" (click)=\"removeFromPlan('sun')\">remove</button>\n      </td>   \n      <td *ngIf=\"!currentUser.sun\">nothing yet</td>\n         \n    </tr>\n    <tr>\n      <td *ngIf=\"currentUser.mon\">\n        <ul>\n          <li *ngFor=\"let ingredient of currentUser.mon.ingredients\">{{ingredient}}</li>\n        </ul>\n      </td> \n      <td *ngIf=\"!currentUser.mon\"></td>     \n      <td *ngIf=\"currentUser.tues\">\n        <ul>\n          <li *ngFor=\"let ingredient of currentUser.tues.ingredients\">{{ingredient}}</li>\n        </ul>\n      </td> \n      <td *ngIf=\"!currentUser.tues\"></td>      \n      <td *ngIf=\"currentUser.wed\">\n        <ul>\n          <li *ngFor=\"let ingredient of currentUser.wed.ingredients\">{{ingredient}}</li>\n        </ul>\n      </td> \n      <td *ngIf=\"!currentUser.wed\"></td>      \n      <td *ngIf=\"currentUser.thurs\">\n        <ul>\n          <li *ngFor=\"let ingredient of currentUser.thurs.ingredients\">{{ingredient}}</li>\n        </ul>\n      </td> \n      <td *ngIf=\"!currentUser.thurs\"></td>     \n      <td *ngIf=\"currentUser.fri\">\n        <ul>\n          <li *ngFor=\"let ingredient of currentUser.fri.ingredients\">{{ingredient}}</li>\n        </ul>\n      </td> \n      <td *ngIf=\"!currentUser.fri\"></td>     \n      <td *ngIf=\"currentUser.sat\">\n        <ul>\n          <li *ngFor=\"let ingredient of currentUser.sat.ingredients\">{{ingredient}}</li>\n        </ul>\n      </td> \n      <td *ngIf=\"!currentUser.sat\"></td>      \n      <td *ngIf=\"currentUser.sun\">\n        <ul>\n          <li *ngFor=\"let ingredient of currentUser.sun.ingredients\">{{ingredient}}</li>\n        </ul>\n      </td> \n      <td *ngIf=\"!currentUser.sun\"></td>      \n      \n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/plans/plans.component.ts":
/*!******************************************!*\
  !*** ./src/app/plans/plans.component.ts ***!
  \******************************************/
/*! exports provided: PlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansComponent", function() { return PlansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meal_planning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meal-planning.service */ "./src/app/meal-planning.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlansComponent = /** @class */ (function () {
    function PlansComponent(mealPlanning, cookieService) {
        this.mealPlanning = mealPlanning;
        this.cookieService = cookieService;
        this.currentUser = null;
        this.thisUser = null;
        this.tues = {};
    }
    PlansComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("session", this.cookieService.get('session'));
        console.log("userId", this.cookieService.get('userID'));
        this.thisUser = this.cookieService.get('userID');
        if (this.thisUser) {
            this.mealPlanning.getUser(this.thisUser)
                .subscribe(function (response) {
                console.log("thisUser", _this.thisUser);
                console.log("currentUser", _this.currentUser);
                console.log("NGONINIT plan component", response);
                _this.currentUser = response;
            }, function (err) {
                console.log("error in subscribe on init", err);
            });
            // this.mealPlanning.getOneRecipe(this.currentUser.tues)
            // .subscribe((response) => {this.tues = response}
            // )
        }
    };
    PlansComponent.prototype.removeFromPlan = function (day) {
        var _this = this;
        console.log("remove this ", day, this.thisUser);
        this.mealPlanning.removeFromPlan(this.thisUser, day)
            .subscribe(function (res) {
            _this.mealPlanning.getUser(_this.thisUser)
                .subscribe(function (response) {
                console.log("NGONINIT plan component", response);
                _this.currentUser = response;
            }, function (err) {
                console.log("error in subscribe on init", err);
            });
        });
    };
    PlansComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plans',
            template: __webpack_require__(/*! ./plans.component.html */ "./src/app/plans/plans.component.html"),
            styles: [__webpack_require__(/*! ./plans.component.css */ "./src/app/plans/plans.component.css")]
        }),
        __metadata("design:paramtypes", [_meal_planning_service__WEBPACK_IMPORTED_MODULE_1__["MealPlanningService"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], PlansComponent);
    return PlansComponent;
}());



/***/ }),

/***/ "./src/app/recipes/add-recipe/add-recipe.component.css":
/*!*************************************************************!*\
  !*** ./src/app/recipes/add-recipe/add-recipe.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n    width: 200px;\r\n}\r\n\r\n.error {\r\n    font-size: 90%;\r\n    color: red;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/recipes/add-recipe/add-recipe.component.html":
/*!**************************************************************!*\
  !*** ./src/app/recipes/add-recipe/add-recipe.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h1>Add a recipe!</h1>\n  <hr>\n  <form name=\"addRecipeForm\" #addRecipeForm=\"ngForm\" (submit)=\"addNewRecipe()\">\n    <label for=\"name\">Recipe Name: </label>\n    <input type=\"text\" name=\"name\"\n    required\n    minlength=\"3\"\n    [(ngModel)] = \"newRecipe.name\"\n    #name = \"ngModel\"\n    >\n    <div class=\"error\" *ngIf=\"name.touched && name.invalid\">\n      Recipe name must be atleast 3 characters\n    </div>\n    <br>\n    <label for=\"difficulty\">Difficulty: </label>\n    <select name=\"difficulty\" \n    required\n    [(ngModel)] = \"newRecipe.difficulty\"\n    #difficulty = \"ngModel\"\n    >\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>   \n    </select>\n    <div class=\"error\" *ngIf=\"difficulty.touched && difficulty.invalid\">\n      Please select a difficulty\n    </div>\n    <br>\n    <label for=\"ingredients\">Ingredients: </label>\n    <input type=\"text\" name=\"ingredients\"\n    required\n    minlength=\"2\"\n    [(ngModel)] = \"newRecipe.ingredients\"\n    #ingredients = \"ngModel\"\n    >\n    <div class=\"error\" *ngIf=\"ingredients.touched && ingredients.invalid\">\n      Please list some ingredients\n    </div>\n    <br>\n    <br>\n    <label for=\"method\" style=\"vertical-align: top;\">Method: </label>\n    <textarea name=\"method\" cols=\"70\" rows=\"4\"\n    required\n    minlength=\"10\"\n    [(ngModel)] = \"newRecipe.method\"\n    #method = \"ngModel\"\n    ></textarea>\n    <div class=\"error\" *ngIf=\"method.touched && method.invalid\">\n      Please write a method/instructions for your recipe\n    </div>\n    <br>\n    <input [disabled]=\"!addRecipeForm.valid\" *ngIf=\"currentUser\" type=\"submit\" value=\"Add recipe!\" class=\"btn-primary\">\n  </form>\n  <p class=\"error\" *ngIf=\"!currentUser\">login to submit a recipe</p>\n\n"

/***/ }),

/***/ "./src/app/recipes/add-recipe/add-recipe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recipes/add-recipe/add-recipe.component.ts ***!
  \************************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meal_planning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../meal-planning.service */ "./src/app/meal-planning.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddRecipeComponent = /** @class */ (function () {
    function AddRecipeComponent(mealPlanningService, route, cookieService, router) {
        var _this = this;
        this.mealPlanningService = mealPlanningService;
        this.route = route;
        this.cookieService = cookieService;
        this.router = router;
        this.thisUser = null;
        this.currentUser = null;
        this.newRecipe = {
            name: '',
            ingredients: '',
            difficulty: null,
            method: '',
        };
        this.thisUser = this.cookieService.get('userID');
        if (this.thisUser) {
            this.mealPlanningService.getUser(this.thisUser)
                .subscribe(function (response) {
                console.log("NGONINIT plan component", response);
                _this.currentUser = response;
            }, function (err) {
                console.log("error in subscribe on init", err);
            });
        }
    }
    AddRecipeComponent.prototype.addNewRecipe = function () {
        var _this = this;
        console.log("ADD RECIPE COMPONENT > clicking");
        this.mealPlanningService.addNewRecipe(this.newRecipe)
            .subscribe(function (res) {
            console.log("ARCOMP > ", res);
            _this.mealPlanningService.getAllRecipes();
        }, function (err) {
            console.log("error", err);
        });
        this.newRecipe = {
            name: '',
            ingredients: '',
            difficulty: null,
            method: ''
        };
        this.router.navigate(['/recipes']);
    };
    AddRecipeComponent.prototype.ngOnInit = function () {
    };
    AddRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-recipe',
            template: __webpack_require__(/*! ./add-recipe.component.html */ "./src/app/recipes/add-recipe/add-recipe.component.html"),
            styles: [__webpack_require__(/*! ./add-recipe.component.css */ "./src/app/recipes/add-recipe/add-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_meal_planning_service__WEBPACK_IMPORTED_MODULE_1__["MealPlanningService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddRecipeComponent);
    return AddRecipeComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/*!***********************************************!*\
  !*** ./src/app/recipes/recipes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/*!************************************************!*\
  !*** ./src/app/recipes/recipes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <a [routerLink]=\"['add']\"><h2>Add a Recipe</h2></a>\n      <h2>All Recipes</h2>\n      <a [routerLink]=\"['view', recipe._id]\" *ngFor=\"let recipe of allRecipes\">{{ recipe.name | titlecase}}</a>\n  </div>\n  <div class=\"col-md-10\">\n    <router-outlet></router-outlet>\n  </div>\n  </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recipes/recipes.component.ts ***!
  \**********************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meal_planning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meal-planning.service */ "./src/app/meal-planning.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(mealPlanningService) {
        var _this = this;
        this.mealPlanningService = mealPlanningService;
        this.allRecipes = [];
        this.mealPlanningService.subject.subscribe(function (recipes) {
            _this.allRecipes = recipes;
        });
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.mealPlanningService.getAllRecipes();
    };
    RecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipes',
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [_meal_planning_service__WEBPACK_IMPORTED_MODULE_1__["MealPlanningService"]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/recipes/view-recipe/view-recipe.component.css":
/*!***************************************************************!*\
  !*** ./src/app/recipes/view-recipe/view-recipe.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\r\n    font-size: 90%;\r\n    color: red;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/recipes/view-recipe/view-recipe.component.html":
/*!****************************************************************!*\
  !*** ./src/app/recipes/view-recipe/view-recipe.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='thisRecipe'>\n    <div class=\"row\">\n      <h1>{{thisRecipe.name | titlecase}}</h1>\n      <h5 style=\"font-weight: bold;\">Difficulty: {{thisRecipe.difficulty}}</h5>\n      <form (submit)=\"addToPlan()\">\n        <label for=\"addToPlan\">Add to: </label>\n        <select name=\"addToPlan\"\n        required\n        [(ngModel)] = \"dayOfWeek\"\n        #dayOfWeekText = \"ngModel\"\n        >\n          <option value=\"mon\">Monday</option>\n          <option value=\"tues\">Tuesday</option>\n          <option value=\"wed\">Wednesday</option>\n          <option value=\"thurs\">Thursday</option>\n          <option value=\"fri\">Friday</option>\n          <option value=\"sat\">Saturday</option>\n          <option value=\"sun\">Sunday</option>      \n        </select>\n        <input *ngIf=\"currentUser\" type=\"submit\" value=\"Add to plan\" class=\"btn-primary\" >\n      </form>\n      <p *ngIf=\"!currentUser\" class=\"error\">login to create your meal plan</p>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <h3><span style=\"font-size: 125%; font-weight: bold;\">Ingredients</span></h3>\n          <ul>\n            <li *ngFor=\"let ingredient of thisRecipe.ingredients\">{{ingredient}}</li>\n          </ul>\n      </div>  \n      <div class=\"col-md-9\">\n        <h3><span style=\"font-size: 125%; font-weight: bold;\">Method</span></h3>\n        <p *ngFor=\"let step of thisRecipe.method\">{{step}}</p>\n      </div>\n    </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/recipes/view-recipe/view-recipe.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/view-recipe/view-recipe.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRecipeComponent", function() { return ViewRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meal_planning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../meal-planning.service */ "./src/app/meal-planning.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewRecipeComponent = /** @class */ (function () {
    function ViewRecipeComponent(route, mealPlanService, cookieService, router) {
        var _this = this;
        this.route = route;
        this.mealPlanService = mealPlanService;
        this.cookieService = cookieService;
        this.router = router;
        this.id = null;
        this.thisUser = null;
        this.currentUser = null;
        this.thisUser = this.cookieService.get('userID');
        if (this.thisUser) {
            this.mealPlanService.getUser(this.thisUser)
                .subscribe(function (response) {
                console.log("NGONINIT plan component", response);
                _this.currentUser = response;
            }, function (err) {
                console.log("error in subscribe on init", err);
            });
        }
        this.route.paramMap.subscribe(function (params) {
            console.log("from params in constructor", params.get('id'));
            _this.mealPlanService.getOneRecipe(params.get('id'))
                .subscribe(function (recipeReturned) {
                _this.thisRecipe = recipeReturned;
            });
            _this.id = params.get('id');
        });
    }
    ViewRecipeComponent.prototype.addToPlan = function () {
        var _this = this;
        console.log("adding ", this.thisRecipe.name, " to ", this.dayOfWeek, " for ", this.currentUser.email);
        this.mealPlanService.addToPlan(this.thisRecipe._id, this.dayOfWeek, this.currentUser._id)
            .subscribe(function (response) {
            _this.router.navigateByUrl('plans');
        }, function (err) {
            console.log(err);
        });
    };
    ViewRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("View Recipe comp", this.id);
        this.mealPlanService.getOneRecipe(this.id)
            .subscribe(function (response) {
            console.log("NGONINIT VIEW RECIPE", response);
            _this.thisRecipe = response;
        }, function (err) {
            console.log("error in subscribe on init", err);
        });
    };
    ViewRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-recipe',
            template: __webpack_require__(/*! ./view-recipe.component.html */ "./src/app/recipes/view-recipe/view-recipe.component.html"),
            styles: [__webpack_require__(/*! ./view-recipe.component.css */ "./src/app/recipes/view-recipe/view-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _meal_planning_service__WEBPACK_IMPORTED_MODULE_2__["MealPlanningService"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewRecipeComponent);
    return ViewRecipeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alexk\Desktop\DojoAssignments\MEAN\fullMean\mealPlanning\testApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map