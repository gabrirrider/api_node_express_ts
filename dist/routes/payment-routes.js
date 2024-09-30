import { Router } from "express";
import { PaymentController } from "../controllers/payment-controller.js";
const router = Router();
const paymentController = new PaymentController();
router.post("/payments", (req, res) => paymentController.createPayment(req, res));
router.get("/payments", (req, res) => paymentController.getAllPayments(req, res));
export default router;
