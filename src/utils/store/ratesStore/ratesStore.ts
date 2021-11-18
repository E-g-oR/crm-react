import { makeAutoObservable } from 'mobx';
import { Store } from '..';
import { ITableRow } from '../../../views/components/UI/Table';

interface IRequestInfo {
    url: string,
    base: string,
    symbols: string[],
}
export default class RatesStore {
    indexStore;
    requestInfo: IRequestInfo = {
        url: 'http://data.fixer.io/api/latest?access_key=',
        base: 'EUR',
        symbols: ['USD', 'BTC', 'RUB', 'CHF', 'GBP', 'UAH', 'TRY', 'THB']
    }
    rates: ITableRow | null = null;
    inProcess: boolean = false;

    constructor(indexStore: Store) {
        makeAutoObservable(this);
        this.indexStore = indexStore;
        this.getRates();
    }

    getRates() {
        this.inProcess = true;
        const rates: ITableRow = [
            { name: 'USD', rate: 2.4428, margin: "MORE", date: '12.12.2021' },
            { name: 'EUR', rate: 2.8012, margin: "LESS", date: '12.12.2021' },
            { name: 'RUB', rate: 3.4332, margin: "LESS", date: '12.12.2021' },
            { name: 'GBP', rate: 3.2718, margin: "LESS", date: '12.12.2021' },
        ];
        setTimeout(() => {
            this.putRates(rates);
        }, 3000)
    }

    putRates(rates: ITableRow) {
        this.rates = rates;
        this.inProcess = false;
    }
}