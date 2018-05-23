webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_document_personal_document_component__ = __webpack_require__("./src/app/personal-document/personal-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_tools_personal_tools_component__ = __webpack_require__("./src/app/personal-tools/personal-tools.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'personalTools', component: __WEBPACK_IMPORTED_MODULE_4__personal_tools_personal_tools_component__["a" /* PersonalToolsComponent */], children: [
            { path: 'personalTools', component: __WEBPACK_IMPORTED_MODULE_4__personal_tools_personal_tools_component__["a" /* PersonalToolsComponent */] },
        ] },
    { path: 'personalDocument', component: __WEBPACK_IMPORTED_MODULE_3__personal_document_personal_document_component__["a" /* PersonalDocumentComponent */] },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar (signInInit)=\"signInInit($event)\" (logOutInit)=\"logOutInit($event)\" [ifSignIn] = \"ifSignIn\"></app-navbar>\r\n<div class=\"row\">\r\n\t<app-leftbar class=\"col-3\" style=\"padding: 0 1px;\"></app-leftbar>\r\n\t<app-panel class=\"col-9\" style=\"padding: 0 1px;\"></app-panel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = '奇状';
        this.ifSignIn = false;
        this.documents = [];
        this.user = {};
    }
    AppComponent.prototype.signInInit = function (obj) {
        this.user = obj["user"];
        this.documents = obj["documents"];
        this.ifSignIn = true;
        this.dataService.user = this.user;
        this.dataService.documents = this.documents;
    };
    AppComponent.prototype.logOutInit = function (obj) {
        this.user = {};
        this.documents = [];
        this.ifSignIn = false;
        this.dataService.clear();
        location.href = "";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap-modal/bundles/ngx-bootstrap-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leftbar_leftbar_component__ = __webpack_require__("./src/app/leftbar/leftbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__panel_panel_component__ = __webpack_require__("./src/app/panel/panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__personal_document_personal_document_component__ = __webpack_require__("./src/app/personal-document/personal-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__personal_tools_personal_tools_component__ = __webpack_require__("./src/app/personal-tools/personal-tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__document_tree_document_tree_component__ = __webpack_require__("./src/app/document-tree/document-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tree_root_tree_root_component__ = __webpack_require__("./src/app/tree-root/tree-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__new_file_dialog_new_file_dialog_component__ = __webpack_require__("./src/app/new-file-dialog/new-file-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sign_up_dialog_sign_up_dialog_component__ = __webpack_require__("./src/app/sign-up-dialog/sign-up-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__confirm_confirm_component__ = __webpack_require__("./src/app/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_document_service__ = __webpack_require__("./src/app/service/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_data_service__ = __webpack_require__("./src/app/service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__leftbar_leftbar_component__["a" /* LeftbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_12__personal_document_personal_document_component__["a" /* PersonalDocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__personal_tools_personal_tools_component__["a" /* PersonalToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__document_tree_document_tree_component__["a" /* DocumentTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__tree_root_tree_root_component__["a" /* TreeRootComponent */],
                __WEBPACK_IMPORTED_MODULE_16__new_file_dialog_new_file_dialog_component__["a" /* NewFileDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sign_up_dialog_sign_up_dialog_component__["a" /* SignUpDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__confirm_confirm_component__["a" /* ConfirmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["BootstrapModalModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot()
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__new_file_dialog_new_file_dialog_component__["a" /* NewFileDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sign_up_dialog_sign_up_dialog_component__["a" /* SignUpDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__confirm_confirm_component__["a" /* ConfirmComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__service_document_service__["a" /* DocumentService */],
                __WEBPACK_IMPORTED_MODULE_20__service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_21__service_data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/leftbar/leftbutton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return leftbutton; });
//完善个性化的话可以注册个类OnInit一下
var leftbutton = {
    "name": "leftButton",
    "minColumn": 8,
    "lockImagePath": "",
    "buttons": [
        {
            "id": "home",
            "title": "我的主页",
            "ifShow": true,
            "ifActive": true,
            "unActiveAlert": "维护中",
            "subButton": [],
            "href": "#"
        },
        {
            "id": "document",
            "title": "我的文档",
            "ifShow": true,
            "ifActive": true,
            "subButton": [
                {
                    "id": "persopnalDocument",
                    "title": "个人文档",
                    "ifShow": true,
                    "ifActive": true,
                    "subButton": [],
                    "href": "personalDocument"
                }
            ],
            "href": "#"
        },
        {
            "id": "tool",
            "title": "我的工具",
            "ifShow": true,
            "ifActive": true,
            "subButton": [
                {
                    "id": "date",
                    "title": "财经日历",
                    "ifShow": true,
                    "ifActive": true,
                    "subButton": [],
                    "href": "personalTools"
                }
            ],
            "href": "#"
        }
    ]
};


/***/ }),

/***/ "./src/app/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"modal-dialog\">  \r\n        <div class=\"modal-content\">  \r\n            <div class=\"modal-header\">  \r\n            \t<h4 class=\"modal-title\">{{title}}</h4>  \r\n                <button type=\"button\" (click)=\"cancel()\" >&times;</button>  \r\n            </div>  \r\n            <div class=\"modal-body\">  \r\n                {{message}}\r\n            </div>  \r\n            <div class=\"modal-footer\">  \r\n            \t<button type=\"button\" class=\"btn btn-default\" (click)=\"confirm()\">是</button>  \r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"cancel()\">否</button>  \r\n            </div>  \r\n        </div>  \r\n    </div>  "

/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap-modal/bundles/ngx-bootstrap-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = /** @class */ (function (_super) {
    __extends(ConfirmComponent, _super);
    function ConfirmComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ConfirmComponent.prototype.confirm = function () {
        // on click on confirm button we set dialog result as true,  
        // ten we can get dialog result from caller code  
        this.close(true);
    };
    ConfirmComponent.prototype.cancel = function () {
        this.close(false);
    };
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirm',
            template: __webpack_require__("./src/app/confirm/confirm.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["DialogService"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "./src/app/document-tree/document-tree.component.css":
/***/ (function(module, exports) {

module.exports = ".document-node{\r\n\topacity: 0;\r\n\tcolor: #FFFFFF;\r\n\ttransition:color 0.5s;\r\n\t-moz-transition:color 0.5s; /* Firefox 4 */\r\n\t-webkit-transition:color 0.5s; /* Safari and Chrome */\r\n\t-o-transition:color 0.5s; /* Opera */\r\n}\r\n\r\n.document-background{\r\n\ttop: -100px;\r\n\twidth: calc(100% + 10px);\r\n\tmax-width: 400px;\r\n\tmin-width: 100px;\r\n\theight: calc(100% + 10px);\r\n\tborder-radius: 0 0 2px 2px;\r\n\tbackground-color: #343a40;\r\n\topacity: 0.5;\r\n\ttransition:opacity 0.5s;\r\n\t-moz-transition:opacity 0.5s; /* Firefox 4 */\r\n\t-webkit-transition:opacity 0.5s; /* Safari and Chrome */\r\n\t-o-transition:opacity 0.5s; /* Opera */\r\n}\r\n\r\n.document-background:hover\r\n{\r\n\topacity:0.7;\r\n}\r\n\r\n.document-node:hover\r\n{\r\n\topacity:1;\r\n\tcolor:#EEFFEE;\r\n}"

/***/ }),

/***/ "./src/app/document-tree/document-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"document-tree\" class=\"document-background\">\r\n\t<app-tree-root class=\"document-node\" (select)=\"select2($event)\" [nodes]=\"nodes\" id=\"nodeRoot\"></app-tree-root>\r\n\t<div class=\"badge badge-dark\" style=\"width: 100%;cursor: pointer;border-top: solid 1px black;\" (click)=\"hideDocumentTree()\">\r\n\t\t<span style=\"float: left;\" id=\"hideString\">\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/document-tree/document-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentTreeComponent = /** @class */ (function () {
    function DocumentTreeComponent() {
        this.ifDocumentTreeHide = true;
        this.selectc = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hideString = "隐藏";
        this.showString = "资源管理器";
    }
    DocumentTreeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#hideString").html(this.showString);
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#nodeRoot").slideToggle(0);
        this.ifDocumentTreeHide = __WEBPACK_IMPORTED_MODULE_1_jquery__("#hideString").html() == this.hideString;
    };
    DocumentTreeComponent.prototype.hideDocumentTree = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#nodeRoot").slideToggle();
        if (this.ifDocumentTreeHide) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#hideString").html(this.showString);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#hideString").html(this.hideString);
        }
        this.ifDocumentTreeHide = !this.ifDocumentTreeHide;
    };
    DocumentTreeComponent.prototype.select2 = function (nd) {
        this.selectc.emit(nd);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentTreeComponent.prototype, "selectc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DocumentTreeComponent.prototype, "nodes", void 0);
    DocumentTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-document-tree',
            template: __webpack_require__("./src/app/document-tree/document-tree.component.html"),
            styles: [__webpack_require__("./src/app/document-tree/document-tree.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentTreeComponent);
    return DocumentTreeComponent;
}());



/***/ }),

/***/ "./src/app/domain/tree-node/tree-node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNode; });
var TreeNode = /** @class */ (function () {
    function TreeNode() {
        this.showChildren = true;
        this.profile = "";
        this.userSet = [];
    }
    return TreeNode;
}());



/***/ }),

