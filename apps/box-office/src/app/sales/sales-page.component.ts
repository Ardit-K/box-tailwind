import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IScreen } from '../screens/screen';
import { ScreensService } from '../screens/screens.service';
import { ISale } from './sale';
import { SalesService } from './sales.service';
import { ISwapEvent } from './swap-event';

@Component({
  templateUrl: './sales-page.component.html',
})
export class SalesPageComponent implements OnInit {
  screens$!: Observable<IScreen[]>;
  screens!: IScreen[];
  @Input() swapMode!: boolean;
  toBeSwappedScreen!: IScreen;
  availableToBeSwapped!: IScreen[];
  sales!: ISale[];

  constructor(
    private screensService: ScreensService,
    private salesService: SalesService
  ) {}
  ngOnInit(): void {
    this.screens$ = this.screensService.getScreens();
    this.swapMode = false;
    this.screens$.subscribe((data) => {
      this.screens = [...data];
    });
  }

  getSales = () => {
    this.sales = this.salesService.getSales();
  };

  beginSwap = (screen: IScreen) => {
    this.toBeSwappedScreen = screen;
    this.availableToBeSwapped = this.screens.filter((s) => s.id !== screen.id);
    this.swapMode = !this.swapMode;
  };

  performSwap = (request: ISwapEvent) => {
    request.src.ticketsAvailable += request.tickets;
    let sales = this.salesService.getSales();
    const returnRec: ISale = {
      saleId: String(sales.length + 1),
      screenId: request.src.id,
      movie: request.src.Movie,
      tickets: request.tickets,
      saleType: 'return',
    };
    request.target.ticketsAvailable -= request.tickets;
    const buyRec: ISale = {
      saleId: String(sales.length + 2),
      screenId: request.target.id,
      movie: request.target.Movie,
      tickets: request.tickets,
      saleType: 'buy',
    };
    this.salesService.addSale(returnRec);
    this.salesService.addSale(buyRec);
    sales = this.salesService.getSales();
    console.log(sales);
    this.swapMode = false;
    this.getSales();
  };
}
