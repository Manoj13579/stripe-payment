import express from "express";
import { stripePayment } from "../controller/stripePayment.js";
const paymentRoutes = express.Router();


paymentRoutes.post("/create-checkout-session", stripePayment);

export  {paymentRoutes};