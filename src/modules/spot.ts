import Mexc, {IOptions} from "./base";

export default class Spot extends Mexc {
    spotBaseUrlV2:string='https://www.mexc.com/open/api/v2/';
    spotBaseUrlV3:string='https://api.mexc.com/api/v3/';
    constructor({apiKey, apiSecret}: IOptions) {
        super({apiKey, apiSecret});
        return this;
    }

    symbols() {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}market/symbols`)
    }

    serverTime() {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}common/timestamp`)
    }

    ping() {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}common/ping`)
    }

    defaultSymbols(options = {}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/ticker`,
            options
        )
    }

    ticker(options = {}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/ticker`,
            options
        )
    }

    depthV2(options = {}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/depth`,
            options
        )
    }

    deals(options = {}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/deals`,
            options
        )
    }

    klineV2(options = {}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/kline`,
            options
        )
    }

    coinList() {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}market/coin/list`)
    }

    account(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}account/info`,
            options
        )
    }

    apiAccount(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/api_symbols`,
            options,
        )
    }

    placeOrder(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}order/place`,
            options,
        )
    }

    cancelOrderV2(options = {}) {
        return this.signRequestV2(
            'DELETE',
            `${this.spotBaseUrlV2}order/cancel`,
            options
        )
    }

    multiPlaceOrder(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}order/place_batch`,
            options
        )
    }

    getOpenOrder(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/open_orders`,
            options
        )
    }

    getAllOrder(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/list`,
            options
        )
    }

    queryOrderById(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/query`,
            options
        )
    }

    getOrderDeal(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/deals`,
            options
        )
    }

    queryOrderDealById(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/deal_detail`,
            options
        )
    }

    cancelBySymbol(options = {}) {
        return this.signRequestV2(
            'DELETE',
            `${this.spotBaseUrlV2}order/cancel_by_symbol`,
            options
        )
    }

    getDepositList(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/deposit/address/list`,
            options
        )
    }

    getDepositRecord(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/deposit/list`,
            options
        )
    }

    getWithdrawList(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/withdraw/list`,
            options
        )
    }

    withdraw(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}asset/withdraw`,
            options
        )
    }

    cancelWithdraw(options = {}) {
        return this.signRequestV2(
            'DELETE',
            `${this.spotBaseUrlV2}asset/withdraw`,
            options
        )
    }

    transFer(options = {}) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}asset/internal/transfer`,
            options
        )
    }

    getTransferRecord(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/internal/transfer/record`,
            options
        )
    }

    getAvlTransfer(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}account/balance`,
            options
        )
    }

    queryTransferRecordById(options = {}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/internal/transfer/info`,
            options
        )
    }

    pingV3() {
        return this.publicRequestV3('GET', `${this.spotBaseUrlV3}ping`)
    }

    serverTimeV3() {
        return this.publicRequestV3('GET', `${this.spotBaseUrlV3}time`)
    }

    exchangeInformation() {
        return this.publicRequestV3('GET', `${this.spotBaseUrlV3}exchangeInfo`)
    }

    depth(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}depth`,
            options
        )
    }

    recentTradesList(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}trades`,
            options
        )
    }

    oldTradeLookup(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}historicalTrades`,
            options
        )
    }

    compressedTradesList(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}aggTrades`,
            options
        )
    }

    kline(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}klines`,
            options
        )
    }

    currentAveragePrice(options = {}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}avgPrice`,
            options
        )
    }

    tickerPriceChange() {
        return this.publicRequestV3('GET', `${this.spotBaseUrlV3}ticker/24hr`)
    }

    symbolPriceTicker() {
        return this.publicRequestV3('GET', `${this.spotBaseUrlV3}ticker/price`)
    }

    symbolOrderBook() {
        return this.publicRequestV3('GET', `${this.spotBaseUrlV3}ticker/bookTicker`)
    }

    etfInfo() {
        return this.publicRequestV3('GET', `${this.spotBaseUrlV3}etf/info`)
    }

    testConnectivity(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}order/test`,
            options
        )
    }

    order(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}order`,
            options
        )
    }

    cancelOrder(options = {}) {
        return this.signRequestV3(
            'DELETE',
            `${this.spotBaseUrlV3}order`,
            options
        )
    }

    cancelAllOpenOrders(options = {}) {
        return this.signRequestV3(
            'DELETE',
            `${this.spotBaseUrlV3}openOrders`,
            options
        )
    }

    queryOrder(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}order`,
            options
        )
    }

    currentOpenOrders(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}openOrders`,
            options
        )
    }

    allOrders(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}allOrders`,
            options
        )
    }

    accountInformation(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}account`,
            options
        )
    }

    accountTradeList(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}myTrades`,
            options
        )
    }

    virtualSubAccount(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}sub-account/virtualSubAccount`,
            options
        )
    }

    subAccountList(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}sub-account/list`,
            options
        )
    }

    virtualApikey(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}sub-account/apiKey`,
            options
        )
    }

    getApiKey(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}sub-account/apiKey`,
            options
        )
    }

    delAccount(options = {}) {
        return this.signRequestV3(
            'DELETE',
            `${this.spotBaseUrlV3}sub-account/apiKey`,
            options
        )
    }

    tradeMode(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}margin/tradeMode`,
            options
        )
    }

    marginOrderV3(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}margin/order`,
            options
        )
    }

    loan(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}margin/loan`,
            options
        )
    }

    repay(options = {}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}margin/repay`,
            options
        )
    }

    cancelAllMargin(options = {}) {
        return this.signRequestV3(
            'DELETE',
            `${this.spotBaseUrlV3}margin/openOrders`,
            options
        )
    }

    cancelMargin(options = {}) {
        return this.signRequestV3(
            'DELETE',
            `${this.spotBaseUrlV3}margin/order`,
            options
        )
    }

    loanRecord(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/loan`,
            options
        )
    }

    allOrdersRecord(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/allOrders`,
            options
        )
    }

    myTrades(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/myTrades`,
            options
        )
    }

    marginOpenOrders(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/openOrders`,
            options
        )
    }

    maxTransferable(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/maxTransferable`,
            options
        )
    }

    priceIndex(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/priceIndex`,
            options
        )
    }

    marginOrder(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/order`,
            options
        )
    }

    isolatedAccount(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/isolated/account`,
            options
        )
    }

    trigerOrder(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/trigerOrder`,
            options
        )
    }

    maxBorrowable(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/maxBorrowable`,
            options
        )
    }

    repayRecord(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/repay`,
            options
        )
    }

    isolatedPair(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/isolated/pair`,
            options
        )
    }

    forceLiquidationRec(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/forceLiquidationRec`,
            options
        )
    }

    isolatedMarginData(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/isolatedMarginData`,
            options
        )
    }

    isolatedMarginTier(options = {}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}margin/isolatedMarginTier`,
            options
        )
    }
}
