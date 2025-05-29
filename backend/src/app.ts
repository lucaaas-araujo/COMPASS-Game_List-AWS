import './config/connectiondb';

import express from 'express';
import { home, user, game } from './routes';

const app = express();

app.use(express.json());
app.use(home.routes);
app.use(user.routes);
app.use(game.routes);

export default app;