/***/ "./src/app/leftbar/leftbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/leftbar/leftbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"\">\r\n\t<div class=\"card\">\r\n\t\t<a href=\"#\">\r\n\t\t\t<img class=\"card-img-top\" src=\"http://static.runoob.com/images/mix/img_avatar.png\" alt=\"My head\">\r\n\t\t</a>\r\n\t\t<span class=\"badge badge-dark\" style=\"border-radius: 0;\">奇状</span>\r\n\t</div>\r\n\t<div class=\"card\">\r\n\t\t<div *ngFor=\"let button of buttons\" class=\"btn-group-vertical\">\r\n\t\t\t<button *ngIf=\"button.ifShow\" class=\"btn btn-primary\" \r\n\t\t\t\tstyle=\"border-radius: 0;border-bottom:solid black 1px;\" \r\n\t\t\t\t(click)=\"goHref(button)\">\r\n\t\t\t\t{{button.title}}\r\n\t\t\t</button>\r\n\t\t\t<div id=\"{{button.id}}\" *ngIf=\"button.ifShow\" class=\"btn-group-vertical\" style=\"width: 100%;\">\r\n\t\t\t\t<div style=\"border-radius: 0;border-bottom:solid black 1px;width: 100%;\" \r\n\t\t\t\t\t*ngFor=\"let subbutton of button.subButton\" \r\n\t\t\t\t\t(click)=\"goHref(subbutton)\">\r\n\t\t\t\t\t<button class=\"btn btn-secondary\" \r\n\t\t\t\t\t\t*ngIf=\"subbutton.ifShow\"\r\n\t\t\t\t\t\tid=\"{{subbutton.id}}\" >\r\n\t\t\t\t\t\t{{subbutton.title}}\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/leftbar/leftbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_leftbar_leftbutton__ = __webpack_require__("./src/app/config/leftbar/leftbutton.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//declare var require: any;
var LeftbarComponent = /** @class */ (function () {
    function LeftbarComponent(router) {
        this.router = router;
        this.buttons = __WEBPACK_IMPORTED_MODULE_3__config_leftbar_leftbutton__["a" /* leftbutton */].buttons;
        var btnTemp = this.buttons;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            btnTemp.forEach(function (item, index) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#" + item.id).hide();
            });
        });
    }
    LeftbarComponent.prototype.ngOnInit = function () {
    };
    LeftbarComponent.prototype.goHref = function (btn) {
        if (!btn.ifActive) {
            alert(btn.unActiveAlert);
            return;
        }
        if (this.ifButtonNotLast(btn)) {
            if (this.lastButton == btn.id) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#" + this.lastButton).slideUp(200);
                this.lastButton = "";
                return;
            }
            if (this.lastButton != "") {
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#" + this.lastButton).slideUp(200);
            }
            try {
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#" + btn.id).toggle();
                this.lastButton = btn.id;
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            this.router.navigate([btn.href]);
        }
    };
    LeftbarComponent.prototype.ifButtonNotLast = function (btn) {
        return (btn.href == "" || btn.href == "#") && btn.subButton.length > 0;
    };
    LeftbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leftbar',
            template: __webpack_require__("./src/app/leftbar/leftbar.component.html"),
            styles: [__webpack_require__("./src/app/leftbar/leftbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LeftbarComponent);
    return LeftbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".itemheight{\r\n\theight: 44px;\r\n}\r\n\r\n.banner{\r\n\tposition: absolute; \r\n\theight: 40px;\r\n\tz-index:9;\r\n\ttop: 2px;\r\n\tleft: 15px;\r\n}\r\n\r\n.bgRound{\r\n\tposition:absolute;\r\n\tdisplay: block;\r\n\tborder-radius: 14px;\r\n\twidth:30px ;\r\n\theight: 30px;\r\n\tbackground-color:#343a40;\r\n\tz-index:1;\r\n\ttop: 4px;\r\n\tleft: 17px;\r\n\tanimation:toLime 2s ease-in 0s infinite ease-in-out alternate;\r\n\t-webkit-animation:toLime 2s 0s infinite ease-in-out alternate;\r\n}\r\n\r\n@keyframes toLime{\r\n\tfrom{background-color:#343a40 ;}\r\n\tto {background-color:Lime ;}\r\n}\r\n\r\n@-webkit-keyframes toLime{\r\n\tfrom{background-color:#343a40 ;}\r\n\tto {background-color:Lime ;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-sm bg-dark navbar-dark row\">\r\n\t<div class=\"navbar-brand col-sm-3 itemheight\">\r\n\t\t<div class=\"bgRound\"></div>\r\n\t\t<img class=\"banner\" src=\"../../assets/favicon.gif\" alt=\"Logo\"/>\r\n\t</div>\r\n\t\r\n\t<div class=\"navbar-nav col-sm-7 itemheight\">\r\n\t\t<div class=\"nav-item btn-group\">\r\n\t\t\t<button class=\"btn btn-dark\" (click)=\"test()\">管家</button>\r\n\t\t\t<button class=\"btn btn-dark\" (click)=\"signUp()\">注册</button>\r\n\t\t\t<button *ngIf = \"!ifSignIn\" class=\"btn btn-dark\" (click)=\"signIn()\">登录</button>\r\n\t\t\t<button *ngIf = \"ifSignIn\" class=\"btn btn-dark\" (click)=\"logOut()\">退出登录</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"navbar-nav col-sm-2 itemheight\">\r\n\t\t<div class=\"nav-item input-group\">\r\n\t\t\t<input class=\"form-control\" style=\"height: 44px;\" type=\"text\" name=\"search\" id=\"search\"/>\r\n\t\t\t<div class=\"input-group-addon btn btn-light\" style=\"border-radius:0 4px 4px 0;\">\r\n\t\t\t\t<img style=\"height: 30px;margin-right: -3px;\" src=\"../../assets/search.gif\" alt=\"Search\"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap-modal/bundles/ngx-bootstrap-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_dialog_sign_up_dialog_component__ = __webpack_require__("./src/app/sign-up-dialog/sign-up-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(dialogService) {
        this.dialogService = dialogService;
        this.signInInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.logOutInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.signIn = function () {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__sign_up_dialog_sign_up_dialog_component__["a" /* SignUpDialogComponent */], {
            title: "登录",
            type: "signIn"
        }).subscribe(function (obj) {
            _this.signInInit.emit(obj);
        });
    };
    NavbarComponent.prototype.signUp = function () {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__sign_up_dialog_sign_up_dialog_component__["a" /* SignUpDialogComponent */], {
            title: "注册",
            type: "signUp"
        }).subscribe(function (obj) {
            if (obj) {
                _this.dialogService.show({
                    content: "注册成功",
                    icon: 'success',
                    size: 'sm',
                    timeout: 1000,
                    showCancelButton: false
                });
            }
            ;
        });
    };
    NavbarComponent.prototype.logOut = function () {
        this.logOutInit.emit(true);
    };
    NavbarComponent.prototype.test = function () {
        var s = this.dialogService;
        this.dialogService.show({
            type: 'confirm',
            content: "test",
            icon: 'warning',
            size: 'sm',
            showCancelButton: true
        });
    };
    NavbarComponent.prototype.showa = function (a) {
        console.log(a);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavbarComponent.prototype, "ifSignIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "signInInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "logOutInit", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["DialogService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/new-file-dialog/new-file-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-file-dialog/new-file-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<h4 class=\"modal-title\">{{title}}</h4>\r\n\t\t\t<button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<label for=\"path\">新建文件：</label>\r\n\t\t\t<input type=\"text\" id=\"path\" class=\"form-control\" (keyup)=\"changePath($event)\" [(ngModel)]=\"newFilePath\" />\r\n\t\t\t<div *ngIf=\"selectedNode != null\">\r\n\t\t\t\t<div *ngFor=\"let nd of selectedNode.children\" class=\"btn-group\">\r\n\t\t\t\t\t<button class=\"btn btn-outline-info\" *ngIf=\"ifButtonShow(nd)\" (click)=\"addPath(nd)\">{{nd.text}}</button>&nbsp;\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<hr />\r\n\t\t\t<div class=\"btn-group\" #dropdown=\"bs-dropdown\" dropdown>\r\n\t\t\t\t<button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\" aria-controls=\"dropdown-basic\">\r\n        \t\t类型<span class=\"caret\"></span>\r\n      </button> &nbsp;&nbsp;&nbsp;\r\n\t\t\t\t<ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n\t\t\t\t\t<li *ngFor=\"let t of allTypes\" role=\"menuitem\">\r\n\t\t\t\t\t\t<button class=\"dropdown-item\" (click)=\"dropdown.hide();type=t;\">{{t}}</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<span>\r\n      \t{{type}}\r\n    </span>\r\n\t\t\t<div *ngIf=\"type==allTypes[1]\">\r\n\t\t\t\t<label class=\"alert-info\">标题 <input class=\"form-control\" [(ngModel)]=\"text\" type=\"text\"/></label><br />\r\n\t\t\t\t<label style=\"width: 100%;\" class=\"alert-info\">简介 <input class=\"form-control\" [(ngModel)]=\"profile\"  type=\"text\"/></label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"ensure()\">确定</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">取消</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/new-file-dialog/new-file-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFileDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap-modal/bundles/ngx-bootstrap-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_tree_node_tree_node__ = __webpack_require__("./src/app/domain/tree-node/tree-node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_document_service__ = __webpack_require__("./src/app/service/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_data_service__ = __webpack_require__("./src/app/service/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewFileDialogComponent = /** @class */ (function (_super) {
    __extends(NewFileDialogComponent, _super);
    function NewFileDialogComponent(dialogService, dataService, documentService) {
        var _this = _super.call(this, dialogService) || this;
        _this.dataService = dataService;
        _this.documentService = documentService;
        _this.newFilePath = "";
        _this.pathNamesNumber = 0;
        _this.selectedNodeStack = [];
        _this.messageArray = [];
        _this.type = "";
        _this.pathStack = [];
        _this.rootSet = false;
        _this.pid = 0;
        _this.pList = [];
        _this.selectedNode = new __WEBPACK_IMPORTED_MODULE_2__domain_tree_node_tree_node__["a" /* TreeNode */]();
        _this.nowParent = [];
        return _this;
    }
    NewFileDialogComponent.prototype.ngOnInit = function () {
        this.userId = this.dataService.user.id;
        this.selectedNode.children = this.nodes;
        this.regexp = "\w";
        this.allTypes = ["folder", "text"];
    };
    NewFileDialogComponent.prototype.addPath = function (path) {
        var pathNames = this.newFilePath.split("/");
        this.selectedNode = path;
        this.newFilePath += path.text + '/';
        this.pathNamesNumber = pathNames.length + 1;
        this.selectedNodeStack[this.pathNamesNumber] = path;
    };
    NewFileDialogComponent.prototype.changePath = function (event) {
        var inputChar = event.keyCode || event.which;
    };
    NewFileDialogComponent.prototype.inputEnter = function (inputChar) {
        return inputChar == 13;
    };
    NewFileDialogComponent.prototype.ifButtonShow = function (nd) {
        return nd.type == this.allTypes[0];
    };
    NewFileDialogComponent.prototype.showError = function (msg) {
        this.dialogService.show({
            content: msg,
            icon: 'error',
            size: 'sm',
            showCancelButton: false
        });
    };
    NewFileDialogComponent.prototype.ensure = function () {
        var _this = this;
        var r = /([\s\\]|\/{2,})/;
        if (this.type == "") {
            this.showError("类型是必填项!");
        }
        else if (this.newFilePath == "") {
            this.showError("文件路径是必填项");
        }
        else if (r.test(this.newFilePath)) {
            this.showError("文件路径不能有空格,回车,Tab,\或连续/");
        }
        else {
            this.checkPath();
            if (this.pList.length == 0) {
                this.showError("请检查文件路径最后是否有文件名");
                return;
            }
            this.obj = {
                "path": this.pList,
                "type": this.type,
                "title": this.text,
                "profile": this.profile,
                "userId": this.userId,
                "pid": this.pid
            };
            this.documentService.createNewFile(this.obj).subscribe(function (res) {
                _this.nowParent.push(res["document"]);
                _this.close(res);
            }, function (err) {
                console.log(err);
                _this.showError("服务认证错误,请稍后再试");
            });
        }
    };
    NewFileDialogComponent.prototype.checkPath = function () {
        var pathList1 = this.newFilePath.split("/");
        var pathList = [];
        var nowPath1 = this.dataService.documents;
        for (var a in pathList1) {
            if (pathList1[a] != '' && pathList1[a] != '/') {
                pathList.push(pathList1[a]);
            }
        }
        var num = 0;
        for (var a in pathList) {
            var ifFind = false;
            if (nowPath1.length > 0) {
                for (var cnowPath in nowPath1) {
                    if (nowPath1[cnowPath]["text"] == pathList[a]) {
                        ifFind = true;
                        this.pid = nowPath1[cnowPath]["id"];
                        nowPath1 = nowPath1[cnowPath].children;
                        this.nowParent = nowPath1;
                        break;
                    }
                }
            }
            else {
                this.nowParent = this.dataService.documents;
                break;
            }
            if (!ifFind) {
                break;
            }
            else {
                ++num;
            }
        }
        if (num < (pathList.length)) {
            this.pList = pathList.slice(num, pathList.length);
        }
    };
    NewFileDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-file-dialog',
            template: __webpack_require__("./src/app/new-file-dialog/new-file-dialog.component.html"),
            styles: [__webpack_require__("./src/app/new-file-dialog/new-file-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_4__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__service_document_service__["a" /* DocumentService */]])
    ], NewFileDialogComponent);
    return NewFileDialogComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-light\" style=\"height: 100%;padding-top:25px;\">\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__("./src/app/panel/panel.component.html"),
            styles: [__webpack_require__("./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/personal-document/personal-document.component.css":
/***/ (function(module, exports) {

module.exports = ".showPanel{\r\n\tmax-width: 58em;\r\n\tword-break:break-all;\r\n\twidth: 100%;\r\n\tborder-radius:3px ; \r\n\tbackground-color: #f5f3f2;\r\n\tborder:solid 1px #e0e0e0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/personal-document/personal-document.component.html":
/***/ (function(module, exports) {

module.exports = "<app-document-tree style=\"position: absolute;z-index:100;left: 0;top: 0;\" [nodes]=\"nodes\" (selectc)=\"select($event)\">\r\n</app-document-tree>\r\n<div class=\"btn-group\" style=\"position: absolute;height:30px;right: 15px;top: 0px;\">\r\n\t<button class=\"btn btn-outline-secondary\" style=\"font-size: 12px;border-radius: 0 ;\" (click)=\"editDoc()\">编辑</button>\r\n\t<button class=\"btn btn-outline-primary\" style=\"font-size: 12px;\" (click)=\"newDoc()\">新建</button>\r\n\t<button class=\"btn btn-outline-danger\" style=\"font-size: 12px;\" (click)=\"deleteDoc()\">删除</button>\r\n\t<button class=\"btn btn-outline-secondary\" style=\"font-size: 12px;border-radius: 0;\" (click)=\"saveDoc()\">保存</button>\r\n</div>\r\n<div class=\"row\" style=\"margin: 20px 0 -30px 0;height: inherit;\">\r\n\t<div class=\"col-6 \" *ngIf=\"edit\" id=\"textPanel\" style=\"margin-bottom: -40px;\">\r\n\t\t<textarea id=\"textArea\" class=\"form-control form-control-sm\" [style.height]=\"initHeight\" style=\"min-height: 200px;\"[(ngModel)]=\"rawData\" (input)=\"refreshHTML()\"></textarea>\r\n\t\t<button class=\"btn btn-outline-light\" (click)=\"expandTextArea()\">下降{{row}}行</button>  \r\n\t\t<button class=\"btn btn-outline-light\" (click)=\"reduceTextArea()\">上升{{row}}行</button>  \r\n\t\t<input class=\"form-control-plaintext\" style=\"display:inline-block;float:right;width: 40px;\" type=\"number\" max=\"99\" min=\"1\" [(ngModel)]=\"row\"/>\r\n\t</div>\r\n\t<div [class]=\"showDataClass +' showPanel'\" style=\"min-height: 200px;\"\r\n\t\t id=\"htmlPanel\" [innerHTML]=\"showData\">\r\n\t</div>\r\n\t\r\n</div>"

/***/ }),

/***/ "./src/app/personal-document/personal-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap-modal/bundles/ngx-bootstrap-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_file_dialog_new_file_dialog_component__ = __webpack_require__("./src/app/new-file-dialog/new-file-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_data_service__ = __webpack_require__("./src/app/service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_document_service__ = __webpack_require__("./src/app/service/document.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__ = __webpack_require__("./src/app/confirm/confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonalDocumentComponent = /** @class */ (function () {
    function PersonalDocumentComponent(dialogService, dataService, documentService) {
        this.dialogService = dialogService;
        this.dataService = dataService;
        this.documentService = documentService;
        this.edit = false;
        this.ifChanged = true;
        this.defaultRawData = '#请从资源管理器选择一个文件';
        this.row = 5;
        this.rowHeight = 15;
        this.initHeight = "450px";
    }
    PersonalDocumentComponent.prototype.expandTextArea = function () {
        var height = this.row * this.rowHeight;
        this.initHeight = __WEBPACK_IMPORTED_MODULE_1_jquery__("#textPanel").height() + height - 40 + "px";
    };
    PersonalDocumentComponent.prototype.reduceTextArea = function () {
        var height = this.row * this.rowHeight;
        this.initHeight = __WEBPACK_IMPORTED_MODULE_1_jquery__("#textPanel").height() - height - 40 + "px";
    };
    PersonalDocumentComponent.prototype.ngOnInit = function () {
        this.freshTree();
        this.rawData = this.defaultRawData;
        this.title = "";
        this.init();
    };
    PersonalDocumentComponent.prototype.init = function () {
        var showdown = __webpack_require__("./node_modules/showdown/dist/showdown.js");
        this.converter = new showdown.Converter();
        this.refreshHTML();
        this.changeWidth();
        this.height = __WEBPACK_IMPORTED_MODULE_1_jquery__("#htmlPanel").height();
        this.ifChanged = false;
        this.ifSelect = false;
    };
    PersonalDocumentComponent.prototype.setPanelHeight = function (add) {
        this.height = this.height + add;
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#textPanel").height(this.height);
    };
    PersonalDocumentComponent.prototype.refreshHTML = function () {
        this.ifChanged = true;
        this.showData = this.converter.makeHtml(this.rawData);
    };
    PersonalDocumentComponent.prototype.select = function (nd) {
        var _this = this;
        this.ifSelect = true;
        if (nd == null || nd.type == "folder" || this.objectId == nd["objectId"]) {
            return;
        }
        else {
            this.documentService.getDoc(nd["objectId"]).subscribe(function (res) {
                if (res == null) {
                    _this.showError("远程服务未找到该文件!");
                }
                else {
                    if (_this.ifChanged) {
                        _this.showConfirm(res, nd["id"]);
                    }
                    else {
                        _this.doCatchNewFile(res, nd["id"]);
                    }
                }
            }, function (err) {
                console.log(err);
                _this.showError("远程服务出错!");
            });
        }
    };
    PersonalDocumentComponent.prototype.editDoc = function () {
        this.edit = !this.edit;
        this.changeWidth();
    };
    PersonalDocumentComponent.prototype.changeWidth = function () {
        if (this.edit) {
            this.showDataClass = "col-6";
        }
        else {
            this.showDataClass = "col-12";
        }
    };
    PersonalDocumentComponent.prototype.deleteDoc = function () {
        var _this = this;
        if (!this.ifSelect) {
            this.showError("该文档是界面初始文档不能删改!");
            return;
        }
        this.documentService.deleteDoc(this.id).subscribe(function (res) {
            if (res == null || res["errorMsg"] == null) {
                _this.showError("服务器错误!");
            }
            else if (res["errorMsg"] != "") {
                _this.showError(res["errorMsg"].toString());
            }
            else {
                var nd = _this.findTreeNode(_this.id, _this.dataService.documents);
                if (nd != null) {
                    var num = 0;
                    nd.forEach(function (o, i) {
                        if (o["id"] == _this.id) {
                            num = i;
                            return;
                        }
                    });
                    nd.splice(num, 1);
                }
                else {
                    _this.showError("出现BUG!重新登录一下.");
                }
                _this.rawData = _this.defaultRawData;
                _this.showData = _this.converter.makeHtml(_this.rawData);
                _this.refreshHTML();
                _this.ifChanged = false;
                _this.ifSelect = false;
                _this.id = 0;
                _this.showSuccess("删除成功");
            }
        }, function (err) {
            _this.showError("服务认证错误,请稍后再试");
        });
    };
    PersonalDocumentComponent.prototype.findTreeNode = function (id, nodes) {
        for (var nd in nodes) {
            if (nodes[nd]["type"] != "folder") {
                if (nodes[nd]["id"] == id) {
                    return nodes;
                }
                else {
                    continue;
                }
            }
            else if (nodes[nd]["children"] != null && nodes[nd]["children"].length > 0) {
                var q = this.findTreeNode(id, nodes[nd]["children"]);
                if (q != null) {
                    return q;
                }
                else {
                    continue;
                }
            }
            else {
                return null;
            }
        }
    };
    PersonalDocumentComponent.prototype.saveDoc = function () {
        var _this = this;
        if (!this.ifSelect) {
            this.showError("该文档是界面初始文档不能删改!");
            return;
        }
        this.documentService.saveDoc(this.objectId, this.rawData).subscribe(function (res) {
            if (res == null || res["errorMsg"] == null) {
                _this.showError("服务器错误!");
            }
            else if (res["errorMsg"] != "") {
                _this.showError(res["errorMsg"].toString());
            }
            else {
                _this.showSuccess("保存成功");
            }
        }, function (err) {
            _this.showError("服务认证错误,请稍后再试");
        });
        this.ifChanged = false;
    };
    PersonalDocumentComponent.prototype.newDoc = function () {
        var _this = this;
        var id = this.dataService.user["id"];
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__new_file_dialog_new_file_dialog_component__["a" /* NewFileDialogComponent */], {
            title: '新建文件',
            message: '新建文件',
            nodes: this.nodes,
            userId: id
        }).subscribe(function (obj) {
            if (obj != null) {
                _this.freshTree();
            }
            else {
                //				this.showError("创建失败!");
            }
        });
    };
    PersonalDocumentComponent.prototype.freshTree = function () {
        this.nodes = this.dataService.documents;
    };
    PersonalDocumentComponent.prototype.showError = function (msg) {
        this.dialogService.show({
            content: msg,
            icon: 'error',
            size: 'sm',
            showCancelButton: false
        });
    };
    PersonalDocumentComponent.prototype.showConfirm = function (res, id) {
        var _this = this;
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__["a" /* ConfirmComponent */], {
            title: '确认?',
            message: '是否保存当前文档?'
        }).subscribe(function (isConfirmed) {
            if (isConfirmed) {
                _this.saveDoc();
                _this.doCatchNewFile(res, id);
            }
            else {
                _this.doCatchNewFile(res, id);
            }
        });
    };
    PersonalDocumentComponent.prototype.doCatchNewFile = function (res, id) {
        this.objectId = res['id'];
        this.rawData = res["content"];
        this.showData = this.converter.makeHtml(this.rawData);
        this.ifChanged = false;
        this.id = id;
    };
    PersonalDocumentComponent.prototype.showSuccess = function (msg) {
        this.dialogService.show({
            content: msg,
            icon: 'success',
            size: 'sm',
            timeout: 1000,
            showCancelButton: false
        });
    };
    ;
    PersonalDocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-personal-document',
            template: __webpack_require__("./src/app/personal-document/personal-document.component.html"),
            styles: [__webpack_require__("./src/app/personal-document/personal-document.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["DialogService"],
            __WEBPACK_IMPORTED_MODULE_4__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__service_document_service__["a" /* DocumentService */]])
    ], PersonalDocumentComponent);
    return PersonalDocumentComponent;
}());



/***/ }),

/***/ "./src/app/personal-tools/personal-tools.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/personal-tools/personal-tools.component.html":
/***/ (function(module, exports) {

module.exports = "个人工具"

/***/ }),

/***/ "./src/app/personal-tools/personal-tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalToolsComponent = /** @class */ (function () {
    function PersonalToolsComponent() {
    }
    PersonalToolsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PersonalToolsComponent.prototype, "data", void 0);
    PersonalToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-personal-tools',
            template: __webpack_require__("./src/app/personal-tools/personal-tools.component.html"),
            styles: [__webpack_require__("./src/app/personal-tools/personal-tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalToolsComponent);
    return PersonalToolsComponent;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.documents = [];
        this.user = {
            "id": 0
        };
    }
    DataService.prototype.clear = function () {
        this.documents = [];
        this.user = {};
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/service/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
        this.createNewFileUrl = "api/createNewFile";
        this.getDocUrl = "api/getDoc";
        this.saveDocUrl = "api/saveDoc";
        this.deleteDocUrl = "api/deleteDoc";
    }
    DocumentService.prototype.getNode = function () {
    };
    DocumentService.prototype.deleteDoc = function (id) {
        return this.http.delete(this.deleteDocUrl + "/" + id);
    };
    DocumentService.prototype.saveDoc = function (objectId, rawData) {
        return this.http.post(this.saveDocUrl + "/" + objectId, rawData);
    };
    DocumentService.prototype.createNewFile = function (obj) {
        return this.http.post(this.createNewFileUrl, obj);
    };
    DocumentService.prototype.getDoc = function (obj) {
        return this.http.get(this.getDocUrl + "/" + obj);
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.signUpUrl = "api/signUp";
        this.signInUrl = "api/signIn";
    }
    UserService.prototype.signUp = function (obj) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
                //  'Authorization': 'my-auth-token'
            })
        };
        return this.http.post(this.signUpUrl, obj, httpOptions);
    };
    UserService.prototype.signIn = function (obj) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
                //  'Authorization': 'my-auth-token'
            })
        };
        return this.http.post(this.signInUrl, obj, httpOptions);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sign-up-dialog/sign-up-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up-dialog/sign-up-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n\t<div class=\"modal-content\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<h4 class=\"modal-title\">{{title}}</h4>\r\n\t\t\t<button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<div class=\"\">\r\n\t\t\t\t<label for=\"id\">账号：</label>\r\n\t\t\t\t<input type=\"text\" id=\"id\" class=\"form-control\" required=\"required\" placeholder=\"手机号码/邮箱\" [(ngModel)]=\"id\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"\">\r\n\t\t\t\t<label for=\"password\">密码：</label>\r\n\t\t\t\t<input type=\"password\" id=\"password\" class=\"form-control\" required=\"required\" placeholder=\"英文字母和部分常用符号8-18位\" [(ngModel)]=\"password\" />\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"!ifSignIn()\">\r\n\t\t\t\t<label for=\"passwordEnsure\">确认密码：</label>\r\n\t\t\t\t<input type=\"password\" id=\"passwordEnsure\" class=\"form-control\" required=\"required\" placeholder=\"再次输入密码\" [(ngModel)]=\"passwordEnsure\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"ensure()\">确定</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/sign-up-dialog/sign-up-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap-modal/bundles/ngx-bootstrap-modal.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpDialogComponent = /** @class */ (function (_super) {
    __extends(SignUpDialogComponent, _super);
    function SignUpDialogComponent(dialogService, userService) {
        var _this = _super.call(this, dialogService) || this;
        _this.userService = userService;
        _this.password = "";
        _this.passwordEnsure = "";
        _this.passwordWrongMsg = "";
        _this.typeObj = {
            "signIn": "signIn",
            "signUp": "signUp"
        };
        return _this;
    }
    SignUpDialogComponent.prototype.ngOnInit = function () { };
    SignUpDialogComponent.prototype.ifSignIn = function () {
        return this.type == this.typeObj["signIn"];
    };
    SignUpDialogComponent.prototype.judgeId = function () {
        if (this.matchMail()) {
            this.mail = this.id;
            this.phoneNumber = null;
        }
        else if (this.matchPhoneNumber()) {
            this.phoneNumber = this.id;
            this.mail = null;
        }
        else {
            this.passwordWrongMsg = "账号格式不正确";
            return false;
        }
        return true;
    };
    SignUpDialogComponent.prototype.judgePassword = function () {
        if (!this.judgeId()) {
            return false;
        }
        var pattern = /[\w`~!@#$%^&*()+=|:;<>,.\/?\{\}\[\]\"\'\-\\]+/g;
        var matches = this.password.match(pattern);
        if (matches == null || matches.length > 1 || matches.length == 0 ||
            matches[0] != this.password || this.password.length > 18 || this.password.length < 8) {
            this.passwordWrongMsg = "密码不能为空且不能输入特殊字符 8-18位";
            return false;
        }
        else if (this.password != this.passwordEnsure) {
            this.passwordWrongMsg = "两次输入密码不一致";
            return false;
        }
        return true;
    };
    SignUpDialogComponent.prototype.ensure = function () {
        if (this.ifSignIn()) {
            if (this.judgeId()) {
                this.signIn();
            }
            else {
                this.showError(this.passwordWrongMsg);
            }
        }
        else {
            if (this.judgePassword()) {
                this.signUp();
            }
            else {
                this.showError(this.passwordWrongMsg);
            }
        }
    };
    SignUpDialogComponent.prototype.signIn = function () {
        var _this = this;
        this.userService.signIn({
            phoneNumber: this.phoneNumber,
            mail: this.mail,
            password: this.password
        }).subscribe(function (res) {
            if (res == null || res["errorMsg"] == null) {
                _this.showError("服务器错误!");
            }
            else if (res["errorMsg"] != "") {
                _this.showError(res["errorMsg"].toString());
            }
            else {
                _this.doPre(res);
            }
        }, function (err) {
            _this.showError("服务认证错误,请稍后再试");
        });
    };
    SignUpDialogComponent.prototype.doPre = function (res) {
        this.close(res);
    };
    SignUpDialogComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.signUp({
            phoneNumber: this.phoneNumber,
            mail: this.mail,
            password: this.password
        }).subscribe(function (res) {
            if (res == null || res["errorMsg"] == null) {
                _this.showError("服务错误");
            }
            else if (res["errorMsg"] != "") {
                _this.showError(res["errorMsg"].toString());
            }
            else {
                _this.showSuccess(res);
            }
        }, function (err) {
            _this.showError("服务认证错误,请稍后再试");
        });
    };
    SignUpDialogComponent.prototype.matchMail = function () {
        var pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g;
        return pattern.test(this.id);
    };
    SignUpDialogComponent.prototype.matchPhoneNumber = function () {
        var pattern = /(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/g;
        return pattern.test(this.id);
    };
    SignUpDialogComponent.prototype.showError = function (msg) {
        this.dialogService.show({
            content: msg,
            icon: 'error',
            size: 'sm',
            showCancelButton: false
        });
    };
    SignUpDialogComponent.prototype.showSuccess = function (res) {
        this.close(true);
    };
    SignUpDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up-dialog',
            template: __webpack_require__("./src/app/sign-up-dialog/sign-up-dialog.component.html"),
            styles: [__webpack_require__("./src/app/sign-up-dialog/sign-up-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]])
    ], SignUpDialogComponent);
    return SignUpDialogComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "./src/app/tree-root/tree-root.component.css":
/***/ (function(module, exports) {

module.exports = ".tree-node{\r\n\tmargin-left: 1em;\r\n}\r\n\r\n.node-text{\r\n\twhite-space:nowrap;overflow: scroll;cursor: pointer;\r\n\tfont:13px futura;\r\n\ttransition: color 0.5s;\r\n\t-moz-transition: color 0.5s;\r\n\t-webkit-transition: color 0.5s;\r\n\t-o-transition:color 0.5s;\r\n\t -webkit-user-select:none; \r\n\t -moz-user-select:none; \r\n\t -ms-user-select:none; \r\n\t user-select:none;\r\n}\r\n\r\n.textBlue{\r\n\tcolor:lightblue;\r\n}\r\n\r\n.textWhite{\r\n\tcolor: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tree-root/tree-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let node of nodes\" id=\"node.id\" class=\"tree-node\" >\r\n\t<div style=\"display: inline-block;\" *ngIf=\"!node.deleted\">\r\n\t\t<span class=\"node-text\" [style.color]=\"colorDependOnType(node.type)\"\r\n\t\t\t(dblclick)=\"changeSelectedNode(node)\" (keyup)=\"changeName(node)\">\r\n\t\t\t> {{node.text}}\r\n\t\t</span>\r\n\t</div>\r\n\t<div *ngIf=\"isNotLast(node) && node.showChildren\">\r\n\t\t<app-tree-root  [nodes]=\"node.children\" (select)=\"selectc($event)\" [depth]=\"depth + 1\"></app-tree-root>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/tree-root/tree-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeRootComponent = /** @class */ (function () {
    function TreeRootComponent() {
        this.depth = 0;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TreeRootComponent.prototype.ngOnInit = function () {
    };
    TreeRootComponent.prototype.isNotLast = function (nd) {
        return nd.children != null && nd.children.length > 0;
    };
    TreeRootComponent.prototype.changeSelectedNode = function (nd) {
        if (!this.isNotLast(nd)) {
            this.select.emit(nd);
        }
        else {
            nd.showChildren = !nd.showChildren;
        }
    };
    TreeRootComponent.prototype.selectc = function (nd, type) {
        this.select.emit(nd);
    };
    TreeRootComponent.prototype.rename = function (node) {
        console.log(node);
    };
    TreeRootComponent.prototype.changeName = function (node) {
    };
    TreeRootComponent.prototype.colorDependOnType = function (tp) {
        var specialStyle = "";
        if (tp == "folder") {
            specialStyle = "lightskyblue";
        }
        else if (tp == "text") {
            specialStyle = "white";
        }
        return specialStyle;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TreeRootComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], TreeRootComponent.prototype, "depth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TreeRootComponent.prototype, "select", void 0);
    TreeRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tree-root',
            template: __webpack_require__("./src/app/tree-root/tree-root.component.html"),
            styles: [__webpack_require__("./src/app/tree-root/tree-root.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeRootComponent);
    return TreeRootComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map