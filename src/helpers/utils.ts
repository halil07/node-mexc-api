import axios from 'axios'

export const removeEmptyValue = (obj: any) => {
    if (!(obj instanceof Object)) return {}
    Object.keys(obj).forEach(key => isEmptyValue(obj[key]) && delete obj[key])
    return obj
}

export const isEmptyValue = (input: any) => {
    const var1 = (!input && input !== false && input !== 0)
    // @ts-ignore
    const var2 = (typeof input === 'string' || input instanceof String) && /^\s+$/.test(input)
    const var3 = input instanceof Object && !Object.keys(input).length
    const var4 = Array.isArray(input) && !input.length
    return var1 || var2 || var3 || var4;
}

export const buildQueryString = (params: any) => {
    if (!params) return ''
    // @ts-ignore
    return Object.entries(params).map((param) => stringifyKeyValuePair(param))
        .join('&')
}

// @ts-ignore
export const CreateRequest = async (config: any) => {
    const {method, url, params, apiKey, timestamp, Signature} = config
    if (method === 'GET' || method === 'DELETE') {
        const data = await getRequestInstance({
            headers: {
                'Content-Type': 'application/json',
                'ApiKey': apiKey,
                'Request-Time': timestamp,
                'Signature': Signature
            },
        }).request({
            method,
            url,
            params
        })
        return data.data;
    }
    if (method === 'POST') {
        const data = await getRequestInstance({
            headers: {
                'Content-Type': 'application/json',
                'ApiKey': apiKey,
                'Request-Time': timestamp,
                'Signature': Signature
            },
        }).request({
            method,
            url,
            data: params
        })
        return data.data;
    }
}


export const stringifyKeyValuePair = ([key, value]: [string, Array<string> | string]) => {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value
    return `${key}=${encodeURIComponent(valueString)}`
}

export const getRequestInstance = (config: any) => {
    return axios.create({
        ...config
    })
}

export const createRequest = async (config: any) => {
    const {apiKey, method, url} = config
    const data = await getRequestInstance({
        headers: {
            'Content-Type': 'application/json',
            'X-MEXC-APIKEY': apiKey,
        }
    }).request({
        method,
        url
    })
    return data.data;
}

export const pubRequest = async (config: any) => {
    const {apiKey, method, url} = config
    const data = await getRequestInstance({
        headers: {
            'Content-Type': 'application/json',
            'X-MEXC-APIKEY': apiKey,
        }
    }).request({
        method,
        url
    })
    return data.data;
}
