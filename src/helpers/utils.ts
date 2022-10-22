import axios from "axios";
const {template, templateSettings} = require("lodash");
templateSettings.interpolate = /{([\s\S]+?)}/g;


export const getRequestInstance = (config: any) => axios.create({ ...config  });

export const removeEmptyValue = (obj: any) => {
  if (!(obj instanceof Object)) return {};
  Object.keys(obj).forEach((key) => isEmptyValue(obj[key]) && delete obj[key]);
  return obj;
};

export const isEmptyValue = (input: any) => {

  const variant1 = (!input && input !== false && input !== 0);
  const variant2 = (typeof input === "string" || input instanceof String) && /^\s+$/.test(input as string);
  const variant3 = input instanceof Object && !Object.keys(input).length;
  const variant4 = Array.isArray(input) && !input.length;

  return variant1 || variant2 || variant3 || variant4;
};

export const buildQueryString = (params:any) => {
  if (!params) return ''
  return Object.entries(params)
      .map(_stringifyKeyValuePair)
      .join('&')
}


const _stringifyKeyValuePair = ([key, value]:[key:string, value:any]) => {
  const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value
  return `${key}=${encodeURIComponent(valueString)}`
}


export const createSignRequest = async (config: any) => {
  const { baseURL, method, url, params, apiKey, timestamp, Signature } = config;
  if (method === "GET" || method === "DELETE") {
    const request = getRequestInstance({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        ApiKey: apiKey,
        "Request-Time": timestamp,
        Signature: Signature,
      },
    }).request({
      method,
      url,
      params
    });
    return (await request).data;
  }
  if (method === "POST") {
    const request = getRequestInstance({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        ApiKey: apiKey,
        "Request-Time": timestamp,
        Signature: Signature,
      },
    }).request({
      method,
      url,
      data: params,
    });
    return (await request).data;
  }
};

export const stringifyKeyValuePair = async (path: string, params: any) => {
  const compiled = template(path);
  return compiled(params);
};

export const createPublicRequest = async (config: any) => {
  const { baseURL, apiKey, method, url } = config;
  const request = getRequestInstance({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "X-MEXC-APIKEY": apiKey,
    },
  }).request({
    method,
    url,
  });
  return (await request).data;
};
