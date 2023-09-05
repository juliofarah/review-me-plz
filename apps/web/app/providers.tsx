'use client';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';
import superjson from 'superjson';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { trpc } from '../utils/_trpcClient';
import { isTRPCError } from '../utils/errors';
import { Toaster } from './components/toaster';

export function Providers({ children }: { children: ReactNode }) {
  const auth = useAuth();
  const router = useRouter();
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
            retry(failureCount, err) {
              // @ts-expect-error this is a trpc error
              if (isTRPCError(err) && err.data?.code === 'UNAUTHORIZED') {
                return false;
              }
              return failureCount < 3;
            },
          },
        },
        queryCache: new QueryCache({
          onError(err) {
            // @ts-expect-error this is a trpc error
            if (isTRPCError(err) && err.data?.code === 'UNAUTHORIZED') {
              router.refresh();
            }
          },
        }),
        mutationCache: new MutationCache({
          onError(err) {
            // @ts-expect-error this is a trpc error
            if (isTRPCError(err) && err.data?.code === 'UNAUTHORIZED') {
              router.refresh();
            }
          },
        }),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const trpcClient = useMemo(
    () =>
      trpc.createClient({
        links: [
          loggerLink({
            enabled: opts => process.env.NODE_ENV === 'development' && opts.direction === 'down',
          }),
          httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_API_HOST}/api`,
            headers: async () => {
              return {
                Authorization: `Bearer ${await auth.getToken()}`,
              };
            },
          }),
        ],
        transformer: superjson,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
