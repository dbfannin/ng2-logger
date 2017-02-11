/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require("@angular/core/testing");
var logger_service_1 = require("./logger.service");
describe('NG2Logger', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [logger_service_1.NG2Logger]
        });
    });
    it('should ...', testing_1.inject([logger_service_1.NG2Logger], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=logger.service.spec.js.map