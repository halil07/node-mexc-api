import Mexc, {IOptions} from "./base";

export default class Contract extends Mexc {
    private contractBaseUrl:string = 'https://contract.mexc.com/api/v1/';
    constructor({apiKey, apiSecret}: IOptions) {
        super({apiKey, apiSecret});
        return this;
    }

    serverTime() {
        return this.publicRequestV3('GET', `${this.contractBaseUrl}contract/ping`)
    }

    contractDetail() {
        return this.publicRequestV3('GET', `${this.contractBaseUrl}contract/detail`)
    }

    supportCurrencies() {
        return this.publicRequestV3('GET', `${this.contractBaseUrl}contract/support_currencies`)
    }

    depthBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/depth/{symbol}`,
            options
        )
    }

    depthCommitsBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/depth_commits/{symbol}/{limit}`,
            options
        )
    }

    indexPriceBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/index_price/{symbol}`,
            options
        )
    }

    fairPriceBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/fair_price/{symbol}`,
            options
        )
    }

    fundingRateBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/funding_rate/{symbol}`,
            options
        )
    }

    klineBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/kline/{symbol}`,
            options
        )
    }

    indexPriceKlineBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/kline/index_price/{symbol}`,
            options
        )
    }

    fairPriceKlineBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/kline/fair_price/{symbol}`,
            options
        )
    }

    dealsBySymbol(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/deals/{symbol}`,
            options
        )
    }

    ticker() {
        return this.publicRequestV3('GET', `${this.contractBaseUrl}contract/ticker`)
    }

    riskReverse() {
        return this.publicRequestV3('GET', `${this.contractBaseUrl}contract/risk_reverse`)
    }

    riskReverseHistory(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/risk_reverse/history`,
            options
        )
    }

    fundingRateHistory(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/funding_rate/history`,
            options
        )
    }

    assets(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/assets`,
            options
        )
    }

    assetByCurrency(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/asset/{currency}`,
            options
        )
    }

    transferRecord(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/transfer_record`,
            options
        )
    }

    historyPositions(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/list/history_positions`,
            options
        )
    }

    openPositions(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/open_positions`,
            options
        )
    }

    fundingRecords(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/funding_records`,
            options
        )
    }

    openOrders(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/list/open_orders/{symbol}`,
            options
        )
    }

    historyOrders(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/list/history_orders`,
            options
        )
    }

    externalByExternalOid(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/external/{symbol}/{external_oid}`,
            options
        )
    }

    queryOrderById(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/get/{order_id}`,
            options
        )
    }

    batchQueryById(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/batch_query`,
            options
        )
    }

    dealDetails(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/deal_details/{order_id}`,
            options
        )
    }

    orderDeals(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/list/order_deals`,
            options
        )
    }

    planOrder(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/planorder/list/orders`,
            options
        )
    }

    stopOrder(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/stoporder/list/orders`,
            options
        )
    }

    riskLimit(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/risk_limit`,
            options
        )
    }

    tieredFeeRate(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/tiered_fee_rate`,
            options
        )
    }

    changeMargin(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/position/change_margin`,
            options
        )
    }

    leverage(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/leverage`,
            options
        )
    }

    changeLeverage(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/position/change_leverage`,
            options
        )
    }

    changePositionMode(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/position/position_mode`,
            options
        )
    }

    placeNewOrder(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/submit`,
            options
        )
    }

    placeNewOrderBatch(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/submit_batch`,
            options
        )
    }

    cancelOrderById(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/cancel`,
            options
        )
    }

    cancelWithExternal(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/cancel_with_external`,
            options
        )
    }

    cancelAll(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/cancel_all`,
            options
        )
    }

    placePlanOrder(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/submit_batch`,
            options
        )
    }

    cancelPlanOrder(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/planorder/cancel`,
            options
        )
    }

    cancel_all_plan_order(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/planorder/cancel_all`,
            options
        )


    }

    cancelStopOrder(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/cancel`,
            options
        )
    }

    cancelAllStopOrder(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/cancel_all`,
            options
        )
    }

    stopOrderChangePrice(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/change_price`,
            options
        )
    }

    stopOrderChangePlanPrice(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/change_plan_price`,
            options
        )
    }
}
