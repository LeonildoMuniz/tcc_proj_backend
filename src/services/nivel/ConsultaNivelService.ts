import primaClient from "../../prisma";

class ConsultaNivelService{
    async execute(){
        const info = await primaClient.nivel.findMany({
            select:{
                id: true,
                desc_nivel: true,
                controle: true,

            }
        })
        return info;
    }
}

export{ConsultaNivelService}