"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //definir un enrutador
const colorController_1 = require("../controllers/colorController");
class ColorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //ruta inicial
        this.router.get('/', colorController_1.colorController.inicio);
        this.router.get('/azul', colorController_1.colorController.azul);
        this.router.get('/rojo', colorController_1.colorController.rojo);
    }
}
const colorRoutes = new ColorRoutes();
exports.default = colorRoutes.router;
