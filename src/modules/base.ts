import {buildQueryString, createRequest, CreateRequest, pubRequest, removeEmptyValue} from '../helpers/utils'
import CryptoJS from "crypto-js"


export interface IOptions {
    apiKey: string,
    apiSecret: string,
    type?: 'contract' | 'spot'
}

type methodType = 'POST' | 'GET' | 'DELETE'

export default class Mexc {
    private readonly apiKey: string;
    private readonly apiSecret: string;

    constructor(options: IOptions) {
        const {apiKey, apiSecret} = options
        this.apiKey = apiKey
        this.apiSecret = apiSecret
        return this;
    }

    publicRequestV3(method: methodType, path: string, params = {}) {
        params = removeEmptyValue(params)
        params = buildQueryString(params)
        if (params !== '') {
            path = `${path}?${params}`
        }
        return createRequest({
            method: method,
            url: path,
            apiKey: this.apiKey
        })
    }

    signRequestV3(method: methodType, path: string, params = {}) {
        params = removeEmptyValue(params)
        const timestamp = Date.now()
        const queryString = buildQueryString({...params, timestamp})
        const signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(queryString, this.apiSecret))
        return createRequest({
            method: method,
            url: `${path}?${queryString}&signature=${signature}`,
            apiKey: this.apiKey
        })
    }

    publicRequestV2(method: methodType, path: string, params = {}) {
        params = removeEmptyValue(params)
        params = buildQueryString(params)
        if (params !== '') {
            path = `${path}?${params}`
        }
        return pubRequest({
            method: method,
            url: path,
            apiKey: this.apiKey
        })
    }
    sortObject(obj: any) {
        return Object.keys(obj).sort().reduce<Record<string, any>>(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    }

    signRequestV2(method: methodType, path: string, params = {}) {
        params = this.sortObject(removeEmptyValue(params))
        const timestamp = Date.now()
        const apiKey = this.apiKey
        let objectString = apiKey + timestamp

        if (method === 'POST') {
            objectString += JSON.stringify(params)
        } else {
            let queryString = buildQueryString({...params})
            objectString += queryString
        }
        
        const Signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(objectString, this.apiSecret))
        return CreateRequest({
            method: method,
            url: path,
            apiKey: this.apiKey,
            timestamp: timestamp,
            Signature: Signature,
            params: params
        })
    }
}
