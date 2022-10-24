import {IOptions} from "./modules/base";
import Contract from "./modules/contract";
import Spot from "./modules/spot";

export default class Mexc {
    spot: Spot;
    contract: Contract;

    constructor(options: IOptions) {
        this.spot = new Spot(options) as Spot;
        this.contract = new Contract(options) as Contract;
        return this as { spot : Spot, contract: Contract};
    }
}
