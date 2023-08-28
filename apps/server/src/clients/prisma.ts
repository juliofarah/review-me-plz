/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";

const connection = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});

export default connection;
