import {v4} from "uuid"

export class User {
    public readonly id?: string;
    public  name: string;
    public  email: string;
    public  password: string;

  
    constructor(id: any, name:string , email:string , password:string) {
      this.id = id;
      this.name =name;
      this.email = email;
      this.password = password;

      if(!id){
        this.id = v4();
      }
    }
}



  //Aqui é como se eu estivesse criando o nosso model de usuários mas através de uma classe , eu ainda não estou utilizando banco de dados., como só o campo do id eu quero que fique o mesmo
  //Eu posso utilizar o uuid para a criação do meu id no usuário e não deixar essa responsabilidade para o banco de dados, pois o banco é uma ferramente externa
  