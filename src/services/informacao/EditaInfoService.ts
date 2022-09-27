import primaClient from '../../prisma';

interface informacaoResquet{
    id:string;
    titulo: string;
    mensagem: string;
    anexo: string;
}

class EditaInfoService{
    async execute({id,titulo,mensagem,anexo}:informacaoResquet) {
        if(!titulo || !mensagem){
            throw new Error("Informações incorretas")
        }

        const informacao = await primaClient.info.update({
            where:{
                id:id
            },
            data:{
                titulo:titulo,
                mensagem:mensagem,
                anexo:anexo,
            }
        })
        return informacao;
    }
}
export {EditaInfoService};