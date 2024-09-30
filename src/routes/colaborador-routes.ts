import { Router } from "express";
import { ColaboradorController } from "../controllers/colaborador-controller.js";

const router = Router();
const colaboradorController = new ColaboradorController();

router.post("/colaboradores", (req, res) => colaboradorController.createColaborador(req, res));
router.get("/colaboradores", (req, res) => colaboradorController.getAllColaboradores(req, res));

type colaboradorRoutes = typeof router;

export default router as colaboradorRoutes;