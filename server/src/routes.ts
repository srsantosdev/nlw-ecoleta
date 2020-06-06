import express from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

const upload = multer(multerConfig);

const Points = new PointsController();
const Items = new ItemsController();

routes.get("/items", Items.index);

routes.get("/points/:id", Points.show);
routes.get("/points", Points.index);
routes.post("/points", upload.single("image"), Points.create);

export default routes;
