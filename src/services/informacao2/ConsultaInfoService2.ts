import primaClient from "../../prisma";



interface informacaoResquet{
    id: string;
}

class ConsultaInfoService2{
    async execute({id}:informacaoResquet){
        const info = await primaClient.info.findMany({
            where:{
                id_colaborador:id
            },
            select:{
                id:true,
                id_colaborador:true,
                titulo:true,
                mensagem: true,
                anexo: true,
                data_envio: true
            }
        })
        return info;
    }
}

export{ConsultaInfoService2}