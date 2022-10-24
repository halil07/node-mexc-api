import Error from "./error";

export default class MissingParameterError extends Error {
    constructor(paramNames: string | string[]) {
        super(
            `One or more of required parameters is missing: ${JSON.stringify(paramNames)} `
        );
        this.name = "MissingParameterError";
    }
}
