"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const controller_1 = require("../controller");
class Routes {
    constructor() {
        this.streamController = new controller_1.StreamController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.sendFile(path.join(__dirname, '../../index.html'));
        });
        app.route('/stream')
            .get(this.streamController.getStream);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map