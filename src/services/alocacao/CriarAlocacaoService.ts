import primaClient from '../../prisma';

interface AlocacaoResquet{
    c_custo: number;
    desc_custo: string;
    estabelecimento_id: string

}

class CriarAlocacaoService{
    async execute({c_custo,desc_custo,estabelecimento_id}:AlocacaoResquet) {
        if(!c_custo){
            throw new Error("Alocação não existe")
        }
        const 
        alocacaoExiste = await primaClient.alocacao.findFirst({
            where:{
                c_custo:c_custo
            }
        })
       if(alocacaoExiste){
        throw new Error("Alocacão já Existe")
       } 

        const alocacao = await primaClient.alocacao.create({
            data:{
                c_custo:c_custo,
                desc_custo:desc_custo,
                estabelecimento_id: estabelecimento_id,
            }
        })
        return alocacao;
    }
}
export {CriarAlocacaoService};