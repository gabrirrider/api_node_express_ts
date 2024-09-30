var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JobService } from "../services/job-service.js";
export class JobController {
    constructor() {
        this.jobService = new JobService();
    }
    createJob(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { contractId, description, operationDate, paymentDate, price, paid } = req.body;
                const newJob = yield this.jobService.createJob(contractId, description, operationDate, paymentDate, price, paid);
                return res.status(201).json(newJob);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create job", error });
            }
        });
    }
    getAllJobs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobs = yield this.jobService.getAllJobs();
                return res.status(200).json(jobs);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch jobs", error });
            }
        });
    }
    getJobsByContract(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contractId = parseInt(req.params.contractId, 10); // Pega o ID do contrato da URL
                if (isNaN(contractId)) {
                    return res.status(400).json({ message: 'Invalid contract ID' });
                }
                const jobs = yield this.jobService.getJobsByContract(contractId);
                return res.status(200).json(jobs);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch jobs by contract", error });
            }
        });
    }
    getUnpaidJobsTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const total = yield this.jobService.getUnpaidJobsTotal();
                return res.status(200).json({ total });
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch jobs", error });
            }
        });
    }
}
