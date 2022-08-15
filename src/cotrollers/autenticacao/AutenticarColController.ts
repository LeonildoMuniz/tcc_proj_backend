import {Request,Response} from 'express'
import {AutenticarColService} from  '../../services/autenticacao/AutenticacaoColService'

class AutenticarColController{
    async handle(req: Request, res: Response){
        const {matricula,senha} = req.body;

        const autenticacao = new AutenticarColService();

        const autentica = await autenticacao.execute({
            matricula,
            senha
        })
        return res.json(autentica);
    }
}

export {AutenticarColController}