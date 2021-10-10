import { CustomError } from "../../erros/CustomError";
import { Pets } from "../../model/pets";
import { BaseDatabase } from "../beseDataBase";


export class PetsDatabase extends BaseDatabase {
    private static TABLE_NAME = "Pets";

    findPetsByName = async(holderName: string):Promise<Pets | undefined> => {
        const creditCard = await BaseDatabase.connection(PetsDatabase.TABLE_NAME)
            .select()
            .where({ holderName });

        if (creditCard.length < 1) {
            return undefined;
        };

        return Pets.toPetstModel(creditCard[0]);
    };

    createPets = async (newPets: Pets): Promise<void> => {
        try {
            await BaseDatabase.connection(PetsDatabase.TABLE_NAME)
                .insert({
                    id: newPets.getId(),
                    Name: newPets.getName(),
                    raca: newPets.getRaca(),
                    porte: newPets.getPorte()
                });

        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        };
    };
};