import {Request,Response} from 'express'
import {ConsNovosColService} from '../../services/novosColaboradores/ConsNovosColService'

class ConsNovosColController{
    async handle(req:Request, res:Response){
        const  listaNvCol = new ConsNovosColService();
        const novosCol = await listaNvCol.execute();
        return res.json(novosCol);
    }
}

export{ConsNovosColController}