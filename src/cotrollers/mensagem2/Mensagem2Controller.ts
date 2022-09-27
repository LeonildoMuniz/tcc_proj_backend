import {Request,Response} from 'express'
import {Mensagem2Service} from '../../services/mensagem2/Mensagem2Service'

class Mensagem2Controller{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;
        const cosulta = new Mensagem2Service();

        const consInfo = await cosulta.execute({
            id
        });

        return res.json(consInfo)
    }
}

export {Mensagem2Controller}