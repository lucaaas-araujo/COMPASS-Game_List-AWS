import './config/connectiondb';

import express from 'express';
import { home, user, category } from './routes';

const app = express();

app.use(express.json());
app.use(home.routes);
app.use(user.routes);
app.use(category.routes);

export default app;
