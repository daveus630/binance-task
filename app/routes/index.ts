import {Request, Response} from 'express';
import * as path from 'path';
import {StreamController} from '../controller';

export class Routes {

    streamController: StreamController = new StreamController();

    public routes(app: any): void { 
        app.route('/')
            .get((req: Request, res: Response) => {
                res.sendFile(path.join(__dirname, '../../index.html'));
        });

        app.route('/stream')
            .get(this.streamController.getStream);
    }
}