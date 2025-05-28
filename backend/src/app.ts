import './config/connectiondb';

import express from 'express';
import { home, user } from './routes';

const app = express();

app.use(express.json());
app.use(home.routes);
app.use(user.routes);

export default app;
