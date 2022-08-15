import {Request,Response} from 'express'
import {CriarEmpresaService} from '../../services/empresa/CriarEmpresaService'

class CriarEmpresaController{
    async handle(req:Request, res:Response){
        const {empresa, desc_empresa} = req.body;
        const criarEmpresaService = new CriarEmpresaService();

        const unidade = await criarEmpresaService.execute({
            empresa,
            desc_empresa
        });

        return res.json(unidade)
    }
}

export {CriarEmpresaController}