import App from "./app";
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT


App.listen(PORT , () =>{
    console.log(`o servidor esta rodando em http://localhost:3000`)
})

