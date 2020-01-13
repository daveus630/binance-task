"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    "endpoint": "wss://stream.binance.com:9443/ws/",
    "symbol": "btcusdt",
    "depth": "depth",
    "frequency": 100
};
exports.header = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
};
//# sourceMappingURL=config.js.map