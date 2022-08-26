import primaClient from "../../prisma";

class ConsultaEstabelecimentoService{
    async execute(){
        const info = await primaClient.estabelecimento.findMany({
            select:{
                id: true,
                estab: true,
                desc_estab:true,
            }
        })
        return info;
    }
}

export{ConsultaEstabelecimentoService}