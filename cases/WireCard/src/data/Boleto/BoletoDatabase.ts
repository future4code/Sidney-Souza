import { CustomError } from "../../errors/CustomError";
import { Boleto } from "../../model/boleto";
import { BaseDatabase } from "../beseDataBase";


export class BoletoDatabase extends BaseDatabase {
    private static TABLE_NAME = "Boleto";

    createBoleto = async(newBoleto: Boleto):Promise<void> => {
        try {
            await BaseDatabase.connection(BoletoDatabase.TABLE_NAME)
                .insert({
                    id: newBoleto.getId(),
                    code: newBoleto.getCode(),
                    expirationDate: newBoleto.getExpirationDate()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};