import {Request,Response} from 'express'
import {ListaColaboradoresService} from '../../services/colaborador/ListaColaboradorService';

class ListaColaboradoresController{
    async handle(req:Request, res: Response){

        const listaColaboradores = new ListaColaboradoresService();
        const colaborado = await listaColaboradores.execute()

        return res.json(colaborado)

    }
}

export {ListaColaboradoresController}