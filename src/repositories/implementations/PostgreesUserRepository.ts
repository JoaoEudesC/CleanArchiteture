import { User } from "../../entities/UserModel";
import { IUsersRepository } from "../IUsersRepository";

export class PostgreesUsersRepository implements IUsersRepository{
    private users:User[] =[];

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);
      
        if (!user) {
          throw new Error(`Usuário com email ${email} não encontrado`);
        }
      
        return user;
      }
      
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}