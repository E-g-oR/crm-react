import { makeAutoObservable } from "mobx";

import { getDatabase, onValue, push, ref, set } from "@firebase/database";
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

// =======================================
export type IBase =
  | "USD"
  | "EUR"
  | "BYN"
  | "BTC"
  | "RUB"
  | "TRY"
  | "GBP"
  | "CHF";

export type ICategoryUI = {
  limit: number;
  name: IBase;
  period: string;
  key: string;
};

type ICategory = {
  limit: number;
  name: IBase;
  period: string;
};

type ICategories = {
  [key: string]: ICategory;
};
export default class AuthInfoStore {
  authStore;
  userAccountInfo: IUserAccount | null = null;

  base: IBase = "EUR";

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
  categories: ICategories | null = null;

  constructor(authStore: AuthStore) {
    makeAutoObservable(this);
    this.authStore = authStore;
  }

  putInfo = (info: IUserAccount | null) => (this.userAccountInfo = info);

  getUID = () => this.authStore.user?.uid;

  addCategory(name: string, limit: number, period: string = "month") {
    limit = Number(limit);
    const uid = this.getUID();

    const database = getDatabase();
    if (uid) {
      const categoryListRef = ref(database, `users/${uid}/categories`);
      const newCategory = push(categoryListRef);
      set(newCategory, {
        name,
        limit,
        period,
      }).then(() => {
        this.authStore.indexStore.messagesStore.setSucsess(
          "Категория успешно добавлена!"
        );
        return true;
      });
    }
    return false;
  }

  getCategories() {
    const uid = this.getUID();
    const database = getDatabase();
    if (uid) {
      const starCountRef = ref(database, `users/${uid}/categories`);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        this.categories = data;
      });
    }
  }
  initialiseDBForUser(
    userId: string,
    name: string | null,
    email: string | null
  ) {
    const initInfoValue = {
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

  saveToDB = (userId: number) => {
    const data = this.userAccountInfo;
    const database = getDatabase();
    set(ref(database, `users/${userId}/userAccountInfo`), data);
  };

  getFormDB() {
    const db = getDatabase();
    const user = this.authStore.user;
    if (user) {
      const userId = user.uid;
      const email = user.email;
      const name = user.displayName ? user.displayName : email;

      const userAccountInfoFromDB = ref(db, `users/${userId}/userAccountInfo`);

      this.getCategories();
      onValue(userAccountInfoFromDB, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          this.initialiseDBForUser(userId, name, email);
          this.getFormDB();
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

  calcSavings(savingsArr: ISavingItem[]) {
    // TODO чтобы посчитать сбережения, нужно получить rates
    let amount = 0;

    return amount;
  }
  updateSavings(savings: ISaving) {
    // TODO нужно посчитать общие сбережения ^
    // TODO отправить полностью новый объект сбережений
    const updateLocal = () => {};
    const updateonBackend = () => {};

    updateLocal();
    updateonBackend();
  }

  ubdateAtDB() {}

  removeFromDB() {}

  clear() {
    this.userAccountInfo = null;
  }
}
