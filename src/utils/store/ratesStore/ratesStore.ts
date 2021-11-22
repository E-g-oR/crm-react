import { makeAutoObservable } from "mobx";
import { Store } from "..";
import { ITableRow } from "../../../views/components/UI/Table";
import { IBase } from "../authStore/authInfoStore";

interface IRequestInfo {
  url: string;
  symbols: string[];
}

const RATES_URL = process.env.REACT_APP_RATES_BASE_URL;
const API_KEY = process.env.REACT_APP_RATES_ACCESS_KEY;

export default class RatesStore {
  indexStore;
  requestInfo: IRequestInfo = {
    url: "http://data.fixer.io/api/latest?access_key=",
    symbols: ["BYN", "USD", "BTC", "RUB", "CHF", "GBP", "UAH", "TRY", "THB"],
  };
  base: IBase = "EUR";
  rates: ITableRow | null = null;
  inProcess: boolean = false;

  constructor(indexStore: Store) {
    makeAutoObservable(this);
    this.indexStore = indexStore;
    this.getRates();
  }

  changeBase = (newBase: IBase) => {
    this.base = newBase;
    this.recalculateRates(this.rates);
  };

  recalculateRates(rates: ITableRow | null) {
    if (rates) {
      const baseIndex = rates.findIndex((item) => item.name === this.base);
      rates.map((item) => {
        item.rate = 0 + item.rateOrigin;
        item.rate /= rates[baseIndex].rate;
      });
    }
  }

  getRates(base = this.base) {
    this.inProcess = true;
    const ratesMock: ITableRow = [
      {
        name: "USD",
        rateOrigin: 2.4428,
        rate: 2.4428,
        margin: "MORE",
        date: "12.12.2021",
      },
      {
        name: "EUR",
        rateOrigin: 2.8012,
        rate: 2.8012,
        margin: "LESS",
        date: "12.12.2021",
      },
      {
        name: "RUB",
        rateOrigin: 3.4332,
        rate: 3.4332,
        margin: "LESS",
        date: "12.12.2021",
      },
      {
        name: "GBP",
        rateOrigin: 3.2718,
        rate: 3.2718,
        margin: "LESS",
        date: "12.12.2021",
      },
    ];
    const rates: ITableRow = [];

    // (async () => {
    //   const resp = await fetch(`${RATES_URL}${API_KEY}`);
    //   const ratesResponse = await resp.json();

    //   this.requestInfo.symbols.forEach((name) => {
    //     rates.push({
    //       name,
    //       rateOrigin: ratesResponse.rates[name],
    //       rate: ratesResponse.rates[name],
    //       margin: "MORE",
    //       date: ratesResponse.date,
    //     });
    //   });

    //   this.putRates(rates);
    //   return ratesResponse;
    // })();
    setTimeout(() => {
      this.putRates(rates);
    }, 3000);
  }

  convertRatesToTableFormat() {}

  putRates(rates: ITableRow) {
    this.rates = rates;
    this.inProcess = false;
  }
}
