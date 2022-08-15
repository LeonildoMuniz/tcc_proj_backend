import {Request,Response} from 'express'
import {CriarNivelService} from '../../services/nivel/CriarNivelService'

class CriarNivelController{
    async handle(req:Request, res:Response){
        const {controle,desc_nivel} = req.body;
        const criarNivelService = new CriarNivelService();

        const nivel = await criarNivelService.execute({
            controle,
            desc_nivel
        });

        return res.json(nivel)
    }
}

export {CriarNivelController}