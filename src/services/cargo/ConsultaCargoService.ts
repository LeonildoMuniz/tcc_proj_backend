import primaClient from "../../prisma";

class ConsultaCargoService{
    async execute(){
        const info = await primaClient.cargo.findMany({
            select:{
                id:true,
                descricao:true,
            }
        })
        return info;
    }
}

export{ConsultaCargoService}