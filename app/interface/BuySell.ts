import { IBuySell } from './IBuySell'
export class BuySell implements IBuySell {
    buy: object;
    sell: object;

    constructor(buy: object, sell:object) {
        this.buy = buy;
        this.sell = sell;
    }
    getBuySellObj(): object {
        return { 
            "buy" : this.buy,
            "sell" : this.sell
        }
    }
}