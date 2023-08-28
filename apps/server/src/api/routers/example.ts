import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const exampleRouter = router({
  list: publicProcedure.query(async opts => {
    const response = opts.ctx.db.example.findMany()
    return response
  }),

  create: publicProcedure.input( z.object({ name: z.string() })).mutation(async opts => {
    const response = opts.ctx.db.example.create({
      data: {
        name: opts.input.name
      }
    })
    return response
  })
});
