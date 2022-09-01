import {Request,Response} from 'express'
import {ConsultaNivelService} from '../../services/nivel/ConsultaNivelService'

class ConsultaNivelController{
    async handle(req:Request, res:Response){
        const  listanivel = new ConsultaNivelService();
        const nivel = await listanivel.execute();
        return res.json(nivel);
    }
}

export{ConsultaNivelController}