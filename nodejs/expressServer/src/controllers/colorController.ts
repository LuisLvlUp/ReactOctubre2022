import {Request,response, Response} from 'express';

class ColorController{

    public inicio(req: Request, res:Response){
        res.json({color:'blanco'}) 
    }

    public rojo(req: Request, res:Response){
        res.json({color:'rojo'}) 
    }
    public azul(req: Request, res:Response){
        res.json({color:'azul'}) 
    }
}
export const colorController = new ColorController();