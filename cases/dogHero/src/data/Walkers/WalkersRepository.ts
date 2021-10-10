import { Walkers } from "../../model/walkers";

export interface WalkersRepository {
    findWalkersByEmail(email: string): Promise<Walkers | undefined>,
    findWalkersIdByEmail(email: string): Promise<string | undefined>,
    createWalkers(newWalkers: Walkers): Promise<void>
};