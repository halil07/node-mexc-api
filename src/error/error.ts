export default class Error {
  private message: string;
  protected name: string;
  constructor(message) {
    this.message = message;
    this.name = "Error";
  }
}
