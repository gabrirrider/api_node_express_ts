import { Router } from "express";

import { DepositController } from "../controllers/deposit-controller.js";

const router = Router();
const depositController = new DepositController
    ();

router.post("/deposits", (req, res) => depositController.createDeposit(req, res));
router.post("/profiles/:id/deposit", depositController.createDeposit.bind(depositController));
router.get("/deposits", (req, res) => depositController.getAllDeposits(req, res));

type depositRoutes = typeof router;

export default router as depositRoutes;