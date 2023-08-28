import { inferAsyncReturnType } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import prisma from "../clients/prisma";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
// created for each request
export const createContext = async ({ req }: CreateExpressContextOptions) => {
  return {
    db: prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
