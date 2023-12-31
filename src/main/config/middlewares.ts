import { Express } from 'express';
import { bodyParser } from '@main/middlewares/body-parser';
import { cors } from '@main/middlewares/cors';
import { contentType } from '@main/middlewares/content-type';

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
  app.use(contentType);
};
