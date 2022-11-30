import { Router } from 'express';//definir un enrutador
import { indexController } from '../controllers/indexController';

class IndexRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/',indexController.index);
        this.router.get('/usuarios',indexController.usuarios);

    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;