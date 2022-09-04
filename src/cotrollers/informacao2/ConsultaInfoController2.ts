import {Request,Response} from 'express'
import {ConsultaInfoService} from '../../services/informacao/ConsultaInfoService'

class ConsultaInfoController2{
    async handle(req:Request, res:Response){
        const  listarInfo = new ConsultaInfoService();
        const mensagens = await listarInfo.execute();
        return res.json(mensagens);
    }
}

export{ConsultaInfoController2}