const MEXCAPI = require('../src/MexcApi');
require('dotenv').config()
const apiKey = process.env.API_KEY;
const apiSecret = process.env.SECRET_KEY;

const future = new MEXCAPI({
  apiKey,
  apiSecret,
  baseURL: "https://contract.mexc.com",
  type: 'future'
});

(async () => {
  const contractDetail = await future.contractDetail();
  const contractSize = contractDetail.data.map(x => ({contractSize: x.contractSize, symbol: x.symbol}));
  const contractTickers = await future.ticker();
  const tickers = contractTickers.data.map(x => ({price: x.lastPrice * contractSize.find(y => y.symbol===x.symbol)?.contractSize,lastPrice: x.lastPrice, contractSize: contractSize.find(y => y.symbol===x.symbol)?.contractSize, symbol: x.symbol}));
  console.log(tickers.find(a => a.symbol === '_USDT'))
})()
//future.contractDetail().then(console.log)
//Asset
//client.assets().then((response) => client.logger.log(response.data));


/*
//Contract Information
client
  .ContractDetail()
  .then((response) => client.logger.log(response.data))
  .catch((error) => client.logger.error(error));

//Depth
client
  .DepthBySymbol()
  .then((response) => client.logger.log(JSON.stringify(response.data)))
  .catch((error) => client.logger.error(error));

//Contractual funding rates
client
  .FundingRateHistory({
    symbol: "BTC_USDT",
    page_num: 1,
    page_size: 1,
  })
  .then((response) => client.logger.log(response.data))
  .catch((error) => client.logger.error(error));

//Place an order
client
  .PlaceNewOrder({
    symbol: "IMX_USDT",
    price: 0.1,
    vol: 10,
    side: 1,
    type: 1,
    openType: 2,
  })
  .then((response) => client.logger.log(response.data));

//Batch orders
client
  .PlaceNewOrderBatch([
    {
      symbol: "IMX_USDT",
      price: 0.1,
      vol: 10,
      side: 1,
      type: 1,
      openType: 2,
    },
    { symbol: "IMX_USDT", price: 0.2, vol: 10, side: 1, type: 1, openType: 2 },
  ])
  .then((response) => client.logger.log(response.data));

//Ticker
client
  .Ticker({ symbol: "BTC_USDT" })
  .then((response) => client.logger.log(response.data))
  .catch((error) => client.logger.error(error));
*/