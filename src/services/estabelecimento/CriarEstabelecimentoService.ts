import primaClient from '../../prisma';

interface estabelecimentoResquet{
    estab: number;
    desc_estab: string;
    empresa_id: string

}

class CriarEstabelecimentoService{
    async execute({estab,desc_estab,empresa_id}:estabelecimentoResquet) {
        if(!estab){
            throw new Error("Estabelecimento não existe")
        }
        const estabelecimentoExiste = await primaClient.estabelecimento.findFirst({
            where:{
                estab:estab
            }
        })
       if(estabelecimentoExiste){
        throw new Error("Estabelecimento já Existe")
       } 

        const estabelecimento = await primaClient.estabelecimento.create({
            data:{
                estab:estab,
                desc_estab:desc_estab,
                empresa_id: empresa_id,
            }
        })
        return estabelecimento;
    }
}
export {CriarEstabelecimentoService};