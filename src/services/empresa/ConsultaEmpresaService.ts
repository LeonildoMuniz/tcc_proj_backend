import primaClient from "../../prisma";

class ConsultaEmpresaService{
    async execute(){
        const info = await primaClient.empresa.findMany({
            select:{
                id: true,
                empresa: true,
                desc_empresa: true
            }
        })
        return info;
    }
}

export{ConsultaEmpresaService}