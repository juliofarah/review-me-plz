import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import superjson from "superjson";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  // Formats error for client.
  errorFormatter({ error, shape }) {
    if (
      process.env.NODE_ENV !== "development" &&
      error.code === "INTERNAL_SERVER_ERROR"
    ) {
      return {
        ...shape,
        message: "Internal server error",
      };
    }
    return shape;
  },
});

export const publicProcedure = t.procedure;
export const router = t.router;
