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
export class DepositRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deposit = yield Deposit.create(data);
                return deposit;
            }
            catch (error) {
                throw new Error(`Unable to create deposit: ${error.message}`);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Deposit.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch deposits: ${error.message}`);
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Deposit.findByPk(id);
            }
            catch (error) {
                throw new Error("Unable to find deposit with ID ${id): ${(error as Error).message");
            }
        });
    }
}
