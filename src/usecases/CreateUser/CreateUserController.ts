//Aqui é onde vai ser o nosso controller em especifico da criação de usuário, da funcionalidade de criar um usuário, dentro da pasta useCase vai estar uma pasta para cada regra de negocio da nossa aplicação
//Seja ela criar usuário ou listar um usuário , sendo assim , dentro de cada pasta dessa regra de negocio vai ter u useCase e um controller para cada regra(é onde recebi a request do express e devolve uma resposta)
//Pq não criar uma pastinha controller ? => Estou utilizando o package per feature , ou seja , as funcionalidades da nossa aplicação vai ser organizada por feature e não por todas lá ao mesmo tempo
import { Request , Response } from "express-serve-static-core";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
    constructor(private createUserUseCase:CreateUserUseCase){}

    async handle(req:Request , res:Response): Promise<Response>{
        const {name , email , password} = req.body
        try{
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            return res.status(201).send()
        }catch(err:any){
            return res.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }

}

//OBS => Quando a função esta retornando uma promise do tipo Response , tem que ter um return no final da função, se não da erro , pq ele tem que retornar uma res, se vai retornar uma res (é uma promise do tipo response, não é void), sempre que for assicrona é uma promise



//Essa nossa função, ela também vai receber um constructor , com um private, que vai receber o nosso createUserUseCase com seu tipo , para que consiga realizar a requisição
//Que está englobando toda a nossa função , "Na futura rota de criação de usuário"







//Essa pasta ela vai receber um único método que seria que tambem é relacionada a criação de usuários, a gente tbm poderia Chamar esse metodo de execute, mas por convenção, nos chamamos este metodo de handle
//Por convenção todos os metodos que são implementados no controller recbem o nome de hanlde para importar o request e response do typescript

