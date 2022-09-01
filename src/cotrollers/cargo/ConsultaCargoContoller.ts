import {Request,Response} from 'express'
import {ConsultaCargoService} from '../../services/cargo/ConsultaCargoService'

class ConsultaCargoController{
    async handle(req:Request, res:Response){
        const  listarcargo = new ConsultaCargoService();
        const cargos = await listarcargo.execute();
        return res.json(cargos);
    }
}

export{ConsultaCargoController}