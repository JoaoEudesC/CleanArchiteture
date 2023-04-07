import express from "express"
import {router} from "../src/router/userRouter"


class App {
    server:any
    
    
    constructor(){
        this.server = express()
        this.middlewares()
        this.router()
        
    }

    middlewares(){
        this.server.use(express.json())
    }
    router(){
        this.server.use("/Users" , router)
    }

    
    
}




export default new App().server

//Perceba que aqui eu estou utilizando a estrutura de classes igual foi utilizado na outra aplicação para que eu consiga startar o servidor
//tbm pode ser feito da maneira tradicional que eu realizo igulando já o app ao express, o router vai ser passado aqui tbm, e caso que quisesse utilizar um middleware de forma global , eu passaia aqui tbm
//Todas as funções que eu montar no constructor, eu estancio embaixo e monta uma função que será utilizada, se for variável como é o caso do server, eu renho que tipar e utilizar ela
