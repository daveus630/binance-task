import  {BinanceData} from '../interface/BInanceData';
import {BuySell} from '../interface/BuySell'

export function getAverage(buy: any, sell:any): any {
    let buyResult = iterate(buy);
    let sellResult = iterate(sell);
    let obj:BuySell = new BuySell(buyResult, sellResult);
    return obj.getBuySellObj();
}

function iterate(bid) {
    let p = 0;
    let q = 0;
    let count = 0;

    if(bid.length !== 0) {
        bid.forEach((row, i) => {
            if(row[1] != 0) { 
                count++;
                p += parseFloat(row[0])
                q += parseFloat(row[1])
            }
        });
        if(count !== 0) {
            return getPrice( p, q, count);
        }
       
    }
}

function getPrice(side:any, amount: any, x:any) {
    let price:any = side;
    let amt:any = amount;
    let avg:any = parseInt(price) / x; 
    avg = parseFloat(avg).toFixed(2);
    let qty:any = parseFloat(amt).toFixed(8);
    let aq:any = avg * amt;
    let total:any = parseFloat(aq).toFixed(8);
    let bdata:BinanceData = new BinanceData(avg, qty, total);
    return bdata.getDataObj();
}
