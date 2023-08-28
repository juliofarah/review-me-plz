"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
const serialize_error_1 = require("serialize-error");
function errorHandling(error, req, res, next) {
    console.error(JSON.stringify((0, serialize_error_1.serializeError)(error)));
    res.sendStatus(500);
}
exports.errorHandling = errorHandling;
