import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../server";

// This is used to initialize the client-side trpc client.
export const trpc = createTRPCReact<AppRouter>();
