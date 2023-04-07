import { Router } from "express";
export const router = Router()
import { createUserController } from "../usecases/CreateUser";
import { request } from "http";


router.post("/createNewUser" , createUserController.handle)











export default router