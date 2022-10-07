import axios from 'axios';
import { enc, HmacSHA256 } from "crypto-js";
const stringify = enc.Hex.stringify;
import { w3cwebsocket as WebSocket } from "websocket"

export type Options = {
    apiKey: string;
    secretKey: string;
    baseUrl: string;
}

class Mexc {
    private config: Options;
    private websocket!: WebSocket;
    constructor(options: Options) {
        this.config = options;
    }
    private signatureHeader = (method: 'POST' | 'GET', params: string, body?: any) => {
        const stemp = new Date().getTime().toString();
        let objectString = this.config.apiKey + stemp;
        if (method === 'POST') {
            objectString += body;
        } else {
            objectString += params;
        }
        const sign = stringify(HmacSHA256(objectString, this.config.secretKey));
        return {
            'Request-Time': stemp,
            'ApiKey': this.config.apiKey,
            'Content-Type': 'application/json',
            'Signature': sign
        }

    }

    private fetcher = async (method: 'POST' | 'GET', tempUrl: string, body = false) => {
        const stringBody = JSON.stringify(body);
        const url = new URL(this.config.baseUrl + tempUrl);
        const sign = this.signatureHeader(method, url.searchParams.toString(), stringBody);
        const data = await axios({
            url: url.toString(),
            method,
            data: stringBody,
            headers: sign
        });
        return data.data;
    }

    startWebsocket(websocketPath: string, ready: (websocket: WebSocket) => void) {
        this.websocket = new WebSocket(websocketPath);
        this.websocket.onopen = () => {
            const loginData = this.signatureHeader('GET', ``);
            this.websocket.send(JSON.stringify(
                {
                    "method": "login",
                    "param": {
                        "apiKey": loginData.ApiKey, // openapi need to fill in this parameter，Parameters are constructed in accordance with the OpenAPI documentation
                        "reqTime": loginData['Request-Time'], // openapi need to fill in this parameters，Parameters are constructed in accordance with the OpenAPI documentation
                        "signature": loginData.Signature // openapi need to fill in this parameters，Parameters are constructed in accordance with the OpenAPI documentation
                    }
                }
            ));
            ready(this.websocket);
        };
    }

    async ping() {
        return await this.fetcher('GET', 'api/v1/contract/ping')
    }

    async contractDetail() {
        return await this.fetcher('GET', 'api/v1/contract/detail')
    }

    async accountAssetsPrivate() {
        return await this.fetcher('GET', 'api/v1/private/account/assets');
    }

    async supportCurrencies() {
        return await this.fetcher('GET', 'api/v1/contract/support_currencies');
    }

    async getContractDepthInformation(symbol: string) {
        return await this.fetcher('GET', `api/v1/contract/depth/${symbol}`);
    }

    async getContractDepthInformationSnapsHot(symbol: string, limit: number) {
        return await this.fetcher('GET', `api/v1/contract/depth_commits/${symbol}/${limit}`);
    }
}

export default Mexc