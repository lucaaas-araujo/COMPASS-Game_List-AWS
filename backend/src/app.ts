import "./config/connectiondb";

import express from "express";
import { user } from "./routes";

const app = express();

app.use(express.json());
app.use(user.routes);

export default app;
