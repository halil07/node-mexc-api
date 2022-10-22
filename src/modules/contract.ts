import mexcBase, {IOptions} from "./base";

export default class Contract extends mexcBase{
    constructor({ apiKey, apiSecret}: IOptions) {
        super({apiKey, apiSecret,  type:'contract' });
    }
    public contractServerTime() {
        return this.publicRequest('GET', 'api/v1/contract/ping')
    }
    public contractContractDetail() {
        return this.publicRequest('GET', 'api/v1/contract/detail')
    }
    public contractSupportCurrencies() {
        return this.publicRequest('GET', 'api/v1/contract/support_currencies')
    }
    public contractDepthBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/depth/{symbol}',
            params
        )
    }
    public contractDepthCommitsBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/depth_commits/{symbol}/{limit}',
            params
        )
    }
    public contractIndexPriceBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/index_price/{symbol}',
            params
        )
    }
    public contractFairPriceBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/fair_price/{symbol}',
            params
        )
    }
    public contractFundingRateBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/funding_rate/{symbol}',
            params
        )
    }
    public contractKlineBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/kline/{symbol}',
            params
        )
    }
    public contractIndexPriceKlineBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/kline/index_price/{symbol}',
            params
        )
    }
    public contractFairPriceKlineBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/kline/fair_price/{symbol}',
            params
        )
    }
    public contractDealsBySymbol(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/deals/{symbol}',
            params
        )
    }
    public contractTicker() {
        return this.publicRequest('GET', 'api/v1/contract/ticker')
    }
    public contractRiskReverse() {
        return this.publicRequest('GET', 'api/v1/contract/risk_reverse')
    }
    public contractRiskReverseHistory(params = {}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/risk_reverse/history',
            params
        )
    }
    public contractFundingRateHistory(params={}) {
        return this.publicRequest(
            'GET',
            'api/v1/contract/funding_rate/history',
            params
        )
    }
    public contractAssets(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/account/assets',
            params
        )
    }
    public contractAssetByCurrency(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/account/asset/{currency}',
            params
        )
    }
    public contractTransferRecord(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/account/transfer_record',
            params
        )
    }
    public contractHistoryPositions(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/position/list/history_positions',
            params
        )
    }
    public contractOpenPositions(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/position/open_positions',
            params
        )
    }
    public contractFundingRecords(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/position/funding_records',
            params
        )
    }
    public contractOpenOrders(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/order/list/open_orders/{symbol}',
            params
        )
    }
    public contractHistoryOrders(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/order/list/history_orders',
            params
        )
    }
    public contractExternalByExternalOid(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/order/external/{symbol}/{external_oid}',
            params
        )
    }
    public contractQueryOrderById(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/order/get/{order_id}',
            params
        )
    }
    public contractBatchQueryById(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/order/batch_query',
            params
        )
    }
    public contractDealDetails(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/order/deal_details/{order_id}',
            params
        )
    }
    public contractOrderDeals(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/order/list/order_deals',
            params
        )
    }
    public contractPlanOrder(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/planorder/list/orders',
            params
        )
    }
    public contractStopOrder(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/stoporder/list/orders',
            params
        )
    }
    public contractRiskLimit(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/account/risk_limit',
            params
        )
    }
    public contractTieredFeeRate(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/account/tiered_fee_rate',
            params
        )
    }
    public contractChangeMargin(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/position/change_margin',
            params
        )
    }
    public contractLeverage(params = {}) {
        return this.privateRequest(
            'GET',
            '/api/v1/private/position/leverage',
            params
        )
    }
    public contractChangeLeverage(params = {}) {
        return this.privateRequest(
            'POST',
            'api/v1/private/position/change_leverage',
            params
        )
    }
    public contractPositionMode(params = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/asset/internal/transfer/info',
            params
        )
    }
    public contractChangePositionMode(params = {}) {
        return this.privateRequest(
            'POST',
            'api/v1/private/position/position_mode',
            params

        )
    }
    public contractPlaceNewOrder(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/order/submit',
            params
        )
    }
    public contractPlaceNewOrderBatch(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/order/submit_batch',
            params
        )
    }
    public contractCancelOrderById(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/order/cancel',
            params
        )
    }
    public contractCancelWithExternal(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/order/cancel_with_external',
            params
        )
    }
    public contractCancelAll(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/order/cancel_all',
            params
        )
    }
    public contractPlacePlanOrder(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/order/submit_batch',
            params
        )
    }
    public contractCancelPlanOrder(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/planorder/cancel',
            params
        )
    }
    public contractCancelAllPlanOrder( params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/planorder/cancel_all',
            params
        )


    }
    public contractCancelStopOrder(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/stoporder/cancel',
            params
        )
    }
    public contractCancelAllStopOrder( params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/stoporder/cancel_all',
            params
        )
    }
    public contractStopOrderChangePrice(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/stoporder/change_price',
            params
        )
    }
    public contractStopOrderChangePlanPrice(params = {}) {
        return this.privateRequest(
            'POST',
            '/api/v1/private/stoporder/change_plan_price',
            params
        )
    }
}
