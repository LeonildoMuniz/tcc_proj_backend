import {Request,Response} from 'express'
import { DetalheColaboradorService } from '../../services/colaborador/DetalheColaboradorService';
import {DetelhaAdminService} from '../../services/colaborador/DetelhaAdminService';

class DetelhaAdminController{
    async handle(req:Request, res: Response){
        const user_id = req.user_id;

        const detalheadmin = new DetalheColaboradorService();
        const colaborado = await detalheadmin.execute(user_id)

        return res.json(colaborado)

    }
}

export {DetelhaAdminController}