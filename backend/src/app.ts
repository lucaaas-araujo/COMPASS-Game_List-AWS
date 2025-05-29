import './config/connectiondb';

import express from 'express';
import { home, user, platform, game } from './routes';

const app = express();

app.use(express.json());
app.use(home.routes);
app.use(user.routes);
app.use(game.routes);
app.use(platform.routes);

export default app;
