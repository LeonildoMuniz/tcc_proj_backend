import {Request,Response} from 'express'
import {InformacaoService} from '../../services/informacao/InformacaoService'

class InformacaoController2{
    async handle(req:Request, res:Response){
        const {titulo,mensagem,id_colaborador} = req.body;
        const informacaoServico = new InformacaoService();

        if(!req.file){
            const anexo ='';
            const informacao = await informacaoServico.execute({
                titulo,
                mensagem,
                anexo,
                id_colaborador
            });
            return res.json(informacao)
        }else{
            const {originalname,filename:anexo} = req.file;
            const informacao = await informacaoServico.execute({
                titulo,
                mensagem,
                anexo,
                id_colaborador
            });
            return res.json(informacao)
        }


        
    }
}

export {InformacaoController2}