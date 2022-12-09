import {Request,Response} from 'express'
import {ConsAnversarianteService} from '../../services/aniversariante/ConsAnversarianteService'

class ConsAnversarianteController{
    async handle(req:Request, res:Response){
        const  listaAniversariante = new ConsAnversarianteService();
        const aniversariante = await listaAniversariante.execute();
        return res.json(aniversariante);
    }
}

export{ConsAnversarianteController}