import { Colaborador, ColaboradorCreationAttributes } from "../models/colaborador-model.js";

export class COlaboradorRepository {
    // Create a new Colaborador
    public async create(data: ColaboradorCreationAttributes): Promise<Colaborador> {
        try {
            const colaborador = await Colaborador.create(data); // Create using the correct attributes
            return colaborador;
        } catch (error) {
            throw new Error(`Unable to create colaborador: ${(error as Error).message}`);
        }
    }
    // Find all Colaboradores
    public async findAll(): Promise<Colaborador[]> {
        try {
            return await Colaborador.findAll();
        } catch (error) {
            throw new Error(`Unable to fetch colaboradores: ${(error as Error).message}`);
        }
    }

    // Find Colaborador by ID
    public async findById(id: number): Promise<Colaborador | null> {
        try {
            return await Colaborador.findByPk(id);
        } catch (error) {
            throw new Error("Unable to find colaborador with ID ${id): ${(error as Error).message")
        }
    }
}