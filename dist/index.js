"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = require("dotenv");
var app_1 = __importDefault(require("./app/app"));
var app_types_1 = require("./app/app.types");
dotenv_1.config();
app_1.default.use(morgan_1.default('dev'));
app_1.default.listen(process.env.APP_PORT, function () {
    console.log(app_types_1.APP.ON_LIVE + " " + process.env.APP_PORT);
});
