import {Request,Response} from 'express'
import {CriarCargoService} from '../../services/cargo/CriarCargoService'

class CriarCargoController{
    async handle(req:Request, res:Response){
        const {descricao, gestor, nivel_id} = req.body;
        const criarCargoService = new CriarCargoService();

        const cargo = await criarCargoService.execute({
            descricao,
            gestor,
            nivel_id,
        });

        return res.json(cargo)
    }
}

export {CriarCargoController}