import express, { Application } from "express";
import routes from "./routes/routes"; // depois converta routes.js para .ts
import "./config/connectiondb";

class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
