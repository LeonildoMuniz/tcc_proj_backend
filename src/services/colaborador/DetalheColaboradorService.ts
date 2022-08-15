import primaClient from "../../prisma";

class DetalheColaboradorService{
    async execute(user_id:string){
        const user = await primaClient.colaborador.findFirst({
            where:{
                id:user_id
            },
            select:{
                id: true,
                nome: true,
                matricula:true,
                admissao: true,
            }
        })

        return user;
    }
}

export {DetalheColaboradorService}