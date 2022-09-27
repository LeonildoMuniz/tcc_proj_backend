import {Request,Response} from 'express'
import {ConsultaInfoService} from '../../services/informacao/ConsultaInfoService'

class ConsultaInfoController{
    async handle(req:Request, res:Response){
        const id = req.query.id as string;
        const  listarInfo = new ConsultaInfoService();

        const mensagens = await listarInfo.execute({
            id_colaborador:id
        });
        return res.json(mensagens);
    }
}

export{ConsultaInfoController}