import { CustomError } from '../../erros/CustomError';
import { Walkers } from '../../model/walkers';
import { BaseDatabase } from '../beseDataBase';

export class WalkersDatabase extends BaseDatabase {
  private static TABLE_NAME = "Walkers";

  findWalkersByEmail = async (email: string): Promise<Walkers | undefined> => {

      const walkers = await BaseDatabase.connection(WalkersDatabase.TABLE_NAME)
          .select()
          .where({ email: email });

      return walkers[0] && Walkers.toWalkersModel(walkers[0]);
  };

  findWalkersIdByEmail = async (email: string): Promise<string | undefined> => {

      const WalkersId = await BaseDatabase.connection(WalkersDatabase.TABLE_NAME)
          .select("id")
          .where({ email: email });

      return WalkersId[0] ? WalkersId[0].id : undefined;
  };

  createWalkers = async (newWalkers: Walkers): Promise<void> => {
      try {
          await BaseDatabase.connection(WalkersDatabase.TABLE_NAME)
              .insert({
                  id: newWalkers.getId(),
                  name: newWalkers.getName(),
                  email: newWalkers.getEmail(),
                  cpf: newWalkers.getCpf(),
                  endereco: newWalkers.getEndereco()
              });

      } catch (error: any) {
          throw new CustomError(400, error.sqlMessage);
      };
  };
};