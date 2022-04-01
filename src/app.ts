import 'reflect-metadata';
import express from 'express';
import { router } from './routes';

import './shared/infra/typeorm';
import './shared/container';
const app = express();
app.use(express.json());
app.use(router);

export { app };
