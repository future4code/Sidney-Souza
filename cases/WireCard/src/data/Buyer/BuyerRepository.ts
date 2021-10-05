import { Buyer } from "../../model/Buyer";

export interface BuyerRepository {
    findBuyerByEmail(email: string): Promise<Buyer | undefined>,
    findBuyerIdByEmail(email: string): Promise<string | undefined>,
    createBuyer(newBuyer: Buyer): Promise<void>
};