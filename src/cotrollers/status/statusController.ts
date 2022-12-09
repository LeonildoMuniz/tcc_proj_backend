import {Request,Response} from 'express'
import {statusService} from '../../services/status/statusSevice'

class StatusController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;
        const cosulta = new statusService();

        const consInfo = await cosulta.execute({
            colaborador_id: id
        });

        return res.json(consInfo)
    }
}

export {StatusController}