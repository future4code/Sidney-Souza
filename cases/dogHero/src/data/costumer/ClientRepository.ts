import { Client } from "../../model/client";

export interface ClientRepository {
    findClientById (id: string): Promise<Client | undefined>
};