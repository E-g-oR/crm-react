import { makeAutoObservable } from "mobx";
import { Store } from "..";
import { ITableRow } from "../../../views/components/UI/Table";

interface IRequestInfo {
  url: string;
  base: string;
  symbols: string[];
}

const RATES_URL = process.env.REACT_APP_RATES_BASE_URL;
const API_KEY = process.env.REACT_APP_RATES_ACCESS_KEY;

export default class RatesStore {
  indexStore;
  requestInfo: IRequestInfo = {
    url: "http://data.fixer.io/api/latest?access_key=",
    base: "EUR",
    symbols: ["USD", "BTC", "RUB", "CHF", "GBP", "UAH", "TRY", "THB"],
  };
  rates: ITableRow | null = null;
  inProcess: boolean = false;

  constructor(indexStore: Store) {
    makeAutoObservable(this);
    this.indexStore = indexStore;
    this.getRates();
  }

  getRates() {
    this.inProcess = true;
    const ratesMock: ITableRow = [
      { name: "USD", rate: 2.4428, margin: "MORE", date: "12.12.2021" },
      { name: "EUR", rate: 2.8012, margin: "LESS", date: "12.12.2021" },
      { name: "RUB", rate: 3.4332, margin: "LESS", date: "12.12.2021" },
      { name: "GBP", rate: 3.2718, margin: "LESS", date: "12.12.2021" },
    ];
    const rates: ITableRow = [];

    (async () => {
      const resp = await fetch(`${RATES_URL}${API_KEY}`);
      const ratesResponse = await resp.json();
      this.requestInfo.symbols.forEach((name) => {
        rates.push({
          name,
          rate: ratesResponse.rates[name],
          margin: "MORE",
          date: ratesResponse.date,
        });
      });

      return ratesResponse;
    })();

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
