"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const WebSocket = require("ws");
function stream() {
    let wsStream = config_1.config.endpoint +
        config_1.config.symbol +
        '@' + config_1.config.depth +
        '@' + config_1.config.frequency +
        'ms';
    return new WebSocket(wsStream);
}
exports.stream = stream;
//# sourceMappingURL=subscribe.js.map