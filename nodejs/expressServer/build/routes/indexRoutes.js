"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', indexController_1.indexController.index);
        this.router.get('/usuarios', indexController_1.indexController.usuarios);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
