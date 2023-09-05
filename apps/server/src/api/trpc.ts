import { TRPCError, initTRPC } from '@trpc/server';
import { Context, SignedInWithOrgAuthObject } from './context';
import superjson from 'superjson';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  // Formats error for client.
  errorFormatter({ error, shape }) {
    if (process.env.NODE_ENV !== 'development' && error.code === 'INTERNAL_SERVER_ERROR') {
      return {
        ...shape,
        message: 'Internal server error',
      };
    }
    return shape;
  },
});

const auth = t.middleware(opts => {
  const { ctx } = opts;

  if (!ctx.auth) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  if (!ctx.auth.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  if (!ctx.auth.orgId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({
    ctx: {
      auth: ctx.auth as SignedInWithOrgAuthObject,
    },
  });
});

export const protectedProcedure = t.procedure.use(auth);
export const middleware = t.middleware;
export const router = t.router;
