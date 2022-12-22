import {Request,response, Response} from 'express';

class ProductController{

    public productos : any = [
        {
            id: 1,
            precio: 1.25,
            stock: 15,
            nombre: "Tomate",
            descripcion: "Producto fresco del occidente de Guatemala.",
            img: "https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/tomates_-_vladimir_morozov.jpg"
        },
        {
            id: 2,
            precio: 2.50,
            stock: 12,
            nombre: "Cebolla",
            descripcion: "Cebolla fresca del occidente de Guatemala.",
            img: "https://grupodispersa.com.gt/wp-content/uploads/2016/01/5-cebolla-morada.jpg"
        },
        {
            id: 3,
            precio: 3,
            stock: 20,
            nombre: "Aguacate",
            descripcion: "Producto fresco del oriente de Guatemala.",
            img: "https://www.haifa-group.com/sites/default/files/crop/avocado%20cut%20isolated%2044503222_xxl.jpg"
        },
        {
            id: 4,
            precio: 6,
            stock: 40,
            nombre: "Piña",
            descripcion: "Fruta dulce.",
            img: "https://www.65ymas.com/uploads/s1/48/35/18/bigstock-whole-pineapple-and-pineapple-382336442_1_621x621.jpeg"
        },
        {
            id: 5,
            precio: 8,
            stock: 12,
            nombre: "Papaya",
            descripcion: "Dulce y grande",
            img: "https://imgmedia.buenazo.pe/650x358/buenazo/original/2021/05/05/609328224f09335dc51e4545.jpg"
        },
        {
            id: 6,
            precio: 13,
            stock: 100,
            nombre: "Pera",
            descripcion: "Pera de primera calidad",
            img: "https://www.gob.mx/cms/uploads/image/file/425838/Pera_3.jpg"
        },
    ]

    public getProducts = (req: Request, res:Response) => {
        res.json(this.productos) 
    }

}
export const productController = new ProductController();