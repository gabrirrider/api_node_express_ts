var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DepositService } from "../services/deposit-service.js";
export class DepositController {
    constructor() {
        this.depositService = new DepositService();
    }
    createDeposit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteId = parseInt(req.params.id);
            const depositValue = req.body.depositValue;
            if (depositValue < 0) {
                return res.status(400).json({ message: "Deposit amount must be positive" });
            }
            try {
                const deposit = yield this.depositService.createDeposit(clienteId, depositValue);
                return res.status(201).json(deposit);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create deposit", error });
            }
        });
    }
    getAllDeposits(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposits = yield this.depositService.getAllDeposits();
                return res.status(200).json(deposits);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch deposits", error });
            }
        });
    }
}
