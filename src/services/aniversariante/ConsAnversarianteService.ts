import primaClient from "../../prisma";

class ConsAnversarianteService{
    async execute(){
        function dataAtualFormatada(){
            var data = new Date(),
                dia  = data.getDate().toString(),
                diaF = (dia.length == 1) ? '0'+dia : dia,
                mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
                mesF = (mes.length == 1) ? '0'+mes : mes,
                anoF = data.getFullYear();
            return diaF+"/"+mesF;
        }
        const a = 'asdfadsfasdfasdf';
        const info = await primaClient.colaborador.findMany({
            where:{
                dt_nascimento:{
                    contains: dataAtualFormatada()
                }
            },
            include:{
                alocacao:{
                    
                }
            }
        })
        return info;

    }
}

export{ConsAnversarianteService}