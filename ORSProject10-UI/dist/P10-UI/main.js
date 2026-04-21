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

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Alert' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Alert' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' alertCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alertCode\" [(ngModel)]=\"form.data.alertCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  alertCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.alertCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' alertType' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alertType\" [(ngModel)]=\"form.data.alertType\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  alertType' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.alertType}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'alertTime' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"alertTime\" [value]=\"form.data.alertTime | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.alertTime=parseDate($event.target.value)\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Total alertTime' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.alertTime}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'alertStatus' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <!-- <input type=\"text\" name=\"attendanceStatus\" [(ngModel)]=\"form.data.attendanceStatus\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter attendanceStatus' | translate}}\">  -->\r\n\r\n                <select class=\"form-control\" name=\"alertStatus\" [(ngModel)]=\"form.data.alertStatus\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select alertStatus ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.alertStatus}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/alertlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var AlertComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AlertComponent, _super);
    function AlertComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ALERT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    AlertComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.alertCode = data.alertCode;
        form.alertType = data.alertType;
        form.alertTime = data.alertTime;
        form.alertStatus = data.alertStatus;
        console.log('Populated Form', form);
    };
    AlertComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    AlertComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], AlertComponent);
    return AlertComponent;
}(base_component_1.BaseCtl));
exports.AlertComponent = AlertComponent;


/***/ }),

/***/ "./src/app/alert/alertlist.component.css":
/*!***********************************************!*\
  !*** ./src/app/alert/alertlist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0bGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/alert/alertlist.component.html":
/*!************************************************!*\
  !*** ./src/app/alert/alertlist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Alert List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"alertCode\" [(ngModel)]=\"form.searchParams.alertCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter alertCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n<div class=\"col-sm-2\">\r\n          <input type=\"date\" name=\"alertTime\" [(ngModel)]=\"form.searchParams.alertTime\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter alertTime' | translate }}\"> \r\n        </div>\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"alertStatus\"  [(ngModel)]=\"form.searchParams.alertStatus\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select alertStatus ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/alert')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add alert' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'alertCode' | translate }}</th>\r\n                <th>{{ 'alertType ' | translate }}</th>\r\n              <th>{{ 'alertTime ' | translate }}</th>\r\n                <th>{{ 'alertStatus ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.alertCode }}</td>\r\n               <td>{{ m.alertType }}</td>\r\n              <td>{{ m.alertTime |date:'yyyy-MM-dd' }}</td>\r\n              <td>{{ m.alertStatus }}</td>\r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/alert/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/alertlist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/alertlist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/alert/alertlist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/alert/alertlist.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var AlertlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(AlertlistComponent, _super);
    function AlertlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ALERT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    AlertlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-alertlist',
            template: __webpack_require__(/*! ./alertlist.component.html */ "./src/app/alert/alertlist.component.html"),
            styles: [__webpack_require__(/*! ./alertlist.component.css */ "./src/app/alert/alertlist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], AlertlistComponent);
    return AlertlistComponent;
}(base_list_component_1.BaseListCtl));
exports.AlertlistComponent = AlertlistComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var marksheet_component_1 = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
var student_component_1 = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
var college_component_1 = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var forgotpassword_component_1 = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
var signup_component_1 = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
var message_component_1 = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var message_list_component_1 = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
var marksheet_list_component_1 = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
var college_list_component_1 = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
var student_list_component_1 = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
var user_list_component_1 = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
var user_component_1 = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
var role_component_1 = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
var course_component_1 = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
var subject_component_1 = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
var role_list_component_1 = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
var course_list_component_1 = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
var faculty_component_1 = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
var faculty_list_component_1 = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
var timetable_component_1 = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
var file_component_1 = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
var timetable_list_component_1 = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
var subject_list_component_1 = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
var marksheetmerit_list_component_1 = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
var getmarksheet_component_1 = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
var changepassword_component_1 = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
var loader_component_1 = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
var myprofile_component_1 = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
var product_component_1 = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
var product_list_component_1 = __webpack_require__(/*! ./product/product-list.component */ "./src/app/product/product-list.component.ts");
var customer_component_1 = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
var customer_list_component_1 = __webpack_require__(/*! ./customer/customer-list.component */ "./src/app/customer/customer-list.component.ts");
var alert_component_1 = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
var alertlist_component_1 = __webpack_require__(/*! ./alert/alertlist.component */ "./src/app/alert/alertlist.component.ts");
var order_component_1 = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
var orderlist_component_1 = __webpack_require__(/*! ./order/orderlist.component */ "./src/app/order/orderlist.component.ts");
var policy_component_1 = __webpack_require__(/*! ./policy/policy.component */ "./src/app/policy/policy.component.ts");
var policylist_component_1 = __webpack_require__(/*! ./policy/policylist.component */ "./src/app/policy/policylist.component.ts");
var sponsor_component_1 = __webpack_require__(/*! ./sponsor/sponsor.component */ "./src/app/sponsor/sponsor.component.ts");
var sponsorlist_component_1 = __webpack_require__(/*! ./sponsor/sponsorlist.component */ "./src/app/sponsor/sponsorlist.component.ts");
var parking_component_1 = __webpack_require__(/*! ./parking/parking.component */ "./src/app/parking/parking.component.ts");
var parkinglist_component_1 = __webpack_require__(/*! ./parking/parkinglist.component */ "./src/app/parking/parkinglist.component.ts");
var plan_component_1 = __webpack_require__(/*! ./plan/plan.component */ "./src/app/plan/plan.component.ts");
var planlist_component_1 = __webpack_require__(/*! ./plan/planlist.component */ "./src/app/plan/planlist.component.ts");
var state_component_1 = __webpack_require__(/*! ./state/state.component */ "./src/app/state/state.component.ts");
var statelist_component_1 = __webpack_require__(/*! ./state/statelist.component */ "./src/app/state/statelist.component.ts");
var health_component_1 = __webpack_require__(/*! ./health/health.component */ "./src/app/health/health.component.ts");
var heathlist_component_1 = __webpack_require__(/*! ./health/heathlist.component */ "./src/app/health/heathlist.component.ts");
var location_component_1 = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
var locationlist_component_1 = __webpack_require__(/*! ./location/locationlist.component */ "./src/app/location/locationlist.component.ts");
var payment_component_1 = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var paymentlist_component_1 = __webpack_require__(/*! ./payment/paymentlist.component */ "./src/app/payment/paymentlist.component.ts");
var credential_component_1 = __webpack_require__(/*! ./credential/credential.component */ "./src/app/credential/credential.component.ts");
var credentiallist_component_1 = __webpack_require__(/*! ./credential/credentiallist.component */ "./src/app/credential/credentiallist.component.ts");
var masking_component_1 = __webpack_require__(/*! ./masking/masking.component */ "./src/app/masking/masking.component.ts");
var maskinglist_component_1 = __webpack_require__(/*! ./masking/maskinglist.component */ "./src/app/masking/maskinglist.component.ts");
var data_component_1 = __webpack_require__(/*! ./data/data.component */ "./src/app/data/data.component.ts");
var datalist_component_1 = __webpack_require__(/*! ./data/datalist.component */ "./src/app/data/datalist.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    // ***********CUSTOMER*************
    {
        path: 'customer',
        component: customer_component_1.CustomerComponent
    },
    {
        path: 'customerlist',
        component: customer_list_component_1.CustomerlistComponent
    },
    {
        path: 'customet/:id',
        component: customer_component_1.CustomerComponent
    },
    // ***********PRODUCT*************
    {
        path: 'product',
        component: product_component_1.ProductComponent
    },
    {
        path: 'productlist',
        component: product_list_component_1.ProductListComponent
    },
    {
        path: 'product/:id',
        component: product_component_1.ProductComponent
    },
    // ======================================
    {
        path: 'loader',
        component: loader_component_1.LoaderComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'login/:userparams',
        component: login_component_1.LoginComponent
    },
    {
        path: 'forgotpassword',
        component: forgotpassword_component_1.ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    },
    {
        path: 'message',
        component: message_component_1.MessageComponent
    },
    {
        path: 'message/:id',
        component: message_component_1.MessageComponent
    },
    {
        path: 'messagelist',
        component: message_list_component_1.MessageListComponent
    },
    {
        path: 'marksheet',
        component: marksheet_component_1.MarksheetComponent
    },
    {
        path: 'marksheet/:id',
        component: marksheet_component_1.MarksheetComponent
    },
    {
        path: 'marksheetlist',
        component: marksheet_list_component_1.MarksheetListComponent
    },
    {
        path: 'marksheetmeritlist',
        component: marksheetmerit_list_component_1.MarksheetmeritListComponent
    },
    {
        path: 'getmarksheet',
        component: getmarksheet_component_1.GetmarksheetComponent
    },
    {
        path: 'college',
        component: college_component_1.CollegeComponent
    },
    {
        path: 'college/:id',
        component: college_component_1.CollegeComponent
    },
    {
        path: 'collegelist',
        component: college_list_component_1.CollegeListComponent
    },
    {
        path: 'student',
        component: student_component_1.StudentComponent
    },
    {
        path: 'student/:id',
        component: student_component_1.StudentComponent
    },
    {
        path: 'studentlist',
        component: student_list_component_1.StudentListComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: 'user/:id',
        component: user_component_1.UserComponent
    },
    {
        path: 'userlist',
        component: user_list_component_1.UserListComponent
    },
    {
        path: 'role',
        component: role_component_1.RoleComponent
    },
    {
        path: 'rolelist',
        component: role_list_component_1.RoleListComponent
    },
    {
        path: 'role/:id',
        component: role_component_1.RoleComponent
    },
    {
        path: 'course',
        component: course_component_1.CourseComponent
    },
    {
        path: 'courselist',
        component: course_list_component_1.CourseListComponent
    },
    {
        path: 'course/:id',
        component: course_component_1.CourseComponent
    },
    {
        path: 'faculty',
        component: faculty_component_1.FacultyComponent
    },
    {
        path: 'facultylist',
        component: faculty_list_component_1.FacultyListComponent
    },
    {
        path: 'faculty/:id',
        component: faculty_component_1.FacultyComponent
    },
    {
        path: 'timetable',
        component: timetable_component_1.TimetableComponent
    },
    {
        path: 'timetablelist',
        component: timetable_list_component_1.TimetableListComponent
    },
    {
        path: 'timetable/:id',
        component: timetable_component_1.TimetableComponent
    },
    {
        path: 'subject',
        component: subject_component_1.SubjectComponent
    },
    {
        path: 'subjectlist',
        component: subject_list_component_1.SubjectListComponent
    },
    {
        path: 'subject/:id',
        component: subject_component_1.SubjectComponent
    },
    {
        path: 'alert',
        component: alert_component_1.AlertComponent
    },
    {
        path: 'alertlist',
        component: alertlist_component_1.AlertlistComponent
    },
    {
        path: 'alert/:id',
        component: alert_component_1.AlertComponent
    },
    {
        path: 'order',
        component: order_component_1.OrderComponent
    },
    {
        path: 'orderlist',
        component: orderlist_component_1.OrderlistComponent
    },
    {
        path: 'order/:id',
        component: order_component_1.OrderComponent
    },
    {
        path: 'policy',
        component: policy_component_1.PolicyComponent
    },
    {
        path: 'policylist',
        component: policylist_component_1.PolicylistComponent
    },
    {
        path: 'policy/:id',
        component: policy_component_1.PolicyComponent
    },
    {
        path: 'sponsor',
        component: sponsor_component_1.SponsorComponent
    },
    {
        path: 'sponsorlist',
        component: sponsorlist_component_1.SponsorlistComponent
    },
    {
        path: 'sponsor/:id',
        component: sponsor_component_1.SponsorComponent
    },
    {
        path: 'parking',
        component: parking_component_1.ParkingComponent
    },
    {
        path: 'parkinglist',
        component: parkinglist_component_1.ParkinglistComponent
    },
    {
        path: 'parking/:id',
        component: parking_component_1.ParkingComponent
    },
    {
        path: 'plan',
        component: plan_component_1.PlanComponent
    },
    {
        path: 'planlist',
        component: planlist_component_1.PlanlistComponent
    },
    {
        path: 'plan/:id',
        component: plan_component_1.PlanComponent
    },
    {
        path: 'state',
        component: state_component_1.StateComponent
    },
    {
        path: 'statelist',
        component: statelist_component_1.StatelistComponent
    },
    {
        path: 'state/:id',
        component: state_component_1.StateComponent
    },
    {
        path: 'health',
        component: health_component_1.HealthComponent
    },
    {
        path: 'healthlist',
        component: heathlist_component_1.HeathlistComponent
    },
    {
        path: 'health/:id',
        component: health_component_1.HealthComponent
    },
    {
        path: 'location',
        component: location_component_1.LocationComponent
    },
    {
        path: 'locationlist',
        component: locationlist_component_1.LocationlistComponent
    },
    {
        path: 'location/:id',
        component: location_component_1.LocationComponent
    },
    {
        path: 'payment',
        component: payment_component_1.PaymentComponent
    },
    {
        path: 'paymentlist',
        component: paymentlist_component_1.PaymentlistComponent
    },
    {
        path: 'payment/:id',
        component: payment_component_1.PaymentComponent
    },
    {
        path: 'credential',
        component: credential_component_1.CredentialComponent
    },
    {
        path: 'credentiallist',
        component: credentiallist_component_1.CredentiallistComponent
    },
    {
        path: 'credential/:id',
        component: credential_component_1.CredentialComponent
    },
    {
        path: 'masking',
        component: masking_component_1.MaskingComponent
    },
    {
        path: 'maskinglist',
        component: maskinglist_component_1.MaskinglistComponent
    },
    {
        path: 'masking/:id',
        component: masking_component_1.MaskingComponent
    },
    {
        path: 'data',
        component: data_component_1.DataComponent
    },
    {
        path: 'datalist',
        component: datalist_component_1.DatalistComponent
    },
    {
        path: 'data/:id',
        component: data_component_1.DataComponent
    },
    {
        path: 'myprofile',
        component: myprofile_component_1.MyprofileComponent
    },
    {
        path: 'file',
        component: file_component_1.FileComponent
    },
    {
        path: 'changepassword',
        component: changepassword_component_1.ChangepasswordComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n  }\r\n  \r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .app {\r\n    margin: 48px;\r\n  }\r\n  \r\n  .buttons {\r\n    display: flex;\r\n    max-width: 500px;\r\n    justify-content: space-evenly;\r\n    margin-bottom: 48px;\r\n\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5hcHAge1xyXG4gICAgbWFyZ2luOiA0OHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuXHJcbiAgfVxyXG5cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
var http_loader_1 = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var marksheet_component_1 = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
var student_component_1 = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
var college_component_1 = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var http_service_service_1 = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var data_validator_1 = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
var forgotpassword_component_1 = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
var signup_component_1 = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
var message_component_1 = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
var message_list_component_1 = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
var marksheet_list_component_1 = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
var college_list_component_1 = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
var student_list_component_1 = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
var user_component_1 = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
var user_list_component_1 = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
var role_component_1 = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
var course_component_1 = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
var subject_component_1 = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
var role_list_component_1 = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
var timetable_component_1 = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
var course_list_component_1 = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
var faculty_component_1 = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
var faculty_list_component_1 = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
var file_component_1 = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
var timetable_list_component_1 = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
var subject_list_component_1 = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
var marksheetmerit_list_component_1 = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
var getmarksheet_component_1 = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
var changepassword_component_1 = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
var loader_component_1 = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
var navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var myprofile_component_1 = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
var product_component_1 = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
var product_list_component_1 = __webpack_require__(/*! ./product/product-list.component */ "./src/app/product/product-list.component.ts");
var customer_component_1 = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
var customer_list_component_1 = __webpack_require__(/*! ./customer/customer-list.component */ "./src/app/customer/customer-list.component.ts");
var alert_component_1 = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
var alertlist_component_1 = __webpack_require__(/*! ./alert/alertlist.component */ "./src/app/alert/alertlist.component.ts");
var order_component_1 = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
var orderlist_component_1 = __webpack_require__(/*! ./order/orderlist.component */ "./src/app/order/orderlist.component.ts");
var policy_component_1 = __webpack_require__(/*! ./policy/policy.component */ "./src/app/policy/policy.component.ts");
var policylist_component_1 = __webpack_require__(/*! ./policy/policylist.component */ "./src/app/policy/policylist.component.ts");
var sponsor_component_1 = __webpack_require__(/*! ./sponsor/sponsor.component */ "./src/app/sponsor/sponsor.component.ts");
var sponsorlist_component_1 = __webpack_require__(/*! ./sponsor/sponsorlist.component */ "./src/app/sponsor/sponsorlist.component.ts");
var parking_component_1 = __webpack_require__(/*! ./parking/parking.component */ "./src/app/parking/parking.component.ts");
var parkinglist_component_1 = __webpack_require__(/*! ./parking/parkinglist.component */ "./src/app/parking/parkinglist.component.ts");
var plan_component_1 = __webpack_require__(/*! ./plan/plan.component */ "./src/app/plan/plan.component.ts");
var planlist_component_1 = __webpack_require__(/*! ./plan/planlist.component */ "./src/app/plan/planlist.component.ts");
var state_component_1 = __webpack_require__(/*! ./state/state.component */ "./src/app/state/state.component.ts");
var statelist_component_1 = __webpack_require__(/*! ./state/statelist.component */ "./src/app/state/statelist.component.ts");
var health_component_1 = __webpack_require__(/*! ./health/health.component */ "./src/app/health/health.component.ts");
var heathlist_component_1 = __webpack_require__(/*! ./health/heathlist.component */ "./src/app/health/heathlist.component.ts");
var location_component_1 = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
var locationlist_component_1 = __webpack_require__(/*! ./location/locationlist.component */ "./src/app/location/locationlist.component.ts");
var payment_component_1 = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var paymentlist_component_1 = __webpack_require__(/*! ./payment/paymentlist.component */ "./src/app/payment/paymentlist.component.ts");
var credential_component_1 = __webpack_require__(/*! ./credential/credential.component */ "./src/app/credential/credential.component.ts");
var credentiallist_component_1 = __webpack_require__(/*! ./credential/credentiallist.component */ "./src/app/credential/credentiallist.component.ts");
var masking_component_1 = __webpack_require__(/*! ./masking/masking.component */ "./src/app/masking/masking.component.ts");
var maskinglist_component_1 = __webpack_require__(/*! ./masking/maskinglist.component */ "./src/app/masking/maskinglist.component.ts");
var data_component_1 = __webpack_require__(/*! ./data/data.component */ "./src/app/data/data.component.ts");
var datalist_component_1 = __webpack_require__(/*! ./data/datalist.component */ "./src/app/data/datalist.component.ts");
// import { AuthService } from './auth.service';
function myHttpLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.myHttpLoader = myHttpLoader;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                marksheet_component_1.MarksheetComponent,
                marksheet_list_component_1.MarksheetListComponent,
                student_component_1.StudentComponent,
                student_list_component_1.StudentListComponent,
                college_component_1.CollegeComponent,
                college_list_component_1.CollegeListComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                forgotpassword_component_1.ForgotPasswordComponent,
                signup_component_1.SignUpComponent,
                message_component_1.MessageComponent,
                message_list_component_1.MessageListComponent,
                user_component_1.UserComponent,
                user_list_component_1.UserListComponent,
                role_component_1.RoleComponent,
                role_list_component_1.RoleListComponent,
                course_component_1.CourseComponent,
                subject_component_1.SubjectComponent,
                subject_list_component_1.SubjectListComponent,
                timetable_component_1.TimetableComponent,
                course_list_component_1.CourseListComponent,
                faculty_component_1.FacultyComponent,
                faculty_list_component_1.FacultyListComponent,
                timetable_component_1.TimetableComponent,
                timetable_list_component_1.TimetableListComponent,
                marksheetmerit_list_component_1.MarksheetmeritListComponent,
                getmarksheet_component_1.GetmarksheetComponent,
                changepassword_component_1.ChangepasswordComponent,
                loader_component_1.LoaderComponent,
                file_component_1.FileComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                myprofile_component_1.MyprofileComponent,
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
                customer_component_1.CustomerComponent,
                customer_list_component_1.CustomerlistComponent,
                alert_component_1.AlertComponent,
                alertlist_component_1.AlertlistComponent,
                order_component_1.OrderComponent,
                orderlist_component_1.OrderlistComponent,
                policy_component_1.PolicyComponent,
                policylist_component_1.PolicylistComponent,
                sponsor_component_1.SponsorComponent,
                sponsorlist_component_1.SponsorlistComponent,
                parking_component_1.ParkingComponent,
                parkinglist_component_1.ParkinglistComponent,
                plan_component_1.PlanComponent,
                planlist_component_1.PlanlistComponent,
                state_component_1.StateComponent,
                statelist_component_1.StatelistComponent,
                health_component_1.HealthComponent,
                heathlist_component_1.HeathlistComponent,
                location_component_1.LocationComponent,
                locationlist_component_1.LocationlistComponent,
                payment_component_1.PaymentComponent,
                paymentlist_component_1.PaymentlistComponent,
                credential_component_1.CredentialComponent,
                credentiallist_component_1.CredentiallistComponent,
                masking_component_1.MaskingComponent,
                maskinglist_component_1.MaskinglistComponent,
                data_component_1.DataComponent,
                datalist_component_1.DatalistComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: myHttpLoader,
                        deps: [http_1.HttpClient]
                    }
                }),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS, useClass: auth_service_1.AuthService, multi: true
                },
                http_service_service_1.HttpServiceService,
                data_validator_1.DataValidator,
                ngx_cookie_service_1.CookieService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var http_service_service_1 = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.intercept = function (req, next) {
        if (localStorage.getItem('fname') && localStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    "withCredentials": "true",
                    Authorization: this.http.getToken()
                }
            });
        }
        console.log(req.headers.get("Authorization") + "------------------->>>");
        return next.handle(req);
    };
    AuthService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_service_service_1.HttpServiceService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");
