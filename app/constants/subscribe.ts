import {config} from './config'
import * as WebSocket from 'ws';

export function stream() { 
    let wsStream = config.endpoint + 
    config.symbol + 
    '@'+ config.depth + 
    '@'+ config.frequency +
    'ms';

    return new WebSocket(wsStream);
}
