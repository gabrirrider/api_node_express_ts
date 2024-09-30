import { Router } from "express";
import { JobController } from "../controllers/job-controller.js";
const router = Router();
const jobController = new JobController();
router.post("/jobs", (req, res) => jobController.createJob(req, res));
router.get("/jobs", (req, res) => jobController.getAllJobs(req, res));
router.get("/jobs/unpaid/total", (req, res) => jobController.getUnpaidJobsTotal(req, res));
router.get('/jobs/:contractId/jobs', (req, res) => jobController.getJobsByContract(req, res));
export default router;
