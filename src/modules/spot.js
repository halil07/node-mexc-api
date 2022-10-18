const Spot = ({ PublicRequest, SignRequest }) => {
  return {
    symbols: () => PublicRequest("GET", "/open/api/v2/market/symbols"),
    servertime: () => PublicRequest("GET", "/open/api/v2/common/timestamp"),
    ping: () => PublicRequest("GET", "/open/api/v2/common/ping"),
    defaultSymbols: (options = {}) =>
      PublicRequest("GET", "/open/api/v2/market/ticker", options),
    ticker: (options = {}) =>
      PublicRequest("GET", "/open/api/v2/market/ticker", options),
    depth: (options = {}) =>
      PublicRequest("GET", "/open/api/v2/market/depth", options),
    deals: (options = {}) =>
      PublicRequest("GET", "/open/api/v2/market/deals", options),
    kline: (options = {}) =>
      PublicRequest("GET", "/open/api/v2/market/kline", options),
    coinList: () => PublicRequest("GET", "/open/api/v2/market/coin/list"),
    account: (options = {}) =>
      SignRequest("GET", "/open/api/v2/account/info", options),
    apiAccount: (options = {}) =>
      SignRequest("GET", "/open/api/v2/market/api_symbols", options),
    placeOrder: (options = {}) =>
      SignRequest("POST", "/open/api/v2/order/place", options),
    cancelOrder: (options = {}) =>
      SignRequest("DELETE", "/open/api/v2/order/cancel", options),
    multiPlaceOrder: (options = {}) =>
      SignRequest("POST", "/open/api/v2/order/place_batch", options),
    getOpenOrder: (options = {}) =>
      SignRequest("GET", "/open/api/v2/order/open_orders", options),
    getAllOrder: (options = {}) =>
      SignRequest("GET", "/open/api/v2/order/list", options),
    queryOrderById: (options = {}) =>
      SignRequest("GET", "/open/api/v2/order/query", options),
    getOrderDeal: (options = {}) =>
      SignRequest("GET", "/open/api/v2/order/deals", options),
    queryOrderDealById: (options = {}) =>
      SignRequest("GET", "/open/api/v2/order/deal_detail", options),
    cancelBySymbol: (options = {}) =>
      SignRequest("DELETE", "/open/api/v2/order/cancel_by_symbol", options),
    getDepositList: (options = {}) =>
      SignRequest("GET", "/open/api/v2/asset/deposit/address/list", options),
    getDepositRecord: (options = {}) =>
      SignRequest("GET", "/open/api/v2/asset/deposit/list", options),
    getWithdrawList: (options = {}) =>
      SignRequest("GET", "/open/api/v2/asset/withdraw/list", options),
    withdraw: (options = {}) =>
      SignRequest("POST", "/open/api/v2/asset/withdraw", options),
    cancelWithdraw: (options = {}) =>
      SignRequest("DELETE", "/open/api/v2/asset/withdraw", options),
    transFer: (options = {}) =>
      SignRequest("POST", "/open/api/v2/asset/internal/transfer", options),
    getTransferRecord: (options = {}) =>
      SignRequest(
        "GET",
        "/open/api/v2/asset/internal/transfer/record",
        options
      ),
    getAvlTransfer: (options = {}) =>
      SignRequest("GET", "/open/api/v2/account/balance", options),
    queryTransferRecordById: (options = {}) =>
      SignRequest("GET", "/open/api/v2/asset/internal/transfer/info", options),
    testConnectivity: () => publicRequest("GET", "/api/v3/ping"),
    servertime: () => publicRequest("GET", "/api/v3/time"),
    exchangeInformation: () => publicRequest("GET", "/api/v3/exchangeInfo"),
    depth: (options = {}) => publicRequest("GET", "/api/v3/depth", options),
    recentTradesList: (options = {}) =>
      publicRequest("GET", "/api/v3/trades", options),
    OldTradeLookup: (options = {}) =>
      publicRequest("GET", "/api/v3/historicalTrades", options),
    compressedTradesList: (options = {}) =>
      publicRequest("GET", "/api/v3/aggTrades", options),
    kline: (options = {}) => publicRequest("GET", "/api/v3/klines", options),
    currentAveragePrice: (options = {}) =>
      publicRequest("GET", "/api/v3/avgPrice", options),
    tickerPriceChange: () => publicRequest("GET", "/api/v3/ticker/24hr"),
    symbolPriceTicker: () => publicRequest("GET", "/api/v3/ticker/price"),
    symbolOrderBook: () => publicRequest("GET", "/api/v3/ticker/bookTicker"),
    etfinfo: () => publicRequest("GET", "api/v3/etf/info"),
    testConnectivity: (options = {}) =>
      signRequest("POST", "/api/v3/order/test", options),
    order: (options = {}) => signRequest("POST", "/api/v3/order", options),
    cancelOrder: (options = {}) =>
      signRequest("DELETE", "/api/v3/order", options),

    cancelallOpenOrders: (options = {}) =>
      signRequest("DELETE", "/api/v3/openOrders", options),

    queryOrder: (options = {}) => signRequest("GET", "/api/v3/order", options),

    currentOpenOrders: (options = {}) =>
      signRequest("GET", "/api/v3/openOrders", options),

    allOrders: (options = {}) =>
      signRequest("GET", "/api/v3/allOrders", options),

    accountInformation: (options = {}) =>
      signRequest("GET", "/api/v3/account", options),

    accountTradeList: (options = {}) =>
      signRequest("GET", "/api/v3/myTrades", options),

    virtualSubAccount: (options = {}) =>
      signRequest("POST", "/api/v3/sub-account/virtualSubAccount", options),

    subAccountList: (options = {}) =>
      signRequest("GET", "/api/v3/sub-account/list", options),

    virtualApikey: (options = {}) =>
      signRequest("POST", "/api/v3/sub-account/apiKey", options),

    getApiKey: (options = {}) =>
      signRequest("GET", "/api/v3/sub-account/apiKey", options),

    delAccount: (options = {}) =>
      signRequest("DELETE", "/api/v3/sub-account/apiKey", options),

    tradeMode: (options = {}) =>
      signRequest("POST", "/api/v3/margin/tradeMode", options),

    marginOrder: (options = {}) =>
      signRequest("POST", "/api/v3/margin/order", options),

    loan: (options = {}) => signRequest("POST", "/api/v3/margin/loan", options),

    repay: (options = {}) =>
      signRequest("POST", "/api/v3/margin/repay", options),

    cancelAllMargin: (options = {}) =>
      signRequest("DELETE", "/api/v3/margin/openOrders", options),

    cancelMargin: (options = {}) =>
      signRequest("DELETE", "/api/v3/margin/order", options),

    loanRecord: (options = {}) =>
      signRequest("GET", "/api/v3/margin/loan", options),

    allOrdersRecord: (options = {}) =>
      signRequest("GET", "/api/v3/margin/allOrders", options),

    myTrades: (options = {}) =>
      signRequest("GET", "/api/v3/margin/myTrades", options),

    marginOpenOrders: (options = {}) =>
      signRequest("GET", "/api/v3/margin/openOrders", options),

    maxTransferableh: (options = {}) =>
      signRequest("GET", "/api/v3/margin/maxTransferableh", options),

    priceIndex: (options = {}) =>
      signRequest("GET", "/api/v3/margin/priceIndex", options),

    marginOrder: (options = {}) =>
      signRequest("GET", "/api/v3/margin/order", options),

    isolatedAccount: (options = {}) =>
      signRequest("GET", "/api/v3/margin/isolated/account", options),

    trigerOrder: (options = {}) =>
      signRequest("GET", "/api/v3/margin/trigerOrder", options),

    maxBorrowable: (options = {}) =>
      signRequest("GET", "/api/v3/margin/maxBorrowable", options),

    repayRecord: (options = {}) =>
      signRequest("GET", "/api/v3/margin/repay", options),

    isolatedPair: (options = {}) =>
      signRequest("GET", "/api/v3/margin/isolated/pair", options),

    forceLiquidationRec: (options = {}) =>
      signRequest("GET", "/api/v3/margin/forceLiquidationRec", options),

    isolatedMarginData: (options = {}) =>
      signRequest("GET", "/api/v3/margin/isolatedMarginData", options),

    isolatedMarginTier: (options = {}) =>
      signRequest("GET", "/api/v3/margin/isolatedMarginTier", options),
  };
};
module.exports = Spot;
