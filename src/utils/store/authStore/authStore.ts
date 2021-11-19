import { Auth, signInWithEmailAndPassword, signOut, User } from "@firebase/auth";
import { makeAutoObservable } from "mobx";
import { Store } from "..";
import AuthInfoStore from "./authInfoStore";

export default class AuthStore {
    indexStore;
    authInfoStore;
    user: User | null = null;
    error: boolean = false;
    errorMessage: string | null = null;
    inProcess: boolean = false;

    constructor(indexStore: Store) {
        makeAutoObservable(this);
        this.indexStore = indexStore;
        this.authInfoStore = new AuthInfoStore(this);
    }

    login(auth: Auth, { email, password }: { email: string, password: string }) {
        this.inProcess = true;
        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                this.setUser(response.user);

            })
            .catch(e => {
                this.error = true;
                console.log(e.message); // TODO remove
                console.log(e.code); // TODO remove
            })
            .finally(() => {
                this.inProcess = false;
            })
    }

    setUser(user: User | null) {
        this.user = user;
        if (user) {
          this.authInfoStore.getInfo();
        }
    }

    logout(auth: Auth) {
        signOut(auth)
            .then(() => this.clearAfterLogout())
            .catch((e) => {

            })
    }

    register(auth: Auth) {
        // TODO write user to database
    }

    updateProfile() {

    }

    clearAfterLogout() {
        this.user = null;
        this.authInfoStore.clear()
    }
}