var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Colaborador } from "../models/colaborador-model.js";
export class COlaboradorRepository {
    // Create a new Colaborador
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const colaborador = yield Colaborador.create(data); // Create using the correct attributes
                return colaborador;
            }
            catch (error) {
                throw new Error(`Unable to create colaborador: ${error.message}`);
            }
        });
    }
    // Find all Colaboradores
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Colaborador.findAll();
            }
            catch (error) {
                throw new Error(`Unable to fetch colaboradores: ${error.message}`);
            }
        });
    }
    // Find Colaborador by ID
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Colaborador.findByPk(id);
            }
            catch (error) {
                throw new Error("Unable to find colaborador with ID ${id): ${(error as Error).message");
            }
        });
    }
}
