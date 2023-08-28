"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const prisma_1 = __importDefault(require("../clients/prisma"));
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
// created for each request
const createContext = async ({ req }) => {
    return {
        db: prisma_1.default,
    };
};
exports.createContext = createContext;
