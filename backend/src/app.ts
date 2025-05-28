import express, { Application } from "express";
import mongoose from "mongoose";
import routes from "./routes"; // depois converta routes.js para .ts

class App {
  public server: Application;

  constructor() {
    this.server = express();

    mongoose.connect(process.env.DATABASE_URL);

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
