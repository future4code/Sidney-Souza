import { CustomError } from "../../errors/CustomError";
import { Buyer } from "../../model/Buyer";
import { BaseDatabase } from "../beseDataBase";

export class BuyerDatabase extends BaseDatabase {
    private static TABLE_NAME = "Buyer";

    findBuyerByEmail = async (email: string): Promise<Buyer | undefined> => {

        const buyer = await BaseDatabase.connection(BuyerDatabase.TABLE_NAME)
            .select()
            .where({ email: email });

        return buyer[0] && Buyer.toBuyerModel(buyer[0]);
    };

    findBuyerIdByEmail = async (email: string): Promise<string | undefined> => {

        const buyerId = await BaseDatabase.connection(BuyerDatabase.TABLE_NAME)
            .select("id")
            .where({ email: email });

        return buyerId[0] ? buyerId[0].id : undefined;
    };

    createBuyer = async (newBuyer: Buyer): Promise<void> => {
        try {
            await BaseDatabase.connection(BuyerDatabase.TABLE_NAME)
                .insert({
                    id: newBuyer.getId(),
                    name: newBuyer.getName(),
                    email: newBuyer.getEmail(),
                    cpf: newBuyer.getCpf()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};