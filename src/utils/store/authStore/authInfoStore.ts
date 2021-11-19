import { makeAutoObservable } from "mobx";
import { ITableHistoryRowItem } from "../../../views/History/History";
import AuthStore from "./authStore";

type ISaving = {
  name: string;
  value: number;
};
type IPlanning = {
  title: string,
  limit: number,
  value: number;
}

interface IUserAccount {
  bill: number;
  savings: {
    value: number;
    list: ISaving[];
  };
  history: ITableHistoryRowItem[];
  planning: {
    period: string,
    items: IPlanning[]
  }
}

export default class AuthInfoStore {
  authStore;
  userAccountInfo: IUserAccount | null = null;

  constructor(authStore: AuthStore) {
    makeAutoObservable(this);
    this.authStore = authStore;
  }




  clear() {
    console.log("clear authInfoStore after logout"); // TODO remove
    this.userAccountInfo = null;
  }
}
