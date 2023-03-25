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

    depthBySymbol(params : {symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/depth/{symbol}`,
            params
        )
    }

    depthCommitsBySymbol(params: { symbol: string, limit: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/depth_commits/{symbol}/{limit}`,
            params
        )
    }

    indexPriceBySymbol(params: { symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/index_price/{symbol}`,
            params
        )
    }

    fairPriceBySymbol(params: { symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/fair_price/{symbol}`,
            params
        )
    }

    fundingRateBySymbol(params: { symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/funding_rate/{symbol}`,
            params
        )
    }

    klineBySymbol(params: { symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/kline/{symbol}`,
            params
        )
    }

    indexPriceKlineBySymbol(params: { symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/kline/index_price/{symbol}`,
            params
        )
    }

    fairPriceKlineBySymbol(params: { symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/kline/fair_price/{symbol}`,
            params
        )
    }

    dealsBySymbol(params: { symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/deals/{symbol}`,
            params
        )
    }

    ticker(params: { symbol?: string}) {
        return this.publicRequestV3('GET', `${this.contractBaseUrl}contract/ticker`, params)
    }

    riskReverse(params: { symbol?: string}) {
        return this.publicRequestV3('GET', `${this.contractBaseUrl}contract/risk_reverse`, params)
    }

    riskReverseHistory(params: { symbol: string, page_num: string, page_size: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/risk_reverse/history`,
            params
        )
    }

    fundingRateHistory(params: { symbol: string, page_num: string, page_size: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.contractBaseUrl}contract/funding_rate/history`,
            params
        )
    }

    assets() {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/assets`,
        )
    }

    assetByCurrency(params: {currency: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/asset/{currency}`,
            params
        )
    }

    transferRecord(params : {page_num:string, page_start:string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/transfer_record`,
            params
        )
    }

    historyPositions(params : {page_num:string, page_start:string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/list/history_positions`,
            params
        )
    }

    openPositions(params: { symbol: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/open_positions`,
            params
        )
    }

    fundingRecords(params: {symbol?: string, position_id?: string, page_num: string, page_size: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/funding_records`,
            params
        )
    }

    openOrders(params: {symbol: string, page_num:string, page_size: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/list/open_orders/{symbol}`,
            params
        )
    }

    historyOrders(params: {symbol: string, states: string, category: number, start_time: string, end_time: string, side: string, page_num: string, page_size: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/list/history_orders`,
            params
        )
    }

    externalByExternalOid(params: {symbol: string, external_oid: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/external/{symbol}/{external_oid}`,
            params
        )
    }

    queryOrderById(params: {order_id: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/get/{order_id}`,
            params
        )
    }

    batchQueryById(params: {order_ids: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/batch_query`,
            params
        )
    }

    dealDetails(params: {order_id: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/deal_details/{order_id}`,
            params
        )
    }

    orderDeals(params : {symbol: string, start_time: string, end_time: string, page_num:string, page_size: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/order/list/order_deals`,
            params
        )
    }

    planOrder(params : {symbol: string, states: string, start_time: string, end_time: string, page_num:string, page_size: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/planorder/list/orders`,
            params
        )
    }

    stopOrder(params : {symbol: string, is_finished: string, start_time: string, end_time: string, page_num:string, page_size: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/stoporder/list/orders`,
            params
        )
    }

    riskLimit(params: {symbol: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/risk_limit`,
            params
        )
    }

    tieredFeeRate(params: {symbol: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/account/tiered_fee_rate`,
            params
        )
    }

    changeMargin(params: {positionId: string, amount: string, type: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/position/change_margin`,
            params
        )
    }

    leverage(params: {symbol: string}) {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/leverage`,
            params
        )
    }

    changeLeverage(params: {positionId: string, leverage: string, openType: string, symbol: string, positionType: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/position/change_leverage`,
            params
        )
    }

    getPositionMode() {
        return this.signRequestV2(
            'GET',
            `${this.contractBaseUrl}private/position/position_mode`
        )
    }

    changePositionMode(params: {positionMode: 1 | 2}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/position/change_position_mode`,
            params
        )
    }

    //data
    placeNewOrder(params: {symbol: string, price: string, vol: string, leverage: string, side: string, type: string, openType: string, positionId: string, externalOid: string, stopLossPrice: string, takeProfitPrice: string, positionMode: string, reduceOnly: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/submit`,
            params
        )
    }

    //data
    placeNewOrderBatch(params: {symbol: string, price: string, vol: string, leverage: string, side: string, type: string, openType: string, positionId: string, externalOid: string, stopLossPrice: string, takeProfitPrice: string, positionMode: string, reduceOnly: string}[]) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/submit_batch`,
            params
        )
    }

    //data
    cancelOrderById(params: string[]) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/cancel`,
            params
        )
    }

    cancelWithExternal(params: {symbol: string, externalOid: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/cancel_with_external`,
            params
        )
    }

    cancelAll(params: {symbol: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/order/cancel_all`,
            params
        )
    }

    cancelPlanOrder(params: string[]) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/planorder/cancel`,
            params
        )
    }

    cancelAllPlanOrder(params: { symbol: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/planorder/cancel_all`,
            params
        )
    }

    cancelStopOrder(params: { stopPlanOrderId: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/cancel`,
            params
        )
    }

    cancelAllStopOrder(params: { symbol: string, positionId: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/cancel_all`,
            params
        )
    }

    stopOrderChangePrice(params: {orderId:string, stopLossPrice: string, takeProfitPrice: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/change_price`,
            params
        )
    }

    stopOrderChangePlanPrice(params: {stopPlanOrderId: string, stopLossPrice: string, takeProfitPrice: string}) {
        return this.signRequestV2(
            'POST',
            `${this.contractBaseUrl}private/stoporder/change_plan_price`,
            params
        )
    }
}
