import { makeAutoObservable } from "mobx";
import AuthStore from "./authStore/authStore";
import RatesStore from "./ratesStore/ratesStore";

export class Store {
    authStore;
    ratesStore;
    constructor() {
        makeAutoObservable(this)
        this.authStore = new AuthStore(this);
        this.ratesStore = new RatesStore(this);
    }
}

const store = new Store();
export default store;