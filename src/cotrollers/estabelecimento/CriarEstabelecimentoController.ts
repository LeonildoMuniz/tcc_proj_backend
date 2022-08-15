import {Request,Response} from 'express'
import {CriarEstabelecimentoService} from '../../services/estabelecimento/CriarEstabelecimentoService'

class CriarEstabelecimentoController{
    async handle(req:Request, res:Response){
        const {estab, desc_estab,empresa_id} = req.body;
        const criarEstabelecimentoService = new CriarEstabelecimentoService();

        const unidade = await criarEstabelecimentoService.execute({
            estab,
            desc_estab,
            empresa_id
        });

        return res.json(unidade)
    }
}

export {CriarEstabelecimentoController}