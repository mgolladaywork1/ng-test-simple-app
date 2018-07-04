import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { STOCKS } from '../model/mock-stocks';
@Component({
    selector: 'app-stocks',
    templateUrl: './stocks.component.html'
})
export class StocksComponent implements OnInit {

    stock: Stock;
    stocks: Stock[] = STOCKS;

    constructor() { }

    ngOnInit() {
    }


}
