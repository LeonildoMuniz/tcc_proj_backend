import { hash } from 'bcryptjs';
import primaClient from '../../prisma';

interface ColaboradorResquet{
    matricula: string;
    admissao: string;
    cpf: string;
    senha: string;
}

class PrimeiroAcessoService{
    async execute({matricula,admissao,cpf,senha}:ColaboradorResquet) {
        if(!matricula || !admissao || !cpf || !senha){
            throw new Error("Dados insuficientes para cadastro")
        }
        const 
        colaboradorExiste = await primaClient.colaborador.findFirst({
            where:{
                matricula:matricula,
                admissao:admissao,
                cpf:cpf
            }
        })
       if(colaboradorExiste.acesso===true){
        throw new Error("Colaborador já cadastrado")
       } 

       const senha_cripto = await hash(senha,8)
       
        const colaborador = await primaClient.colaborador.update({
            where:{
                id:colaboradorExiste.id
            },
            data:{
                acesso : true,
                senha: senha_cripto
            }
        })
        return colaborador;
    }
}
export {PrimeiroAcessoService};