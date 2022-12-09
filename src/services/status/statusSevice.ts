import primaClient from "../../prisma";


interface informacaoResquet{
    colaborador_id: string;
}

class statusService{

    async execute({colaborador_id}:informacaoResquet){


        const chat = await primaClient.colaborador.findFirst({
            where:{
                id:colaborador_id
            },
            select:{
                status:true
            }
        })
        return chat
    }
}

export{statusService}