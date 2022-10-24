export default class Error {
    protected name: string;
    private message: string;

    constructor(message) {
        this.message = message;
        this.name = "Error";
    }
}
