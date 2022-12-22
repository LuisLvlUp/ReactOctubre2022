import { Router } from 'express';//definir un enrutador
import { productController } from '../controllers/productController';

class ProductRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.get('/', productController.getProducts);
    }
}
const productRoutes = new ProductRoutes();
export default productRoutes.router;