export const config = {
    "endpoint": "wss://stream.binance.com:9443/ws/",
    "symbol": "btcusdt",
    "depth": "depth",
    "frequency": 100
}

export const header = {
	'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
}
