"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../constants/config");
const subscribe_1 = require("../constants/subscribe");
const helper = require("../helper");
class StreamController {
    getStream(req, res) {
        res.writeHead(200, config_1.header);
        let dataObject = {};
        let ws = subscribe_1.stream();
        ws.on('message', (data) => {
            let bdata = JSON.parse(data);
            let buy = bdata.b;
            let sell = bdata.a;
            let result = helper.getAverage(buy, sell);
            if (result.buy != undefined && result.sell != undefined) {
                dataObject = result;
                console.log(dataObject);
                res.write("data:" + JSON.stringify(dataObject) + "\n\n");
            }
        });
    }
}
exports.StreamController = StreamController;
//# sourceMappingURL=index.js.map