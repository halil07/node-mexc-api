#### Installation: **`npm install -s node-mexc-api`**
[![npm install node-mexc-api](https://nodei.co/npm/node-mexc-api.png?mini=true)](https://npmjs.org/package/node-mexc-api)

#### Getting started
```javascript
const Mexc = require('node-mexc-api').default;
require("dotenv").config();


const mexc = new Mexc({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.SECRET_KEY
});
```

#### Spot
```javascript
    await mexc.spot.symbols();
    await mexc.spot.serverTime();
    await mexc.spot.ping();
    await mexc.spot.defaultSymbols(options?: {});
    await mexc.spot.ticker(options?: {});
    await mexc.spot.depthV2(options?: {});
    await mexc.spot.deals(options?: {});
    await mexc.spot.klineV2(options?: {});
    await mexc.spot.coinList();
    await mexc.spot.account(options?: {});
    await mexc.spot.apiAccount(options?: {});
    await mexc.spot.placeOrder(options?: {});
    await mexc.spot.cancelOrderV2(options?: {});
    await mexc.spot.multiPlaceOrder(options?: {});
    await mexc.spot.getOpenOrder(options?: {});
    await mexc.spot.getAllOrder(options?: {});
    await mexc.spot.queryOrderById(options?: {});
    await mexc.spot.getOrderDeal(options?: {});
    await mexc.spot.queryOrderDealById(options?: {});
    await mexc.spot.cancelBySymbol(options?: {});
    await mexc.spot.getDepositList(options?: {});
    await mexc.spot.getDepositRecord(options?: {});
    await mexc.spot.getWithdrawList(options?: {});
    await mexc.spot.withdraw(options?: {});
    await mexc.spot.cancelWithdraw(options?: {});
    await mexc.spot.transFer(options?: {});
    await mexc.spot.getTransferRecord(options?: {});
    await mexc.spot.getAvlTransfer(options?: {});
    await mexc.spot.queryTransferRecordById(options?: {});
    await mexc.spot.pingV3();
    await mexc.spot.serverTimeV3();
    await mexc.spot.exchangeInformation();
    await mexc.spot.depth(options?: {});
    await mexc.spot.recentTradesList(options?: {});
    await mexc.spot.oldTradeLookup(options?: {});
    await mexc.spot.compressedTradesList(options?: {});
    await mexc.spot.kline(options?: {});
    await mexc.spot.currentAveragePrice(options?: {});
    await mexc.spot.tickerPriceChange();
    await mexc.spot.symbolPriceTicker();
    await mexc.spot.symbolOrderBook();
    await mexc.spot.etfInfo();
    await mexc.spot.testConnectivity(options?: {});
    await mexc.spot.order(options?: {});
    await mexc.spot.cancelOrder(options?: {});
    await mexc.spot.cancelAllOpenOrders(options?: {});
    await mexc.spot.queryOrder(options?: {});
    await mexc.spot.currentOpenOrders(options?: {});
    await mexc.spot.allOrders(options?: {});
    await mexc.spot.accountInformation(options?: {});
    await mexc.spot.accountTradeList(options?: {});
    await mexc.spot.virtualSubAccount(options?: {});
    await mexc.spot.subAccountList(options?: {});
    await mexc.spot.virtualApikey(options?: {});
    await mexc.spot.getApiKey(options?: {});
    await mexc.spot.delAccount(options?: {});
    await mexc.spot.tradeMode(options?: {});
    await mexc.spot.marginOrderV3(options?: {});
    await mexc.spot.loan(options?: {});
    await mexc.spot.repay(options?: {});
    await mexc.spot.cancelAllMargin(options?: {});
    await mexc.spot.cancelMargin(options?: {});
    await mexc.spot.loanRecord(options?: {});
    await mexc.spot.allOrdersRecord(options?: {});
    await mexc.spot.myTrades(options?: {});
    await mexc.spot.marginOpenOrders(options?: {});
    await mexc.spot.maxTransferable(options?: {});
    await mexc.spot.priceIndex(options?: {});
    await mexc.spot.marginOrder(options?: {});
    await mexc.spot.isolatedAccount(options?: {});
    await mexc.spot.trigerOrder(options?: {});
    await mexc.spot.maxBorrowable(options?: {});
    await mexc.spot.repayRecord(options?: {});
    await mexc.spot.isolatedPair(options?: {});
    await mexc.spot.forceLiquidationRec(options?: {});
    await mexc.spot.isolatedMarginData(options?: {});
    await mexc.spot.isolatedMarginTier(options?: {});
```

#### Contract
```javascript
    await mexc.contract.serverTime();
    await mexc.contract.contractDetail();
    await mexc.contract.supportCurrencies();
    await mexc.contract.depthBySymbol(options?: {});
    await mexc.contract.depthCommitsBySymbol(options?: {});
    await mexc.contract.indexPriceBySymbol(options?: {});
    await mexc.contract.fairPriceBySymbol(options?: {});
    await mexc.contract.fundingRateBySymbol(options?: {});
    await mexc.contract.klineBySymbol(options?: {});
    await mexc.contract.indexPriceKlineBySymbol(options?: {});
    await mexc.contract.fairPriceKlineBySymbol(options?: {});
    await mexc.contract.dealsBySymbol(options?: {});
    await mexc.contract.ticker();
    await mexc.contract.riskReverse();
    await mexc.contract.riskReverseHistory(options?: {});
    await mexc.contract.fundingRateHistory(options?: {});
    await mexc.contract.assets(options?: {});
    await mexc.contract.assetByCurrency(options?: {});
    await mexc.contract.transferRecord(options?: {});
    await mexc.contract.historyPositions(options?: {});
    await mexc.contract.openPositions(options?: {});
    await mexc.contract.fundingRecords(options?: {});
    await mexc.contract.openOrders(options?: {});
    await mexc.contract.historyOrders(options?: {});
    await mexc.contract.externalByExternalOid(options?: {});
    await mexc.contract.queryOrderById(options?: {});
    await mexc.contract.batchQueryById(options?: {});
    await mexc.contract.dealDetails(options?: {});
    await mexc.contract.orderDeals(options?: {});
    await mexc.contract.planOrder(options?: {});
    await mexc.contract.stopOrder(options?: {});
    await mexc.contract.riskLimit(options?: {});
    await mexc.contract.tieredFeeRate(options?: {});
    await mexc.contract.changeMargin(options?: {});
    await mexc.contract.leverage(options?: {});
    await mexc.contract.changeLeverage(options?: {});
    await mexc.contract.changePositionMode(options?: {});
    await mexc.contract.placeNewOrder(options?: {});
    await mexc.contract.placeNewOrderBatch(options?: {});
    await mexc.contract.cancelOrderById(options?: {});
    await mexc.contract.cancelWithExternal(options?: {});
    await mexc.contract.cancelAll(options?: {});
    await mexc.contract.placePlanOrder(options?: {});
    await mexc.contract.cancelPlanOrder(options?: {});
    await mexc.contract.cancel_all_plan_order(options?: {});
    await mexc.contract.cancelStopOrder(options?: {});
    await mexc.contract.cancelAllStopOrder(options?: {});
    await mexc.contract.stopOrderChangePrice(options?: {});
    await mexc.contract.stopOrderChangePlanPrice(options?: {});
```
