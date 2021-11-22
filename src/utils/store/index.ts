import { makeAutoObservable } from "mobx";
import AuthStore from "./authStore/authStore";
import MessagesStore from "./messagesStore";
import RatesStore from "./ratesStore/ratesStore";

export class Store {
    authStore;
    ratesStore;
    messagesStore;
    constructor() {
        makeAutoObservable(this)
        this.authStore = new AuthStore(this);
        this.ratesStore = new RatesStore(this);
        this.messagesStore = new MessagesStore(this);
    }
}

const store = new Store();
export default store;