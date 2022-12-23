"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
//En TS se pueden definir los tipos
const express_1 = __importDefault(require("express")); //lo de los parentesis se define el tipo de dato
const morgan_1 = __importDefault(require("morgan")); //se pueden ver las peticiones que se hacen
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const colorRoutes_1 = __importDefault(require("./routes/colorRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //express() devuelve un objeto
        this.config();
        this.routes();
    }
    config() {
        dotenv.config();
        this.app.set('port', process.env.PORT || 3001); //el process es para que si ya exite un puerto definido se toma ese o sino agarra el 3000
        //ese set es de app, es como si se le hubiera declarado una variable a app
        this.app.use((0, morgan_1.default)('dev')); //el dev es para ver lo que estan pidiendo los clientes
        this.app.use((0, cors_1.default)()); //pedir los datos al servidor 
        this.app.use(express_1.default.json()); //para que entienda el formato json y guarda en un req.body
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/colores', colorRoutes_1.default);
        this.app.use('/products', productRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
exports.server = new Server(); //ejecutara el constructor
exports.server.start();
