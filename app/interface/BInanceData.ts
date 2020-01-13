import { IBinanceData } from './IBinanceData'
export class BinanceData implements IBinanceData {
    average: any;
    quantity: any; 
    total: any;

    constructor( average:any, quantity:any, total:any) {
        this.average = average;
        this.quantity = quantity;
        this.total = total;
    }
    getDataObj(): object {
        return { 
            average : this.average,
            quantity : this.quantity,
            total: this.total
        }
    }
}