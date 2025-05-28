import "./config/connectiondb";

import express from "express";
import user from "./routes/user";

const app = express();

app.use(express.json());
app.use(user);

export default app;
