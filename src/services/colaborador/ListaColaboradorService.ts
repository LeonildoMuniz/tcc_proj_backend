import primaClient from "../../prisma";

class ListaColaboradoresService{
    async execute(){
        const user = await primaClient.colaborador.findMany({

        })

        return user;
    }
}

export {ListaColaboradoresService}