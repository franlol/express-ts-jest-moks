import app from './app/app';
import { APP } from './app/app.types';

(() => {
  try {
    // database connection
    // ...

    // Server connection
    app.listen(process.env.APP_PORT, () => {
      console.log(`${APP.ON_LIVE} ${process.env.APP_PORT}`);
    });
  } catch (error) {
    console.log(APP.ON_ERROR);
  }
})();
