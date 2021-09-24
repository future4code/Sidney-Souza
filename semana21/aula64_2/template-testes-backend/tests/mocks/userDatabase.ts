import { User, USER_ROLES } from "../../src/model/User";

export class UserDatabaseMock {
  static getUserById(arg0: string) {
      throw new Error("Method not implemented.");
  }
  public createUser: (user: User) => Promise<void> = jest.fn()

  public getUserByEmail: (email: string) => Promise<User | undefined> = jest.fn(async (email: string): Promise<User | undefined> => {
    return new User("1", "Nome", email, "123123", USER_ROLES.ADMIN);
  })

  public async getUserById(id: string): Promise<User | undefined> {
    return new User(id, "Nome", "email", "123123", USER_ROLES.ADMIN);
  }

  public async getAllUsers(): Promise<User[]> {
    return undefined;
  }
}