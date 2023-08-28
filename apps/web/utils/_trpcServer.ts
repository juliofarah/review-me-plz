import "server-only";

import { createTRPCProxyClient, httpBatchLink, loggerLink } from "@trpc/client";
import { cache } from "react";
import superjson from "superjson";
import type { AppRouter } from "../../server";

// Create a request-scoped singleton instance of TrpcProxyClient.
// This ensures that data is not shared between different users and requests,
// while still only creating the TrpcProxyClient once per request.
//
// See: https://beta.nextjs.org/docs/data-fetching/caching#per-request-caching
export const getServerTrpcClient = cache(() =>
  createTRPCProxyClient<AppRouter>({
    links: [
      loggerLink({
        enabled: (opts) =>
          process.env.NODE_ENV === "development" && opts.direction === "down",
      }),
      httpBatchLink({
        url: `${process.env.NEXT_PUBLIC_API_HOST}/api`,
        headers: async () => {
          return {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
          }
        }
      })
    ],
    transformer: superjson,
  })
);
