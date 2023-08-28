"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleRouter = void 0;
const zod_1 = require("zod");
const trpc_1 = require("../trpc");
exports.exampleRouter = (0, trpc_1.router)({
    list: trpc_1.publicProcedure.query(async (opts) => {
        const response = opts.ctx.db.example.findMany();
        return response;
    }),
    create: trpc_1.publicProcedure.input(zod_1.z.object({ name: zod_1.z.string() })).mutation(async (opts) => {
        const response = opts.ctx.db.example.create({
            data: {
                name: opts.input.name
            }
        });
        return response;
    })
});
