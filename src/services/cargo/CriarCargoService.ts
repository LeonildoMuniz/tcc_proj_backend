import primaClient from '../../prisma';

interface cargoResquet{
    descricao: string;
    gestor: boolean;
    nivel_id: string
}

class CriarCargoService{
    async execute({descricao,gestor,nivel_id}:cargoResquet) {
        if(!descricao){
            throw new Error("Descricão incorreta")
        }
        const cargoExiste = await primaClient.cargo.findFirst({
            where:{
                descricao: descricao
            }
        })
       if(cargoExiste){
        throw new Error("Cargo já Existe")
       } 

        const cargo = await primaClient.cargo.create({
            data:{
                descricao:descricao,
                gestor: gestor,
                nivel_id: nivel_id
            }
        })
        return cargo;
    }
}
export {CriarCargoService};