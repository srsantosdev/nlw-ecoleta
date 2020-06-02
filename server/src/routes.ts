import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

const Points = new PointsController();
const Items = new ItemsController();

routes.get("/items", Items.index);

routes.get('/points/:id', Points.show)
routes.get("/points", Points.index);
routes.post("/points", Points.create);

export default routes;
