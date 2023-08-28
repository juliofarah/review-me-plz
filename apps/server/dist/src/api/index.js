"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const serialize_error_1 = require("serialize-error");
const trpcExpress = __importStar(require("@trpc/server/adapters/express"));
const __1 = require("..");
const middleware_1 = require("../middleware");
async function main() {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    // register express routes
    app.get("/health", (_, res) => {
        res.send("OK");
    });
    app.use("/api", (0, cors_1.default)(), trpcExpress.createExpressMiddleware({
        router: __1.router,
        createContext: __1.createAppContext,
        onError: (opts) => {
            const { error, type, path, input, ctx } = opts;
            if (error.code === "INTERNAL_SERVER_ERROR") {
                // Log internal server errors.
                console.error(JSON.stringify({
                    scope: "TRPC API",
                    type,
                    path,
                    input,
                    ...(0, serialize_error_1.serializeError)(error),
                }));
            }
        },
    }));
    app.use(middleware_1.errorHandling);
    const port = process.env.PORT || 4000;
    httpServer.listen({ port }, () => {
        console.log(`🔥 API Server ready at http://localhost:4000/api`);
    });
    process.on("SIGINT", () => {
        if (httpServer.listening) {
            console.info("SIGINT signal received.");
            console.log("Closing http server.");
            httpServer.close(() => {
                console.log("Http server closed.");
            });
        }
    });
}
main();
