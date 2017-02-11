"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var logger_service_1 = require("./logger.service");
var LoggerModule = LoggerModule_1 = (function () {
    function LoggerModule() {
    }
    LoggerModule.forRoot = function (config) {
        return {
            ngModule: LoggerModule_1,
            providers: [
                { provide: logger_service_1.LoggerConfig, useValue: config },
            ]
        };
    };
    return LoggerModule;
}());
LoggerModule = LoggerModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
        ],
        providers: [logger_service_1.NG2Logger],
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;
var LoggerModule_1;
//# sourceMappingURL=logger.module.js.map