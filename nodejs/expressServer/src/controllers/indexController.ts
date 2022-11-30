import {Request,response, Response} from 'express';

class IndexController{

    public index(req: Request, res:Response){
        //res.send('Hellon')
        res.json({text:'API is /api/'}) 
    }

    public usuarios(req: Request, res:Response){
        res.json({text:'api de usuarios'}) 
    }

}
export const indexController = new IndexController();