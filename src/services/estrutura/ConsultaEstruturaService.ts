import primaClient from "../../prisma";

class ConsultaEstruturaService{
    async execute(){
        const info = await primaClient.estrutura.findMany({
            select:{
                id:true,
                UnidadeOrg:true,
            }
        })
        return info;
    }
}

export{ConsultaEstruturaService}