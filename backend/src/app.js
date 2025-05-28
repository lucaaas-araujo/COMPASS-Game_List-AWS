import express from "express";
import mongoose from "mongoose";
import routes from "./routes.js";

class App {
  constructor() {
    this.server = express();

    mongoose.connect("mongodb+srv://gamelist:zKvBpVazprQ2Rof2@gamelist.2eol9ww.mongodb.net/?retryWrites=true&w=majority&appName=GameList");

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
