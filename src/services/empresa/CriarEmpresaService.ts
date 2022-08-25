import primaClient from '../../prisma';

interface empresaResquet{
    empresa: number;
    desc_empresa: string

}

class CriarEmpresaService{
    async execute({empresa, desc_empresa}:empresaResquet) {
        if(!empresa || !desc_empresa){
            throw new Error("Empresa não existe")
        }
        const empresaExiste = await primaClient.empresa.findFirst({
            where:{
                empresa:empresa,
            }
        })
        const nomeExiste = await primaClient.empresa.findFirst({
            where:{
                desc_empresa:desc_empresa,
            }
        })
       console.log(empresaExiste)
       if(empresaExiste || nomeExiste){
        throw new Error("Empresa já Existe");
       } 

        const unidade = await primaClient.empresa.create({
            data:{
                empresa:empresa,
                desc_empresa:desc_empresa,
            }
        })
        return unidade;
    }
}
export {CriarEmpresaService};