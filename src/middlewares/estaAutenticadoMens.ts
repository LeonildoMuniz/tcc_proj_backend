import {NextFunction, Request, Response} from 'express'
import {verify} from 'jsonwebtoken'
import primaClient from '../prisma';

interface PayLoad{
    sub: string;
}

export function estaAutenticadoMens(
    req: Request,
    res: Response,
    next: NextFunction
){
    const autorizacao = req.headers.authorization;


    if(!autorizacao){
        return res.status(401).end();
    }
    const [, token] = autorizacao.split(" ")
    try{
        const {sub} = verify(
            token,
            process.env.JWT_SECRETINFO
        ) as PayLoad;
        req.user_id = sub;

        return next();
    }

    catch{
        return res.status(401).end();
    }

}