"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const client_1 = require("@prisma/client");
const connection = new client_1.PrismaClient({
    log: ["error", "info", "query", "warn"],
});
exports.default = connection;
