var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Payment from "../models/payment-model.js";
export class PaymentService {
    createPayment(jobId, operationDate, paymentValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payment = yield Payment.create({ jobId, operationDate, paymentValue });
                return payment;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to create payment: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
    getAllPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Payment.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to fetch payment: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
}
