import morgan from "morgan";
import { config as dotenv } from "dotenv";

import app from './app/app';
import { APP } from './app/app.types';

dotenv();

app.use(morgan('dev'));

app.listen(process.env.APP_PORT, () => {
  console.log(`${APP.ON_LIVE} ${process.env.APP_PORT}`);
});
