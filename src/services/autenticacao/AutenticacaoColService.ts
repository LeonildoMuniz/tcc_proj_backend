import { PrismaClient } from "@prisma/client";
import primaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AutenticaRequest{
    matricula: string;
    senha: string;
}

class AutenticarColService{
    async execute({matricula,senha}:AutenticaRequest ){
        const usuario = await primaClient.colaborador.findFirst({
            where:{
                matricula:matricula,             }
        })
        if(!usuario){
            throw new Error("Acesso negado!")
        }
        if(usuario.acesso===false){
            throw new Error("Usuario sem acesso, efetuar primeiro cadastro")
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
            process.env.JWT_SECRETCOL,
            {
                subject: usuario.id,
                expiresIn: '1h'
            }

            
        )
        return {
            id: usuario.id,
            nome: usuario.nome,
            token: token,
            valor:''
        }

    }
}

export {AutenticarColService}