import {Request,Response} from 'express'
import {DetalheColaboradorService} from '../../services/colaborador/DetalheColaboradorService'

class DetalheColaboradorController{
    async handle(req:Request, res: Response){
        const user_id = req.user_id;

        const detalhecolaborador = new DetalheColaboradorService();
        const colaborado = await detalhecolaborador.execute(user_id)

        return res.json(colaborado)

    }
}

export {DetalheColaboradorController}

