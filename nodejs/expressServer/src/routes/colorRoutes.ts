import { Router } from 'express';//definir un enrutador
import { colorController } from '../controllers/colorController';

class ColorRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/', colorController.getColores);
        this.router.get('/:id', colorController.getColor);
        this.router.post('/', colorController.newColor);
        this.router.put('/:id', colorController.editColor);
        this.router.delete('/:id', colorController.removeColor);
    }
}
const colorRoutes = new ColorRoutes();
export default colorRoutes.router;