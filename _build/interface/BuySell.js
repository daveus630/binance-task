"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BuySell {
    constructor(buy, sell) {
        this.buy = buy;
        this.sell = sell;
    }
    getBuySellObj() {
        return {
            "buy": this.buy,
            "sell": this.sell
        };
    }
}
exports.BuySell = BuySell;
//# sourceMappingURL=BuySell.js.map