"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.publicProcedure = void 0;
const server_1 = require("@trpc/server");
const superjson_1 = __importDefault(require("superjson"));
const t = server_1.initTRPC.context().create({
    transformer: superjson_1.default,
    // Formats error for client.
    errorFormatter({ error, shape }) {
        if (process.env.NODE_ENV !== "development" &&
            error.code === "INTERNAL_SERVER_ERROR") {
            return {
                ...shape,
                message: "Internal server error",
            };
        }
        return shape;
    },
});
exports.publicProcedure = t.procedure;
exports.router = t.router;
