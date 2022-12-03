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
        this.router.get('/', colorController_1.colorController.getColores);
        this.router.get('/:id', colorController_1.colorController.getColor);
        this.router.post('/', colorController_1.colorController.newColor);
        this.router.put('/:id', colorController_1.colorController.editColor);
        this.router.delete('/:id', colorController_1.colorController.removeColor);
    }
}
const colorRoutes = new ColorRoutes();
exports.default = colorRoutes.router;
