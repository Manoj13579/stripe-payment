import express from "express";
import { paymentRoutes } from "./paymentRoutes.js";

const indexRouter = express.Router();

indexRouter.use('/api', paymentRoutes)


export default indexRouter;