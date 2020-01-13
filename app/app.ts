import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Routes} from './routes';


class App {
    public app: express.Application;
    public bRoute: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.bRoute.routes(this.app); 
    }

    private config(): void {
        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");         
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");         
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }
}

export default new App().app;