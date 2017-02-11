"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var moment = require("moment");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var LoggerConfig = (function () {
    function LoggerConfig() {
    }
    return LoggerConfig;
}());
exports.LoggerConfig = LoggerConfig;
var Levels;
(function (Levels) {
    Levels[Levels["TRACE"] = 0] = "TRACE";
    Levels[Levels["DEBUG"] = 1] = "DEBUG";
    Levels[Levels["INFO"] = 2] = "INFO";
    Levels[Levels["LOG"] = 3] = "LOG";
    Levels[Levels["WARN"] = 4] = "WARN";
    Levels[Levels["ERROR"] = 5] = "ERROR";
})(Levels || (Levels = {}));
var NG2Logger = (function () {
    function NG2Logger(http, options) {
        this.http = http;
        this.options = options;
    }
    NG2Logger.prototype._logOnServer = function (level, message) {
        var _this = this;
        if (!this.options.serverLoggingUrl)
            return;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.options.serverLoggingUrl, { level: level, message: message }, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error; })
            .subscribe(function (res) { return null; }, function (error) { return _this._log('ERROR', 'FAILED TO LOG ON SERVER', false); });
    };
    NG2Logger.prototype._log = function (level, message, logOnServer) {
        if (!message)
            return;
        var color1;
        switch (level) {
            case 'TRACE':
                color1 = 'blue';
                break;
            case 'DEBUG':
                color1 = 'teal';
                break;
            case 'INFO':
            case 'LOG':
                color1 = 'gray';
                break;
            case 'WARN':
            case 'ERROR':
                color1 = 'red';
                break;
        }
        //if the log level is greater than the environ
        if (Levels[level] >= Levels[this.options.level]) {
            console.log("%c" + moment.utc().format() + " [" + level + "] %c" + message, "color:" + color1, 'color:black');
            if (logOnServer) {
                this._logOnServer(level, message);
            }
        }
    };
    NG2Logger.prototype.trace = function (message) {
        this._log('TRACE', message, true);
    };
    NG2Logger.prototype.debug = function (message) {
        this._log('DEBUG', message, true);
    };
    NG2Logger.prototype.info = function (message) {
        this._log('INFO', message, true);
    };
    NG2Logger.prototype.log = function (message) {
        this._log('LOG', message, true);
    };
    NG2Logger.prototype.warn = function (message) {
        this._log('WARN', message, true);
    };
    NG2Logger.prototype.error = function (message) {
        this._log('ERROR', message, true);
    };
    return NG2Logger;
}());
NG2Logger = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()),
    __metadata("design:paramtypes", [http_1.Http, LoggerConfig])
], NG2Logger);
exports.NG2Logger = NG2Logger;
//# sourceMappingURL=logger.service.js.map