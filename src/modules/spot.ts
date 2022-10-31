import Mexc, {IOptions} from "./base";

export default class Spot extends Mexc {
    spotBaseUrlV2:string='https://www.mexc.com/open/api/v2/';
    spotBaseUrlV3:string='https://api.mexc.com/api/v3/';
    constructor({apiKey, apiSecret}: IOptions) {
        super({apiKey, apiSecret});
        return this;
    }

    symbols(params:{ symbol: string}) {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}market/symbols`, params)
    }

    serverTime() {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}common/timestamp`)
    }

    ping() {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}common/ping`)
    }

    defaultSymbols() {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/api_default_symbols`
        )
    }

    ticker(params:{ symbol?: string}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/ticker`,
            params
        )
    }

    depthV2(params:{ symbol?: string, depth?: number}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/depth`,
            params
        )
    }

    deals(params:{ symbol: string, limit?: number}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/deals`,
            params
        )
    }

    klineV2(params:{ symbol: string, interval: string, start_time?: string, limit: string}) {
        return this.publicRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/kline`,
            params
        )
    }

    coinList(params:{ currency?: string }) {
        return this.publicRequestV2('GET', `${this.spotBaseUrlV2}market/coin/list`, params)
    }

    account() {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}account/info`
        )
    }

    apiAccount() {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}market/api_symbols`
        )
    }

    placeOrder(params: {client_order_id?:string, order_type: string, price: string, quantity: string, symbol: string, trade_type: string}) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}order/place`,
            params
        )
    }

    cancelOrderV2(params: {order_ids: string, client_order_ids: string}) {
        return this.signRequestV2(
            'DELETE',
            `${this.spotBaseUrlV2}order/cancel`,
            params
        )
    }

    // data
    multiPlaceOrder(params: {order_type: string, price: string, quantity: string, symbol: string, trade_type: string}[]) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}order/place_batch`,
            params
        )
    }

    getOpenOrder(params: {symbol: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/open_orders`,
            params
        )
    }

    getAllOrder(params: {states: string, symbol: string, trade_type: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/list`,
            params
        )
    }

    queryOrderById(params:{order_ids: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/query`,
            params
        )
    }

    getOrderDeal(params : {limit: string, start_time: string, symbol: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/deals`,
            params
        )
    }

    queryOrderDealById(params: {order_id: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}order/deal_detail`,
            params
        )
    }

    cancelBySymbol(params: {symbol: string}) {
        return this.signRequestV2(
            'DELETE',
            `${this.spotBaseUrlV2}order/cancel_by_symbol`,
            params
        )
    }

    getDepositList(params: {currency: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/deposit/address/list`,
            params
        )
    }

    getDepositRecord(params: {currency: string,start_time: string, end_time: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/deposit/list`,
            params
        )
    }

    getWithdrawList(params: {start_time: string, end_time: string, withdraw_id: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/withdraw/list`,
            params
        )
    }

    withdraw(params: {currency: string, chain: string, amount: string, address: string}) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}asset/withdraw`,
            params
        )
    }

    transFer(params: {sub_uid: string, currency: string, amount: string, type: string}) {
        return this.signRequestV2(
            'POST',
            `${this.spotBaseUrlV2}asset/internal/transfer`,
            params
        )
    }

    getTransferRecord(params: {start_time: string, end_time: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/internal/transfer/record`,
            params
        )
    }

    getAvlTransfer(params: {currency: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}account/balance`,
            params
        )
    }

    queryTransferRecordById(params : {transact_id: string}) {
        return this.signRequestV2(
            'GET',
            `${this.spotBaseUrlV2}asset/internal/transfer/info`,
            params
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

    depth(params: {symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}depth`,
            params
        )
    }

    recentTradesList(params: {symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}trades`,
            params
        )
    }

    oldTradeLookup(params: {symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}historicalTrades`,
            params
        )
    }

    compressedTradesList(params: {symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}aggTrades`,
            params
        )
    }

    kline(params: {symbol: string, interval: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}klines`,
            params
        )
    }

    currentAveragePrice(params: {symbol: string}) {
        return this.publicRequestV3(
            'GET',
            `${this.spotBaseUrlV3}avgPrice`,
            params
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

    testConnectivity(params: {symbol:string, side: string, type: string, quantity: string, price: string}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}order/test`,
            params
        )
    }

    order(params: {symbol:string, side: string, type: string, quantity: string, price: string, quoteOrderQty: string}) {
        return this.signRequestV3(
            'POST',
            `${this.spotBaseUrlV3}order`,
            params
        )
    }

    cancelOrder(params : {symbol: string, orderId: string}) {
        return this.signRequestV3(
            'DELETE',
            `${this.spotBaseUrlV3}order`,
            params
        )
    }

    cancelAllOpenOrders(params: {symbol: string}) {
        return this.signRequestV3(
            'DELETE',
            `${this.spotBaseUrlV3}openOrders`,
            params
        )
    }

    queryOrder(params: {symbol: string, orderId: string}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}order`,
            params
        )
    }

    currentOpenOrders(params: {symbol: string}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}openOrders`,
            params
        )
    }

    allOrders(params: {symbol: string}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}allOrders`,
            params
        )
    }

    accountInformation() {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}account`
        )
    }

    accountTradeList(params: {symbol: string}) {
        return this.signRequestV3(
            'GET',
            `${this.spotBaseUrlV3}myTrades`,
            params
        )
    }
}
