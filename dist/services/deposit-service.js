var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Deposit from "../models/deposit-model.js";
import Profile from "../models/profile-model.js";
export class DepositService {
    createDeposit(clienteId, depositValue) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (depositValue < 0) {
                    throw new Error("Deposit amount must be positive.");
                }
                const deposit = yield Deposit.create({
                    clienteId,
                    depositValue,
                    operationDate: new Date()
                });
                const profile = yield Profile.findOne({ where: { id: clienteId } });
                if (!profile) {
                    throw new Error(`Profile with ID ${clienteId} not found.`);
                }
                profile.balance += depositValue;
                yield profile.save();
                return deposit;
            }
            catch (error) {
                throw new Error(`Failed to create deposit: ${error}`);
            }
        });
    }
    getAllDeposits() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Deposit.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to fetch deposit: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
}
