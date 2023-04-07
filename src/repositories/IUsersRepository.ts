//Na pasta repository vai estar as interfaces que diz respeito a nossa aplicação, como a interface que vai servir para que façamos a criação do banco de dados
//Aqui é onde vai os metodos de criação de usuário
import { User } from "../entities/UserModel"; //Esse User foi importado das nossas entidades, ou seja, do nosso model, é como se monta a função no service, mas aqui eu quero que a promise retorne o usuário e não void

export interface IUsersRepository{
    findByEmail(Email:string):Promise<User>;
    save(user:User):Promise<void> //A promise pode ser void aqui porque ele não vai me retornar nada, vai somente salvar tudo no banco de dados, o usuário
}



//Eu preciso de dois métodos quando eu for criar um usuário por exemplo, eu posso, um metodo para criar o usuário associado-se ao banco e outro metodo que vai checar se o email existe no  banco



