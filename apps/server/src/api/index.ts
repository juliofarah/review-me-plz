import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import cors from 'cors';
import { serializeError } from 'serialize-error';
import * as trpcExpress from '@trpc/server/adapters/express';
import { router, createAppContext } from '..';
import { errorHandling } from '../middleware';
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';

async function main() {
  const app = express();
  const httpServer = http.createServer(app);

  // register express routes
  app.get('/health', (_, res) => {
    res.send('OK');
  });

  // app.use('/api', authMiddleware)

  app.use(
    '/api',
    cors(),
    ClerkExpressWithAuth(),
    trpcExpress.createExpressMiddleware({
      router,
      createContext: createAppContext,
      onError: opts => {
        const { error, type, path, input, ctx } = opts;

        if (error.code === 'INTERNAL_SERVER_ERROR') {
          // Log internal server errors.
          console.error(
            JSON.stringify({
              scope: 'TRPC API',
              type,
              path,
              input,
              ...serializeError(error),
            })
          );
        }
      },
    })
  );

  app.use(errorHandling);

  const port = process.env.PORT || 4000;
  httpServer.listen({ port }, () => {
    console.log(`🔥 API Server ready at http://localhost:4000/api`);
  });

  process.on('SIGINT', () => {
    if (httpServer.listening) {
      console.info('SIGINT signal received.');
      console.log('Closing http server.');
      httpServer.close(() => {
        console.log('Http server closed.');
      });
    }
  });
}

main();
