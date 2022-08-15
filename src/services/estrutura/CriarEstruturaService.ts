import primaClient from '../../prisma';

interface estruturaResquet{
    UnidadeOrg: string;
 

}

class CriarEstruturaService{
    async execute({UnidadeOrg}:estruturaResquet) {
        if(!UnidadeOrg){
            throw new Error("Estrutura não existe")
        }
        const estruturaExiste = await primaClient.estrutura.findFirst({
            where:{
                UnidadeOrg:UnidadeOrg
            }
        })
       if(estruturaExiste){
        throw new Error("Estrutura já Existe")
       } 

        const estrutura = await primaClient.estrutura.create({
            data:{
                UnidadeOrg:UnidadeOrg,
            }
        })
        return estrutura;
    }
}
export {CriarEstruturaService};