var BaseListCtl = /** @class */ (function (_super) {
    tslib_1.__extends(BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        _this.deleteRecordList = [];
        _this.isMasterSel = false;
        _this.checkList = 0;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.search();
        this.isMasterSel = false;
    };
    BaseListCtl.prototype.display = function () {
        this.search();
    };
    BaseListCtl.prototype.submit = function () {
        this.form.pageNo = 0;
        if (this.form.searchParams.roleId == "undefined" || this.form.searchParams.id == "undefined") {
            this.form.searchParams = {};
            this.search();
        }
        else {
            this.search();
        }
    };
    BaseListCtl.prototype["delete"] = function (id) {
        _super.prototype["delete"].call(this, id, function () {
            this.search();
        });
    };
    BaseListCtl.prototype.next = function () {
        this.form.pageNo++;
        this.display();
        this.isMasterSel = false;
        //  this.searchOperation('previous');
    };
    BaseListCtl.prototype.exit = function () {
        location.reload();
    };
    BaseListCtl.prototype.previous = function () {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            //  this.display(); 
            this.isMasterSel = false;
            // this.searchOperation('previous');
            this.display();
        }
    };
    BaseListCtl.prototype.checkUncheckAll = function (event) {
        var checked = event.target.checked;
        this.checkboxes.forEach(function (element) {
            element.nativeElement.checked = checked;
        });
    };
    BaseListCtl.prototype.checklistUpdate = function () {
        var _this = this;
        this.isMasterSel = false;
        this.checkList = 0;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked == true) {
                _this.checkList = _this.checkList + 1;
            }
        });
        if (this.checkList == this.form.list.length) {
            this.isMasterSel = true;
        }
    };
    BaseListCtl.prototype.deleteMany = function () {
        var _this = this;
        console.log('delete Many Records starts ');
        console.log('this.form.pageNo ' + this.form.pageNo);
        this.form.error = false;
        this.deleteRecordList.length = 0;
        console.log('record deleting start ');
        var isRecordSelected = false;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked) {
                // console.log('record deleting ' + element.nativeElement.id)
                _this.deleteRecordList.push(element.nativeElement.id);
                isRecordSelected = true;
            }
        });
        if (isRecordSelected) {
            console.log('record(s) for delete ' + this.deleteRecordList);
            _super.prototype.deleteMany.call(this, this.deleteRecordList + '?pageNo=' + this.form.pageNo, function () {
                //  this.search();  
            });
        }
        else {
            this.form.message = "Select Atleast One Record";
            this.form.error = true;
            console.log('No record(s) for delete ');
        }
        this.isMasterSel = false;
        console.log('delete Many Records ends ');
    };
    BaseListCtl.prototype.generateReport = function () {
    };
    tslib_1.__decorate([
        core_1.ViewChildren("checkboxes"),
        tslib_1.__metadata("design:type", core_1.QueryList)
    ], BaseListCtl.prototype, "checkboxes");
    return BaseListCtl;
}(base_component_1.BaseCtl));
exports.BaseListCtl = BaseListCtl;


/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            "delete": null,
            deleteMany: null,
            preload: null,
            report: null,
            address: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        this.nextList = 0;
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        serviceLocator.getPathVariable(route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api["delete"] = ep + "/delete";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
        this.api.report = ep + "/report";
        this.api.address = ep + "/address";
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        console.log("preload start");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            console.log("base list preload", _self.api.preload);
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.search = function () {
        console.log("search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.nextList = res.result.nextList;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.searchOperation = function (operation) {
        console.log("previous/next search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (operation == 'next' || operation == 'previous') {
                _self.nextList = res.result.nextList;
                _self.form.message = null;
                _self.form.error = false;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Contains display logic. It fetches data from database for the primary key
     */
    BaseCtl.prototype.display = function () {
        var _self = this;
        console.log('Inside display method');
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            _self.form.data.id = 0;
            if (res.success) {
                _self.populateForm(_self.form.data, res.result.data);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Populate HTML form data
     * Overridden by child classes.
     *
     * @param form
     * @param data
     */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.iduser + 'formid in base ctl populate form');
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log("form data going to be submit" + this.form.data);
        //  console.log("form data going to be submit" + this.studentId);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            console.log('dataa ===== > ', res.result.data);
            if (res.success) {
                _self.form.message = "Data is saved";
                if (_self.form.data.id && _self.form.data.id > 0) {
                    _self.form.data.id = res.result.data;
                }
                else {
                    _self.form.data.id = 0;
                }
                console.log(_self.form.data.id);
                //  console.log("--------------------.");
                //return _self.form.data.id ;
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            // _self.form.data.id = res.result.data.id;
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype["delete"] = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api["delete"] + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    //  callback();  
                    this.search();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.deleteMany = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.searchParams, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    _self.form.list = res.result.data;
                    console.log("List ::  ", +res.data);
                    console.log("List Size", _self.form.list.length);
                    //  callback();       
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.generateReport = function () {
        var _self = this;
        console.log('********* Generating Report ********************');
        this.serviceLocator.httpService.get(_self.api.report, function (res) {
            if (res.success) {
                console.log('*********  Report Generated ********************');
                alert('pass');
            }
            else {
                console.log('********* Error in Generating Report  ********************');
                alert('fail');
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.forward = function (page) {
        console.log(page + '--->>page value');
        this.serviceLocator.forward(page);
    };
    BaseCtl.prototype.filterInputD = function (event, errorField, maxLength) {
        var charCode = event.which ? event.which : event.keyCode;
        var charStr = String.fromCharCode(charCode);
        var inputElement = event.target;
        var input = inputElement.value;
        // Regular expressions
        var allowedChars = /^[0-9.]$/;
        var hasDot = input.includes('.');
        var dotPosition = input.indexOf('.');
        var decimalPart = input.substring(dotPosition + 1);
        // Handle dot key
        if (charCode === 190 || charCode === 46) { // Dot key for different browsers
            if (hasDot) {
                event.preventDefault();
                this[errorField] = 'Only one dot is allowed.';
                return;
            }
            // Allow the dot and exit
            return;
        }
        // Check if the typed character is allowed
        if (!allowedChars.test(charStr) && charCode !== 8 && charCode !== 32) {
            event.preventDefault();
            this[errorField] = 'Only numbers and one dot are allowed.';
            return;
        }
        // Check decimal places
        if (hasDot) {
            if (charCode !== 8 && decimalPart.length >= 2) {
                event.preventDefault();
                this[errorField] = 'Only up to two digits are allowed after the dot.';
                return;
            }
        }
        // Handle input length
        if (input.length >= maxLength && charCode !== 8) {
            event.preventDefault();
            this[errorField] = "Only " + maxLength + " characters are allowed.";
            return;
        }
        // Clear error message if input is valid
        this[errorField] = '';
    };
    BaseCtl.prototype.filterInputS = function (event, errorField, maxLength, type) {
        var _this = this;
        var charCode = event.which ? event.which : event.keyCode;
        console.log('charCode=', charCode);
        var charStr = String.fromCharCode(charCode);
        var allowedChars;
        var errorMsg, lerrorMsg;
        switch (type) {
            case 'char':
                allowedChars = /^[a-zA-Z\s.]$/;
                errorMsg = 'Only letters are allowed.';
                lerrorMsg = 'characters';
        }
        var inputElement = event.target;
        var input = inputElement.value;
        // Numpad key codes range from 96 (Numpad 0) to 105 (Numpad 9)
        var isNumpadKey = charCode >= 96 && charCode <= 105;
        // Check if the typed character matches the allowed characters
        if ((!allowedChars.test(charStr) && charCode !== 8 && charCode !== 32 && charCode !== 16 && charCode !== 46)
            || (type === 'char' && isNumpadKey)) {
            event.preventDefault();
            this[errorField] = errorMsg;
        }
        else if (charCode !== 8 && input.length >= maxLength) {
            event.preventDefault();
            this[errorField] = "Only " + maxLength + " " + lerrorMsg + " are allowed.";
        }
        else {
            this[errorField] = '';
        }
        inputElement.addEventListener('blur', function () {
            _this[errorField] = '';
        });
    };
    BaseCtl.prototype.filterInput = function (event, errorField, maxLength, type) {
        var _this = this;
        var charCode = event.which ? event.which : event.keyCode;
        console.log('charCode=', charCode);
        var charStr = String.fromCharCode(charCode);
        var allowedChars;
        var errorMsg, lerrorMsg;
        switch (type) {
            case 'int':
                allowedChars = /^[0-9]$/; // Allows numbers and numpad keys
                errorMsg = 'Only integers are allowed.';
                lerrorMsg = 'digits';
                break;
            case 'double':
                allowedChars = /^[0-9.]$/;
                errorMsg = 'Only numbers are allowed.';
                lerrorMsg = 'digits';
                break;
            default:
                allowedChars = /^[a-zA-Z0-9\s.-]+$/;
                errorMsg = 'Only alphanumeric chars are allowed.';
                lerrorMsg = 'characters';
                break;
        }
        var inputElement = event.target;
        var input = inputElement.value;
        // Numpad key codes range from 96 (Numpad 0) to 105 (Numpad 9)
        var isNumpadKey = charCode >= 96 && charCode <= 105;
        // Check if the typed character matches the allowed characters
        if ((!allowedChars.test(charStr) && charCode !== 8 && charCode !== 32 && charCode !== 16 && charCode !== 46)
            || (type === 'char' && isNumpadKey)) {
            event.preventDefault();
            this[errorField] = errorMsg;
        }
        else if (charCode !== 8 && input.length >= maxLength) {
            event.preventDefault();
            this[errorField] = "Only " + maxLength + " " + lerrorMsg + " are allowed.";
        }
        else {
            this[errorField] = '';
        }
        inputElement.addEventListener('blur', function () {
            _this[errorField] = '';
        });
        console.log('Input:', input);
    };
    BaseCtl.prototype.findSelValueByKey = function (selKey, preloadList) {
        if (preloadList) {
            console.log("preloadList:", preloadList);
            console.log("Searching for selKey:", selKey);
            var sel = preloadList.find(function (a) { return a.key === Number(selKey); });
            console.log("Found sel:", sel);
            return sel ? sel.value : '';
        }
        return '';
    };
    BaseCtl.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    return BaseCtl;
}());
exports.BaseCtl = BaseCtl;


/***/ }),

/***/ "./src/app/college/college-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/college/college-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%;\r\nbackground: url(assets/files/211.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n       <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'College List' | translate }}</h1>\r\n        </div>\r\n      </div> \r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select name' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\">{{'Add College' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Address' | translate }}</th>\r\n                <th>{{'Phone' | translate }}</th>\r\n                <th>{{'City' | translate }}</th>\r\n                <th>{{'State' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.address }} </td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.city }} </td>\r\n                <td> {{ m.state }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/college/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n            </table>\r\n              <table style=\"width: 100%;\">\r\n                <tr>\r\n                  <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button></td>\r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/collegelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n    \r\n    \r\n            \r\n                <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n                </tr>\r\n                </table>\r\n    \r\n            \r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var CollegeListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CollegeListComponent, _super);
    function CollegeListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], CollegeListComponent);
    return CollegeListComponent;
}(base_list_component_1.BaseListCtl));
exports.CollegeListComponent = CollegeListComponent;


/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/college/college.component.html":
/*!************************************************!*\
  !*** ./src/app/college/college.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add College' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update College' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.name}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Address' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"addr\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Address' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.address}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'City' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"form.data.city\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter City' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.city}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'State' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"state\" [(ngModel)]=\"form.data.state\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter State' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Phone No.' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phnNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Phone No.' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/collegelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var CollegeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CollegeComponent, _super);
    function CollegeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CollegeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        return flag;
    };
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], CollegeComponent);
    return CollegeComponent;
}(base_component_1.BaseCtl));
exports.CollegeComponent = CollegeComponent;


/***/ }),

/***/ "./src/app/course/course-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/course/course-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\"\r\n style=\"padding-top: 3%;\r\npadding-bottom: 15%;\r\nbackground: url(assets/files/wav1.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\nheight:90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Course List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"courseName\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select CourseName' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.duration\"\r\n            placeholder=\"{{'Search Duration' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/course')\" type=\"button\" class=\"btn btn-success\">{{'Add Course' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Duration' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n                <td> {{ m.duration }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/course/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/courselist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var CourseListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CourseListComponent, _super);
    function CourseListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CourseListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], CourseListComponent);
    return CourseListComponent;
}(base_list_component_1.BaseListCtl));
exports.CourseListComponent = CourseListComponent;


/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Course' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Course' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"courseName\" [(ngModel)]=\"form.data.courseName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Course Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.courseName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Duration' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\" >\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n            \r\n                <select class=\"form-control\" name=\"duration\"\r\n                  [(ngModel)]=\"form.data.duration\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option [value]=\"1\">1 Year</option>\r\n                  <option [value]=\"2\">2 Year</option>\r\n                  <option [value]=\"3\">3 Year</option>\r\n                  <option [value]=\"4\">4 Year</option>\r\n                  <option [value]=\"5\">5 Year</option>\r\n\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.duration}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" placeholder=\"{{'Enter Description' | translate }}\" name=\"description\"\r\n                  [(ngModel)]=\"form.data.description\"></textarea>\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/courselist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List\r\n                ' | translate }}              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var CourseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CourseComponent, _super);
    function CourseComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    CourseComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CourseComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.courseName);
        flag = flag && validator.isNotNullObject(form.duration);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.duration = data.duration;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    CourseComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], CourseComponent);
    return CourseComponent;
}(base_component_1.BaseCtl));
exports.CourseComponent = CourseComponent;


