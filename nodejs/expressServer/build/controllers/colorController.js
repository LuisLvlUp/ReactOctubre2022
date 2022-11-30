"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorController = void 0;
class ColorController {
    inicio(req, res) {
        res.json({ color: 'blanco' });
    }
    rojo(req, res) {
        res.json({ color: 'rojo' });
    }
    azul(req, res) {
        res.json({ color: 'azul' });
    }
}
exports.colorController = new ColorController();
