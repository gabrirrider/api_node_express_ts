import { Request, Response } from "express";
import { ContractService } from "../services/contract-service";

export class ContractController {
    private contractService: ContractService;

    constructor() {
        this.contractService = new ContractService();
    }

    public async createContract(req: Request, res: Response): Promise<Response> {
        try {
            const { terms, clienteId, contractorId, operationDate, status } = req.body;
            const newContract = await this.contractService.createContract(terms, clienteId, contractorId, operationDate, status);

            return res.status(201).json(newContract);
        } catch (error) {
            return res.status(500).json({ message: "Failed to create contract", error });
        }
    }
    public async getAllContracts(req: Request, res: Response): Promise<Response> {

        try {
            const contracts = await this.contractService.getAllContracts();
            return res.status(200).json(contracts);
        } catch (error) {
            return res.status(500).json({ message: "Failed to fetch contract", error });
        }
    }
}