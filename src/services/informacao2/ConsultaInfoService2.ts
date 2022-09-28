import primaClient from "../../prisma";

interface informacaoResquet{
    id_colaborador: string;
}

class ConsultaInfoService2{
    async execute({id_colaborador}:informacaoResquet){
        const info = await primaClient.info.findMany({
            where:{
                id_colaborador:id_colaborador
            }
        })
        return info;
    }
}

export{ConsultaInfoService2}