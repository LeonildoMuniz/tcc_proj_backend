import primaClient from '../../prisma';

interface informacaoResquet{
    titulo: string;
    mensagem: string;
    anexo: string;
    id_colaborador: string;
}

class InformacaoService{
    async execute({titulo,mensagem,anexo,id_colaborador}:informacaoResquet) {
        if(!titulo || !mensagem || !id_colaborador){
            throw new Error("Informações incorretas")
        }

        const informacao = await primaClient.info.create({
            data:{
                titulo:titulo,
                mensagem: mensagem,
                anexo: anexo,
                id_colaborador: id_colaborador
            }
        })
        return informacao;
    }
}
export {InformacaoService};