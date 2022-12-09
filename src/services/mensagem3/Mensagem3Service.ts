import primaClient from "../../prisma";

class Mensagem3Service{
    async execute(){

        
       const admin = 'ce57c58d-4a1e-414c-9113-a489fb471070';
        const info = await primaClient.info.findMany({
            where:{
               id_colaborador: admin
            },
            include:{
                colaborador:{
                
                }
            },
            orderBy:{
                data_envio:'desc'
            }


        })
        return info;
    }
}

export{Mensagem3Service}