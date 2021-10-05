import { Holder } from "../../model/holder";

export interface HolderRepository {
    findHolderByDocumentNumber(holderRegister: string): Promise<Holder | undefined>,
    createHolder(newHolder: Holder): Promise<void>
};