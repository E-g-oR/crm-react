import { getAuth } from "@firebase/auth";
import { getDatabase, onValue, ref, set } from "@firebase/database";
import { makeAutoObservable } from "mobx";
import { ITableHistoryRowItem } from "../../../views/History/History";
import AuthStore from "./authStore";

type ISavingItem = {
  name: string;
  value: number;
};
type ISaving = {
  value: number;
  currency: string;
  list: ISavingItem[];
};

type IPlanningItem = {
  title: string;
  limit: number;
  value: number;
};
type IPlanning = {
  period: string;
  items: IPlanningItem[];
};

interface IUserAccount {
  bill: number;
  savings: ISaving;
  history: ITableHistoryRowItem[];
  planning: IPlanning;
}

export default class AuthInfoStore {
  authStore;
  userAccountInfo: IUserAccount | null = null;

  bill: number = 0;
  savings: ISaving = {
    currency: "USD",
    value: 0,
    list: [],
  };
  history: ITableHistoryRowItem[] = [];
  planning: IPlanning = {
    period: "month",
    items: [],
  };

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

  initialiseDBForUser(
    userId: string,
    name: string | null,
    email: string | null
  ) {
    const initInfoValue: IUserAccount = {
      bill: 0,
      history: [],
      planning: {
        period: "month",
        items: [],
      },
      savings: {
        currency: "USD",
        value: 0,
        list: [],
      },
    };
    const database = getDatabase();
    set(ref(database, "users/" + userId), {
      name,
      email,
      userAccountInfo: initInfoValue,
    });
  }

  saveToDB(userId: number) {
    const initInfoValue: IUserAccount = {
      bill: 0,
      history: [],
      planning: {
        period: "month",
        items: [],
      },
      savings: {
        currency: "USD",
        value: 0,
        list: [],
      },
    };
    const database = getDatabase();
    set(ref(database, `users/${userId}/userAccountInfo`), initInfoValue);
  }

  getFormDB() {
    const db = getDatabase();
    const user = this.authStore.user;
    if (user) {
      const userId = user.uid;
      const email = user.email;
      const name = user.displayName ? user.displayName : email;

      const userAccountInfoFromDB = ref(db, `users/${userId}/userAccountInfo`);
      onValue(userAccountInfoFromDB, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          this.initialiseDBForUser(userId, name, email);
        } else {
          this.putInfo(data);
        }
      });
    }
  }

  updateBill(newBill: number) {
    const user = this.authStore.user;
    if (user) {
      const userId = user.uid;

      this.bill = newBill;
      const database = getDatabase();
      set(ref(database, `users/${userId}/userAccountInfo/bill`), newBill);
    }
  }

  addHistory(newHistory: ITableHistoryRowItem) {}
  updateHistory(history: ITableHistoryRowItem[]) {}

  addPlanning(newPlanning: IPlanningItem) {}
  updatePlanning(planning: IPlanning) {}

  addSavings(newSavings: ISavingItem) {}
  updateSavings(savings: ISaving) {}

  ubdateAtDB() {}

  removeFromDB() {}

  clear() {
    this.userAccountInfo = null;
  }
}
