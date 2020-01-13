"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinanceData {
    constructor(average, quantity, total) {
        this.average = average;
        this.quantity = quantity;
        this.total = total;
    }
    getDataObj() {
        return {
            average: this.average,
            quantity: this.quantity,
            total: this.total
        };
    }
}
exports.BinanceData = BinanceData;
//# sourceMappingURL=BInanceData.js.map