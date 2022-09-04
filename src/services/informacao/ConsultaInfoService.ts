import primaClient from "../../prisma";

class ConsultaInfoService{
    async execute(){
        const info = await primaClient.info.findMany({
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

export{ConsultaInfoService}