"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BInanceData_1 = require("../interface/BInanceData");
const BuySell_1 = require("../interface/BuySell");
function getAverage(buy, sell) {
    let buyResult = iterate(buy);
    let sellResult = iterate(sell);
    let obj = new BuySell_1.BuySell(buyResult, sellResult);
    return obj.getBuySellObj();
}
exports.getAverage = getAverage;
function iterate(bid) {
    let p = 0;
    let q = 0;
    let count = 0;
    if (bid.length !== 0) {
        bid.forEach((row, i) => {
            if (row[1] != 0) {
                count++;
                p += parseFloat(row[0]);
                q += parseFloat(row[1]);
            }
        });
        if (count !== 0) {
            return getPrice(p, q, count);
        }
    }
}
function getPrice(side, amount, x) {
    let price = side;
    let amt = amount;
    let avg = parseInt(price) / x;
    avg = parseFloat(avg).toFixed(2);
    let qty = parseFloat(amt).toFixed(8);
    let aq = avg * amt;
    let total = parseFloat(aq).toFixed(8);
    let bdata = new BInanceData_1.BinanceData(avg, qty, total);
    return bdata.getDataObj();
}
//# sourceMappingURL=index.js.map