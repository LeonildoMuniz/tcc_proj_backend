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

        if(usuario.admin===true){
            throw new Error("Usuario incopativel com acesso")
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
            estrutura: usuario.estrutura_id,
            token: token,
            valor:''
        }

    }
}

export {AutenticarColService}