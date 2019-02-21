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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_classes_classes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/classes/classes.component */ "./src/app/classes/classes.component.ts");
/* harmony import */ var _app_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/splash-screen/splash-screen.component */ "./src/app/splash-screen/splash-screen.component.ts");
/* harmony import */ var _app_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _app_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _app_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/skills/skills.component */ "./src/app/skills/skills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'experience', component: _app_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"] },
    { path: 'projects', component: _app_projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'skills', component: _app_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"] },
    { path: 'classes', component: _app_classes_classes_component__WEBPACK_IMPORTED_MODULE_3__["ClassesComponent"] },
    { path: '', component: _app_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ "./src/app/splash-screen/splash-screen.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _classes_classes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/classes.component */ "./src/app/classes/classes.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__["SplashScreenComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _classes_classes_component__WEBPACK_IMPORTED_MODULE_7__["ClassesComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/classes.component.css":
/*!***********************************************!*\
  !*** ./src/app/classes/classes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clicked {\r\n    border-top: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    border-bottom: none;\r\n    border-radius: 3px\r\n}"

/***/ }),

/***/ "./src/app/classes/classes.component.html":
/*!************************************************!*\
  !*** ./src/app/classes/classes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<body>\n  <div class=\"container\">\n    \n  </div>\n    <nav>\n        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n          <a class=\"nav-item nav-link active\" id=\"nav-school-tab\" data-toggle=\"tab\" href=\"#nav-school\" role=\"tab\" aria-controls=\"nav-school\" aria-selected=\"true\">School</a>\n          <a class=\"nav-item nav-link\" id=\"nav-online-tab\" data-toggle=\"tab\" href=\"#nav-online\" role=\"tab\" aria-controls=\"nav-online\" aria-selected=\"false\">Online</a>\n        </div>\n      </nav>\n      <div class=\"container\">\n          <div class=\"tab-content\" id=\"nav-tabContent\">\n\n            <div class=\"tab-pane fade show active\" id=\"nav-school\" role=\"tabpanel\" aria-labelledby=\"nav-school-tab\">\n              <h1>Math:</h1>\n              <ul>\n                <li><strong>Calculus II</strong></li>\n                <li><strong>Calculus III</strong></li>\n                <li><strong>Linear Algebra</strong></li>\n                <li><strong>Differential Equations</strong></li>\n                <li><strong>Optimization</strong></li>\n                <li><strong>Probability</strong></li>\n                <li><strong>Statistics</strong></li>\n              </ul>\n              <h1>Computer Science:</h1>\n              <ul>\n                <li><strong>Intermediate Programming:</strong> C/C++, Unix</li>\n                <li><strong>Data Structures:</strong> Java</li>\n                <li><strong>Intro Computing:</strong> Unix, Python, MatLab</li>\n                <li><strong>Automata</strong></li>\n                <li><strong>User Interface and Mobile apps:</strong> Android Studio</li>\n                <li><strong>Algorithms</strong></li>\n                <li><strong>Deep Learning:</strong> Torch, TensorFolw, Keras</li>\n              </ul>\n            </div>\n\n            <div class=\"tab-pane fade\" id=\"nav-online\" role=\"tabpanel\" aria-labelledby=\"nav-online-tab\">\n              <h1>Udacity/Udemy:</h1>\n              <ul>\n                <li><strong>Version Control With Git:</strong> Git, Github</li>\n                <li><strong>Android Basics:</strong> Android Studio</li>\n                <li><strong>The Python Mega Course:</strong> Python</li>\n                <li><strong>Java Programming MasterClass:</strong> Java</li>\n                <li><strong>The Ultimate MySQL Bootcamp:</strong> MySQL,SQL</li>\n                <li><strong>Data Structures and Algorithms:</strong> Java</li>\n                <li><strong>The Web Developer Bootcamp:</strong> JS, HTML, CSS, mongoDB, Node.js, Express</li>\n                <li><strong>The Complete Android N Developer Course:</strong> Android Studio</li>\n              </ul>\n\n              <h2>Coursera</h2>\n              <ul>\n                <li><strong>Machine Learning Andrew Ng:</strong> MatLab, Machine Learning</li>\n                <li><strong>Front-End Web UI Frameworks and tools:</strong> Bootstrap, JS, HTML, CSS, SCSS</li>\n                <li><strong>Front-End JavaScript Frameworks:</strong> Angular, typescript</li>\n              </ul>\n            </div>\n          </div>\n      </div>\n</body>\n"

/***/ }),

/***/ "./src/app/classes/classes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/classes/classes.component.ts ***!
  \**********************************************/
