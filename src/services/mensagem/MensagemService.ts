import primaClient from "../../prisma";


interface informacaoResquet{
    id: string;
}

class MensagemService{
    async execute({id}:informacaoResquet){
        const info = await primaClient.info.findUnique({
            where:{
                id:id
            }
        })
        return info;
    }
}

export{MensagemService}