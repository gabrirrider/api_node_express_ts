var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Job from "../models/job-model.js";
export class JobService {
    createJob(contractId, description, operationDate, paymentDate, price, paid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield Job.create({ contractId, description, operationDate, paymentDate, price, paid });
                return job;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to create job: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
    getAllJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Job.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to fetch job: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
    getJobsByContract(contractId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobs = yield Job.findAll({
                    where: {
                        contractId: contractId
                    }
                });
                return jobs;
            }
            catch (error) {
                throw new Error(`Failed to retrieve jobs for contract: ${error}`);
            }
        });
    }
    getUnpaidJobsTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield Job.sum('price', { where: { paid: false } });
                return result || 0;
            }
            catch (error) {
                throw new Error(`Failed to calculate sum: ${error}`);
            }
        });
    }
}
