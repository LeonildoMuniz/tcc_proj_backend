import {Request,Response} from 'express'
import {CriarEstruturaService} from '../../services/estrutura/CriarEstruturaService'

class CriarEstruturaController{
    async handle(req:Request, res:Response){
        const {UnidadeOrg} = req.body;
        const criarEstruturaService = new CriarEstruturaService();

        const estrutura = await criarEstruturaService.execute({
            UnidadeOrg,
        });

        return res.json(estrutura)
    }
}

export {CriarEstruturaController}