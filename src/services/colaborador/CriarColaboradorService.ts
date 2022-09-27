import { hash } from 'bcryptjs';
import primaClient from '../../prisma';

interface ColaboradorResquet{
    nome: string;
    matricula: string;
    admissao: string;
    cpf: string;
    senha: string;
    foto: string;
    acesso: boolean;
    status: boolean;
    admin: boolean;
    estrutura_id: string;
    cargo_id: string;
    alocacao_id: string;
    dt_nascimento: string;

}

class CriarColaboradorService{
    async execute({nome,matricula,admissao,cpf,senha,foto,acesso,admin,status,estrutura_id,cargo_id,alocacao_id,dt_nascimento}:ColaboradorResquet) {
        if(!matricula){
            throw new Error("Colaborador não existe")
        }
        const 
        colaboradorExiste = await primaClient.colaborador.findFirst({
            where:{
                matricula:matricula
            }
        })
       if(colaboradorExiste){
        throw new Error("Colaborador já Existe")
       } 

       const senha_cripto = await hash(senha,8)
       
        const colaborador = await primaClient.colaborador.create({
            data:{
                nome:nome,
                matricula:matricula,
                admissao:admissao,
                senha:senha_cripto,
                cpf:cpf,
                foto:foto,
                acesso:acesso,
                status:status,
                admin:admin,
                estrutura_id:estrutura_id,
                cargo_id:cargo_id,
                alocacao_id:alocacao_id,
                dt_nascimento: dt_nascimento

            }
        })
        return colaborador;
    }
}
export {CriarColaboradorService};