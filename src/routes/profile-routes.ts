import { Router } from "express";
import { ProfileController } from "../controllers/profile-controller.js";

const router = Router();
const profileController = new ProfileController
    ();

router.post("/profiles", (req, res) => profileController.createProfile(req, res));
router.get("/profiles", (req, res) => profileController.getAllProfiles(req, res));
router.get("/profiles/:profileId/balance", (req, res) => profileController.getProfileBalance(req, res));

type profileRoutes = typeof router;

export default router as profileRoutes;