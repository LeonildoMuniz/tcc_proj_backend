import {Request,Response} from 'express'
import {MensagemService} from '../../services/mensagem/MensagemService'

class MensagemController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;
        const cosulta = new MensagemService();

        const consInfo = await cosulta.execute({
            id
        });

        return res.json(consInfo)
    }
}

export {MensagemController}