import { Pets } from "../../model/pets";

export interface PetsRepository {
  findPetsByName(holderName: string):Promise<Pets | undefined>,
    createPets(newCreditCard: Pets): Promise<void>
};