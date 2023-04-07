import Mail from "nodemailer/lib/mailer";
import { IMailProvider , IMessage } from "../IMailProvider";
import nodemailler from "nodemailer"

export class MailtrapMailProvider implements IMailProvider{
    private transporter:Mail
    constructor(){
        this.transporter = nodemailler.createTransport({
            host:'smtp.mailtrap.io',
            port:2525,
            auth:{
                user:'b46da5240e73cc',
                pass:'84b46267394ac9'
            }

        })
    }
    async sendMail(message:IMessage):Promise<void>{
        await this.transporter.sendMail({
            to:{
                name:message.to.name,
                address:message.to.email,
            },
            from:{
                name:message.from.name,
                address:message.from.email,
            },
            subject:message.subject,
            html:message.body
        })
    }
}

//A gente cria essas pastas implementations , quando a gente vai utilizar o implement das nossas interfaces , ou seja , pegar uma herança, por isso cria-se uma pasta implementations
