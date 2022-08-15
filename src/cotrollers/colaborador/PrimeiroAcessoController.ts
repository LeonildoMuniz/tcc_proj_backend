import {Request,Response} from 'express'
import {PrimeiroAcessoService} from '../../services/colaborador/PrimeiroAcessoService'

class PrimeiroAcessoController{
    async handle(req:Request, res:Response){
        const {matricula,admissao,cpf,senha} = req.body;
        const acesso = new PrimeiroAcessoService();

        const cadastrado = await acesso.execute({
            matricula,
            admissao,
            cpf,
            senha,
        });

        return res.json(cadastrado)
    }
}

export {PrimeiroAcessoController}