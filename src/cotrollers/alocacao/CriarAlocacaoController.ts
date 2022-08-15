import {Request,Response} from 'express'
import {CriarAlocacaoService} from '../../services/alocacao/CriarAlocacaoService'

class CriarAlocacaoController{
    async handle(req:Request, res:Response){
        const {c_custo,desc_custo,estabelecimento_id} = req.body;
        const criarAlocacaoService = new CriarAlocacaoService();

        const alocacao = await criarAlocacaoService.execute({
            c_custo,
            desc_custo,
            estabelecimento_id,
        });

        return res.json(alocacao)
    }
}

export {CriarAlocacaoController}