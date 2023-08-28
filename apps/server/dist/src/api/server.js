"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const routers_1 = require("./routers");
const trpc_1 = require("./trpc");
exports.appRouter = (0, trpc_1.router)({
    example: routers_1.exampleRouter,
});
