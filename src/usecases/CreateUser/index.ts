import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgreesUsersRepository } from "../../repositories/implementations/PostgreesUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapMailProvider()
const postgreesUsersReository = new PostgreesUsersRepository()


const createUserUserCase = new CreateUserUseCase(
    postgreesUsersReository,
    mailtrapProvider
)



const createUserController = new CreateUserController(
    createUserUserCase 
)

export {CreateUserUseCase , createUserController}