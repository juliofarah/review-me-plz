import { Response, Request, NextFunction } from "express";
import { serializeError } from "serialize-error";

export function errorHandling(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(JSON.stringify(serializeError(error)));
  res.sendStatus(500);
}