/***/ }),

/***/ "./src/app/credential/credential.component.css":
/*!*****************************************************!*\
  !*** ./src/app/credential/credential.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWRlbnRpYWwvY3JlZGVudGlhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/credential/credential.component.html":
/*!******************************************************!*\
  !*** ./src/app/credential/credential.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Credential' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Crednetial' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' credentialCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"credentialCode\" [(ngModel)]=\"form.data.credentialCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  credentialCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.credentialCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' userName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"userName\" [(ngModel)]=\"form.data.userName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  userName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.userName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n          \r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' type' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  type' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n              \r\n\r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n          \r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/credentiallist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/credential/credential.component.ts":
/*!****************************************************!*\
  !*** ./src/app/credential/credential.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var CredentialComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CredentialComponent, _super);
    function CredentialComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.CREDENTIAL, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CredentialComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.credentialCode = data.credentialCode;
        form.userName = data.userName;
        form.type = data.type;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    CredentialComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    CredentialComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-credential',
            template: __webpack_require__(/*! ./credential.component.html */ "./src/app/credential/credential.component.html"),
            styles: [__webpack_require__(/*! ./credential.component.css */ "./src/app/credential/credential.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], CredentialComponent);
    return CredentialComponent;
}(base_component_1.BaseCtl));
exports.CredentialComponent = CredentialComponent;


/***/ }),

/***/ "./src/app/credential/credentiallist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/credential/credentiallist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWRlbnRpYWwvY3JlZGVudGlhbGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/credential/credentiallist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/credential/credentiallist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Credential List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"credentialCode\" [(ngModel)]=\"form.searchParams.credentialCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter credentialCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n<div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"userName\" [(ngModel)]=\"form.searchParams.userName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter userName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/credential')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add crednetial' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'credentialCode' | translate }}</th>\r\n                <th>{{ 'userName ' | translate }}</th>\r\n              <th>{{ 'type ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.credentialCode }}</td>\r\n               <td>{{ m.userName }}</td>\r\n              <td>{{ m.type }}</td>\r\n              <td>{{ m.status }}</td>\r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/credential/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/credentiallist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/credentiallist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/credential/credentiallist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/credential/credentiallist.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var CredentiallistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CredentiallistComponent, _super);
    function CredentiallistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.CREDENTIAL, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    CredentiallistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-credentiallist',
            template: __webpack_require__(/*! ./credentiallist.component.html */ "./src/app/credential/credentiallist.component.html"),
            styles: [__webpack_require__(/*! ./credentiallist.component.css */ "./src/app/credential/credentiallist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], CredentiallistComponent);
    return CredentiallistComponent;
}(base_list_component_1.BaseListCtl));
exports.CredentiallistComponent = CredentiallistComponent;


/***/ }),

/***/ "./src/app/customer/customer-list.component.css":
/*!******************************************************!*\
  !*** ./src/app/customer/customer-list.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/customer-list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/customer/customer-list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style>\r\n<div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 73px;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Customer List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"clientName\" [(ngModel)]=\"form.searchParams.clientName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter clientName' | translate }}\">\r\n          <span *ngIf=\"errorMessageclientName\" class=\"alertRedColor\">{{ errorMessageclientName }}</span>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"location\" [(ngModel)]=\"form.searchParams.location\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter location' | translate }}\">\r\n          <span *ngIf=\"errorMessagelocation\" class=\"alertRedColor\">{{ errorMessagelocation }}</span>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"contactNumber\" [(ngModel)]=\"form.searchParams.contactNumber\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter  contactNumber' | translate }}\">\r\n          <span *ngIf=\"errorMessagecontactNumber\" class=\"alertRedColor\">{{ errorMessagecontactNumber}}</span>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"importance\" [(ngModel)]=\"form.searchParams.importance\"\r\n            aria-label=\"ngSelected\" required>\r\n            <option [ngValue]=\"undefined\">{{ 'Select importance' | translate }}</option>\r\n            <option value=\"High\">{{ 'High' | translate }}</option>\r\n            <option value=\"Medium\">{{ 'Medium' | translate }}</option>\r\n            <option value=\"Low\">{{ 'Low' | translate }}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/customer')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add Customer' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'ClientName' | translate }}</th>\r\n              <th>{{ 'Location ' | translate }}</th>\r\n              <th>{{ 'ContactNumber' | translate }}</th>\r\n              <th>{{ 'Importance' | translate }}</th>\r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.clientName }}</td>\r\n              <td>{{ m.location }}</td>\r\n              <td>{{ m.contactNumber }}</td>\r\n              <td>{{m.importance}}</td>\r\n\r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/customer/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/customerlist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/customerlist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/customer/customer-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-list.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var CustomerlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerlistComponent, _super);
    function CustomerlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.CUSTOMER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.errorMessageClientName = '';
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    CustomerlistComponent.prototype.validateFullName = function (event) {
        var inputValue = event.target.value;
        var inputChar = event.key;
        var alphabetPattern = /^[a-zA-Z]*$/; // Pattern to match only alphabetic characters
        if (!alphabetPattern.test(inputChar) && !['Backspace', 'Delete', 'Tab'].includes(inputChar)) {
            event.preventDefault();
            this.errorMessageClientName = 'Only alphabets are allowed.';
            return;
        }
        if (inputValue.length < 3) {
            this.errorMessageClientName = 'name must be at least 3 characters .';
        }
        else if (inputValue.length > 15) {
            this.errorMessageClientName = 'name must contain only 15 character.';
        }
        else {
            this.errorMessageClientName = ''; // Clear error message if valid
        }
    };
    CustomerlistComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        if (!/^[a-zA-Z]+$/.test(charStr)) {
            event.preventDefault();
        }
    };
    CustomerlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer/customer-list.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], CustomerlistComponent);
    return CustomerlistComponent;
}(base_list_component_1.BaseListCtl));
exports.CustomerlistComponent = CustomerlistComponent;


/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .background {\r\n    padding-top: 3%;\r\n    padding-bottom: 13%;\r\n    background: url('assets/files/wall.jpg') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  .required-field {\r\n    color: red;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style>\r\n\r\n<div class=\"container-fluid background\" style=\"padding-top: 8%\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\r\n      <div class=\"card\" >\r\n        <div class=\"card-body shadow-lg grad\">\r\n          <form name=\"assetForm\">\r\n            <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\r\n              {{ 'Add Customer' | translate }}\r\n            </h2>\r\n            <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">\r\n              {{ 'Update Customer' | translate }}\r\n            </h2>\r\n\r\n            <!-- Form error messages -->\r\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n              {{ form.message }}\r\n            </div>\r\n\r\n            <!-- Name Field with Validation -->\r\n\r\n            <div class=\"form-group pt-2\">\r\n              <label>\r\n                <b>{{ 'ClientName' | translate }}</b>\r\n                <span class=\"required-field\">*</span>\r\n              </label>\r\n\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n                </div>\r\n\r\n                <input type=\"text\" name=\"clientName\" [(ngModel)]=\"form.data.clientName\" class=\"form-control\"\r\n                  #clientName=\"ngModel\" maxlength=\"20\" pattern=\"^[A-Za-z ]+$\"\r\n                  (keydown)=\"filterInputS($event, 'errorMessageclientName', 20, 'char')\"\r\n                  placeholder=\"{{ 'Enter clientName' | translate }}\">\r\n              </div>\r\n\r\n              <!-- Custom error messages from component -->\r\n              <span *ngIf=\"form.inputerror.clientName\" class=\"alertRedColor\">{{ form.inputerror.clientName }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group pt-2\">\r\n              <label>\r\n                <b>{{ 'Location' | translate }}</b>\r\n                <span class=\"required-field\">*</span>\r\n              </label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fas fa-map-marker grey-text\"></i></div>\r\n                </div>\r\n                <input type=\"text\" name=\"location\" [(ngModel)]=\"form.data.location\" class=\"form-control\"\r\n                   maxlength=\"35\"\r\n                  placeholder=\"{{ 'Enter location' | translate }}\">\r\n              </div>\r\n              <span *ngIf=\"form.inputerror.location\" class=\"alertRedColor\">{{ form.inputerror.location }}</span>\r\n            </div>\r\n\r\n            <div class=\"form-group pt-2\">\r\n              <label>\r\n                <b>{{ 'ContactNumber' | translate }}</b>\r\n                <span class=\"required-field\">*</span>\r\n              </label>\r\n\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\">\r\n                    <i class=\"fa fa-phone grey-text\"></i>\r\n                  </div>\r\n                </div>\r\n\r\n                <input type=\"text\" name=\"contactNumber\" [(ngModel)]=\"form.data.contactNumber\" #contactNumber=\"ngModel\"\r\n                  class=\"form-control\"  maxlength=\"10\" pattern=\"^[0-9]{10}$\"\r\n                  (keydown)=\"filterInputS($event, 'errorMessagecontactNumber', 10, 'int')\"\r\n                  placeholder=\"{{ 'Enter contactNumber' | translate }}\">\r\n              </div>\r\n\r\n              <!-- Custom validation messages from component -->\r\n              <span *ngIf=\"form.inputerror?.contactNumber\" class=\"alertRedColor\">{{ form.inputerror.contactNumber\r\n                }}</span>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group pt-2\">\r\n              <label><b>{{ 'importance' | translate }}</b><span class=\"required-field\">*</span></label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-paint-brush grey-text\"></i></div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"importance\" [(ngModel)]=\"form.data.importance\"\r\n                  aria-label=\"ngSelected\" required>\r\n                  <option [ngValue]=\"undefined\">{{ 'Select importance' | translate }}</option>\r\n                  <option value=\"High\">{{ 'High' | translate }}</option>\r\n                  <option value=\"Medium\">{{ 'Medium' | translate }}</option>\r\n                  <option value=\"Low\">{{ 'Low' | translate }}</option>\r\n                </select>\r\n              </div>\r\n              <span *ngIf=\"form.inputerror?.importance\" class=\"alertRedColor\">{{ form.inputerror.importance }}</span>\r\n            </div>\r\n\r\n            <div class=\"row pt-2 pl-2 pb-3\">\r\n\r\n              <div class=\"col-md-3\"></div>\r\n\r\n              <div class=\"pt-2\">\r\n                <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                  {{ 'Save' | translate }}\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"col-md-1\"></div>\r\n\r\n              <div class=\"pt-2\">\r\n                <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                  {{ 'Update' | translate }}\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"pt-2\">\r\n                <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/customerlist']\"\r\n                  style=\"text-decoration: none; color: white;\">\r\n                  {{ 'List' | translate }}\r\n                </a>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var CustomerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerComponent, _super);
    function CustomerComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.CUSTOMER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.errorMessageTitle = '';
        _this.errorMessageClientName = '';
        return _this;
    }
    CustomerComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    CustomerComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.clientName);
        flag = flag && validator.isNotNullObject(form.location);
        flag = flag && validator.isNotNullObject(form.contactNumber);
        flag = flag && validator.isNotNullObject(form.importance);
        return flag;
    };
    CustomerComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.clientName = data.clientName;
        form.location = data.location;
        form.contactNumber = data.contactNumber;
        form.importance = data.importance;
    };
    CustomerComponent.prototype.validateName = function (event) {
        var inputValue = event.target.value;
        var inputChar = event.key;
        var alphabetPattern = /^[a-zA-Z]*$/; // Pattern to match only alphabetic characters
        if (!alphabetPattern.test(inputChar) && !['Backspace', 'Delete', 'Tab'].includes(inputChar)) {
            event.preventDefault();
            this.errorMessageClientName = 'Only alphabets are allowed.';
            return;
        }
        if (inputValue.length < 3) {
            this.errorMessageClientName = 'fullName must be at least 3 characters long.';
        }
        else if (inputValue.length > 15) {
            this.errorMessageClientName = 'fullName must not exceed 15 characters.';
        }
        else {
            this.errorMessageClientName = ''; // Clear error message if valid
        }
    };
    CustomerComponent.prototype.validateAlphabetInput = function (event) {
        var charCode = event.which || event.keyCode;
        var charStr = String.fromCharCode(charCode);
        // Regular expression to test if the character is a letter
        if (!/^[a-zA-Z]+$/.test(charStr)) {
            event.preventDefault();
        }
    };
    CustomerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], CustomerComponent);
    return CustomerComponent;
}(base_component_1.BaseCtl));
exports.CustomerComponent = CustomerComponent;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<style> \r\n\r\n  body{\r\n  \r\n      background-image: url('<%=ORSView.APP_CONTEXT%>/img/Background.avif');\r\n      background-size: 100%;\r\n  \r\n  \r\n  }\r\n  .cl{\r\n    font-family: Lucida Calligraphy; \r\n  \r\n   /*  font-family: Monotype Corsiva;\r\n    \r\n   font-family: Footlight MT Light; */\r\n  }\r\n  </style>\r\n<app-navbar></app-navbar>\r\n\r\n<div>  \r\n  <!-- <div class=\"img-fluid\" style=\"background-image: url(../../assets/files/welcomeView2.png); \r\n      -webkit-background-size: cover;\r\n      -moz-background-size: cover;\r\n      -o-background-size: cover;\r\n      background-size: 100%;\r\n      padding-bottom:18%;\r\n      padding-top: 5%;\r\n      \">\r\n      <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\r\n  </div> -->\r\n\r\n  <div class=\"row \" style=\"padding-bottom: 10%;\r\n   background: url(assets/files/Background.avif) no-repeat center center;\r\n   \r\n  background-attachment: fixed;\r\n  background-size: cover; width:cover;\r\n    height: 120vh;\"> \r\n    \r\n    <p class=\"text-cs1 font-weight-bold \" style=\"padding-top: 11%; font-family:Monotype Corsiva; \r\n    padding-left: 30%;font-size: 45px; color: rgb(226, 4, 4);\">{{'Welcome to Online Result System' | translate}}</p></div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/data/data.component.css":
/*!*****************************************!*\
  !*** ./src/app/data/data.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEvZGF0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/data/data.component.html":
/*!******************************************!*\
  !*** ./src/app/data/data.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            DATA' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update DATA' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' importLogCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"importLogCode\" [(ngModel)]=\"form.data.importLogCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  importLogCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.importLogCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' fileName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fileName\" [(ngModel)]=\"form.data.fileName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  fileName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.fileName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n             <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' importedBy' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"importedBy\" [(ngModel)]=\"form.data.importedBy\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  importedBy' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.importedBy}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n              \r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.alertStatus}} </span>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/datalist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/data/data.component.ts":
/*!****************************************!*\
  !*** ./src/app/data/data.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var DataComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DataComponent, _super);
    function DataComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.DATA, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    DataComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.importLogCode = data.importLogCode;
        form.fileName = data.fileName;
        form.importedBy = data.importedBy;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    DataComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    DataComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-data',
            template: __webpack_require__(/*! ./data.component.html */ "./src/app/data/data.component.html"),
            styles: [__webpack_require__(/*! ./data.component.css */ "./src/app/data/data.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], DataComponent);
    return DataComponent;
}(base_component_1.BaseCtl));
exports.DataComponent = DataComponent;


/***/ }),

/***/ "./src/app/data/datalist.component.css":
/*!*********************************************!*\
  !*** ./src/app/data/datalist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEvZGF0YWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/data/datalist.component.html":
/*!**********************************************!*\
  !*** ./src/app/data/datalist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'DATA List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"importLogCode\" [(ngModel)]=\"form.searchParams.importLogCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter importLogCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n<div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"fileName\" [(ngModel)]=\"form.searchParams.fileName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter fileName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/data')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add DATA' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'importLogCode' | translate }}</th>\r\n                <th>{{ 'fileName ' | translate }}</th>\r\n              <th>{{ 'importedBy ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.importLogCode }}</td>\r\n               <td>{{ m.fileName }}</td>\r\n              <td>{{ m.importedBy }}</td>\r\n               <td>{{ m.status }}</td>\r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/data/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/datalist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/datalist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/data/datalist.component.ts":
/*!********************************************!*\
  !*** ./src/app/data/datalist.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var DatalistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DatalistComponent, _super);
    function DatalistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.DATA, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    DatalistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-datalist',
            template: __webpack_require__(/*! ./datalist.component.html */ "./src/app/data/datalist.component.html"),
            styles: [__webpack_require__(/*! ./datalist.component.css */ "./src/app/data/datalist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], DatalistComponent);
    return DatalistComponent;
}(base_list_component_1.BaseListCtl));
exports.DatalistComponent = DatalistComponent;


/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://localhost:8084";
        this.MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.ROLE = this.SERVER_URL + "/Role";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.ALERT = this.SERVER_URL + "/Alert";
        this.ORDER = this.SERVER_URL + "/Order";
        this.POLICY = this.SERVER_URL + "/Policy";
        this.SPONSOR = this.SERVER_URL + "/Sponsor";
        this.PARKING = this.SERVER_URL + "/Parking";
        this.PLAN = this.SERVER_URL + "/Plan";
        this.STATE = this.SERVER_URL + "/State";
        this.HEALTH = this.SERVER_URL + "/Health";
        this.LOCATION = this.SERVER_URL + "/Location";
        this.PAYMENT = this.SERVER_URL + "/Payment";
        this.CREDENTIAL = this.SERVER_URL + "/Credential";
        this.MASKING = this.SERVER_URL + "/Masking";
        this.DATA = this.SERVER_URL + "/Data";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.JASPERREPORT = this.SERVER_URL + "/Jasper";
        this.CUSTOMER = this.SERVER_URL + "/Customer";
    }
    EndpointServiceService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], EndpointServiceService);
    return EndpointServiceService;
}());
exports.EndpointServiceService = EndpointServiceService;


/***/ }),

