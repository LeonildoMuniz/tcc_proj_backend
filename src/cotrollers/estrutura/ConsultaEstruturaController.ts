import {Request,Response} from 'express'
import {ConsultaEstruturaService} from '../../services/estrutura/ConsultaEstruturaService'

class ConsultaEstruturaController{
    async handle(req:Request, res:Response){
        const  listaestrutura = new ConsultaEstruturaService();
        const estrutura = await listaestrutura.execute();
        return res.json(estrutura);
    }
}

export{ConsultaEstruturaController}