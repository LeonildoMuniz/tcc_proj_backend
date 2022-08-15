import {Request,Response} from 'express'
import {AutenticarMensService} from  '../../services/autenticacao/AutenticacaoMensService'

class AutenticarMensController{
    async handle(req: Request, res: Response){
        const {matricula,senha} = req.body;

        const autenticacao = new AutenticarMensService();

        const autentica = await autenticacao.execute({
            matricula,
            senha
        })
        return res.json(autentica);
    }
}

export {AutenticarMensController}