//é onde vai definir quais são os métodos que eu vou definir para ser realizado o envio de email por exemplo, igual eu fiz no repositories , porém no repositories, foi onde eu definir a interface para somente a criação do usuário e o salvamento dele no banco de dados
//Aqui vou fazer uma função que não vai interagir com o banco de dados mas sim com uma api para enviar um email ao usuário

interface IAdress{
    email:string,
    name:string
}





export interface IMessage{
    to:IAdress
    from:IAdress
    subject:string
    body:string
}



export interface IMailProvider{
    sendMail(Message:IMessage): Promise<void> //Sempre que o método é assicrono ele retorna void, pois não é preciso nenhum retorno(ele não possui retorno dentro dessa promise)
}
