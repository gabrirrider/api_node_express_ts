var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PaymentService } from "../services/payment-service.js";
export class PaymentController {
    constructor() {
        this.paymentService = new PaymentService();
    }
    createPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { jobId, operationDate, paymentValue } = req.body;
                const newPayment = yield this.paymentService.createPayment(jobId, operationDate, paymentValue);
                return res.status(201).json(newPayment);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create payment", error });
            }
        });
    }
    getAllPayments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payments = yield this.paymentService.getAllPayments();
                return res.status(200).json(payments);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch payments", error });
            }
        });
    }
}