/*! exports provided: ClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesComponent", function() { return ClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassesComponent = /** @class */ (function () {
    function ClassesComponent() {
    }
    ClassesComponent.prototype.ngOnInit = function () {
    };
    ClassesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classes',
            template: __webpack_require__(/*! ./classes.component.html */ "./src/app/classes/classes.component.html"),
            styles: [__webpack_require__(/*! ./classes.component.css */ "./src/app/classes/classes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassesComponent);
    return ClassesComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#recImage {\r\n    width:100%;\r\n}\r\n\r\n#imgIcon {\r\n    width: 50px;\r\n}"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<body>\n  <div class=\"container\">\n      <h1>Experience</h1>\n      <hr>\n      <h3><img src=\"../../assets/images/konviv.png\" id=\"imgIcon\">Konviv: Software Engineer Intern</h3>\n      <!--change to ./assets/... for deployment-->\n      <h5>Jun. 2018 - Aug. 2018</h5>\n      <h6>Responsibilities:</h6>\n      <ul>\n        <li>Created Chatbot with over 20 intents using dialogflow and javascript which interacted with current users.</li>\n        <li>Worked on REST API using mongodb and javascript which held financial information of the application users.</li>\n        <li>Implemented User/App metrics using firebase to track feature use and app latency across 5 app screens. </li>\n        <li>Edited company website using WordPress to create new content across 3 pages and create a new video page. </li>\n      </ul>\n      <img src=\"../../assets/images/rec.jpg\" id=\"recImage\" class=\"col-12 col-sm-10\">\n      <!--change to ./assets/... for deployment-->\n  </div>\n  \n</body>\n\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.jumbotron {\r\n    background-color: #83d0fc;\r\n    color: floralwhite;\r\n    padding: 7.5vh;\r\n}\r\n\r\nnav {\r\n    background-color: #0295ea;\r\n}\r\n\r\n#jumboContent {\r\n    margin: 5vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class =\"navbar-dark navbar navbar-expand-sm fixed-top\">\n    <div class = \"container-fluid\">\n        <button class = \"navbar-toggler mr-auto\" type = \"button\" data-toggle = \"collapse\" data-target = \"#Navbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class = \"collapse navbar-collapse\" id = \"Navbar\">\n            <ul class = \"navbar-nav mr-auto\">\n                <li class =\"nav-item\"><a routerLink='/' class = \"nav-link\">Home</a></li>\n                <li class =\"nav-item\" id=\"experience\"><a routerLink='/experience' class = \"nav-link\">Experience</a></li>\n                <li class =\"nav-item\" id=\"projects\"><a routerLink='/projects' class = \"nav-link\">Projects</a></li>\n                <li class =\"nav-item\" id=\"classes\"><a routerLink='/classes' class = \"nav-link\">Classes</a></li>\n                <li class =\"nav-item\" id=\"skills\"><a routerLink='/skills' class = \"nav-link\">Skills</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n\n<header class = \"jumbotron\">\n    <div class = \"container\">\n        <div class = \"row row-header\">\n            <div class = \"col-10 col-sm-6 offset-2 offset-sm-0\" id=\"jumboContent\"> \n                <h1>Matthew MacFarquhar</h1>\n                <p>Junior CS/AMS Major seeking Internships in Software Engineering.</p>\n            </div>\n        </div>\n    </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.href = this.router.url;
        this.changeActive(this.href);
    };
    HeaderComponent.prototype.changeActive = function (url) {
        if (url == "/experience") {
            document.getElementById('experience').classList.add('active');
        }
        else if (url == "/projects") {
            document.getElementById('projects').classList.add('active');
        }
        else if (url == "/classes") {
            document.getElementById('classes').classList.add('active');
        }
        else if (url == "/skills") {
            document.getElementById('skills').classList.add('active');
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projectContainer {\r\n    border: 1px solid gray;\r\n    padding: 1vw;\r\n    margin: 3vh;\r\n    background-color: #eaf7ff;\r\n}\r\n\r\n.projectContainer h3 {\r\n    text-align: center;\r\n    text-decoration: underline;\r\n}\r\n\r\n.projectContainer p {\r\n    width: 50vw;\r\n    margin:auto;\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<body>\n  <div class=\"container\">\n\n    <div class=\"projectContainer\">\n      <h3>eBay Scraper</h3>\n      <p>The ebay scraper is a flask based web app which uses the BeautifulSoup library to scrape the products from ebay's deals of the day page.\n        Then it allows the user to sort by price, percent off, and -- two not supported by ebay -- original price and money off.\n      </p>\n      <a class=\"col-5 offset-7 col-sm-4 offset-sm-8 col-md-3 offset-md-9 col-lg-2 offset-lg-10\" href=\"https://macfarquhar-ebay-scraper.herokuapp.com/\">ebay Scraper</a>\n    </div>\n\n    <div class=\"projectContainer\">\n      <h3>CrimeTracker</h3>\n      <p>The CrimeTracker app is an Android app that pulls crime data from the BPD and displays it on an intuitive map with pins or heat map.\n        The features included are: 911 calling, ICE calling, Danger zone alerts, viewing individual crime details, and seeing a heatmap of all the crimes in \n        the Baltimore area.\n      </p>\n    </div>\n\n    <div class=\"projectContainer\">\n      <h3>Song Genre Classifier</h3>\n      <p>The Song Genre Classifier is a machine learning model built on keras. It takes in word emmbeddings representing lyrics\n         of a song and will classify if the song is a: Rock, Hip-hop, Pop, Country, or Metal song. It is an ensamble of an RNN and a CNN and achieved\n         an accuracy of 61% over about 40,000 song titles.\n      </p>\n    </div>\n\n    <div class=\"projectContainer\">\n      <h3>Tonizer</h3>\n      <p>Tonizer is a W.I.P., it uses FFT to estimate frequency of whistles and then returns the user their tune in notes which the user \n        can modify and listen to.\n      </p>\n      <a class=\"col-5 offset-7 col-sm-4 offset-sm-8 col-md-3 offset-md-9 col-lg-2 offset-lg-10\" href=\"https://mattmacf98.github.io/Tonizer/\">Tonizer</a>\n    </div>\n\n    <div class=\"projectContainer\">\n      <h3>PCA Imagizer</h3>\n      <p>PCA Imagizer is a W.I.P., it uses k-means clustering to find the k components-- the k average colors-- of the submitted image,\n         it then shows the user a side-by-side of the original image and the modified one.\n      </p>\n      <a class=\"col-5 offset-7 col-sm-4 offset-sm-8 col-md-3 offset-md-9 col-lg-2 offset-lg-10\" href=\"https://pca-imagizer.herokuapp.com/\">PCA Imagizer</a>\n    </div>\n    \n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n    display: inline;\r\n}\r\n\r\n.skill {\r\n    padding-bottom: 2.5vh;\r\n    padding-top: 2.5vh;\r\n}\r\n\r\n.row { \r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.fa {\r\n    color: #f4d318;\r\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n  <h2>Core Languages:</h2>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n      <h4>Java: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Python: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>C/C++: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n  </div>\n\n  <h2>Web Technologies:</h2>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n      <h4>JavaScript: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>CSS: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>HTML: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Bootstrap: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Wordpress: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Angular: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Node.js: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Express: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n  </div>\n\n  <h2>Database Technologies:</h2>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n      <h4>SQL: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>mySQL: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>noSQL: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>mongoDB: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n  </div>\n\n  <h2>Machine Learning Technologies:</h2>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n      <h4>Linear Regression: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Logistic Regression: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>CNN: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>RNN: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>K-means: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Keras: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>PyTorch: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Tensorflow: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n  </div>\n\n  <h2>Other Technologies:</h2>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n      <h4>Android Development: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-half-o\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Algorithms: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n    <div class=\"col-12 col-md-6 col-lg-4 skill\">\n        <h4>Data Structures: </h4> <span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star-o\"></span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.css":
/*!***********************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 100vh;\r\n    background-image: linear-gradient(to bottom , #83d0fc, white);\r\n}\r\n\r\n.container {\r\n    text-align: center;\r\n}\r\n\r\n.container h1 {\r\n    color: #51504c;\r\n    font-size: 10vh;\r\n    padding: 5vh;\r\n}\r\n\r\n.container p {\r\n    color: #51504c;\r\n    max-width: 50vw;\r\n    font-size: 2.5vh;\r\n    margin: auto;\r\n    padding-bottom: 5vh;\r\n}\r\n\r\nimg {\r\n    max-width: 10vw;\r\n}\r\n\r\nhr {\r\n    margin: 5vh;\r\n    border: 0.5px solid grey;\r\n}\r\n\r\na {\r\n    padding: 5vw;\r\n    font-size: 2.5vh;\r\n    font-weight: bold;\r\n    color: #51504c;\r\n}\r\n\r\n.tab:hover {\r\n    color: lightslategrey !important;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.html":
/*!************************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n  <body >\n    \n    <div class=\"container\">\n      <h1>\n        Matthew MacFarquhar\n      </h1>\n      <p>\n        My name is Matthew MacFarquhar, I am a student at Johns Hopkins University studying Computer Science and Applied Maths and Statistics.\n        I am focused on Machine Learning and Data Science. I have completed multiple courses at both JHU, and online during my freetime. I use these skills\n        to create interesting projects which I then share on my Github.\n      </p>\n      <p>\n        I have experience in multiple languages and frameworks. I am always eager to learn more and to challenge myself with difficult classes, \n        projects, or concepts.\n      </p>\n      <img src=\"../../assets/images/myPic.jpeg\" class=\"img-thumbnail rounded-circle\">\n      <!--change to ./assets/... for deployment-->\n      <hr>\n      <div id=\"links\">\n        <a class=\"tab\" routerLink='/experience'>Experience</a>\n        <a class=\"tab\" routerLink='/projects'>Projects</a>\n        <a class=\"tab\" routerLink='/classes'>Classes</a>\n        <a class=\"tab\" routerLink='/skills'>Skills</a>\n      </div>\n    </div>\n  </body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/splash-screen/splash-screen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.component.ts ***!
  \**********************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashScreenComponent = /** @class */ (function () {
    function SplashScreenComponent() {
    }
    SplashScreenComponent.prototype.ngOnInit = function () {
    };
    SplashScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splash-screen',
            template: __webpack_require__(/*! ./splash-screen.component.html */ "./src/app/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__(/*! ./splash-screen.component.css */ "./src/app/splash-screen/splash-screen.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenComponent);
    return SplashScreenComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Matthew\Desktop\projects\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map