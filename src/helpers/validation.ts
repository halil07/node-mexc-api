import {isEmptyValue} from "./utils";
import {MissingParameterError} from "../error";

export const validateRequiredParameters = (paramObject: URLSearchParams) => {
    if (!paramObject || isEmptyValue(paramObject)) {
        throw new MissingParameterError(`Empty params ${JSON.stringify(Object.entries(paramObject))}`);
    }
    const emptyParams: string | string[] = [];
    Object.keys(paramObject).forEach((param) => {
        if (isEmptyValue(paramObject.get(param))) emptyParams.push(param);
    });

    if (emptyParams.length) {
        throw new MissingParameterError(emptyParams);
    }
};

export const hasOneOfParameters = (paramObject: URLSearchParams) => {
    if (!paramObject || isEmptyValue(paramObject)) {
        throw new MissingParameterError(`Empty params ${JSON.stringify(Object.entries(paramObject))}`);
    }
    const params = [...paramObject.values()];
    if (params.every(isEmptyValue)) {
        throw new MissingParameterError([...paramObject.keys()]);
    }
};