/***/ "./src/app/faculty/faculty-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Faculty List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate}}\">\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n\r\n        \r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/faculty')\" type=\"button\" class=\"btn btn-success\">{{'Add Faculty' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Gender' | translate}}</th>\r\n                <th>{{'College' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Mobile' | translate}}</th>\r\n                <th>{{'Email' | translate}}</th>\r\n                <th>{{'Qualification' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td>{{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{ m.firstName }} {{m.lastName}} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>{{ m.gender }} </td>\r\n                <td>{{m.collegeName}}</td>\r\n                <td>{{m.courseName}}</td>\r\n                <td>{{m.subjectName}}</td>\r\n                <td>{{ m.phoneNo}}</td>\r\n                <td>{{m.email}}</td>\r\n                <td>{{m.qualification}}</td>\r\n                <td>\r\n                  <a (click)=\"forward( '/faculty/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash  text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/facultylist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var FacultyListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FacultyListComponent, _super);
    function FacultyListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! ./faculty-list.component.html */ "./src/app/faculty/faculty-list.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], FacultyListComponent);
    return FacultyListComponent;
}(base_list_component_1.BaseListCtl));
exports.FacultyListComponent = FacultyListComponent;


/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Faculty'\r\n            | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update\r\n            Faculty' | translate}}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Qualification' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"qualification\" [(ngModel)]=\"form.data.qualification\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Your Qualification' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"form.data.gender\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/facultylist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var FacultyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FacultyComponent, _super);
    function FacultyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    FacultyComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    FacultyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        flag = flag && validator.isNotNullObject(form.qualification);
        console.log(form.qualification);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        console.log(form.phoneNo + "in validateForm----------------------------");
        flag = flag && validator.isNotNullObject(form.courseId);
        console.log(form.courseId);
        flag = flag && validator.isNotNullObject(form.collegeId);
        console.log(form.collegeId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        console.log(form.subjectId);
        return flag;
    };
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        console.log(form.subjectId + 'subject--');
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        console.log(form.courseId + 'course ----');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.qualification = data.qualification;
        form.gender = data.gender;
        form.dob = data.dob;
        form.phoneNo = data.phoneNo;
        console.log("phoneno----------------" + form.phoneNo);
    };
    FacultyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FacultyComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], FacultyComponent);
    return FacultyComponent;
}(base_component_1.BaseCtl));
exports.FacultyComponent = FacultyComponent;


/***/ }),

/***/ "./src/app/file/file.component.css":
/*!*****************************************!*\
  !*** ./src/app/file/file.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n        <h1 class=\"text-primary pt-4\">Upload Image Test Page</h1>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container row pl-4\">\r\n <div class=\"form-group\">\r\n        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n\r\n        <input type=\"button\" class=\"btn btn-success\" (click)=\"onUpload()\" value=\"upload\">\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<hr />\r\n<!--   \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n  \r\n          <div *ngIf=message>{{message}}</div>\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-6\">\r\n\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"image name\" [(ngModel)]=\"imageName\"\r\n  \r\n              name=\"name\" />\r\n  \r\n      </div>\r\n  \r\n      <div class=\"col-md-6\">\r\n  \r\n          <input type=\"button\" (click)=\"getImage()\" value=\"Get Image\">\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n            <div *ngIf=retrievedImage>\r\n  \r\n              <img [src]=\"retrievedImage\">\r\n  \r\n          </div>\r\n  \r\n      </div>\r\n  \r\n  </div> -->"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var FileComponent = /** @class */ (function () {
    function FileComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.fileToUpload = null;
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileComponent.prototype.onUpload = function () {
        var _this = this;
        this.onSubmit(this.fileToUpload).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    FileComponent.prototype.onSubmit = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
    };
    FileComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/file/file.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder, http_1.HttpClient])
    ], FileComponent);
    return FileComponent;
}());
exports.FileComponent = FileComponent;


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    position: fixed;\r\n    \r\n    bottom: 0px;\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIFxyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center \" style=\"background: linear-gradient(to bottom right, #2E4E4D, rgb(83, 98, 105));\">\r\n  <!-- Copyright -->\r\n  <div class=\"text-center pt-2 pb-2 text-light\">\r\n    &copy; {{'COPYRIGHT' | translate}}\r\n    <a class=\"text-light\" href=\"\">{{'NCS PVT.LTD' | translate}}</a>\r\n\r\n  </div>\r\n  <!-- Copyright -->\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/health/health.component.css":
/*!*********************************************!*\
  !*** ./src/app/health/health.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/health/health.component.html":
/*!**********************************************!*\
  !*** ./src/app/health/health.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Health' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Health' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' userName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"userName\" [(ngModel)]=\"form.data.userName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  userName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.userName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' moodLevel' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"moodLevel\" [(ngModel)]=\"form.data.moodLevel\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  moodLevel' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.moodLevel}} </span>\r\n          </div>\r\n\r\n\r\n\r\n              <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' stressScore' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"stressScore\" [(ngModel)]=\"form.data.stressScore\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  stressScore' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.stressScore}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        \r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/healthlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/health/health.component.ts":
/*!********************************************!*\
  !*** ./src/app/health/health.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var HealthComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HealthComponent, _super);
    function HealthComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.HEALTH, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    HealthComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.userName = data.userName;
        form.moodLevel = data.moodLevel;
        form.stressScore = data.stressScore;
        console.log('Populated Form', form);
    };
    HealthComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    HealthComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-health',
            template: __webpack_require__(/*! ./health.component.html */ "./src/app/health/health.component.html"),
            styles: [__webpack_require__(/*! ./health.component.css */ "./src/app/health/health.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], HealthComponent);
    return HealthComponent;
}(base_component_1.BaseCtl));
exports.HealthComponent = HealthComponent;


/***/ }),

/***/ "./src/app/health/heathlist.component.css":
/*!************************************************!*\
  !*** ./src/app/health/heathlist.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC9oZWF0aGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/health/heathlist.component.html":
/*!*************************************************!*\
  !*** ./src/app/health/heathlist.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Health List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"userName\" [(ngModel)]=\"form.searchParams.userName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter userName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n<div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"moodLevel\" [(ngModel)]=\"form.searchParams.moodLevel\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter moodLevel' | translate }}\"> \r\n        </div>\r\n\r\n\r\n \r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/health')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add health' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'userName' | translate }}</th>\r\n                <th>{{ 'moodLevel ' | translate }}</th>\r\n             \r\n                <th>{{ 'stressScore ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.userName }}</td>\r\n               <td>{{ m.moodLevel }}</td>\r\n             \r\n              <td>{{ m.stressScore }}</td>\r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/stress/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/stresslist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/stresslist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/health/heathlist.component.ts":
/*!***********************************************!*\
  !*** ./src/app/health/heathlist.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var HeathlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeathlistComponent, _super);
    function HeathlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.HEALTH, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    HeathlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-heathlist',
            template: __webpack_require__(/*! ./heathlist.component.html */ "./src/app/health/heathlist.component.html"),
            styles: [__webpack_require__(/*! ./heathlist.component.css */ "./src/app/health/heathlist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], HeathlistComponent);
    return HeathlistComponent;
}(base_list_component_1.BaseListCtl));
exports.HeathlistComponent = HeathlistComponent;


/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.msg = '';
        this.token = '';
        this.form = {
            message: '',
            error: false
        };
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: ''
        };
    }
    HttpServiceService.prototype.setToken = function (token) {
        this.token = localStorage.getItem('token');
        //  console.log(this.token + '----> inside setToken');
    };
    HttpServiceService.prototype.getToken = function () {
        console.log(localStorage.getItem('token') + '====>> getToken');
        return localStorage.getItem('token');
    };
    HttpServiceService.prototype.isLogout = function () {
        var JSESSIONID = localStorage.getItem('fname');
        if ((JSESSIONID == "null" || JSESSIONID == null) && (this.router.url != "/login"
            && this.router.url != "/Auth"
            && this.router.url != "/logout"
            && this.router.url != "/forgotpassword"
            && this.router.url != "/signup"
            && this.router.url != "/login/true")) {
            this.form.message = "Your Session has been Expired! Please Re-Login";
            this.form.error = true;
            this.userparams.url = this.router.url; // to navigate the URI request.
            this.router.navigateByUrl("/login");
            console.log("Sushobhit pandey");
            return true;
        }
        else {
            return false;
        }
    };
    HttpServiceService.prototype.get = function (endpoint, callback) {
        var _this = this;
        if (this.isLogout()) {
            console.log('inside isLogout() return true');
            return true;
        }
        return this.httpClient.get(endpoint).subscribe(function (data) {
            console.log('Data :: ' + data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
            if (error && error.error && error.error.message && error.error.message.length > 0) {
                _this.msg = error.error.message[0];
            }
            var customError = {
                status: error.status,
                message: _this.msg
            };
            callback(null, customError);
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback, errorCallback) {
        var _this = this;
        if (this.isLogout()) {
            console.log('inside isLogout return true');
            return;
        }
        return this.httpClient.post(endpoint, bean).subscribe(function (data) {
            console.log(data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
            if (error && error.error && error.error.result && error.error.result.message) {
                _this.msg = error.error.result.message;
            }
            var errorRes = {
                success: false,
                result: {
                    message: _this.msg
                }
            };
            callback(errorRes);
            if (errorCallback) {
                errorCallback(error);
            }
        });
    };
    HttpServiceService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], HttpServiceService);
    return HttpServiceService;
}());
exports.HttpServiceService = HttpServiceService;


/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div id=\"loader\">\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"loading\"></div>\r\n    </div>\r\n\r\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\r\n      {{message}}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;


/***/ }),

/***/ "./src/app/location/location.component.css":
/*!*************************************************!*\
  !*** ./src/app/location/location.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/location/location.component.html":
/*!**************************************************!*\
  !*** ./src/app/location/location.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Location' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Location' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' geoCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"geoCode\" [(ngModel)]=\"form.data.geoCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  geoCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.geoCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' latitude' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"latitude\" [(ngModel)]=\"form.data.latitude\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  latitude' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.latitude}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n            <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' longitude' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"longitude\" [(ngModel)]=\"form.data.longitude\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  longitude' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.longitude}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/locationlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/location/location.component.ts":
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var LocationComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LocationComponent, _super);
    function LocationComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.LOCATION, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    LocationComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.geoCode = data.geoCode;
        form.latitude = data.latitude;
        form.longitude = data.longitude;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    LocationComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    LocationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/location/location.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], LocationComponent);
    return LocationComponent;
}(base_component_1.BaseCtl));
exports.LocationComponent = LocationComponent;


/***/ }),

/***/ "./src/app/location/locationlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/location/locationlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9ubGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/location/locationlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/location/locationlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Location List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"geoCode\" [(ngModel)]=\"form.searchParams.geoCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter geoCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/location')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add location' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'geoCode' | translate }}</th>\r\n                <th>{{ 'latitude ' | translate }}</th>\r\n              <th>{{ 'longitude ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.geoCode }}</td>\r\n               <td>{{ m.latitude }}</td>\r\n              <td>{{ m.longitude  }}</td>\r\n              <td>{{ m.status }}</td>\r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/location/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/locationlist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/locationlist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/location/locationlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/location/locationlist.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var LocationlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(LocationlistComponent, _super);
    function LocationlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.LOCATION, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    LocationlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-locationlist',
            template: __webpack_require__(/*! ./locationlist.component.html */ "./src/app/location/locationlist.component.html"),
            styles: [__webpack_require__(/*! ./locationlist.component.css */ "./src/app/location/locationlist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], LocationlistComponent);
    return LocationlistComponent;
}(base_list_component_1.BaseListCtl));
exports.LocationlistComponent = LocationlistComponent;


/***/ }),

