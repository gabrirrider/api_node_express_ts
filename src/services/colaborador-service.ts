import Colaborador from "../models/colaborador-model";


export class ColaboradorService {
    public async createColaborador(nomeCompleto: string): Promise<Colaborador> {
        try {
            const colaborador = await Colaborador.create({ nomeCompleto });
            return colaborador
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`unable to create colaborador: ${error.message}`);

            } else {
                throw new Error('an unknow erro ocurred.')
            }
        }
    }

    public async getAllColaboradores(): Promise<Colaborador[]> {
        try {
            return await Colaborador.findAll();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`unable to fetch colaborador: ${error.message}`);

            } else {
                throw new Error('an unknow erro ocurred.')
            }
        }
    }
}