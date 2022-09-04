import {Request,Response} from 'express'
import {RemoveInfoService} from '../../services/informacao/RemoveInfoService'

class RemoveInfoController2{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;
        const removeInfo = new RemoveInfoService();

        const delInfo = await removeInfo.execute({
            id
        });

        return res.json(delInfo)
    }
}

export {RemoveInfoController2}