/***/ "./src/app/login/forgotpassword.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpassword.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 10px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n\r\n  <div class=\"col-sm-4\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form #loginForm=\"ngForm\">\r\n\r\n          <div style=\"text-align: center;\">\r\n            <h1 class=\"text-primary\">{{'Forgot Password' | translate}}</h1>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error == false && form.message == 'Password has been sent to email id'\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <span class=\"alertRedColor\">{{inputerror.loginId}}</span>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <button (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Reset My Password' | translate}}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/forgotpassword.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/forgotpassword.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var http_service_service_1 = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var data_validator_1 = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: "",
            loginId: ''
        };
        this.inputerror = {};
        this.message = '';
    }
    ForgotPasswordComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        return flag;
    };
    /**
     * Initialize component
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.get(_self.endpoint + "/fp/" + this.form.loginId, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            console.log(res.result.message + '------>msg');
            if (res.result.message) {
                _self.form.message = res.result.message;
                console.log(_self.form.message + '-------> msg in sucess');
            }
            _self.form.error = !res.success;
            console.log(_self.form.error + '-----------> msg in self.form.error in res');
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
                console.log(_self.inputerror + '-----------> msg in self.form.error');
            }
        });
    };
    ForgotPasswordComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/login/forgotpassword.component.html")
        }),
        tslib_1.__metadata("design:paramtypes", [http_service_service_1.HttpServiceService, data_validator_1.DataValidator, router_1.Router])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtHQUNUOzs7QUFFQTtJQUNDLFlBQVk7R0FDYjs7O0FBRUE7SUFDQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIgeyBcdFx0XHJcbiAgY29udGVudDogXCIqXCI7XHRcdFxyXG4gIGNvbG9yOiByZWQ7XHRcdFxyXG4gICB9XHRcclxuXHJcbiAgIC5zdWNjZXNzQ29sb3J7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgIH1cclxuXHJcbiAgIC5idG4tc3BhY2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar #one></app-navbar>\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n  }\r\n</style>\r\n\r\n\r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n\r\n  }\r\n\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 10px;\r\n\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 8%; padding-bottom: 8%;\r\n   background: url(assets/files/Login3.jpg) no-repeat center center;\r\n   background-attachment: fixed;\r\n   background-size: 225vh;width:auto;\r\n   height: 105vh;\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card input-group-addon grad\">\r\n      <div class=\"card-body\">\r\n        <form>\r\n          <div style=\"text-align: center;\">\r\n            <h1 class=\"text-primary\">{{'Login' | translate}}</h1>\r\n          </div>\r\n          <input type=\"hidden\" name=\"log\r\n          inUrl\" [(ngModel)]=\"form.loginUrl\" class=\"form-control\">\r\n          <div *ngIf=\"form.error && form.message == 'Invalid ID or Password'\"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'Invalid ID or Password' | translate}}\r\n          </div>\r\n\r\n\r\n\r\n          \r\n          <div *ngIf=\"form.error && form.message && form.message != 'Invalid ID or Password'\r\n                  && form.message != 'Your Session has been Expired! Please Re-Login'\"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{ form.message }}\r\n          </div>\r\n\r\n\r\n\r\n          <div *ngIf=\"form.error==false && form.message == 'Logout Successfully'\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{'Log out successfully' | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message == 'Your Session has been Expired! Please Re-Login'\"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id ' | translate}}</b>\r\n              <span class=\"required-field\"></span>\r\n            </span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"inputerror.loginId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'loginId'|\r\n              translate}} </span>\r\n          </div>\r\n          <!-- <span class=\"alertRedColor\">{{inputerror.loginId}}</span>  -->\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Password ' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'password'|\r\n              translate}} </span>\r\n\r\n            <!-- <span class=\"alertRedColor\">{{inputerror.password}}</span> -->\r\n          </div>\r\n          <div class=\"row pt-3 pl-7 pb-3 \" style=\"align-items: center;\">\r\n            <div class=\"pt-2 pl-7\">\r\n              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <button (click)=\"signIn()\" class=\"btn btn-md btn-success\">\r\n                {{'Sign in' | translate}}</button>\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;\r\n            <div class=\"pl-3 pt-2\">\r\n              <a class=\"btn btn-warning role:button\" [routerLink]=\"['/forgotpassword']\">{{'Forgot Password' |\r\n                translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var http_service_service_1 = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var data_validator_1 = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
var ngx_cookie_service_1 = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
var router_2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, dataValidator, router, cookieService, route, serviceLocator) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.serviceLocator = serviceLocator;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: '',
            loginId: '',
            password: '',
            loginUrl: ''
        };
        this.inputerror = {};
        this.message = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: ''
        };
    }
    /**
     * Initialize component
     */
    LoginComponent.prototype.ngOnInit = function () {
        //this.userSessionCheck();
        if (this.httpService.form.error == true) {
            this.form.message = this.httpService.form.message;
            this.form.error = this.httpService.form.error;
        }
        var a = '';
        this.serviceLocator.getPathVariable(this.route, function (params) {
            a = params["userparams"];
            console.log('I GOT ID, its logout', a);
        });
        if (a == 'true') {
            this.form.message = 'Logout Successfully';
        }
    };
    LoginComponent.prototype.userSessionCheck = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            //  this.userList = params.get('userparams');    
            //  this.userparams=JSON.parse(this.route.snapshot.paramMap.get('userparams'));
            _this.userparams = JSON.parse(_this.route.snapshot.queryParamMap.get('userparams'));
            if (_this.userparams != null) {
                _this.form.message = _this.userparams.sessionExpiredMsg;
                _this.form.loginUrl = _this.userparams.url;
                //  console.log('URL-----------------------' + this.userparams.url);
                //  console.log('Message-----------------------' + this.userparams.sessionExpiredMsg);
                //  console.log('Method Type-----------------------' + this.userparams.methodType);
            }
        });
        if (this.form.message != null) {
            this.form.error = true;
        }
    };
    LoginComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        console.log(this.form.loginId);
        flag = flag && this.dataValidator.isNotNull(this.form.password);
        console.log(this.form.password);
        return flag;
    };
    LoginComponent.prototype.signIn = function () {
        var _self = this;
        this.form.error = false;
        var requestedUrl = this.httpService.userparams.url; //to get the URI
        console.log('signIn----', this.form);
        this.httpService.post(this.endpoint + "/login", this.form, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            //_self.form.loginId = res.result.loginId;
            if (_self.dataValidator.isNotNullObject(res.result.message)) {
                _self.form.message = res.result.message;
                console.log('messageeeeeeeeee', res.result.message);
            }
            _self.form.error = !res.success;
            if (_self.dataValidator.isNotNullObject(res.result.inputerror)) {
                _self.inputerror = res.result.inputerror;
            }
            if (_self.dataValidator.isTrue(res.success)) {
                _self.httpService.setToken(res.result.token);
                localStorage.setItem("loginId", res.result.loginId);
                var tokenStr = "Bearer " + res.result.token;
                localStorage.setItem("token", tokenStr);
                localStorage.setItem("role", res.result.role);
                localStorage.setItem("fname", res.result.fname);
                localStorage.setItem("lname", res.result.lname);
                localStorage.setItem("userid", res.result.data.id);
                //   console.log(res.result.data.id + 'sessionId set ----');
                //   console.log(res.result.token + '  Token set ----');
                if (requestedUrl != null && requestedUrl != '') {
                    _self.router.navigateByUrl(requestedUrl);
                }
                else {
                    _self.router.navigateByUrl('dashboard');
                }
            }
        });
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [http_service_service_1.HttpServiceService, data_validator_1.DataValidator, router_1.Router,
            ngx_cookie_service_1.CookieService, router_2.ActivatedRoute, service_locator_service_1.ServiceLocatorService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\" padding-top: 4%;\r\n padding-bottom:0%;background-image: url(../../assets/files/wall.jpg);\r\nbackground-attachment: fixed;\r\nbackground-size: 100%;\r\n  height: 120vh;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <div style=\"text-align: center;\">\r\n            <h3 class=\"text-re text-primary\">\r\n              {{'Sign Up' | translate}}\r\n            </h3>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null && form.message.length>0\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.firstName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name ' | translate}}</b>\r\n              <span class=\"required-field\"></span>\r\n            </span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.lastName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Login id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.login != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'email'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.login}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{password | translate}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.phone != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'phone'|\r\n              translate}} </span>\r\n          </div>\r\n\r\n          <!-- <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.phone}} </span> \r\n          <!-- </div>  -->\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" class=\"form-control\">\r\n              </div>\r\n            </div> <span *ngIf=\"form.inputerror.dob != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'dob'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div> <span *ngIf=\"form.inputerror.gender != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'gender'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"pt-2\">\r\n\r\n\r\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Sign up' | translate}}</button>\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <div class=\"pt-2\">\r\n\r\n              <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/signup']\" (click)=\"exit()\">{{'Reset' | translate}}</a>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var http_service_service_1 = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var data_validator_1 = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceLocator, httpService, dataValidator, router) {
        this.serviceLocator = serviceLocator;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth/signUp";
        this.form = {
            error: false,
            message: '',
            data: { id: null },
            inputerror: {}
        };
    }
    SignUpComponent.prototype.validate = function () {
        return this.validateForm(this.form);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    SignUpComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.gender);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    /**
     * Initialize component
     */
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.exit = function () {
        location.reload();
    };
    SignUpComponent.prototype.reset = function () {
        this.router.navigate(['/signup']);
    };
    SignUpComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.post(this.endpoint, this.form.data, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    SignUpComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, http_service_service_1.HttpServiceService, data_validator_1.DataValidator, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.html":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div  style=\"\r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\npadding-top: 5%;\r\npadding-bottom: 24%;\r\nwidth:100%;\r\n  height: 100;\">\r\n  <form name=\"rollForm\" (ngSubmit)=\"go()\">\r\n    <div align=\"center\">\r\n      <div style=\"font-size: 80px;\">\r\n      <p class=\"font-weight-bold text-primary\">{{'Get Marksheet' | translate }}</p>\r\n    </div>\r\n    </div>\r\n    <div class=\"row pt-4 pb-4\">\r\n      <div class=\"col-sm-4 \"></div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <input type=\"text\" name=\"rollNo\" id=\"rollNo\" class=\"form-control\" [(ngModel)]=\"form.data.rollNo\"\r\n          placeholder=\"{{'Enter Roll Number' | translate }}\">&emsp;</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <button type=\"submit\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n          {{'Search' | translate }}</button>\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/getmarksheet']\"> {{'Reset' | translate}} </a>\r\n        \r\n        &emsp;\r\n\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-3\"></div>\r\n\r\n    </div>\r\n  </form>\r\n  <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n  <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"form.list.rollNo!= null\" >\r\n\r\n    <table width=\"100%\" class=\"table table-bordered table-striped table-hover\" border=\"3px\">\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'RollNO' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.rollNo}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Name' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.name}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Marks' | translate }}</th>\r\n        <th align=\"center\" id=\"po1\">{{'Max Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Min Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Marks Obtain' | translate }}</th>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Subject' | translate }}</th>\r\n        \r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Physics' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.physics}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.physics >35) ? 'green': 'red' }\">{{form.list.physics}}</span>\r\n          \r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Chemistry' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.chemistry}}*</span>  -->\r\n          <span [ngStyle]=\"{'color': (form.list.chemistry >35) ? 'green': 'red' }\">{{form.list.chemistry}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Maths' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.maths}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.maths >35) ? 'green': 'red' }\">{{form.list.maths}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Total' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">{{form.list.maths+form.list.physics+form.list.chemistry}}</td>\r\n      </tr>\r\n      <tr>\r\n\r\n        <th id=\"po1\" colspan=\"2\">{{'Percentage' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">\r\n          {{((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 | number:'2.0-2' }}%\r\n        \r\n          \r\n        \r\n        \r\n        </td>\r\n      </tr>\r\n     <!--  <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Grade' | translate }}</font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"green\"><b>{{'PASS' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n\r\n      <!-- <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>\r\n          <font color=\"red\"><b>F</b></font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"red\"><b>{{'FAIL' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n      <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>         \r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\"  *ngIf=\"((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 > 35; else elseBlock\">\r\n\r\n          <font color=\"green\"><b>{{'Pass' | translate }}</b></font>\r\n        </td>\r\n        <ng-template #elseBlock><td id=\"po1\" align=\"center\" colspan=\"3\" ><font color=\"red\"><b>{{'Fail' | translate }}</b></font></td></ng-template>\r\n      </tr>\r\n\r\n    </table>\r\n    \r\n</div><div style=\"position: relative; clear: both;\">\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_service_service_1 = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var GetmarksheetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GetmarksheetComponent, _super);
    function GetmarksheetComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, rollNo: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    GetmarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    GetmarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.rollNo);
        return flag;
    };
    GetmarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
    };
    GetmarksheetComponent.prototype.go = function () {
        var _self = this;
        console.log("onClickSubmit");
        console.log(this.form.data);
        console.log(this.form.data.rollNo);
        this.httpservice.get("http://localhost:8084/Marksheet/rollno/" + this.form.data.rollNo, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    GetmarksheetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-getmarksheet',
            template: __webpack_require__(/*! ./getmarksheet.component.html */ "./src/app/marksheet/getmarksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_service_service_1.HttpServiceService])
    ], GetmarksheetComponent);
    return GetmarksheetComponent;
}(base_component_1.BaseCtl));
exports.GetmarksheetComponent = GetmarksheetComponent;


/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; \r\nbackground: url(assets/files/teahub.png) no-repeat center center;\r\nbackground-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-6 p-1 text-center\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Marksheet List' | translate}}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row  pt-4 pb-4 \" style=\"margin-left:15%\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name'| translate}}\">\r\n        </div>\r\n      \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Roll No' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.marksheetList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search'| translate}}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'RollNO'| translate}}</th>\r\n                <th>{{'Name'| translate}}</th>\r\n                <th>{{'Physics'| translate}}</th>\r\n                <th>{{'Chemistry'| translate}}</th>\r\n                <th>{{'Maths'| translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <!-- <td> <input type=\"checkbox\" name=\"list_name\" value=\"{{isMasterSel}}\" [(ngModel)]=\"isMasterSel\" (change)=\"isAllSelected()\"/>\r\n                  </td> -->\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\r\n                    value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                \r\n\r\n                <td> {{ m.rollNo }} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.physics }} </td>\r\n                <td> {{ m.chemistry }} </td>\r\n                <td> {{ m.maths }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/marksheet/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n\r\n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n            <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button>\r\n            </td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\r\n              [routerLink]=\"['/marksheetlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n\r\n\r\n\r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                translate }}</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var MarksheetListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MarksheetListComponent, _super);
    function MarksheetListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    MarksheetListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    MarksheetListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8084/Marksheet/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! ./marksheet-list.component.html */ "./src/app/marksheet/marksheet-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(base_list_component_1.BaseListCtl));
exports.MarksheetListComponent = MarksheetListComponent;


/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya3NoZWV0L21hcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0dBQ1Q7OztBQUVBO0lBQ0MsWUFBWTtHQUNiOzs7QUFFQTtJQUNDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxyXG4gIGNvbnRlbnQ6IFwiKlwiO1x0XHRcclxuICBjb2xvcjogcmVkO1x0XHRcclxuICAgfVx0XHJcblxyXG4gICAuc3VjY2Vzc0NvbG9ye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICB9XHJcblxyXG4gICAuYnRuLXNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 6%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Marksheet' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Marksheet' | translate}}</h2>\r\n          \r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Roll No' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"rollNo\" [(ngModel)]=\"form.data.rollNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Roll No' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.rollNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Student' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                \r\n\r\n                <select class=\"form-control\" required name=\"studentId\"\r\n                  [(ngModel)]=\"form.data.studentId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Student' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.studentList\" [value]=\"obj.id\">{{obj.firstName + ' ' +obj.lastName }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.studentId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Physics' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phy\" [(ngModel)]=\"form.data.physics\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Physics Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.physics}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Chemistry' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"chemistry\" [(ngModel)]=\"form.data.chemistry\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Chemistry Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.chemistry}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Maths' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                \r\n                <input type=\"text\" name=\"math\" [(ngModel)]=\"form.data.maths\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Maths Marks'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.maths}} </span>\r\n          </div>\r\n         \r\n         \r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update'| translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'Back'| translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var MarksheetComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MarksheetComponent, _super);
    function MarksheetComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.marksheetForm = null;
        return _this;
    }
    MarksheetComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('Dheeraj');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Dheeraj----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    MarksheetComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MarksheetComponent.prototype.onUpload = function (marksheetform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    MarksheetComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.marksheetForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetComponent.prototype.onSubmitProfile = function (fileToUpload, marksheetform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    MarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    MarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        console.log('Student name :: ' + form.name);
        flag = flag && validator.isNotNullObject(form.rollNo);
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.physics);
        flag = flag && validator.isNotNullObject(form.chemistry);
        flag = flag && validator.isNotNullObject(form.maths);
        return flag;
    };
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.studentId = data.studentId;
        form.rollNo = data.rollNo;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
        form.imageId = data.imageId;
        console.log('Populated Form', form);
    };
    MarksheetComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! ./marksheet.component.html */ "./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], MarksheetComponent);
    return MarksheetComponent;
}(base_component_1.BaseCtl));
exports.MarksheetComponent = MarksheetComponent;


/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  \r\n</style>\r\n<div class=\"content-wrapper\" style=\"padding-top:5%;padding-bottom: 1%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-12 pt-3\"> \r\n          <h3 class=\"text-primary text-center font-weight-bold\">{{'Marksheet Merit List' | translate}}</h3>\r\n        </div>\r\n      </div>\r\n\r\n       <div style=\"margin-left: 87%;\" class=\"pb-2\">\r\n\r\n        <a href=\"http://localhost:8084/Jasper/report\" class=\"btn btn-lg btn-primary \" role=\"button\"  target=\"blank\">\r\n          <span class=\"fa fa-print mr-1\"></span>{{'Print' | translate}}</a>\r\n      </div> \r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold grad\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n              <th >{{'S.No' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'RollNO' | translate}}  </th>\r\n\t\t\t\t\t\t\t<th >{{'Name' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Physics' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Chemistry' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Maths' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Total' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Percentage(%)' | translate}}</th>\r\n\t\t\t\t\t\t</tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let m of form.list; let i = index\" >\r\n\t\t\t\t\t\t\t<td>{{(form.pageNo*5)+i+ 1}} </td>\r\n\t\t\t\t\t\t\t<td >{{m.rollNo}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.name}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.physics}}</td>\r\n              <td> {{m.chemistry}}</td>\r\n              <td> {{m.maths}}</td>\r\n              <td>{{m.physics+m.maths+m.chemistry}}</td>\r\n              <td>{{((m.physics+m.maths+m.chemistry)*100)/300 | number:'2.0-2' }}%</td>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</tr>\r\n          </tbody>\r\n          </table>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer>\r\n  \r\n</app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_service_service_1 = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var MarksheetmeritListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MarksheetmeritListComponent, _super);
    function MarksheetmeritListComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        return _this;
    }
    MarksheetmeritListComponent.prototype.ngOnInit = function () {
        this.getMeritList();
    };
    MarksheetmeritListComponent.prototype.getMeritList = function () {
        var _self = this;
        this.httpservice.get("http://localhost:8084/Marksheet/meritlist", function (res) {
            if (res.success) {
                _self.form.list = res.result.list;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    MarksheetmeritListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-marksheetmerit-list',
            template: __webpack_require__(/*! ./marksheetmerit-list.component.html */ "./src/app/marksheet/marksheetmerit-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_service_service_1.HttpServiceService])
    ], MarksheetmeritListComponent);
    return MarksheetmeritListComponent;
}(base_component_1.BaseCtl));
exports.MarksheetmeritListComponent = MarksheetmeritListComponent;


/***/ }),

/***/ "./src/app/masking/masking.component.css":
/*!***********************************************!*\
  !*** ./src/app/masking/masking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc2tpbmcvbWFza2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/masking/masking.component.html":
/*!************************************************!*\
  !*** ./src/app/masking/masking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            masking' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update masking' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' maskCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"maskCode\" [(ngModel)]=\"form.data.maskCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  maskCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.maskCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' fieldName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fieldName\" [(ngModel)]=\"form.data.fieldName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  fieldName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.fieldName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' maskType' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"maskType\" [(ngModel)]=\"form.data.maskType\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  maskType' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.maskType}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        \r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/maskinglist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/masking/masking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/masking/masking.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var MaskingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MaskingComponent, _super);
    function MaskingComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MASKING, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MaskingComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.maskCode = data.maskCode;
        form.fieldName = data.fieldName;
        form.maskType = data.maskType;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    MaskingComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    MaskingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-masking',
            template: __webpack_require__(/*! ./masking.component.html */ "./src/app/masking/masking.component.html"),
            styles: [__webpack_require__(/*! ./masking.component.css */ "./src/app/masking/masking.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], MaskingComponent);
    return MaskingComponent;
}(base_component_1.BaseCtl));
exports.MaskingComponent = MaskingComponent;


/***/ }),

/***/ "./src/app/masking/maskinglist.component.css":
/*!***************************************************!*\
  !*** ./src/app/masking/maskinglist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc2tpbmcvbWFza2luZ2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/masking/maskinglist.component.html":
/*!****************************************************!*\
  !*** ./src/app/masking/maskinglist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Masking List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"maskCode\" [(ngModel)]=\"form.searchParams.maskCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter maskCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"fieldName\" [(ngModel)]=\"form.searchParams.fieldName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter fieldName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/masking')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add alert' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'maskCode' | translate }}</th>\r\n                <th>{{ 'fieldName ' | translate }}</th>\r\n              <th>{{ 'maskType ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.maskCode }}</td>\r\n               <td>{{ m.fieldName }}</td>\r\n              <td>{{ m.maskType }}</td>\r\n              <td>{{ m.status }}</td>\r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/masking/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/maskinglist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/maskinglist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/masking/maskinglist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/masking/maskinglist.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var MaskinglistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MaskinglistComponent, _super);
    function MaskinglistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MASKING, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MaskinglistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-maskinglist',
            template: __webpack_require__(/*! ./maskinglist.component.html */ "./src/app/masking/maskinglist.component.html"),
            styles: [__webpack_require__(/*! ./maskinglist.component.css */ "./src/app/masking/maskinglist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], MaskinglistComponent);
    return MaskinglistComponent;
}(base_list_component_1.BaseListCtl));
exports.MaskinglistComponent = MaskinglistComponent;


/***/ }),

/***/ "./src/app/message/message-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/message/message-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat, repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-6 p-1\">\r\n          <h4 class=\"text-primary font-weight-bold\">{{'Message List' | translate}}</h4>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subject\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.body\"\r\n            placeholder=\"{{'Search Body' | translate}}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate}}</button></div>\r\n        <div class=\"col=sm-1\">\r\n          <button (click)=\"forward('/message')\" type=\"button\" class=\"btn btn-success\">{{'Add Message'| translate}}\r\n          </button></div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"next()\" class=\"btn btn-info\">{{'Next'| translate}} </button>\r\n        </div>\r\n        <div class=\"col-lg-2\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'Code'| translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Body'| translate}}</th>\r\n                <th>{{'Type'| translate}}</th>\r\n                <th>{{'Status'| translate}}</th>\r\n                <th>#</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.code }} </td>\r\n                <td> {{ m.subject }} </td>\r\n                <td> {{ m.body }} </td>\r\n                <td> {{ m.type }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/message/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var MessageListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MessageListComponent, _super);
    function MessageListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], MessageListComponent);
    return MessageListComponent;
}(base_list_component_1.BaseListCtl));
exports.MessageListComponent = MessageListComponent;


