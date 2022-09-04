import primaClient from '../../prisma';

interface informacaoResquet{
    id: string;
}

class RemoveInfoService2{
    async execute({id}:informacaoResquet) {
        if(!id){
            throw new Error("Informações incorretas")
        }
        const busca = await primaClient.info.findFirst({
            where:{
                id:id
            }
        })

        if(!busca){
            throw new Error("Mensagem não encontrada")
        }

        const informacao = await primaClient.info.delete({
            where: {
                id:id
            }
        })


        return informacao;
    }
}
export {RemoveInfoService2};