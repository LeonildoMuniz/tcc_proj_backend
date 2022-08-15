import {Request,Response} from 'express'
import {AutenticarUserService} from  '../../services/autenticacao/AutenticacaoUserService'

class AutenticarUserController{
    async handle(req: Request, res: Response){
        const {matricula,senha} = req.body;

        const autenticacao = new AutenticarUserService();

        const autentica = await autenticacao.execute({
            matricula,
            senha
        })
        return res.json(autentica);
    }
}

export {AutenticarUserController}