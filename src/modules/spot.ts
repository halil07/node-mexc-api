import Mexc, {IOptions} from "./base";

export default class Spot extends Mexc {
    constructor({apiKey, apiSecret}: IOptions) {
        super({apiKey, apiSecret});
        return this;
    }

    symbols() {
        return this.PublicRequest('GET', 'https://www.mexc.com/open/api/v2/market/symbols')
    }

    serverTime() {
        return this.PublicRequest('GET', 'https://www.mexc.com/open/api/v2/common/timestamp')
    }

    ping() {
        return this.PublicRequest('GET', 'https://www.mexc.com/open/api/v2/common/ping')
    }

    defaultSymbols(options = {}) {
        return this.PublicRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/market/ticker',
            options
        )
    }

    ticker(options = {}) {
        return this.PublicRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/market/ticker',
            options
        )
    }

    depthV2(options = {}) {
        return this.PublicRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/market/depth',
            options
        )
    }

    deals(options = {}) {
        return this.PublicRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/market/deals',
            options
        )
    }

    klineV2(options = {}) {
        return this.PublicRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/market/kline',
            options
        )
    }

    coinList() {
        return this.PublicRequest('GET', 'https://www.mexc.com/open/api/v2/market/coin/list')
    }

    account(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/account/info',
            options
        )
    }

    apiAccount(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/market/api_symbols',
            options,
        )
    }

    placeOrder(options = {}) {
        return this.SignRequest(
            'POST',
            'https://www.mexc.com/open/api/v2/order/place',
            options,
        )
    }

    cancelOrderV2(options = {}) {
        return this.SignRequest(
            'DELETE',
            'https://www.mexc.com/open/api/v2/order/cancel',
            options
        )
    }

    multiPlaceOrder(options = {}) {
        return this.SignRequest(
            'POST',
            'https://www.mexc.com/open/api/v2/order/place_batch',
            options
        )
    }

    getOpenOrder(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/order/open_orders',
            options
        )
    }

    getAllOrder(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/order/list',
            options
        )
    }

    queryOrderById(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/order/query',
            options
        )
    }

    getOrderDeal(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/order/deals',
            options
        )
    }

    queryOrderDealById(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/order/deal_detail',
            options
        )
    }

    cancelBySymbol(options = {}) {
        return this.SignRequest(
            'DELETE',
            'https://www.mexc.com/open/api/v2/order/cancel_by_symbol',
            options
        )
    }

    getDepositList(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/asset/deposit/address/list',
            options
        )
    }

    getDepositRecord(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/asset/deposit/list',
            options
        )
    }

    getWithdrawList(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/asset/withdraw/list',
            options
        )
    }

    withdraw(options = {}) {
        return this.SignRequest(
            'POST',
            'https://www.mexc.com/open/api/v2/asset/withdraw',
            options
        )
    }

    cancelWithdraw(options = {}) {
        return this.SignRequest(
            'DELETE',
            'https://www.mexc.com/open/api/v2/asset/withdraw',
            options
        )
    }

    transFer(options = {}) {
        return this.SignRequest(
            'POST',
            'https://www.mexc.com/open/api/v2/asset/internal/transfer',
            options
        )
    }

    getTransferRecord(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/asset/internal/transfer/record',
            options
        )
    }

    getAvlTransfer(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/account/balance',
            options
        )
    }

    queryTransferRecordById(options = {}) {
        return this.SignRequest(
            'GET',
            'https://www.mexc.com/open/api/v2/asset/internal/transfer/info',
            options
        )
    }

    pingV3() {
        return this.publicRequest('GET', 'https://api.mexc.com/api/v3/ping')
    }

    serverTimeV3() {
        return this.publicRequest('GET', 'https://api.mexc.com/api/v3/time')
    }

    exchangeInformation() {
        return this.publicRequest('GET', 'https://api.mexc.com/api/v3/exchangeInfo')
    }

    depth(options = {}) {
        return this.publicRequest(
            'GET',
            'https://api.mexc.com/api/v3/depth',
            options
        )
    }

    recentTradesList(options = {}) {
        return this.publicRequest(
            'GET',
            'https://api.mexc.com/api/v3/trades',
            options
        )
    }

    oldTradeLookup(options = {}) {
        return this.publicRequest(
            'GET',
            'https://api.mexc.com/api/v3/historicalTrades',
            options
        )
    }

    compressedTradesList(options = {}) {
        return this.publicRequest(
            'GET',
            'https://api.mexc.com/api/v3/aggTrades',
            options
        )
    }

    kline(options = {}) {
        return this.publicRequest(
            'GET',
            'https://api.mexc.com/api/v3/klines',
            options
        )
    }

    currentAveragePrice(options = {}) {
        return this.publicRequest(
            'GET',
            'https://api.mexc.com/api/v3/avgPrice',
            options
        )
    }

    tickerPriceChange() {
        return this.publicRequest('GET', 'https://api.mexc.com/api/v3/ticker/24hr')
    }

    symbolPriceTicker() {
        return this.publicRequest('GET', 'https://api.mexc.com/api/v3/ticker/price')
    }

    symbolOrderBook() {
        return this.publicRequest('GET', 'https://api.mexc.com/api/v3/ticker/bookTicker')
    }

    etfInfo() {
        return this.publicRequest('GET', 'https://api.mexc.com/api/v3/etf/info')
    }

    testConnectivity(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/order/test',
            options
        )
    }

    order(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/order',
            options
        )
    }

    cancelOrder(options = {}) {
        return this.signRequest(
            'DELETE',
            'https://api.mexc.com/api/v3/order',
            options
        )
    }

    cancelAllOpenOrders(options = {}) {
        return this.signRequest(
            'DELETE',
            'https://api.mexc.com/api/v3/openOrders',
            options
        )
    }

    queryOrder(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/order',
            options
        )
    }

    currentOpenOrders(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/openOrders',
            options
        )
    }

    allOrders(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/allOrders',
            options
        )
    }

    accountInformation(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/account',
            options
        )
    }

    accountTradeList(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/myTrades',
            options
        )
    }

    virtualSubAccount(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/sub-account/virtualSubAccount',
            options
        )
    }

    subAccountList(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/sub-account/list',
            options
        )
    }

    virtualApikey(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/sub-account/apiKey',
            options
        )
    }

    getApiKey(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/sub-account/apiKey',
            options
        )
    }

    delAccount(options = {}) {
        return this.signRequest(
            'DELETE',
            'https://api.mexc.com/api/v3/sub-account/apiKey',
            options
        )
    }

    tradeMode(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/margin/tradeMode',
            options
        )
    }

    marginOrderV3(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/margin/order',
            options
        )
    }

    loan(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/margin/loan',
            options
        )
    }

    repay(options = {}) {
        return this.signRequest(
            'POST',
            'https://api.mexc.com/api/v3/margin/repay',
            options
        )
    }

    cancelAllMargin(options = {}) {
        return this.signRequest(
            'DELETE',
            'https://api.mexc.com/api/v3/margin/openOrders',
            options
        )
    }

    cancelMargin(options = {}) {
        return this.signRequest(
            'DELETE',
            'https://api.mexc.com/api/v3/margin/order',
            options
        )
    }

    loanRecord(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/loan',
            options
        )
    }

    allOrdersRecord(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/allOrders',
            options
        )
    }

    myTrades(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/myTrades',
            options
        )
    }

    marginOpenOrders(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/openOrders',
            options
        )
    }

    maxTransferable(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/maxTransferable',
            options
        )
    }

    priceIndex(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/priceIndex',
            options
        )
    }

    marginOrder(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/order',
            options
        )
    }

    ısolatedAccount(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/isolated/account',
            options
        )
    }

    trigerOrder(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/trigerOrder',
            options
        )
    }

    maxBorrowable(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/maxBorrowable',
            options
        )
    }

    repayRecord(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/repay',
            options
        )
    }

    ısolatedPair(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/isolated/pair',
            options
        )
    }

    forceLiquidationRec(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/forceLiquidationRec',
            options
        )
    }

    ısolatedMarginData(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/isolatedMarginData',
            options
        )
    }

    ısolatedMarginTier(options = {}) {
        return this.signRequest(
            'GET',
            'https://api.mexc.com/api/v3/margin/isolatedMarginTier',
            options
        )
    }
}
