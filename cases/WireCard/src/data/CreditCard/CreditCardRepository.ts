import { CreditCard } from "../../model/CreditCard";

export interface CreditCardRepository {
    findCreditCardByHolderName(holderName: string):Promise<CreditCard | undefined>,
    createCreditCard(newCreditCard: CreditCard): Promise<void>
};