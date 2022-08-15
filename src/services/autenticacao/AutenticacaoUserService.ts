import { PrismaClient } from "@prisma/client";
import primaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AutenticaRequest{
    matricula: string;
    senha: string;
}

class AutenticarUserService{
    async execute({matricula,senha}:AutenticaRequest ){
        const usuario = await primaClient.colaborador.findFirst({
            where:{
                matricula:matricula,             }
        })
        if(usuario.admin===false){
            throw new Error("Acesso negado!")
        }
        
        const senhaCompara = await compare(senha, usuario.senha)

        if(!senhaCompara){
            throw new Error("Dados incorretos")
        }

        const token = sign(
            {
                nome: usuario.nome,
                matricula: matricula
            },
            process.env.JWT_SECRET,
            {
                subject: usuario.id,
                expiresIn: '1h'
            }

            
        )
        return {
            id: usuario.id,
            nome: usuario.nome,
            token: token
        }

    }
}

export {AutenticarUserService}