import { Router } from 'express';//definir un enrutador
import { indexController } from '../controllers/indexController';
import { colorController } from '../controllers/colorController';

class IndexRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/',indexController.index);
        this.router.get('/color',colorController.getColores);
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;