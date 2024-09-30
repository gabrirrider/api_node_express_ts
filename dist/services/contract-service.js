var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Contract from "../models/contract-model.js";
export class ContractService {
    createContract(terms, clienteId, contractorId, operationDate, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contract = yield Contract.create({ terms, clienteId, contractorId, operationDate, status });
                return contract;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to create contract: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
    getAllContracts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Contract.findAll();
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`unable to fetch contract: ${error.message}`);
                }
                else {
                    throw new Error('an unknow erro ocurred.');
                }
            }
        });
    }
}
