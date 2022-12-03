"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorController = void 0;
class ColorController {
    constructor() {
        this.data = [{
                id: 0,
                color: 'blanco',
                status: true
            }];
        this.getColores = (req, res) => {
            res.json(this.data.filter((item) => item.status));
        };
        this.getColor = (req, res) => {
            let id = req.params.id;
            let color = this.data.find((item) => item.id == id);
            if (color) {
                res.status(200).json(color);
            }
            else {
                res.status(404).json(null);
            }
        };
        this.newColor = (req, res) => {
            let newID = this.data[this.data.length - 1].id + 1;
            let tmpColor = {
                id: newID,
                color: req.body.color,
                status: true
            };
            this.data.push(tmpColor);
            res.json(tmpColor);
        };
        this.editColor = (req, res) => {
            let id = req.params.id;
            let response = {};
            for (const item of this.data) {
                if (item.id == id) {
                    item.color = req.body.color;
                    response = item;
                }
            }
            res.json(response);
        };
        this.removeColor = (req, res) => {
            let id = req.params.id;
            let response = {};
            for (const item of this.data) {
                if (item.id == id) {
                    item.status = false;
                    response = item;
                }
            }
            res.json(response);
        };
    }
}
exports.colorController = new ColorController();
