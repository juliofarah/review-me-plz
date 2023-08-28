import { inferAsyncReturnType } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export declare const createContext: ({ req }: CreateExpressContextOptions) => Promise<{
    db: import(".prisma/client").PrismaClient<{
        log: ("info" | "query" | "warn" | "error")[];
    }, never, false>;
}>;
export type Context = inferAsyncReturnType<typeof createContext>;
//# sourceMappingURL=context.d.ts.map