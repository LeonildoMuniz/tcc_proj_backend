import { PrismaClient } from "@prisma/client";
import primaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AutenticaRequest{
    matricula: string;
    senha: string;
}

class AutenticarMensService{
    async execute({matricula,senha}:AutenticaRequest ){
        const usuario = await primaClient.colaborador.findFirst({
            where:{
                matricula:matricula,             }
        })
        const cargo = await primaClient.cargo.findFirst({
            where:{
                id: usuario.cargo_id
            }
        })
        const nivel = await primaClient.nivel.findFirst({
            where: {
                id: cargo.nivel_id
            }
        })
        if(!usuario){
            throw new Error("Acesso negado!")
        }
        const senhaCompara = await compare(senha, usuario.senha)

        if(!senhaCompara){
            throw new Error("Dados incorretos")
        }
        if(usuario.acesso===false){
            throw new Error("Usuario sem acesso, efetuar primeiro cadastro")
        }
        if(nivel.controle<2){
            throw new Error("Cargo não permite acesso a essa opção")
        }
        

        const token = sign(
            {
                nome: usuario.nome,
                matricula: matricula
            },
            process.env.JWT_SECRETINFO,
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

export {AutenticarMensService}