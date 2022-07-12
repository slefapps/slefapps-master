import express from "express";
import {applyRoutes} from "./middlewares/middleware";
import routes from './routes/index';
const app = express();
applyRoutes(app, routes);

export default app;

