import primaClient from "../../prisma";

class ConsultaAlocacaoService{
    async execute(){
        const info = await primaClient.alocacao.findMany({
            select:{
                id:true,
                c_custo: true,
                desc_custo:true,
            }
        })
        return info;
    }
}

export{ConsultaAlocacaoService}