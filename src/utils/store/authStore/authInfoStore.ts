import { makeAutoObservable } from "mobx";
import { ITableHistoryRowItem } from "../../../views/History/History";
import AuthStore from "./authStore";

type ISaving = {
  name: string;
  value: number;
};
type IPlanning = {
  title: string;
  limit: number;
  value: number;
};

interface IUserAccount {
  bill: number;
  savings: {
    value: number;
    currency: string;
    list: ISaving[];
  };
  history: ITableHistoryRowItem[];
  planning: {
    period: string;
    items: IPlanning[];
  };
}

export default class AuthInfoStore {
  authStore;
  userAccountInfo: IUserAccount | null = null;

  constructor(authStore: AuthStore) {
    makeAutoObservable(this);
    this.authStore = authStore;
  }

  getInfo() {
    const info = {
      bill: 34500,
      savings: {
        value: 340,
        currency: "USD",
        list: [],
      },
      history: [],
      planning: {
        period: "month",
        items: [],
      },
    };
    setTimeout(() => {
      this.putInfo(info);
    }, 5000);
  }
  putInfo(info: IUserAccount | null) {
    this.userAccountInfo = info;
  }

  clear() {
    this.userAccountInfo = null;
  }
}
