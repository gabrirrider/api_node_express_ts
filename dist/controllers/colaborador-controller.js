var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ColaboradorService } from "../services/colaborador-service.js";
export class ColaboradorController {
    constructor() {
        this.colaboradorService = new ColaboradorService();
    }
    createColaborador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nomeCompleto } = req.body;
                const newColaborador = yield this.colaboradorService.createColaborador(nomeCompleto);
                return res.status(201).json(newColaborador);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create colaborador", error });
            }
        });
    }
    getAllColaboradores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const colaboradores = yield this.colaboradorService.getAllColaboradores();
                return res.status(200).json(colaboradores);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch colaboradores", error });
            }
        });
    }
}
