import {
    buildQueryString,
    createPublicRequest,
    createSignRequest,
    removeEmptyValue,
    stringifyKeyValuePair
} from "../helpers/utils";

import CryptoJS from "crypto-js"


export interface IOptions {
    apiKey: string,
    apiSecret: string,
    type: 'contract' | 'spot',
    baseURL?: string,
}
type methodType = 'POST' | 'GET' | 'DELETE'

export default class mexcBase {
    private readonly apiKey: string;
    private readonly apiSecret: string;
    private readonly baseURL: string;
    private readonly type:'contract' | 'spot'

    constructor({ apiKey, apiSecret, type }: IOptions) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.type = type;
        if(this.type === 'contract'){
            this.baseURL = "https://contract.mexc.com";
        }else{
            this.baseURL = "https://www.mexc.com";
        }
    }

    async publicRequest(method: methodType, _path: string, _params={}) {
        let path = await stringifyKeyValuePair(_path, _params);
        const params = buildQueryString(removeEmptyValue(_params))
        if (params !== "") {
            path = `${path}?${params}`;
        }

        return createPublicRequest({
            method: method,
            baseURL: this.baseURL,
            url: path,
            apiKey: this.apiKey,
        });
    }

    async privateRequest(method: methodType, _path: string, _params= {}) {
        let path = await stringifyKeyValuePair(_path, _params);
        const params = buildQueryString(removeEmptyValue(_params))
        const timestamp = Date.now();
        const apiKey = this.apiKey;
        let objectString = apiKey + timestamp;

        if (method === "POST") {
            path = `${path}`;
            objectString += params;
        }
        else {
            let queryString = params;
            path = `${path}?${queryString}`;
            objectString += queryString;
        }
        const Signature = CryptoJS.enc.Hex.stringify(
            CryptoJS.HmacSHA256(objectString, this.apiSecret)
        );
        return createSignRequest({
            method: method,
            baseURL: this.baseURL,
            url: path,
            apiKey: this.apiKey,
            timestamp: timestamp,
            Signature: Signature,
            params: params,
        });
    }
}
