export declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        db: import(".prisma/client").PrismaClient<{
            log: ("info" | "query" | "warn" | "error")[];
        }, never, false>;
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: typeof import("superjson").default;
}>, {
    example: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: {
            db: import(".prisma/client").PrismaClient<{
                log: ("info" | "query" | "warn" | "error")[];
            }, never, false>;
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: typeof import("superjson").default;
    }>, {
        list: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: import(".prisma/client").PrismaClient<{
                        log: ("info" | "query" | "warn" | "error")[];
                    }, never, false>;
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: typeof import("superjson").default;
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
        }, import(".prisma/client").Example[]>;
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: {
                    db: import(".prisma/client").PrismaClient<{
                        log: ("info" | "query" | "warn" | "error")[];
                    }, never, false>;
                };
                meta: object;
                errorShape: import("@trpc/server").DefaultErrorShape;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                db: import(".prisma/client").PrismaClient<{
                    log: ("info" | "query" | "warn" | "error")[];
                }, never, false>;
            };
            _input_in: {
                name: string;
            };
            _input_out: {
                name: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import(".prisma/client").Example>;
    }>;
}>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=server.d.ts.map