import { makeAutoObservable } from "mobx";
import AuthStore from "./authStore";

export default class AuthInfoStore {
    authStore;

    constructor(authStore: AuthStore) {
        makeAutoObservable(this);
        this.authStore = authStore;
    }

    clear() {
        console.log('clear authInfoStore after logout'); // TODO remove
    }
}