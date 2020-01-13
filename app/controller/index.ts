import {Request, Response} from 'express';
import { header } from '../constants/config';
import { stream } from '../constants/subscribe';
import * as helper from '../helper'

export class StreamController {

    public getStream(req: Request, res: Response) {
        res.writeHead(200, header);

        let dataObject = {}

        let ws = stream();

        ws.on('message', (data) => {
            let bdata = JSON.parse(data);
            let buy = bdata.b;
            let sell = bdata.a;
            let result = helper.getAverage(buy, sell);
            if(result.buy != undefined && result.sell != undefined) {
                dataObject = result;
                console.log(dataObject);
                res.write("data:"+JSON.stringify(dataObject) +"\n\n");
            }
        });
    }
}