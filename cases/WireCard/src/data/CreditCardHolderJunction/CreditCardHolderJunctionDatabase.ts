import { CustomError } from "../../errors/CustomError";
import { BaseDatabase } from "../beseDataBase";


export class CreditCardHolderJunctionDatabase extends BaseDatabase {
    private static TABLE_NAME = "Holder_CreditCard_junction";

    createCreditCardHolderJunction = async (holderId:string, creditCardId:string):Promise<void> => {
        try {
            await BaseDatabase.connection(CreditCardHolderJunctionDatabase.TABLE_NAME)
                .insert({
                    holderId,
                    creditCardId
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};