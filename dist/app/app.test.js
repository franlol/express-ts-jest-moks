"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
describe('Express Server', function () {
    var server;
    it('Should run the server', function () {
        server = app_1.default.listen(process.env.TEST_APP_PORT, function () {
            expect(true).toBe(true);
        });
    });
    it('Should close the server', function () {
        server.close(function () {
            expect(true).toBe(true);
        });
    });
});
