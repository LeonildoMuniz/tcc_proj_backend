import {Request,Response} from 'express'
import {InformacaoService} from '../../services/informacao/InformacaoService'

class InformacaoController{
    async handle(req:Request, res:Response){
        const {titulo,mensagem,anexo,id_colaborador} = req.body;
        const informacaoServico = new InformacaoService();

        const informacao = await informacaoServico.execute({
            titulo,
            mensagem,
            anexo,
            id_colaborador
        });

        return res.json(informacao)
    }
}

export {InformacaoController}