/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Message' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Message' | translate}} </h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Type' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comment grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Type' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Code' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-commenting grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"code\" id=\"code\" [(ngModel)]=\"form.data.code\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option selected=\"true\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"U-FP\">U-FP </option>\r\n                  <option value=\"U-REG\">U-REG </option>\r\n                  <option value=\"U-CP\">U-CP</option>\r\n                </select>\r\n\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.code}}</span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comments grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subject\" [(ngModel)]=\"form.data.subject\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Subject'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Body' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"body\" [(ngModel)]=\"form.data.body\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Body' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.body}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"form.data.status\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Status' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'HTML' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"html\" [(ngModel)]=\"form.data.html\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message HTML' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.html}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/messagelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var MessageComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MessageComponent, _super);
    function MessageComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.type);
        flag = flag && validator.isNotNullObject(form.code);
        flag = flag && validator.isNotNullObject(form.subject);
        flag = flag && validator.isNotNullObject(form.body);
        return flag;
    };
    MessageComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.code = data.code;
        form.type = data.type;
        form.subject = data.subject;
        form.body = data.body;
        form.status = data.status;
        form.html = data.html;
        console.log('Populated Form', form);
    };
    MessageComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], MessageComponent);
    return MessageComponent;
}(base_component_1.BaseCtl));
exports.MessageComponent = MessageComponent;


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n  .custom-select-box {\r\n    border-radius: 5px;\r\n    height: 20%;\r\n    width: 12%;\r\n    border-color: black;\r\n    /* Rounded corners */\r\n  }\r\n\r\n  .prakhar {\r\n    background-image: linear-gradient(220deg, #93868a 0%, #009fc2 120%);\r\n  }\r\n\r\n  .c1 {\r\n    color: rgb(235, 6, 6);\r\n  }\r\n</style>\r\n\r\n<div class=\"header\">\r\n  <nav *ngIf=\"!isLogin()\" class=\"navbar navbar-expand-lg fixed-top prakhar\">\r\n    <div class=\"logo\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n        <!-- <strong class=\"text-white\">Rays</strong> -->\r\n        <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\" />\r\n      </a>\r\n    </div>\r\n    <select #locale (change)=\"changeLocale(locale.value)\" class=\"form-select custom-select-box\">\r\n      <option value=\"en\">\r\n        {{ \"&nbsp;&nbsp;Select Language\" | translate }}\r\n      </option>\r\n      <option value=\"en\" style=\"color: red\">English</option>\r\n      <option value=\"hi\" style=\"color: red\">{{ \"Hindi\" | translate }}</option>\r\n    </select>\r\n\r\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" style=\"font-size: 15px\">\r\n      <ul class=\"navbar-nav ml-auto\" style=\"padding-right: 7.5%\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['myNav']\" id=\"navbarDropdown\" role=\"button\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <font style=\"color: white\">{{ \"Hi,Guest\" | translate }} </font>\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu dropdown-ment-left\" id=\"myNav\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-user\"></i> &nbsp;{{ \" Log In\" | translate\r\n              }}</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/signup']\"><i class=\"fa fa-users\"></i> &nbsp;{{\r\n              \"User Registration\" | translate\r\n              }}</a>\r\n          </div>\r\n        </li>\r\n        <li></li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<nav *ngIf=\"isLogin()\" class=\"navbar navbar-expand-lg fixed-top prakhar\">\r\n  <div class=\"logo\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n      <!-- <strong class=\"text-white\">Rays</strong> -->\r\n      <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\" />\r\n    </a>\r\n  </div>\r\n  <!-- <strong class=\"text-white\">NCS Pvt Ltd</strong> -->\r\n\r\n  <select #locale (change)=\"changeLocale(locale.value)\" class=\"form-select custom-select-box\">\r\n    <option value=\"en\">{{ \"&nbsp;&nbsp;Select Language\" | translate }}</option>\r\n    <option value=\"en\" style=\"color: red\">English</option>\r\n    <option value=\"hi\" style=\"color: red\">{{ \"Hindi\" | translate }}</option>\r\n  </select>\r\n\r\n  <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"nav navbar-nav pl-2\">\r\n\r\n      <!-- =================================== CUSTOMER =========================================== -->\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Customer\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/customer']\"><i class=\"fa fa-university\"></i> &nbsp;\r\n            {{ \"Add Customer\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/customerlist']\"><i class=\"fa fa-building\"></i> &nbsp;\r\n            {{ \"Customer List\" | translate }}\r\n          </a>\r\n        </div>\r\n      \r\n      <!-- =================================== CART ===========================================\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Cart Overview\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/cart']\"><i class=\"fa fa-university\"></i> &nbsp;\r\n            {{ \"Add Cart\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/cartlist']\"><i class=\"fa fa-building\"></i> &nbsp;\r\n            {{ \"Cart List\" | translate }}\r\n          </a>\r\n        </div>\r\n      </li> \r\n\r\n\r\n       =================================== PRODUCT ===========================================\r\n      \r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Product\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/product']\"><i class=\"fa fa-university\"></i> &nbsp;\r\n            {{ \"Add Product\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/productlist']\"><i class=\"fa fa-building\"></i> &nbsp;\r\n            {{ \"Product List\" | translate }}\r\n          </a>\r\n        </div>\r\n      </li> --> \r\n\r\n    <!-- =================================== USER =========================================== -->\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"User\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/user']\"><i class=\"fa fa-user\"></i>&nbsp;&nbsp;{{\r\n            \"Add User\" | translate\r\n            }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/userlist']\"><i class=\"fa fa-list\"></i>&nbsp;{{ \" User List\" |\r\n            translate }}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Marksheet\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheet']\"><i class=\"fa fa-file\"></i> &nbsp;\r\n            {{ \"Add Marksheet\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheetlist']\"><i class=\"fa fa-paste\"></i> &nbsp;\r\n            {{ \"Marksheet List\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheetmeritlist']\"><i class=\"fa fa-list\"></i> &nbsp;\r\n            {{ \"Marksheet Merit List\" | translate }}\r\n          </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/getmarksheet']\"><i class=\"fa fa-copy\"></i> &nbsp;\r\n            {{ \"Get Marksheet\" | translate }}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Role\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/role']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;\r\n            {{ \"Add Role\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/rolelist']\"><i class=\"fa fa-users\"></i> &nbsp; {{ \"Role List\" |\r\n            translate }}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"College\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/college']\"><i class=\"fa fa-university\"></i> &nbsp;\r\n            {{ \"Add College\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/collegelist']\"><i class=\"fa fa-building\"></i> &nbsp;\r\n            {{ \"College List\" | translate }}\r\n          </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Course\" | translate }} </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/course']\"><i class=\"fa fa-book\"></i> &nbsp; {{ \"Add Course\" |\r\n            translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/courselist']\"><i class=\"fa fa-list\"></i> &nbsp; {{ \"Course List\" |\r\n            translate }}\r\n          </a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Student\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/student']\"><i class=\"fa fa-user\"></i> &nbsp;\r\n            {{ \"Add Student\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/studentlist']\"><i class=\"fa fa-users\"></i> &nbsp;\r\n            {{\r\n            \"Student\r\n            List\" | translate\r\n            }}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Faculty\" | translate }} </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/faculty']\"><i class=\"fa fa-users\"></i> &nbsp;\r\n            {{ \"Add Faculty\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/facultylist']\"><i class=\"fa fa-list\"></i> &nbsp;\r\n            {{\r\n            \"Faculty\r\n            List\" | translate\r\n            }}</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"TimeTable\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetable']\"><i class=\"fa fa-clock-o\"></i> &nbsp;\r\n            {{ \"Add TimeTable\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetablelist']\"><i class=\"fa fa-list\"></i> &nbsp;\r\n            {{ \"TimeTable List\" | translate }}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ \"Subject\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/subject']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n            {{ \"Add Subject\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/subjectlist']\">\r\n            <i class=\"fa fa-list\"></i> &nbsp;\r\n            {{\r\n            \"Subject\r\n            List\" | translate\r\n            }}\r\n          </a>\r\n        </div>\r\n      </li>\r\n\r\n\r\n\r\n      <!-- =================================== alert ===========================================\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Alert\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/alert']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add Alert\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/alertlist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"alert list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!-- =================================== order ===========================================\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Order\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/order']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add order\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/orderlist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"order list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li>\r\n -->\r\n\r\n\r\n\r\n\r\n         <!-- =================================== policy ===========================================\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Policy\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/policy']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add policy\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/policylist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"policy list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n           <!-- =================================== sponsor ===========================================\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Sponsor\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/sponsor']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add Sponsor\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/sponsorlist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"Sponsor list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n         <!-- =================================== parking =========================================== -->\r\n<!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Parking\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/parking']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add Parking\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/parkinglist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"Parking list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n\r\n\r\n            <!-- =================================== plan =========================================== -->\r\n<!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Plan\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/plan']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add Plan\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/planlist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"plan list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li>\r\n\r\n -->\r\n\r\n\r\n\r\n\r\n          <!-- =================================== state =========================================== -->\r\n<!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"State\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/state']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add state\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/statelist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"state list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n\r\n         <!-- =================================== health =========================================== -->\r\n<!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Health\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/health']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add health\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/healthlist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"health list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n           <!-- =================================== location =========================================== -->\r\n<!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Location\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/location']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add location\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/locationlist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"location list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n          <!-- =================================== payment =========================================== -->\r\n<!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Payment\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/payment']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add payment\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/paymentlist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"payment list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n          <!-- =================================== credential ===========================================\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Credential\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/credential']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add credential\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/credentiallist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"credential list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li> -->\r\n\r\n\r\n\r\n         <!-- =================================== masking =========================================== -->\r\n<!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Masking\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/masking']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add masking\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/maskinglist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"masking list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li>\r\n -->\r\n\r\n\r\n\r\n <!-- =================================== DATA =========================================== -->\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{\"Data\" | translate }}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/data']\"><i class=\"fa fa-cart\"></i> &nbsp;\r\n            {{ \"add Data\" | translate }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/datalist']\"><i class=\"fa fa-cartlist\"></i> &nbsp;\r\n            {{ \"Data list\" | translate }}\r\n          </a>\r\n        </div>\r\n        </li>\r\n\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\"\r\n          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white\">{{ form.data.fname }} ({{ form.data.role }})\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" (click)=\"forward()\"><i class=\"fa fa-user-md\"></i> &nbsp;{{\r\n            \" My Profile\" | translate\r\n            }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"><i class=\"fa fa-key\"></i> &nbsp;{{\r\n            \"Change Password\" | translate\r\n            }}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"goToLink()\"><i class=\"fa fa-file\"></i> &nbsp;{{ \" Java Doc\"\r\n            | translate }}</a>\r\n\r\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> &nbsp;{{ \" Log Out\" | translate }}</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_service_service_1 = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, route, httpService, myservice, servicelocator) {
        this.translate = translate;
        this.route = route;
        this.httpService = httpService;
        this.myservice = myservice;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            firstName: null,
            data: { id: null, fname: null, lname: null, role: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: []
        };
        console.log('DefaultLang ' + localStorage.getItem("locale"));
        if (localStorage.getItem("locale") != null) {
            translate.setDefaultLang(localStorage.getItem("locale"));
        }
        else {
            translate.setDefaultLang("en");
        }
    }
    NavbarComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(localStorage.getItem("locale"));
        console.log('Locale ' + locale);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        // var _self = this;
        // this.httpService.get("http://localhost:8080/Auth/menu",function (res){
        //   if(res.success){
        //     _self.form.list = res.result.list;
        //   }else{
        //     _self.form.error = false;
        //     _self.form.message = res.result.message;
        //   }
        //   console.log('FORM', _self.form);
        // });
    };
    NavbarComponent.prototype.forward = function () {
        this.userid = localStorage.getItem("userid");
        console.log('UID---' + this.userid);
        this.servicelocator.forward("/user/" + this.userid);
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check != "null" && check != null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.lname = localStorage.getItem("lname");
            this.form.data.loginId = localStorage.getItem("loginId");
            this.form.data.role = localStorage.getItem("role");
            // console.log('fname is ---->>>' + this.form.data.fname);
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.goToLink = function () {
        window.open('assets/doc/index.html', '_blank');
    };
    NavbarComponent.prototype.logout = function () {
        var _self = this;
        console.log('Logout', this.form);
        _self.httpService.get("http://localhost:8084/User/logout", function (res) {
            _self.servicelocator.router.navigateByUrl('/login/true');
            if (res.success) {
                localStorage.clear();
                _self.form.message = res.result.message;
            }
            ;
        });
    };
    NavbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.TranslateService, router_1.ActivatedRoute, http_service_service_1.HttpServiceService, http_1.HttpClient, service_locator_service_1.ServiceLocatorService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Order' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Order' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' orderCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"orderCode\" [(ngModel)]=\"form.data.orderCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  orderCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.orderCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' customerName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"customerName\" [(ngModel)]=\"form.data.customerName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  customerName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.customerName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' totalAmount' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"totalAmount\" [(ngModel)]=\"form.data.totalAmount\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  totalAmount' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.totalAmount}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <!-- <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'alertTime' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"alertTime\" [value]=\"form.data.alertTime | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.alertTime=parseDate($event.target.value)\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Total alertTime' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.alertTime}} </span>\r\n          </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <!-- <input type=\"text\" name=\"attendanceStatus\" [(ngModel)]=\"form.data.attendanceStatus\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter attendanceStatus' | translate}}\">  -->\r\n\r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"incative\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/orderlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var OrderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OrderComponent, _super);
    function OrderComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    OrderComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.orderCode = data.orderCode;
        form.customerName = data.customerName;
        form.totalAmount = data.totalAmount;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    OrderComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    OrderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], OrderComponent);
    return OrderComponent;
}(base_component_1.BaseCtl));
exports.OrderComponent = OrderComponent;


/***/ }),

/***/ "./src/app/order/orderlist.component.css":
/*!***********************************************!*\
  !*** ./src/app/order/orderlist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVybGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/order/orderlist.component.html":
/*!************************************************!*\
  !*** ./src/app/order/orderlist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Order List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"orderCode\" [(ngModel)]=\"form.searchParams.orderCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter orderCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"customerName\" [(ngModel)]=\"form.searchParams.customerName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter customerName' | translate }}\"> \r\n        </div> \r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/order')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add alert' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'orderCode' | translate }}</th>\r\n                <th>{{ 'customerName ' | translate }}</th>\r\n              <th>{{ 'totalAmount ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.orderCode }}</td>\r\n               <td>{{ m.customerName }}</td>\r\n              <td>{{ m.totalAmount }}</td>\r\n              <td>{{ m.status }}</td>\r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/order/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/orderlist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/orderlist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/order/orderlist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/order/orderlist.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var OrderlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(OrderlistComponent, _super);
    function OrderlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    OrderlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-orderlist',
            template: __webpack_require__(/*! ./orderlist.component.html */ "./src/app/order/orderlist.component.html"),
            styles: [__webpack_require__(/*! ./orderlist.component.css */ "./src/app/order/orderlist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], OrderlistComponent);
    return OrderlistComponent;
}(base_list_component_1.BaseListCtl));
exports.OrderlistComponent = OrderlistComponent;


/***/ }),

/***/ "./src/app/parking/parking.component.css":
/*!***********************************************!*\
  !*** ./src/app/parking/parking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmtpbmcvcGFya2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/parking/parking.component.html":
/*!************************************************!*\
  !*** ./src/app/parking/parking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Parking' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Parking' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' location' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"location\" [(ngModel)]=\"form.data.location\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  location' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.location}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' capacity' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"capacity\" [(ngModel)]=\"form.data.capacity\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  capacity' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.capacity}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' fee' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fee\" [(ngModel)]=\"form.data.fee\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  fee' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.fee}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n         \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/alertlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/parking/parking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/parking/parking.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var ParkingComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ParkingComponent, _super);
    function ParkingComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.PARKING, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ParkingComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.location = data.location;
        form.capacity = data.capacity;
        form.fee = data.fee;
        console.log('Populated Form', form);
    };
    ParkingComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ParkingComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-parking',
            template: __webpack_require__(/*! ./parking.component.html */ "./src/app/parking/parking.component.html"),
            styles: [__webpack_require__(/*! ./parking.component.css */ "./src/app/parking/parking.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], ParkingComponent);
    return ParkingComponent;
}(base_component_1.BaseCtl));
exports.ParkingComponent = ParkingComponent;


/***/ }),

/***/ "./src/app/parking/parkinglist.component.css":
/*!***************************************************!*\
  !*** ./src/app/parking/parkinglist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmtpbmcvcGFya2luZ2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/parking/parkinglist.component.html":
/*!****************************************************!*\
  !*** ./src/app/parking/parkinglist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  parkinglist works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/parking/parkinglist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/parking/parkinglist.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var ParkinglistComponent = /** @class */ (function () {
    function ParkinglistComponent() {
    }
    ParkinglistComponent.prototype.ngOnInit = function () {
    };
    ParkinglistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-parkinglist',
            template: __webpack_require__(/*! ./parkinglist.component.html */ "./src/app/parking/parkinglist.component.html"),
            styles: [__webpack_require__(/*! ./parkinglist.component.css */ "./src/app/parking/parkinglist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ParkinglistComponent);
    return ParkinglistComponent;
}());
exports.ParkinglistComponent = ParkinglistComponent;


/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Payment' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Payment' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' methodCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"methodCode\" [(ngModel)]=\"form.data.methodCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  methodCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.methodCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' methodName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"methodName\" [(ngModel)]=\"form.data.methodName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  methodName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.methodName}} </span>\r\n          </div>\r\n\r\n\r\n             <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' provider' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"provider\" [(ngModel)]=\"form.data.provider\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  provider' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.provider}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n               \r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/paymentlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var PaymentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentComponent, _super);
    function PaymentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.PAYMENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    PaymentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.methodCode = data.methodCode;
        form.methodName = data.methodName;
        form.provider = data.provider;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    PaymentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PaymentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], PaymentComponent);
    return PaymentComponent;
}(base_component_1.BaseCtl));
exports.PaymentComponent = PaymentComponent;


