import {Request,Response} from 'express'
import {ConsultaEmpresaService} from '../../services/empresa/ConsultaEmpresaService'

class ConsultaEmpresaController{
    async handle(req:Request, res:Response){
        const  listarempresa = new ConsultaEmpresaService();
        const empresas = await listarempresa.execute();
        return res.json(empresas);
    }
}

export{ConsultaEmpresaController}