import {Request,Response} from 'express'
import {Mensagem3Service} from '../../services/mensagem3/Mensagem3Service'

class Mensagem3Controller{
    async handle(req:Request, res:Response){
        const cosulta = new Mensagem3Service();

        const consInfo = await cosulta.execute();

        return res.json(consInfo)
    }
}

export {Mensagem3Controller}