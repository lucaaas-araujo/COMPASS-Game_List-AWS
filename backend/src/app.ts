import './config/connectiondb';

import express from 'express';
import { home, user } from './routes';
import { routes } from './routes/game';

const app = express();

app.use(express.json());
app.use(home.routes);
app.use(user.routes);
app.use(routes);

export default app;
