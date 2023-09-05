import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const exampleRouter = router({
  list: protectedProcedure.query(async opts => {
    const response = opts.ctx.db.example.findMany()
    return response
  }),

  create: protectedProcedure.input( z.object({ name: z.string() })).mutation(async opts => {
    const response = opts.ctx.db.example.create({
      data: {
        name: opts.input.name
      }
    })
    return response
  })
});
