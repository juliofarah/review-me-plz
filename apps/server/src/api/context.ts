import { SignedInAuthObject, SignedOutAuthObject } from '@clerk/clerk-sdk-node';
import { inferAsyncReturnType } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { Request } from 'express';
import prisma from '~/clients/prisma';

export type SignedInWithOrgAuthObject = SignedInAuthObject & {
  orgId: string;
};

interface MaybeAuthedRequest extends Request {
  auth: SignedInWithOrgAuthObject | SignedInAuthObject | SignedOutAuthObject | undefined;
}

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
// created for each request
export const createContext = async ({ req }: CreateExpressContextOptions) => {
  return {
    db: prisma,
    auth: (req as MaybeAuthedRequest).auth,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
