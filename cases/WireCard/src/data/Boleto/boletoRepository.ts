import { Boleto } from "../../model/boleto";

export interface BoletoRepository {
    createBoleto(newBoleto: Boleto): Promise<void>
};