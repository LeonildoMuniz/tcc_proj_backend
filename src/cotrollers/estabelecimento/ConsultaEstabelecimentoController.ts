import {Request,Response} from 'express'
import {ConsultaEstabelecimentoService} from '../../services/estabelecimento/ConsultaEstabelecimentoService'

class ConsultaEstabelecimentoController{
    async handle(req:Request, res:Response){
        const  listarempresa = new ConsultaEstabelecimentoService();
        const empresas = await listarempresa.execute();
        return res.json(empresas);
    }
}

export{ConsultaEstabelecimentoController}