/***/ }),

/***/ "./src/app/payment/paymentlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/payment/paymentlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/payment/paymentlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/payment/paymentlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Payment List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"methodCode\" [(ngModel)]=\"form.searchParams.methodCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter methodCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"methodName\" [(ngModel)]=\"form.searchParams.methodName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter methodName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/payment')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add payment' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'methodCode' | translate }}</th>\r\n                <th>{{ 'methodName ' | translate }}</th>\r\n              <th>{{ 'provider ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.methodCode }}</td>\r\n               <td>{{ m.methodName }}</td>\r\n              <td>{{ m.provider }}</td>\r\n               <td>{{ m.status }}</td>\r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/payment/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/paymentlist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/paymentlist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/payment/paymentlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/payment/paymentlist.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var PaymentlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentlistComponent, _super);
    function PaymentlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PAYMENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    PaymentlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-paymentlist',
            template: __webpack_require__(/*! ./paymentlist.component.html */ "./src/app/payment/paymentlist.component.html"),
            styles: [__webpack_require__(/*! ./paymentlist.component.css */ "./src/app/payment/paymentlist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], PaymentlistComponent);
    return PaymentlistComponent;
}(base_list_component_1.BaseListCtl));
exports.PaymentlistComponent = PaymentlistComponent;


/***/ }),

/***/ "./src/app/plan/plan.component.css":
/*!*****************************************!*\
  !*** ./src/app/plan/plan.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW4vcGxhbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/plan/plan.component.html":
/*!******************************************!*\
  !*** ./src/app/plan/plan.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Plan' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Plan' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' planCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"planCode\" [(ngModel)]=\"form.data.planCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  planCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.planCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' planName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"planName\" [(ngModel)]=\"form.data.planName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  planName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.planName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n            <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' price' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"price\" [(ngModel)]=\"form.data.price\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  price' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.price}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n         \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n              \r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"incative\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/planlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/plan/plan.component.ts":
/*!****************************************!*\
  !*** ./src/app/plan/plan.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var PlanComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PlanComponent, _super);
    function PlanComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.PLAN, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    PlanComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.planCode = data.planCode;
        form.planName = data.planName;
        form.price = data.price;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    PlanComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PlanComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-plan',
            template: __webpack_require__(/*! ./plan.component.html */ "./src/app/plan/plan.component.html"),
            styles: [__webpack_require__(/*! ./plan.component.css */ "./src/app/plan/plan.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], PlanComponent);
    return PlanComponent;
}(base_component_1.BaseCtl));
exports.PlanComponent = PlanComponent;


/***/ }),

/***/ "./src/app/plan/planlist.component.css":
/*!*********************************************!*\
  !*** ./src/app/plan/planlist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW4vcGxhbmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/plan/planlist.component.html":
/*!**********************************************!*\
  !*** ./src/app/plan/planlist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Plan List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"planCode\" [(ngModel)]=\"form.searchParams.planCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter planCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n<div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"planName\" [(ngModel)]=\"form.searchParams.planName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter planName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/plan')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add plan' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'planCode' | translate }}</th>\r\n                <th>{{ 'planName ' | translate }}</th>\r\n              <th>{{ 'price ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.planCode }}</td>\r\n               <td>{{ m.planName }}</td>\r\n             \r\n              <td>{{ m.price }}</td>\r\n              <td>{{ m.status }}</td>\r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/plan/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/planlist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/alertlist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/plan/planlist.component.ts":
/*!********************************************!*\
  !*** ./src/app/plan/planlist.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var PlanlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PlanlistComponent, _super);
    function PlanlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PLAN, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    PlanlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-planlist',
            template: __webpack_require__(/*! ./planlist.component.html */ "./src/app/plan/planlist.component.html"),
            styles: [__webpack_require__(/*! ./planlist.component.css */ "./src/app/plan/planlist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], PlanlistComponent);
    return PlanlistComponent;
}(base_list_component_1.BaseListCtl));
exports.PlanlistComponent = PlanlistComponent;


/***/ }),

/***/ "./src/app/policy/policy.component.css":
/*!*********************************************!*\
  !*** ./src/app/policy/policy.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS9wb2xpY3kuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/policy/policy.component.html":
/*!**********************************************!*\
  !*** ./src/app/policy/policy.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Policy' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Policy' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' policyName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"policyName\" [(ngModel)]=\"form.data.policyName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  policyName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.policyName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' amount' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"amount\" [(ngModel)]=\"form.data.amount\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  amount' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.amount}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'startDate' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"startDate\" [value]=\"form.data.startDate | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.startDate=parseDate($event.target.value)\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Total startDate' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.startDate}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/policylist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/policy/policy.component.ts":
/*!********************************************!*\
  !*** ./src/app/policy/policy.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var PolicyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PolicyComponent, _super);
    function PolicyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.POLICY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    PolicyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.policyName = data.policyName;
        form.amount = data.amount;
        form.startDate = data.startDate;
        console.log('Populated Form', form);
    };
    PolicyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PolicyComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-policy',
            template: __webpack_require__(/*! ./policy.component.html */ "./src/app/policy/policy.component.html"),
            styles: [__webpack_require__(/*! ./policy.component.css */ "./src/app/policy/policy.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], PolicyComponent);
    return PolicyComponent;
}(base_component_1.BaseCtl));
exports.PolicyComponent = PolicyComponent;


/***/ }),

/***/ "./src/app/policy/policylist.component.css":
/*!*************************************************!*\
  !*** ./src/app/policy/policylist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS9wb2xpY3lsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/policy/policylist.component.html":
/*!**************************************************!*\
  !*** ./src/app/policy/policylist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Policy List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"policyName\" [(ngModel)]=\"form.searchParams.policyName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter policyName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n<div class=\"col-sm-2\">\r\n          <input type=\"date\" name=\"startDate\" [(ngModel)]=\"form.searchParams.startDate\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter startDate' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/policy')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add policy' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'policyName' | translate }}</th>\r\n                <th>{{ 'amount ' | translate }}</th>\r\n              <th>{{ 'startDate ' | translate }}</th>\r\n               \r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.policyName }}</td>\r\n               <td>{{ m.amount }}</td>\r\n              <td>{{ m.startDate |date:'yyyy-MM-dd' }}</td>\r\n              \r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/policy/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/policylist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/policylist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/policy/policylist.component.ts":
/*!************************************************!*\
  !*** ./src/app/policy/policylist.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var PolicylistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PolicylistComponent, _super);
    function PolicylistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.POLICY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    PolicylistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-policylist',
            template: __webpack_require__(/*! ./policylist.component.html */ "./src/app/policy/policylist.component.html"),
            styles: [__webpack_require__(/*! ./policylist.component.css */ "./src/app/policy/policylist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], PolicylistComponent);
    return PolicylistComponent;
}(base_list_component_1.BaseListCtl));
exports.PolicylistComponent = PolicylistComponent;


/***/ }),

/***/ "./src/app/product/product-list.component.css":
/*!****************************************************!*\
  !*** ./src/app/product/product-list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product/product-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/product/product-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/product/product-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/product-list.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\r\n        rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Role' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Role' |\r\n            translate }}</h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\r\n                {{'List' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var ProductComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ProductComponent, _super);
    function ProductComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ProductComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    ProductComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    ProductComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    ProductComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}(base_component_1.BaseCtl));
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/app/role/role-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/role/role-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15;\r\n background: url(assets/files/back1.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\" style=\"height: 50px;\">\r\n                \r\n                <div class=\"text-center\">\r\n                    <h1 class=\"text-primary font-weight-bold\">{{'Role List' | translate}}</h1>\r\n                  </div>\r\n                </div>\r\n          \r\n                <div class=\"row p-1\">\r\n                  <div class=\"col-sm-1\"></div>\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n                      placeholder=\"{{'Search Name' | translate}}\">\r\n          \r\n                  </div>\r\n                  <!-- <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n                  </div> -->\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n                      placeholder=\"{{'Search Description' | translate}}\">\r\n          \r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2\">\r\n\r\n                    <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n                      <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                      <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                    </select>\r\n                  </div>\r\n          \r\n                  \r\n                 \r\n                  <div class=\"col-sm-1 ml-3\">\r\n                    <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n                      {{'Search' | translate }}</button>\r\n                  </div>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <div class=\"col-lg-2 ml-4\">\r\n                    <button (click)=\"forward('/role')\" type=\"button\" class=\"btn btn-success\">{{'Add Role' | translate}}\r\n                    </button>\r\n                  </div>\r\n          \r\n                  <div class=\"col-sm-1\">\r\n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n                      {{'Delete'| translate}}</button>\r\n                  </div>\r\n                </div>\r\n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n              <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n\r\n          \r\n\r\n            <div class=\"p-1\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped table-hover font-weight-bold text-primary\">\r\n                        <thead class=\"thead-light text-uppercase\">\r\n                            <tr>\r\n                                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                                <th>{{'S.No' | translate }}</th>\r\n                                <th>{{'Name' | translate }}</th>\r\n                                <th>{{'Description' | translate }}</th>\r\n                                <th>{{'Edit' | translate}}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let m of form.list; let i = index\">\r\n                                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                                </td>\r\n                                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                                <td> {{ m.name }} </td>\r\n                                <td> {{ m.description }} </td>\r\n                                <td>\r\n                                    <a (click)=\"forward( '/role/' +  m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-edit text-info\"></i>\r\n                                    </a>\r\n                                    <!-- /\r\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-trash text-danger\"></i>\r\n                                    </a> -->\r\n                                </td>\r\n                                \r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div><table style=\"width: 100%;\">\r\n                    <tr>\r\n                      <td style=\"width: 50%;\">\r\n                  <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                    }} </button></td>\r\n                    <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                    <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\r\n                      <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/rolelist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n        \r\n          \r\n          \r\n                \r\n                    <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                      translate }}</button></td>\r\n                    </tr>\r\n                    </table>\r\n              \r\n                    \r\n               \r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var RoleListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RoleListComponent, _super);
    function RoleListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], RoleListComponent);
    return RoleListComponent;
}(base_list_component_1.BaseListCtl));
exports.RoleListComponent = RoleListComponent;


/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\r\n        rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Role' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Role' |\r\n            translate }}</h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\r\n                {{'List' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var RoleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RoleComponent, _super);
    function RoleComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    RoleComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    RoleComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], RoleComponent);
    return RoleComponent;
}(base_component_1.BaseCtl));
exports.RoleComponent = RoleComponent;


/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var http_service_service_1 = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
var data_validator_1 = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var endpoint_service_service_1 = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");
var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, dv, r, ep) {
        this.hs = hs;
        this.dv = dv;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        this.httpService = hs;
        this.dataValidator = dv;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService = tslib_1.__decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [http_service_service_1.HttpServiceService, data_validator_1.DataValidator, router_1.Router, endpoint_service_service_1.EndpointServiceService])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());
exports.ServiceLocatorService = ServiceLocatorService;


/***/ }),

/***/ "./src/app/sponsor/sponsor.component.css":
/*!***********************************************!*\
  !*** ./src/app/sponsor/sponsor.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3Ivc3BvbnNvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sponsor/sponsor.component.html":
/*!************************************************!*\
  !*** ./src/app/sponsor/sponsor.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            Sponsor' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Sponsor' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' SponsorName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"sponsorName\" [(ngModel)]=\"form.data.sponsorName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  sponsorName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.sponsorName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' Contribution' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"contribution\" [(ngModel)]=\"form.data.contribution\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  contribution' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.contribution}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' ContactPerson' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"contactPerson\" [(ngModel)]=\"form.data.contactPerson\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  contactPerson' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.contactPerson}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/sponsorlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/sponsor/sponsor.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sponsor/sponsor.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var SponsorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SponsorComponent, _super);
    function SponsorComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SPONSOR, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SponsorComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.sponsorName = data.sponsorName;
        form.contribution = data.contribution;
        form.contactPerson = data.contactPerson;
        console.log('Populated Form', form);
    };
    SponsorComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    SponsorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-sponsor',
            template: __webpack_require__(/*! ./sponsor.component.html */ "./src/app/sponsor/sponsor.component.html"),
            styles: [__webpack_require__(/*! ./sponsor.component.css */ "./src/app/sponsor/sponsor.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], SponsorComponent);
    return SponsorComponent;
}(base_component_1.BaseCtl));
exports.SponsorComponent = SponsorComponent;


/***/ }),

/***/ "./src/app/sponsor/sponsorlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/sponsor/sponsorlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3Ivc3BvbnNvcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sponsor/sponsorlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/sponsor/sponsorlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Sponsor List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"sponsorName\" [(ngModel)]=\"form.searchParams.sponsorName\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter sponsorName' | translate }}\"> \r\n        </div>\r\n\r\n\r\n<div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"contactPerson\" [(ngModel)]=\"form.searchParams.contactPerson\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter contactPerson' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/sponsor')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add sponsor' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'sponsorName' | translate }}</th>\r\n                <th>{{ 'contribution ' | translate }}</th>\r\n              <th>{{ 'contactPerson ' | translate }}</th>\r\n               \r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.sponsorName }}</td>\r\n               <td>{{ m.contribution }}</td>\r\n              <td>{{ m.contactPerson}}</td>\r\n              \r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/sponsor/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/sponsorlist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/sponsorlist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/sponsor/sponsorlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sponsor/sponsorlist.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var SponsorlistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SponsorlistComponent, _super);
    function SponsorlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.SPONSOR, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    SponsorlistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-sponsorlist',
            template: __webpack_require__(/*! ./sponsorlist.component.html */ "./src/app/sponsor/sponsorlist.component.html"),
            styles: [__webpack_require__(/*! ./sponsorlist.component.css */ "./src/app/sponsor/sponsorlist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], SponsorlistComponent);
    return SponsorlistComponent;
}(base_list_component_1.BaseListCtl));
exports.SponsorlistComponent = SponsorlistComponent;


/***/ }),

/***/ "./src/app/state/state.component.css":
/*!*******************************************!*\
  !*** ./src/app/state/state.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlL3N0YXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/state/state.component.html":
/*!********************************************!*\
  !*** ./src/app/state/state.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add\r\n            State' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update State' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' stateCode' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"stateCode\" [(ngModel)]=\"form.data.stateCode\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  stateCode' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.stateCode}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n           <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' stateName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"stateName\" [(ngModel)]=\"form.data.stateName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  stateName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.stateName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n   <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{' countryName' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"countryName\" [(ngModel)]=\"form.data.countryName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter  countryName' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.countryName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n         \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n               \r\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n                  <option value=\"active\">{{'active' | translate }} </option>\r\n                  <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n         \r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/statelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/state/state.component.ts":
/*!******************************************!*\
  !*** ./src/app/state/state.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var StateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StateComponent, _super);
    function StateComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STATE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StateComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.stateCode = data.stateCode;
        form.stateName = data.stateName;
        form.countryName = data.countryName;
        form.status = data.status;
        console.log('Populated Form', form);
    };
    StateComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-state',
            template: __webpack_require__(/*! ./state.component.html */ "./src/app/state/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.css */ "./src/app/state/state.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], StateComponent);
    return StateComponent;
}(base_component_1.BaseCtl));
exports.StateComponent = StateComponent;


/***/ }),

/***/ "./src/app/state/statelist.component.css":
/*!***********************************************!*\
  !*** ./src/app/state/statelist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRlL3N0YXRlbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/state/statelist.component.html":
/*!************************************************!*\
  !*** ./src/app/state/statelist.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel-heading {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-inputs {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .form-control,\r\n  .search-inputs .btn {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .content-wrapper {\r\n    background: url('assets/files/teahu.png') no-repeat center center;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    width: auto;\r\n    height: 105vh;\r\n    padding: 20px;\r\n  }\r\n\r\n  .table-responsive {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .search-inputs .col-sm-2,\r\n  .search-inputs .col-sm-1 {\r\n    padding: 0 5px;\r\n  }\r\n\r\n  .alertRedColor {\r\n    color: red;\r\n  }\r\n</style><div class=\"content-wrapper \">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"panel panel-primary\" style=\"padding-top: 10%;\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"text-primary font-weight-bold\">{{ 'State List' | translate }}</h1>\r\n      </div>\r\n\r\n      <div class=\"row search-inputs p-1 justify-content-center g-3\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" name=\"stateCode\" [(ngModel)]=\"form.searchParams.stateCode\" class=\"form-control\"\r\n            placeholder=\"{{ 'Enter stateCode' | translate }}\"> \r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n <div class=\"col-sm-2\">\r\n          <select class=\"form-control\" name=\"status\"  [(ngModel)]=\"form.searchParams.status\" style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'select status ' | translate }}</option>\r\n            <option value=\"active\">{{'active' | translate }} </option>\r\n            <option value=\"inactive\">{{'inactive' | translate }} </option>\r\n            \r\n\r\n          </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary w-100\">{{ 'Search' | translate }}</button>\r\n        </div>\r\n\r\n        <div>\r\n          <button (click)=\"forward('/state')\" type=\"button\" class=\"btn btn-success w-100\">\r\n            {{ 'Add alert' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger w-100\">{{ 'Delete' | translate }}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered table-hover table-dark  \">\r\n          <thead class=\"thead-dark text-uppercase \">\r\n            <tr align=\"center\">\r\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\r\n                  (change)=\"checkUncheckAll($event)\" /></th>\r\n              <th>{{ 'S.No' | translate }}</th>\r\n              <th>{{ 'stateCode' | translate }}</th>\r\n                <th>{{ 'stateName ' | translate }}</th>\r\n              <th>{{ 'countryName ' | translate }}</th>\r\n                <th>{{ 'status ' | translate }}</th>\r\n              \r\n              <th>{{ 'Edit' | translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\r\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\r\n              <td>{{ m.stateCode }}</td>\r\n               <td>{{ m.stateName }}</td>\r\n              \r\n               <td>{{ m.countryName }}</td>\r\n              \r\n              <td>{{ m.status }}</td>\r\n              \r\n              \r\n              <td>\r\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/state/' + m.id)\">\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"d-flex justify-content-between mt-3\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' | translate\r\n            }}</button>\r\n\r\n          <div>\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/statelist']\" (click)=\"exit()\">\r\n              {{ 'Reset' | translate }}\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.list.length == 0\">\r\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/statelist']\" (click)=\"exit()\">\r\n              {{ 'Back' | translate }}\r\n            </a>\r\n          </div>\r\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/state/statelist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/state/statelist.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var StatelistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StatelistComponent, _super);
    function StatelistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.STATE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    StatelistComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-statelist',
            template: __webpack_require__(/*! ./statelist.component.html */ "./src/app/state/statelist.component.html"),
            styles: [__webpack_require__(/*! ./statelist.component.css */ "./src/app/state/statelist.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], StatelistComponent);
    return StatelistComponent;
}(base_list_component_1.BaseListCtl));
exports.StatelistComponent = StatelistComponent;


