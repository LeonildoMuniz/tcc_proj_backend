import {Request,Response} from 'express'
import {CriarColaboradorService} from '../../services/colaborador/CriarColaboradorService'

class CriarColaboradorController{
    async handle(req:Request, res:Response){
        const {nome,
            matricula,
            admissao,
            cpf,
            senha,
            acesso,
            status,
            admin,
            estrutura_id,
            cargo_id,
            alocacao_id} = req.body;

        const criarColaboradorService = new CriarColaboradorService();

        if(!req.file){
            const foto = '';
            
            const colaborador = await criarColaboradorService.execute({
                nome,
                matricula,
                admissao,
                cpf,
                senha,
                foto,
                acesso,
                status,
                admin,
                estrutura_id,
                cargo_id,
                alocacao_id,
        });
        return res.json(colaborador)

        }else{

            const {originalname,filename:foto} = req.file;
            
            const colaborador = await criarColaboradorService.execute({
                nome,
                matricula,
                admissao,
                cpf,
                senha,
                foto,
                acesso,
                status,
                admin,
                estrutura_id,
                cargo_id,
                alocacao_id,
        });
        return res.json(colaborador)
        }
    }
}

export {CriarColaboradorController}