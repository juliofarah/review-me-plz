import superjson from "superjson";
export declare const publicProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            db: import(".prisma/client").PrismaClient<{
                log: ("info" | "query" | "warn" | "error")[];
            }, never, false>;
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof superjson;
    }>;
    _ctx_out: {
        db: import(".prisma/client").PrismaClient<{
            log: ("info" | "query" | "warn" | "error")[];
        }, never, false>;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
    _meta: object;
}>;
export declare const router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        db: import(".prisma/client").PrismaClient<{
            log: ("info" | "query" | "warn" | "error")[];
        }, never, false>;
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: typeof superjson;
}>, TProcRouterRecord>;
//# sourceMappingURL=trpc.d.ts.map