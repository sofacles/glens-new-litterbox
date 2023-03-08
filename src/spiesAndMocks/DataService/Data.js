export default class Data {
    constructor() {
        this._accounts = [453, 729];
    }
    // get accounts() {
    //     return this._accounts;
    // }

    // set accounts(val) {
    //      this._accounts = val;
    // }
    getAccountAt(index) {
        return this._accounts[index];
    }
} 