import {Request,Response} from 'express'
import {ConsultaInfoService2} from '../../services/informacao2/ConsultaInfoService2'

class ConsultaInfoController2{
    async handle(req:Request, res:Response){
        const {id} = req.body;
        const  listarInfo = new ConsultaInfoService2();
        const mensagens = await listarInfo.execute({
            id:id,
        });
        return res.json(mensagens);
    }
}

export{ConsultaInfoController2}