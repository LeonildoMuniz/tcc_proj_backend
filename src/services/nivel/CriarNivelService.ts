import primaClient from '../../prisma';

interface nivelResquet{
    controle: number;
    desc_nivel: string
}

class CriarNivelService{
    async execute({controle,desc_nivel}:nivelResquet) {
        if(!controle){
            throw new Error("Nivel não existe")
        }
        const nivelExiste = await primaClient.nivel.findFirst({
            where:{
                controle:controle
            }
        })
       if(nivelExiste){
        throw new Error("Nivel já Existe")
       } 

        const nivel = await primaClient.nivel.create({
            data:{
                controle:controle,
                desc_nivel:desc_nivel,
            }
        })
        return nivel;
    }
}

export {CriarNivelService};