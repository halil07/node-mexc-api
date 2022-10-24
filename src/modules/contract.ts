import Mexc, {IOptions} from "./base";

export default class Contract extends Mexc {
    constructor({apiKey, apiSecret}: IOptions) {
        super({apiKey, apiSecret});
        return this;
    }

    serverTime() {
        return this.publicRequest('GET', 'https://contract.mexc.com/api/v1/contract/ping')
    }

    contractDetail() {
        return this.publicRequest('GET', 'https://contract.mexc.com/api/v1/contract/detail')
    }

    supportCurrencies() {
        return this.publicRequest('GET', 'https://contract.mexc.com/api/v1/contract/support_currencies')
    }

    depthBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/depth/{symbol}',
            options
        )
    }

    depthCommitsBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/depth_commits/{symbol}/{limit}',
            options
        )
    }

    indexPriceBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/index_price/{symbol}',
            options
        )
    }

    fairPriceBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/fair_price/{symbol}',
            options
        )
    }

    fundingRateBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/funding_rate/{symbol}',
            options
        )
    }

    klineBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/kline/{symbol}',
            options
        )
    }

    indexPriceKlineBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/kline/index_price/{symbol}',
            options
        )
    }

    fairPriceKlineBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/kline/fair_price/{symbol}',
            options
        )
    }

    dealsBySymbol(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/deals/{symbol}',
            options
        )
    }

    ticker() {
        return this.publicRequest('GET', 'https://contract.mexc.com/api/v1/contract/ticker')
    }

    riskReverse() {
        return this.publicRequest('GET', 'https://contract.mexc.com/api/v1/contract/risk_reverse')
    }

    riskReverseHistory(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/risk_reverse/history',
            options
        )
    }

    fundingRateHistory(options = {}) {
        return this.publicRequest(
            'GET',
            'https://contract.mexc.com/api/v1/contract/funding_rate/history',
            options
        )
    }

    assets(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/account/assets',
            options
        )
    }

    assetByCurrency(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/account/asset/{currency}',
            options
        )
    }

    transferRecord(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/account/transfer_record',
            options
        )
    }

    historyPositions(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/position/list/history_positions',
            options
        )
    }

    openPositions(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/position/open_positions',
            options
        )
    }

    fundingRecords(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/position/funding_records',
            options
        )
    }

    openOrders(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/order/list/open_orders/{symbol}',
            options
        )
    }

    historyOrders(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/order/list/history_orders',
            options
        )
    }

    externalByExternalOid(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/order/external/{symbol}/{external_oid}',
            options
        )
    }

    queryOrderById(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/order/get/{order_id}',
            options
        )
    }

    batchQueryById(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/order/batch_query',
            options
        )
    }

    dealDetails(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/order/deal_details/{order_id}',
            options
        )
    }

    orderDeals(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/order/list/order_deals',
            options
        )
    }

    planOrder(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/planorder/list/orders',
            options
        )
    }

    stopOrder(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/stoporder/list/orders',
            options
        )
    }

    riskLimit(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/account/risk_limit',
            options
        )
    }

    tieredFeeRate(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/account/tiered_fee_rate',
            options
        )
    }

    changeMargin(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/position/change_margin',
            options
        )
    }

    leverage(options = {}) {
        return this.SignRequest(
            'GET',
            'https://contract.mexc.com/api/v1/private/position/leverage',
            options
        )
    }

    changeLeverage(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/position/change_leverage',
            options
        )
    }

    changePositionMode(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/position/position_mode',
            options
        )
    }

    placeNewOrder(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/order/submit',
            options
        )
    }

    placeNewOrderBatch(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/order/submit_batch',
            options
        )
    }

    cancelOrderById(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/order/cancel',
            options
        )
    }

    cancelWithExternal(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/order/cancel_with_external',
            options
        )
    }

    cancelAll(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/order/cancel_all',
            options
        )
    }

    placePlanOrder(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/order/submit_batch',
            options
        )
    }

    cancelPlanOrder(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/planorder/cancel',
            options
        )
    }

    cancel_all_plan_order(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/planorder/cancel_all',
            options
        )


    }

    cancelStopOrder(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/stoporder/cancel',
            options
        )
    }

    cancelAllStopOrder(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/stoporder/cancel_all',
            options
        )
    }

    stopOrderChangePrice(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/stoporder/change_price',
            options
        )
    }

    stopOrderChangePlanPrice(options = {}) {
        return this.SignRequest(
            'POST',
            'https://contract.mexc.com/api/v1/private/stoporder/change_plan_price',
            options
        )
    }
}
