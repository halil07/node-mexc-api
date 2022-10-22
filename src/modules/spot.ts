import mexcBase, {IOptions} from "./base";

export default class Spot extends mexcBase{
    constructor({ apiKey, apiSecret}: IOptions) {
        super({apiKey, apiSecret,  type:'spot' });
    }
    spotSymbols() {
        return this.publicRequest('GET', '/open/api/v2/market/symbols')
    }
    spotServerTime() {
        return this.publicRequest('GET', '/open/api/v2/common/timestamp')
    }
    spotPing() {
        return this.publicRequest('GET', '/open/api/v2/common/ping')
    }
    spotDefaultSymbols(options = {}) {
        return this.publicRequest(
            'GET',
            '/open/api/v2/market/ticker',
            options
        )
    }
    spotTicker(options = {}) {
        return this.publicRequest(
            'GET',
            '/open/api/v2/market/ticker',
            options
        )
    }
    spotDeals(options = {}) {
        return this.publicRequest(
            'GET',
            '/open/api/v2/market/deals',
            options
        )
    }
    spotCoinList() {
        return this.publicRequest('GET', '/open/api/v2/market/coin/list')
    }
    spotAccount(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/account/info',
            options
        )
    }
    spotApiAccount(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/market/api_symbols',
            options,
        )
    }
    spotPlaceOrder(options = {}) {
        return this.privateRequest(
            'POST',
            '/open/api/v2/order/place',
            options,

        )
    }
    spotMultiPlaceOrder(options = {}) {
        return this.privateRequest(
            'POST',
            '/open/api/v2/order/place_batch',
            options
        )
    }
    spotGetOpenOrder(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/order/open_orders',
            options
        )
    }
    spotGetAllOrder(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/order/list',
            options
        )
    }
    spotQueryOrderById(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/order/query',
            options
        )
    }
    spotGetOrderDeal(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/order/deals',
            options
        )
    }
    spotQueryOrderDealById(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/order/deal_detail',
            options
        )
    }
    spotCancelBySymbol(options = {}) {
        return this.privateRequest(
            'DELETE',
            '/open/api/v2/order/cancel_by_symbol',
            options
        )
    }
    spotGetDepositList(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/asset/deposit/address/list',
            options
        )
    }
    spotGetDepositRecord( options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/asset/deposit/list',
            options
        )
    }
    spotGetWithdrawList( options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/asset/withdraw/list',
            options
        )
    }
    spotWithdraw( options = {}) {
        return this.privateRequest(
            'POST',
            '/open/api/v2/asset/withdraw',
            options
        )
    }
    spotCancelWithdraw(options = {}) {
        return this.privateRequest(
            'DELETE',
            '/open/api/v2/asset/withdraw',
            options
        )
    }
    spotTransFer( options = {}) {
        return this.privateRequest(
            'POST',
            '/open/api/v2/asset/internal/transfer',
            options
        )
    }
    spotGetTransferRecord(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/asset/internal/transfer/record',
            options
        )
    }
    spotGetAvlTransfer(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/account/balance',
            options
        )
    }
    spotQueryTransferRecordById(options = {}) {
        return this.privateRequest(
            'GET',
            '/open/api/v2/asset/internal/transfer/info',
            options
        )
    }
    /**
     * @V3
     */
    spotTestConnectivityV3() {
        return this.publicRequest('GET', '/api/v3/ping')
    }
    spotServerTimeV3() {
        return this.publicRequest('GET', '/api/v3/time')
    }
    spotExchangeInformation() {
        return this.publicRequest('GET', '/api/v3/exchangeInfo')
    }
    spotDepth(options = {}) {
        return this.publicRequest(
            'GET',
            '/api/v3/depth',
            options
        )
    }
    spotRecentTradesList(options = {}) {
        return this.publicRequest(
            'GET',
            '/api/v3/trades',
            options
        )
    }
    spotOldTradeLookup(options = {}) {
        return this.publicRequest(
            'GET',
            '/api/v3/historicalTrades',
            options
        )
    }
    spotCompressedTradesList(options = {}) {
        return this.publicRequest(
            'GET',
            '/api/v3/aggTrades',
            options
        )
    }
    spotKline( options = {}) {
        return this.publicRequest(
            'GET',
            '/api/v3/klines',
            options
        )
    }
    spotCurrentAveragePrice(options = {}) {
        return this.publicRequest(
            'GET',
            '/api/v3/avgPrice',
            options
        )
    }
    spotTickerPriceChange() {
        return this.publicRequest('GET', '/api/v3/ticker/24hr')
    }
    spotSymbolPriceTicker() {
        return this.publicRequest('GET', '/api/v3/ticker/price')
    }
    spotSymbolOrderBook() {
        return this.publicRequest('GET', '/api/v3/ticker/bookTicker')
    }
    spotEtfInfo() {
        return this.publicRequest('GET', 'api/v3/etf/info')
    }
    spotTestConnectivity(options = {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/order/test',
            options
        )
    }
    spotOrder(options = {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/order',
            options
        )
    }
    spotCancelOrder(options = {}) {
        return this.privateRequest(
            'DELETE',
            '/api/v3/order',
            options
        )
    }
    spotCancelAllOpenOrders(options = {}) {
        return this.privateRequest(
            'DELETE',
            '/api/v3/openOrders',
            options
        )
    }
    spotQueryOrder(options = {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/order',
            options
        )
    }
    spotCurrentOpenOrders(options = {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/openOrders',
            options
        )
    }
    spotAllOrders(options = {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/allOrders',
            options
        )
    }
    spotAccountInformation(options = {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/account',
            options

        )
    }
    spotAccountTradeList(options = {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/myTrades',
            options
        )
    }
    spotVirtualSubAccount(options = {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/sub-account/virtualSubAccount',
            options
        )
    }
    spotSubAccountList( options = {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/sub-account/list',
            options
        )
    }
    spotVirtualApikey(options = {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/sub-account/apiKey',
            options
        )
    }
    spotGetApiKey(options = {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/sub-account/apiKey',
            options
        )
    }
    spotDelAccount(options = {}) {
        return this.privateRequest(
            'DELETE',
            '/api/v3/sub-account/apiKey',
            options
        )
    }
    spotTradeMode(options= {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/margin/tradeMode',
            options
        )
    }
    spotMarginOrderV3(options= {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/margin/order',
            options
        )
    }
    spotLoan(options= {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/margin/loan',
            options
        )
    }
    spotRepay(options= {}) {
        return this.privateRequest(
            'POST',
            '/api/v3/margin/repay',
            options
        )
    }
    spotCancelAllMargin(options= {}) {
        return this.privateRequest(
            'DELETE',
            '/api/v3/margin/openOrders',
            options
        )
    }
    spotCancelMargin(options= {}) {
        return this.privateRequest(
            'DELETE',
            '/api/v3/margin/order',
            options
        )
    }
    spotLoanRecord(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/loan',
            options
        )
    }
    spotAllOrdersRecord(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/allOrders',
            options
        )
    }
    spotMyTrades(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/myTrades',
            options
        )
    }
    spotMarginOpenOrders(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/openOrders',
            options
        )
    }
    spotMaxTransferable(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/maxTransferableh',
            options
        )
    }
    spotPriceIndex(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/priceIndex',
            options
        )
    }
    spotMarginOrder(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/order',
            options
        )
    }
    spotIsolatedAccount(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/isolated/account',
            options
        )
    }
    spotTrigerOrder(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/trigerOrder',
            options
        )
    }
    spotMaxBorrowable(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/maxBorrowable',
            options
        )
    }
    spotRepayRecord(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/repay',
            options
        )
    }
    spotIsolatedPair(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/isolated/pair',
            options
        )
    }
    spotForceLiquidationRec(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/forceLiquidationRec',
            options
        )
    }
    spotIsolatedMarginData(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/isolatedMarginData',
            options
        )
    }
    spotIsolatedMarginTier(options= {}) {
        return this.privateRequest(
            'GET',
            '/api/v3/margin/isolatedMarginTier',
            options
        )
    }
}
