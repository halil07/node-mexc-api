const Future = ({ publicRequest, SignRequest }) => {
  return {
    servertime: () => publicRequest("GET", "api/v1/contract/ping"),
    contractDetail: () => publicRequest("GET", "api/v1/contract/detail"),
    supportCurrencies: () =>
      publicRequest("GET", "api/v1/contract/support_currencies"),
    depthBySymbol: (options = {}) =>
      publicRequest("GET", "api/v1/contract/depth/{symbol}", options),
    depthcommitsBySymbol: (options = {}) =>
      publicRequest(
        "GET",
        "api/v1/contract/depth_commits/{symbol}/{limit}",
        options
      ),
    indexPriceBySymbol: (options = {}) =>
      publicRequest("GET", "api/v1/contract/index_price/{symbol}", options),

    fairPriceBySymbol: (options = {}) =>
      publicRequest("GET", "api/v1/contract/fair_price/{symbol}", options),

    fundingRateBySymbol: (options = {}) =>
      publicRequest("GET", "api/v1/contract/funding_rate/{symbol}", options),

    klineBySymbol: (options = {}) =>
      publicRequest("GET", "api/v1/contract/kline/{symbol}", options),

    indexPriceKlineBySymbol: (options = {}) =>
      publicRequest(
        "GET",
        "api/v1/contract/kline/index_price/{symbol}",
        options
      ),

    fairPriceKlineBySymbol: (options = {}) =>
      publicRequest(
        "GET",
        "api/v1/contract/kline/fair_price/{symbol}",
        options
      ),

    dealsBySymbol: (options = {}) =>
      publicRequest("GET", "api/v1/contract/deals/{symbol}", options),

    ticker: () => publicRequest("GET", "api/v1/contract/ticker"),

    riskReverse: () => publicRequest("GET", "api/v1/contract/risk_reverse"),

    riskReverseHistory: (options = {}) =>
      publicRequest("GET", "api/v1/contract/risk_reverse/history", options),

    fundingRateHistory: (options = {}) =>
      publicRequest("GET", "api/v1/contract/funding_rate/history", options),

    assets: (options = {}) =>
      SignRequest("GET", "/api/v1/private/account/assets", options),

    assetByCurrency: (options = {}) =>
      SignRequest("GET", "/api/v1/private/account/asset/{currency}", options),

    transferRecord: (options = {}) =>
      SignRequest("GET", "/api/v1/private/account/transfer_record", options),

    historyPositions: (options = {}) =>
      SignRequest(
        "GET",
        "/api/v1/private/position/list/history_positions",
        options
      ),

    openPositions: (options = {}) =>
      SignRequest("GET", "/api/v1/private/position/open_positions", options),

    fundingRecords: (options = {}) =>
      SignRequest("GET", "/api/v1/private/position/funding_records", options),

    openOrders: (options = {}) =>
      SignRequest(
        "GET",
        "/api/v1/private/order/list/open_orders/{symbol}",
        options
      ),

    historyOrders: (options = {}) =>
      SignRequest("GET", "/api/v1/private/order/list/history_orders", options),

    externalByExternalOid: (options = {}) =>
      SignRequest(
        "GET",
        "/api/v1/private/order/external/{symbol}/{external_oid}",
        options
      ),

    queryOrderById: (options = {}) =>
      SignRequest("GET", "/api/v1/private/order/get/{order_id}", options),

    batchQueryById: (options = {}) =>
      SignRequest("GET", "/api/v1/private/order/batch_query", options),

    dealDetails: (options = {}) =>
      SignRequest(
        "GET",
        "/api/v1/private/order/deal_details/{order_id}",
        options
      ),

    orderDeals: (options = {}) =>
      SignRequest("GET", "/api/v1/private/order/list/order_deals", options),

    planorder: (options = {}) =>
      SignRequest("GET", "/api/v1/private/planorder/list/orders", options),

    stoporder: (options = {}) =>
      SignRequest("GET", "/api/v1/private/stoporder/list/orders", options),

    riskLimit: (options = {}) =>
      SignRequest("GET", "/api/v1/private/account/risk_limit", options),

    tieredFeeRate: (options = {}) =>
      SignRequest("GET", "/api/v1/private/account/tiered_fee_rate", options),

    changeMargin: (options = {}) =>
      SignRequest("POST", "/api/v1/private/position/change_margin", options),

    leverage: (options = {}) =>
      SignRequest("GET", "/api/v1/private/position/leverage", options),

    changeLeverage: (leverage, options = {}) =>
      SignRequest("POST", "api/v1/private/position/change_leverage", options),

    positionMode: (options = {}) =>
      SignRequest("GET", "/open/api/v2/asset/internal/transfer/info", options),

    changePositionMode: (options = {}) =>
      SignRequest("POST", "api/v1/private/position/position_mode", options),

    placeNewOrder: (options = {}) =>
      SignRequest("POST", "/api/v1/private/order/submit", options),

    placeNewOrderBatch: (options = {}) =>
      SignRequest("POST", "/api/v1/private/order/submit_batch", options),

    cancelOrderById: (options = {}) =>
      SignRequest("POST", "/api/v1/private/order/cancel", options),

    cancelWithExternal: (options = {}) =>
      SignRequest(
        "POST",
        "/api/v1/private/order/cancel_with_external",
        options
      ),

    cancelAll: (options = {}) =>
      SignRequest("POST", "/api/v1/private/order/cancel_all", options),

    placePlanOrder: (options = {}) =>
      SignRequest("POST", "/api/v1/private/order/submit_batch", options),

    cancelPlanOrder: (options = {}) =>
      SignRequest("POST", "/api/v1/private/planorder/cancel", options),

    cancelAllPlanOrder: (options = {}) =>
      SignRequest("POST", "/api/v1/private/planorder/cancel_all", options),

    cancelStopOrder: (options = {}) =>
      SignRequest("POST", "/api/v1/private/stoporder/cancel", options),

    cancelAllStopOrder: (options = {}) =>
      SignRequest("POST", "/api/v1/private/stoporder/cancel_all", options),

    stoporderChangePrice: (options = {}) =>
      SignRequest("POST", "/api/v1/private/stoporder/change_price", options),

    stopOrderChangePlanPrice: (options = {}) =>
      SignRequest(
        "POST",
        "/api/v1/private/stoporder/change_plan_price",
        options
      ),
  };
};

module.exports = Future;
