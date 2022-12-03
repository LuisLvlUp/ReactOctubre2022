import {Request,response, Response} from 'express';

class ColorController{

    public data : any = [{
        id: 0,
        color: 'blanco',
        status: true
    }]

    public getColores = (req: Request, res:Response) => {
        res.json(this.data.filter( (item : any) => item.status)) 
    }

    public getColor = (req: Request, res:Response) => {
        let id = req.params.id
        let color = this.data.find( (item : any) => item.id == id )

        if(color){
            res.status(200).json(color) 
        }else{
            res.status(404).json(null) 
        }
    }

    public newColor = (req: Request, res:Response) => {
        let newID = this.data[this.data.length - 1].id + 1
        let tmpColor = {
            id: newID,
            color: req.body.color,
            status: true
        }
        this.data.push(tmpColor)
        res.json(tmpColor) 
    }

    public editColor = (req: Request, res:Response) => {
        let id = req.params.id
        let response = {}
        
        for (const item of this.data) {
            if(item.id == id){
                item.color = req.body.color
                response = item
            }
        }

        res.json(response) 
    }

    public removeColor = (req: Request, res:Response) => {
        let id = req.params.id
        let response = {}
        
        for (const item of this.data) {
            if(item.id == id){
                item.status = false
                response = item
            }
        }

        res.json(response) 
    }
}
export const colorController = new ColorController();