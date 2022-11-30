import { Router } from 'express';//definir un enrutador
import { colorController } from '../controllers/colorController';

class ColorRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/', colorController.inicio);
        this.router.get('/azul', colorController.azul );
        this.router.get('/rojo', colorController.rojo );

    }
}
const colorRoutes = new ColorRoutes();
export default colorRoutes.router;