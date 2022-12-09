import { hash } from 'bcryptjs';
import primaClient from '../../prisma';

interface ColaboradorResquet{
    id: string;
    nome: string;
    senha: string;
    anexo: string;
    status: string;
    estrutura_id: string;
    cargo_id: string;
    alocacao_id: string;

}

class AtualizaColaboradorService{
    async execute({id,nome,senha,status,anexo,estrutura_id,cargo_id,alocacao_id}:ColaboradorResquet) {

       const senha_cripto = await hash(senha,8)
     
       if (status === 'verdadeiro') {
            const colaborador = await primaClient.colaborador.update({
                where:{
                    id:id
                },
                data:{
                    nome:nome,
                    senha:senha_cripto,
                    foto:anexo,
                    status:true,
                    estrutura_id:estrutura_id,
                    cargo_id:cargo_id,
                    alocacao_id:alocacao_id,

                }
            })
            return colaborador;
       }else{
            const colaborador = await primaClient.colaborador.update({
                where:{
                    id:id
                },
                data:{
                    nome:nome,
                    senha:senha_cripto,
                    foto:anexo,
                    status:false,
                    estrutura_id:estrutura_id,
                    cargo_id:cargo_id,
                    alocacao_id:alocacao_id,

                }
            })
            return colaborador;
       }

    }
}
export {AtualizaColaboradorService};