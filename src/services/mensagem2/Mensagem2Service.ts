import primaClient from "../../prisma";


interface informacaoResquet{
    id: string;
}

class Mensagem2Service{
    async execute({id}:informacaoResquet){
        const info = await primaClient.info.findUnique({
            where:{
                id:id
            }
        })
        return info;
    }
}

export{Mensagem2Service}