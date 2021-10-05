import { Client } from '../../model/client';
import { BaseDatabase } from '../beseDataBase';

export class ClientDatabase extends BaseDatabase {
    private static TABLE_NAME = "Client";

    findClientById = async (id: string): Promise<Client | undefined> => {

        const client = await BaseDatabase.connection(ClientDatabase.TABLE_NAME)
            .select()
            .where({ id: id });

        return client[0] && Client.toClientModel(client[0]);
    };
};