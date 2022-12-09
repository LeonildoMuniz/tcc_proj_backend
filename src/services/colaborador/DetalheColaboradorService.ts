import primaClient from "../../prisma";

class DetalheColaboradorService{
    async execute(user_id:string){
        const user = await primaClient.colaborador.findFirst({
            where:{
                id:user_id
            }
        })

        return user;
    }
}

export {DetalheColaboradorService}