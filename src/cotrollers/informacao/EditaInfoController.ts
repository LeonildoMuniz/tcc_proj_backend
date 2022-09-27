import {Request,Response} from 'express'
import {EditaInfoService} from '../../services/informacao/EditaInfoService'

class EditaInfoController{
    async handle(req:Request, res:Response){
        const {id,titulo,mensagem} = req.body;
        const informacaoServico = new EditaInfoService();

        if(!req.file){
            const anexo ='';
            const informacao = await informacaoServico.execute({
                id:id,
                titulo,
                mensagem,
                anexo,
            });
            return res.json(informacao)
        }else{
            const {originalname,filename:anexo} = req.file;
            const informacao = await informacaoServico.execute({
                id:id,
                titulo,
                mensagem,
                anexo,
            });
            return res.json(informacao)
        }


        
    }
}

export {EditaInfoController}