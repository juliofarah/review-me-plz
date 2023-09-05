import { AppRouter } from '@rvmplz/server';
import { TRPCClientError } from '@trpc/client';

export const isTRPCError = (err: unknown): err is TRPCClientError<AppRouter> => {
  return err instanceof TRPCClientError;
};
