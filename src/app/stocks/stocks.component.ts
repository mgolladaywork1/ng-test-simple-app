import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { STOCKS } from '../model/mock-stocks';
@Component({
    selector: 'app-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

    stock: Stock;
    stocks: Stock[] = STOCKS;
    selectedStock: Stock;

    constructor() { }

    ngOnInit() {
    }

    onSelected(stock: Stock) {
        this.selectedStock = stock;
    }

}