/***/ }),

/***/ "./src/app/student/student-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/student/student-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n\r\n        <div class=\"text-center\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'Student List' | translate }}</h2>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.enrolNo\"\r\n            placeholder=\"{{'Search Enrollment' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.email\"\r\n            placeholder=\"{{'Search Email' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\"\r\n            placeholder=\"{{'Search Mobile Number' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-lg-2\">\r\n          <button (click)=\"forward('/student')\" type=\"button\" class=\"btn btn-success\">{{'Add Student' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate }}</th>\r\n                <th>{{'Enrollment No' | translate }}</th>\r\n                <th>{{'First Name' | translate }}</th>\r\n                <th>{{'Last Name' | translate }}</th>\r\n                <th>{{'College' | translate }}</th>\r\n                <th>{{'DOB' | translate }}</th>\r\n                <th>{{'Mobile' | translate }}</th>\r\n                <th>{{'Email' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{m.enrolNo}}</td>\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.collegeName }} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}}</td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.email }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/student/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n              <tr> <td style=\"width: 50%;\"><button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' |\r\n                    translate }} </button>\r\n                </td>  \r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/studentlist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n                <td>\r\n                  <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">{{'Next' | translate }} </button>\r\n                 </td>\r\n                </tr>\r\n              </table>\r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var StudentListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StudentListComponent, _super);
    function StudentListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StudentListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], StudentListComponent);
    return StudentListComponent;
}(base_list_component_1.BaseListCtl));
exports.StudentListComponent = StudentListComponent;


/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; \r\npadding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Student' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Student' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Enrollment No' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"enrolNo\" [(ngModel)]=\"form.data.enrolNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Enrollment Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.enrolNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstN\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastN\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select College' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.collegeId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"  ><b>{{'Mobile No' | translate }} </b>\r\n              <span class=\"required-field\" ></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" maxlength=\"10\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/studentlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var StudentComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StudentComponent, _super);
    function StudentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    StudentComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.enrolNo);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        flag = flag && validator.isNotNullObject(form.email);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.collegeId = data.collegeId;
        console.log(form.collegeId + " inside populateForm method");
        form.email = data.email;
        form.enrolNo = data.enrolNo;
        form.dob = data.dob;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.phoneNo = data.phoneNo;
    };
    StudentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StudentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], StudentComponent);
    return StudentComponent;
}(base_component_1.BaseCtl));
exports.StudentComponent = StudentComponent;


/***/ }),

/***/ "./src/app/subject/subject-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Subject List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/subject')\" type=\"button\" class=\"btn btn-success\">{{'Add Subject' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n               \r\n                <th>{{'Description' | translate}}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.subjectName}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n               \r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/subject/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/subjectlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n                \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var SubjectListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SubjectListComponent, _super);
    function SubjectListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/subject/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], SubjectListComponent);
    return SubjectListComponent;
}(base_list_component_1.BaseListCtl));
exports.SubjectListComponent = SubjectListComponent;


/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:13%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Subject' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Subject' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subjectName\" [(ngModel)]=\"form.data.subjectName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Subject Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"form.data.description\"\r\n                  placeholder=\"{{'Enter Description' | translate}}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/subjectlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var SubjectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SubjectComponent, _super);
    function SubjectComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    SubjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.subjectName);
        flag = flag && validator.isNotNullObject(form.description);
        flag = flag && validator.isNotNullObject(form.courseId);
        return flag;
    };
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectName = data.subjectName;
        form.description = data.description;
        form.courseId = data.courseId;
        console.log('Populated Form', form);
    };
    SubjectComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], SubjectComponent);
    return SubjectComponent;
}(base_component_1.BaseCtl));
exports.SubjectComponent = SubjectComponent;


/***/ }),

/***/ "./src/app/timetable/timetable-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'TimeTable List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/timetable')\" type=\"button\" class=\"btn btn-success\">{{'Add TimeTable' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Semester' | translate }}</th>\r\n                <th>{{'ExamDate' | translate }}</th>\r\n                <th>{{'ExamTime' | translate }}</th>\r\n                <th>{{'Course' | translate }}</th>\r\n                <th>{{'Subject' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              \r\n              <tr *ngFor=\"let m of form.list; let i = index;\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.semester }} </td>\r\n                <td> {{ m.examDate | date : 'dd-MM-yyyy' }} </td>\r\n                <td> {{ m.examTime }} </td>\r\n                <td> {{ m.courseName }} </td>\r\n                <td> {{ m.subjectName }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/timetable/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                      <i class=\"fa fa-trash text-danger\"></i>\r\n                    </a>\r\n                  </td> -->\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/timetablelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n              \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var TimetableListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TimetableListComponent, _super);
    function TimetableListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        var ppSize = 0;
        return _this;
    }
    TimetableListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! ./timetable-list.component.html */ "./src/app/timetable/timetable-list.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], TimetableListComponent);
    return TimetableListComponent;
}(base_list_component_1.BaseListCtl));
exports.TimetableListComponent = TimetableListComponent;


/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.html":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add TimeTable' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update TimeTable' | translate }}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Course' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          \r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-globe grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Subject' | translate }}</option>\r\n            \r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Semester' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"semester\" [(ngModel)]=\"form.data.semester\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\"> {{'Please select' | translate}} </option>\r\n                  <option value=\"1 Semester\">1 Semester</option>\r\n                  <option value=\"2 Semester\">2 Semester</option>\r\n                  <option value=\"3 Semester\">3 Semester</option>\r\n                  <option value=\"4 Semester\">4 Semester</option>\r\n                  <option value=\"5 Semester\">5 Semester</option>\r\n                  <option value=\"6 Semester\">6 Semester</option>\r\n                  <option value=\"7 Semester\">7 Semester</option>\r\n                  <option value=\"8 Semester\">8 Semester</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.semester}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Date' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"examDate\" [value]=\"form.data.examDate | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.examDate=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examDate}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Time' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"examTime\" [(ngModel)]=\"form.data.examTime\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select examTime' | translate }}</option>\r\n            \r\n                  <option selected disabled>{{'Please select' | translate }}</option>\r\n                  <option value=\"08:00 AM to 11:00 AM\">08:00 AM to 11:00 AM</option>\r\n                  <option value=\"12:00PM to 3:00PM\">12:00PM to 3:00PM</option>\r\n                  <option value=\"3:00PM to 6:00PM\">3:00PM to 6:00PM</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examTime}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\"  (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button  *ngIf=\"form.data.id>0\"  (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n              {{'Update' | translate }}</button>\r\n            </div>\r\n           \r\n           \r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/timetablelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var TimetableComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TimetableComponent, _super);
    function TimetableComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    TimetableComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.semester);
        flag = flag && validator.isNotNullObject(form.examDate);
        console.log(form.examDate);
        flag = flag && validator.isNotNullObject(form.examTime);
        flag = flag && validator.isNotNullObject(form.courseId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.semester = data.semester;
        form.examDate = data.examDate;
        form.examTime = data.examTime;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    TimetableComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TimetableComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-timetable',
            template: __webpack_require__(/*! ./timetable.component.html */ "./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute])
    ], TimetableComponent);
    return TimetableComponent;
}(base_component_1.BaseCtl));
exports.TimetableComponent = TimetableComponent;


/***/ }),

/***/ "./src/app/user/changepassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/changepassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n.grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  </style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom: 5%;\r\n background: url(assets/files/wall.jpg);\r\n  background-attachment: fixed;\r\n  background-size: cover; width:auto;\r\n    height: auto;\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2  class=\"text-primary font-weight-bold\">{{'Change Password' | translate }}</h2>\r\n    \r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Old Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"form.data.oldPassword\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Old Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n        \r\n        <div style=\"padding-top:3%\">\r\n            <span><b>{{'New Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock-alt grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"form.data.newPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Enter New Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>Confirm Password</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Confirm Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.confirmPassword}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button   (click)=\"changePassword()\" class=\"btn btn-success mr-2\">\r\n               {{'Update' | translate}} </button>\r\n            </div>\r\n            <input type=\"hidden\" name=\"loginId\" [(ngModel)]=\"form.data.confirmPassword\">\r\n            \r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/changepassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/changepassword.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var http_service_service_1 = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var ChangepasswordComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ChangepasswordComponent, _super);
    function ChangepasswordComponent(locator, route, httpService) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpService = httpService;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ChangepasswordComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.oldPassword);
        flag = flag && validator.isNotNullObject(form.newPassword);
        flag = flag && validator.isNotNullObject(form.confirmPassword);
        return flag;
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _self = this;
        this.form.data.loginId = localStorage.getItem("loginId");
        this.httpService.post("http://localhost:8084/User/changepassword", this.form.data, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.form.message = res.result.message;
            }
        });
    };
    ChangepasswordComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/user/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_service_service_1.HttpServiceService])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}(base_component_1.BaseCtl));
exports.ChangepasswordComponent = ChangepasswordComponent;


/***/ }),

/***/ "./src/app/user/myprofile.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/myprofile.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; \r\nbackground: url(assets/files/edc.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form name=\"myProfile\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'My Profile'  | translate }}</h2>\r\n         \r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          \r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.password}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\r\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Image'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\r\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\" readonly>\r\n\r\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            \r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/myprofile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/myprofile.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var MyprofileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MyprofileComponent, _super);
    function MyprofileComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/user/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], MyprofileComponent);
    return MyprofileComponent;
}(base_component_1.BaseCtl));
exports.MyprofileComponent = MyprofileComponent;


/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    border: none;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\" style=\" padding-top: 7%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 119vh;\">\r\n  <div class=\"container-fluid padding-bottom: 20px;\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-5\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'User List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.firstName\"\r\n            placeholder=\"{{'Search First Name' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dob\"\r\n            placeholder=\"{{'Search dob' | translate}}\">\r\n\r\n        </div> -->\r\n\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered  table-hover font-weight-bold \">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Image' | translate}}</th>\r\n                <th>{{'First Name' | translate}}</th>\r\n                <th>{{'Last Name' | translate}}</th>\r\n                <th>{{'Login' | translate}}</th>\r\n                <th>{{'Status' | translate}}</th>\r\n                <th>{{'Role' | translate}}</th>\r\n                <th>{{'Phone' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" [disabled]=\"m.roleName=='Admin'\"\r\n                    name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n\r\n\r\n                <td>\r\n                  <div *ngIf=\"m.imageId\" >\r\n                    <img src=\"http://localhost:8084/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\" style=\"border-radius: 50%;\">\r\n                  </div>\r\n                  <div *ngIf=\"!m.imageId\" >\r\n                    <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\" style=\"border-radius: 50%;\">\r\n                  </div>\r\n                </td>\r\n\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.loginId }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td> {{ m.roleName }} </td>\r\n                <td> {{ m.phone }} </td>\r\n                <td> {{ m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>\r\n\r\n                  <button class=\"fa fa-edit text-primary \" id=\"nnn\" [disabled]=\"m.roleName=='Admin'\"\r\n                    (click)=\"forward( '/user/' +  m.id)\" style=\"\r\n                  cursor: pointer;\"></button>\r\n                  <!-- <a (click)=\"forward( '/user/' +  m.id)\" style=\"\r\n                    cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-primary\"></i>\r\n                  </a> -->\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger \"></i>\r\n                  </a> -->\r\n\r\n                </td>\r\n              </tr>\r\n\r\n\r\n\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n          <table style=\"width: 100%;\" class=\"padding-bottom:30px\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' |\r\n                  translate\r\n                  }} </button>\r\n              </td>\r\n\r\n              <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n              <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\r\n                  [routerLink]=\"['/userlist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n\r\n              <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n            </tr>\r\n          </table>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_list_component_1 = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var UserListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UserListComponent, _super);
    function UserListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    UserListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/User/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], UserListComponent);
    return UserListComponent;
}(base_list_component_1.BaseListCtl));
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.file-btn{\r\n    border: black;\r\n}\r\n\r\n\r\n.third {\r\n    border-color: #b300b3;\r\n    color: #695d29;\r\n    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\r\n    transition: all 150ms ease-in-out;\r\n  }\r\n\r\n\r\n.third:hover {\r\n    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\r\n  }\r\n\r\n\r\n.filebtn {\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    background-color: transparent;\r\n    border: 2px solid #e74c3c;\r\n    border-radius: 0.6em;\r\n    color: #e74c3c;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    margin: 20px;\r\n    padding: 1.2em 2.8em;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n  }\r\n\r\n\r\n.filebtn:hover, .filebtn:focus {\r\n    color: #ffffff;\r\n    outline: 0;\r\n  }\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3REFBd0Q7SUFFeEQsaUNBQWlDO0VBQ25DOzs7QUFDQTtJQUNFLDBEQUEwRDtFQUM1RDs7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO09BQ3JCLHFCQUFxQjtZQUNoQixnQkFBZ0I7SUFDeEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFJZixhQUFhO0lBR0wsa0JBQWtCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGdCQUFnQjtFQUNsQjs7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZmlsZS1idG57XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG59XHJcblxyXG4udGhpcmQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjMwMGIzO1xyXG4gICAgY29sb3I6ICM2OTVkMjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICMzNDk4ZGIgaW5zZXQsIDAgMCAwIDAgIzM0OThkYjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudGhpcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjMzQ5OGRiIGluc2V0LCAwIDAgMTBweCA0cHggIzM0OThkYjtcclxuICB9XHJcbiAgLmZpbGVidG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMS4yZW0gMi44ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5maWxlYnRuOmhvdmVyLCAuZmlsZWJ0bjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n\r\n  }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 6%; padding-bottom:5%;\r\n\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:100%;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad \">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add User' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update User' |\r\n            translate }}</h2>\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Role Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n\r\n\r\n                <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.roleId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'role'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.roleId}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.firstName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.lastName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'login Id' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                [readonly]=\"form.data.id > 0\" placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.loginId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'email'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.loginId}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Password' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.password}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Mobile' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.phone != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'phone'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" maxlength=\"10\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.alternateMobile != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'mobile'| translate}} </span></div>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.alternateMobile}} </span> -->\r\n\r\n\r\n            <div>\r\n         \r\n             <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n<span *ngIf=\"form.inputerror.dob != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'dob'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option value=\"Male\">{{'Male' | translate }} </option>\r\n                  <option value=\"Female\">{{'Female' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.gender != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'gender'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Image' | translate }}</b>\r\n              <!-- <option [ngValue]=\"\" value=\"undefined\"></option> -->\r\n              <span *ngIf=\"!form.data.imageId\" class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div *ngIf=\"form.data.imageId\">\r\n                <img src=\"http://localhost:8084/User/profilePic/{{form.data.id}}\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n              <div *ngIf=\"!form.data.imageId\">\r\n                <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\r\n                  accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bell grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\r\n                  <option value=\"Active\">{{'Active' | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'status'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.status}} </span> -->\r\n          </div>\r\n          <div class=\"row pt-2 pl-2 pb-3\">\r\n\r\n            <div class=\"col-md-3\"></div>\r\n\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"col-md-1\"></div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/userlist']\"\r\n                  style=\"text-decoration: none; color: white;\">{{'List' | translate }}</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var base_component_1 = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
var service_locator_service_1 = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var UserComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UserComponent, _super);
    function UserComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('rahul');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            _self.myFile();
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    UserComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.roleId);
        console.log(form.roleId);
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        console.log(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        console.log(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        flag = flag && validator.isNotNullObject(form.alternateMobile);
        console.log(form.alternateMobile);
        flag = flag && validator.isNotNullObject(form.dob);
        console.log(form.dob);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender + 'gender--');
        flag = flag && validator.isNotNullObject(form.status);
        console.log(form.status + 'status---');
        return flag;
    };
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in usercomponent');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.loginId = data.loginId;
        form.password = data.password;
        form.gender = data.gender;
        console.log(form.gender + 'gender--');
        form.alternateMobile = data.alternateMobile;
        form.phone = data.phone;
        console.log(form.phone);
        form.dob = data.dob;
        form.roleId = data.roleId;
        form.status = data.status;
        form.imageId = data.imageId;
        console.log(form.status + 'status---');
    };
    UserComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UserComponent.prototype.test = function () {
    };
    UserComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib_1.__metadata("design:paramtypes", [service_locator_service_1.ServiceLocatorService, router_1.ActivatedRoute, http_1.HttpClient])
    ], UserComponent);
    return UserComponent;
}(base_component_1.BaseCtl));
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());
exports.DataValidator = DataValidator;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
exports.__esModule = true;
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects-Workspace\Project-10\ORSProject10-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map