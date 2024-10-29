import { Request, Response } from "express";
import { ColaboradorService } from "../services/colaborador-service";

export class ColaboradorController {
    private colaboradorService: ColaboradorService;

    constructor() {
        this.colaboradorService = new ColaboradorService();
    }

    public async createColaborador(req: Request, res: Response): Promise<Response> {
        try {
            const { nomeCompleto } = req.body;
            const newColaborador = await this.colaboradorService.createColaborador(nomeCompleto);

            return res.status(201).json(newColaborador);
        } catch (error) {
            return res.status(500).json({ message: "Failed to create colaborador", error });
        }
    }
    public async getAllColaboradores(req: Request, res: Response): Promise<Response> {

        try {
            const colaboradores = await this.colaboradorService.getAllColaboradores();
            return res.status(200).json(colaboradores);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch colaboradores", error });
        }
    }
}