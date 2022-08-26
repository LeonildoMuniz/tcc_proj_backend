import {Request,Response} from 'express'
import {ConsultaAlocacaoService} from '../../services/alocacao/ConsultaAlocacaoService'

class ConsultaAlocacaoController{
    async handle(req:Request, res:Response){
        const  listarempresa = new ConsultaAlocacaoService();
        const empresas = await listarempresa.execute();
        return res.json(empresas);
    }
}

export{ConsultaAlocacaoController}