"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //res.send('Hellon')
        res.json({ text: 'API is /api/' });
    }
}
exports.indexController = new IndexController();
