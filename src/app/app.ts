import express, { Express } from 'express';
import { config as dotenv } from "dotenv";
import morgan from "morgan";

import routes from '../routes';

const app: Express = express();

// config
dotenv();

// middlewares
app.use(morgan('dev'));

// routes
app.use(routes);

// error middlewares
// ..

export default app;
