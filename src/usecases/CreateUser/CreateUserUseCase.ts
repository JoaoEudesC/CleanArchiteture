//Aqui é onde vai a única a regra de negocio da única funcionalidade que nos possuimos até agora, que é a de criação de um usuário, dentro da sua respectiva pasta no useCases.

import { User } from "../../entities/UserModel";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

//E ele vai ser em formato de classe como qualquer outra
export class CreateUserUseCase{
    private usersRepository:IUsersRepository
    private mailProvider:IMailProvider
    constructor( usersRepository:IUsersRepository , mailProvider:IMailProvider){
        this.usersRepository = usersRepository //Esse codigo pode ser substituido por este codigo aqui => constructor(private usersRepository:IUsersRepository)
        this.mailProvider =  mailProvider
    }
    
    
    
    async execute(data:ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)//Dessa forma eu já tenho uma função que vai me mostrar se o usuário já existe ou não

        if(userAlreadyExists){
            throw new Error ('User Already exists.');
        }
        const user = new User(undefined , data.name , data.email , data.password );
        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to:{
                name:data.name,
                email: data.email
            },
            from:{
                name:'Equipe do meu app',
                email:"joao@gmail.com"
            },
            subject:"seja bem vindo",
            body:'<p> Voce já pode fazer login em nossa plataform </p>'
        
        })

    }
}

//Esse arquivo so quer saber se o arquivo vai ser salvo em um banco de dados , em uma api de terceiros ou em outro lugar , a única coisa que ele quer saber é se o usuário existe ou não e salva-lo , somente executar a função



//Esse meu constructor ele vai vir com uma depensencia (principio liskov , ele vai depender de uma interface ele não sabe se esta se comunicando com mongo , postgree ou mysql)
//Porém dentro dele não vai ter um constructor, terá somente um método que vai ser executado quando chamado, ou seja , é uma classe sem constructor
//O useCase sabe qual é a função que o usuário vai realizar, mas ele não sabe de onde está vindo estes dados , se é de um banco de dados , se é de um api, ou se é outro tipo de banco , essa interação com o banco de dados vai ficar armazenada dentro da pasta repositories.
//Ou seja , a nossa logicar fica separada de como o nosso aplicação vai se comunicar com o externo , por exemplo , com o banco de dados.
