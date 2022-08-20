import primaClient from "../../prisma";

class DetelhaAdminService{
    async execute(user_id:string){
        const user = await primaClient.colaborador.findFirst({
            where:{
                id:user_id
            },
            select:{
                id: true,
                nome: true,
                matricula:true
            }
        })

        return user;
    }
}

export {DetelhaAdminService}