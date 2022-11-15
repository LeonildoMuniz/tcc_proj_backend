import primaClient from "../../prisma";


interface informacaoResquet{
    estrutura_id: string;
}

class Mensagem2Service{

    async execute({estrutura_id}:informacaoResquet){


        const chat = await primaClient.info.findMany({
            where:{
                colaborador:{
                    estrutura_id:estrutura_id
                }
            },
            include:{
                colaborador:{
                
                }
            },
            orderBy:{
                data_envio:'desc'
            }

        })
        return chat
    }
}

export{Mensagem2Service}