import {Request,Response} from 'express'
import {AtualizaColaboradorService} from '../../services/colaborador/AtualizaColaboradorService'

class AtualizaColaboradorController{
    async handle(req:Request, res:Response){
        const {id, nome, senha, status, estrutura_id, cargo_id, alocacao_id} = req.body;
        const editaColaborador = new AtualizaColaboradorService();

        if(!req.file){
            const anexo ='';
            const informacao = await editaColaborador.execute({
                id:id,
                nome,
                senha,
                status,
                estrutura_id,
                cargo_id,
                alocacao_id,
                anexo,
            });
            return res.json(informacao)
        }else{
            const {originalname,filename:anexo} = req.file;
            const informacao = await editaColaborador.execute({
                id:id,
                nome,
                senha,
                status,
                estrutura_id,
                cargo_id,
                alocacao_id,
                anexo,
            });
            return res.json(informacao)
        }


        
    }
}

export {AtualizaColaboradorController}