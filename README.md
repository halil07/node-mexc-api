#### Installation: **`npm install node-mexc-api`**
[![npm install node-mexc-api](https://nodei.co/npm/node-mexc-api.png?mini=true)](https://npmjs.org/package/node-mexc-api)

#### Getting started
```typescript
const Mexc = require('node-mexc-api').default;
require("dotenv").config();


const mexc = new Mexc({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.SECRET_KEY
});
```

#### Spot
```typescript
    await mexc.spot.symbols();
    await mexc.spot.serverTime();
    await mexc.spot.ping();
    await mexc.spot.defaultSymbols();
    await mexc.spot.ticker({
        symbol?: string;
    });
    await mexc.spot.depthV2({
        symbol?: string;
        depth?: number;
    });
    await mexc.spot.deals({
        symbol: string;
        limit?: number;
    });
    await mexc.spot.klineV2({
        symbol: string;
        interval: string;
        start_time?: string;
        limit: string;
    });
    await mexc.spot.coinList({
        currency?: string;
    });
    await mexc.spot.account();
    await mexc.spot.apiAccount();
    await mexc.spot.placeOrder({
        client_order_id?: string;
        order_type: string;
        price: string;
        quantity: string;
        symbol: string;
        trade_type: string;
    });
    await mexc.spot.cancelOrderV2({
        order_ids: string;
        client_order_ids: string;
    });
    await mexc.spot.multiPlaceOrder({
        order_type: string;
        price: string;
        quantity: string;
        symbol: string;
        trade_type: string;
    }[]);
    await mexc.spot.getOpenOrder({
        symbol: string;
    });
    await mexc.spot.getAllOrder({
        states: string;
        symbol: string;
        trade_type: string;
    });
    await mexc.spot.queryOrderById({
        order_ids: string;
    });
    await mexc.spot.getOrderDeal({
        limit: string;
        start_time: string;
        symbol: string;
    });
    await mexc.spot.queryOrderDealById({
        order_id: string;
    });
    await mexc.spot.cancelBySymbol({
        symbol: string;
    });
    await mexc.spot.getDepositList({
        currency: string;
    });
    await mexc.spot.getDepositRecord({
        currency: string;
        start_time: string;
        end_time: string;
    });
    await mexc.spot.getWithdrawList({
        start_time: string;
        end_time: string;
        withdraw_id: string;
    });
    await mexc.spot.withdraw({
        currency: string;
        chain: string;
        amount: string;
        address: string;
    });
    await mexc.spot.transFer({
        sub_uid: string;
        currency: string;
        amount: string;
        type: string;
    });
    await mexc.spot.getTransferRecord({
        start_time: string;
        end_time: string;
    });
    await mexc.spot.getAvlTransfer({
        currency: string;
    });
    await mexc.spot.queryTransferRecordById({
        transact_id: string;
    });
    await mexc.spot.pingV3();
    await mexc.spot.serverTimeV3();
    await mexc.spot.exchangeInformation();
    await mexc.spot.depth({
        symbol: string;
    });
    await mexc.spot.recentTradesList({
        symbol: string;
    });
    await mexc.spot.oldTradeLookup({
        symbol: string;
    });
    await mexc.spot.compressedTradesList({
        symbol: string;
    });
    await mexc.spot.kline({
        symbol: string;
        interval: string;
    });
    await mexc.spot.currentAveragePrice({
        symbol: string;
    });
    await mexc.spot.tickerPriceChange();
    await mexc.spot.symbolPriceTicker();
    await mexc.spot.symbolOrderBook();
    await mexc.spot.etfInfo();
    await mexc.spot.testConnectivity({
        symbol: string;
        side: string;
        type: string;
        quantity: string;
        price: string;
    });
    await mexc.spot.order({
        symbol: string;
        side: string;
        type: string;
        quantity: string;
        price: string;
        quoteOrderQty: string;
    });
    await mexc.spot.cancelOrder({
        symbol: string;
        orderId: string;
    });
    await mexc.spot.cancelAllOpenOrders({
        symbol: string;
    });
    await mexc.spot.queryOrder({
        symbol: string;
        orderId: string;
    });
    await mexc.spot.currentOpenOrders({
        symbol: string;
    });
    await mexc.spot.allOrders({
        symbol: string;
    });
    await mexc.spot.accountInformation();
    await mexc.spot.accountTradeList({
        symbol: string;
    });
```

#### Contract
```typescript
    await mexc.contract.serverTime();
    await mexc.contract.contractDetail();
    await mexc.contract.supportCurrencies();
    await mexc.contract.depthBySymbol({
        symbol: string;
    });
    await mexc.contract.depthCommitsBySymbol({
        symbol: string;
        limit: string;
    });
    await mexc.contract.indexPriceBySymbol({
        symbol: string;
    });
    await mexc.contract.fairPriceBySymbol({
        symbol: string;
    });
    await mexc.contract.fundingRateBySymbol({
        symbol: string;
    });
    await mexc.contract.klineBySymbol({
        symbol: string;
    });
    await mexc.contract.indexPriceKlineBySymbol({
        symbol: string;
    });
    await mexc.contract.fairPriceKlineBySymbol({
        symbol: string;
    });
    await mexc.contract.dealsBySymbol({
        symbol: string;
    });
    await mexc.contract.ticker({
        symbol?: string;
    });
    await mexc.contract.riskReverse({
        symbol?: string;
    });
    await mexc.contract.riskReverseHistory({
        symbol: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.fundingRateHistory({
        symbol: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.assets();
    await mexc.contract.assetByCurrency({
        currency: string;
    });
    await mexc.contract.transferRecord({
        page_num: string;
        page_start: string;
    });
    await mexc.contract.historyPositions({
        page_num: string;
        page_start: string;
    });
    await mexc.contract.openPositions({
        symbol: string;
    });
    await mexc.contract.fundingRecords({
        symbol?: string;
        position_id?: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.openOrders({
        symbol: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.historyOrders({
        symbol: string;
        states: string;
        category: number;
        start_time: string;
        end_time: string;
        side: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.externalByExternalOid({
        symbol: string;
        external_oid: string;
    });
    await mexc.contract.queryOrderById({
        order_id: string;
    });
    await mexc.contract.batchQueryById({
        order_ids: string;
    });
    await mexc.contract.dealDetails({
        order_id: string;
    });
    await mexc.contract.orderDeals({
        symbol: string;
        start_time: string;
        end_time: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.planOrder({
        symbol: string;
        states: string;
        start_time: string;
        end_time: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.stopOrder({
        symbol: string;
        is_finished: string;
        start_time: string;
        end_time: string;
        page_num: string;
        page_size: string;
    });
    await mexc.contract.riskLimit({
        symbol: string;
    });
    await mexc.contract.tieredFeeRate({
        symbol: string;
    });
    await mexc.contract.changeMargin({
        positionId: string;
        amount: string;
        type: string;
    });
    await mexc.contract.leverage({
        symbol: string;
    });
    await mexc.contract.changeLeverage({
        positionId: string;
        leverage: string;
        openType: string;
        symbol: string;
        positionType: string;
    });
    await mexc.contract.getPositionMode();
    await mexc.contract.changePositionMode({
        positionMode: 1 | 2;
    });
    await mexc.contract.placeNewOrder({
        symbol: string;
        price: string;
        vol: string;
        leverage: string;
        side: string;
        type: string;
        openType: string;
        positionId: string;
        externalOid: string;
        stopLossPrice: string;
        takeProfitPrice: string;
        positionMode: string;
        reduceOnly: string;
    });
    await mexc.contract.placeNewOrderBatch({
        symbol: string;
        price: string;
        vol: string;
        leverage: string;
        side: string;
        type: string;
        openType: string;
        positionId: string;
        externalOid: string;
        stopLossPrice: string;
        takeProfitPrice: string;
        positionMode: string;
        reduceOnly: string;
    }[]);
    await mexc.contract.cancelOrderById(string[]);
    await mexc.contract.cancelWithExternal({
        symbol: string;
        externalOid: string;
    });
    await mexc.contract.cancelAll({
        symbol: string;
    });
    await mexc.contract.cancelPlanOrder(string[]);
    await mexc.contract.cancelAllPlanOrder({
        symbol: string;
    });
    await mexc.contract.cancelStopOrder({
        stopPlanOrderId: string;
    });
    await mexc.contract.cancelAllStopOrder({
        symbol: string;
        positionId: string;
    });
    await mexc.contract.stopOrderChangePrice({
        orderId: string;
        stopLossPrice: string;
        takeProfitPrice: string;
    });
    await mexc.contract.stopOrderChangePlanPrice({
        stopPlanOrderId: string;
        stopLossPrice: string;
        takeProfitPrice: string;
    });
```
