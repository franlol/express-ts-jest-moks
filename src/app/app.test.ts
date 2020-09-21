import { Server } from "http";
import app from './app';

describe('Express Server', () => {
  let server: Server;

  it('Should run the server', () => {
    server = app.listen(process.env.TEST_APP_PORT, () => {
      expect(true).toBe(true);
    });
  });

  it('Should close the server', () => {
    server.close(() => {
      expect(true).toBe(true);
    });
  });

});
