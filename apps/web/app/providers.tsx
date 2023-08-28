"use client";

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import superjson from "superjson";
import { ReactNode, useMemo } from "react";
import { trpc } from "../utils/_trpcClient";
import { useRouter } from "next/navigation";
import { httpBatchLink, loggerLink } from "@trpc/client";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
            retry(failureCount, err) {
              if (process.env.NODE_ENV === "development") console.error(err);
              return failureCount < 3;
            },
          },
        },
        queryCache: new QueryCache({
          onError(err) {
            console.error(err);
            router.refresh();
          },
        }),
        mutationCache: new MutationCache({
          onError(err) {
            console.error(err);
            router.refresh();
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
            enabled: (opts) => process.env.NODE_ENV === "development",
          }),
          httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_API_HOST}/api`,
          }),
        ],
        transformer: superjson,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
