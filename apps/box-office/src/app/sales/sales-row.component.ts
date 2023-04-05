/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IScreen } from '../screens/screen';
import { ISale } from './sale';
import { SalesService } from './sales.service';

@Component({
  selector: 'the-box-office-sale-row',
  templateUrl: 'sales-row.component.html',
  styleUrls: ['sales-row.component.css'],
})
export class SalesRowComponent {
  @Input() screen!: IScreen;
  tickets = 0;
  @Output() screenToBeSwapped = new EventEmitter<IScreen>();
  @Output() pushSale = new EventEmitter<void>();

  constructor(private salesService: SalesService) {}
  buy = () => {
    if (this.tickets <= this.screen.ticketsAvailable && this.tickets != 0) {
      this.screen.ticketsAvailable -= this.tickets;
      const sales = this.salesService.getSales();
      let id = 1;
      if (sales?.length) {
        id = sales.length + 1;
      }
      const sale: ISale = {
        saleId: String(id),
        screenId: this.screen.id,
        movie: this.screen.Movie,
        tickets: this.tickets,
        saleType: 'buy',
      };
      this.salesService.addSale(sale);
      console.log(sales);
    }
    this.tickets = 0;
    this.pushSale.emit();
  };

  return = () => {
    if (
      this.screen.ticketsAvailable + this.tickets <= this.screen.totalTickets &&
      this.tickets != 0
    ) {
      this.screen.ticketsAvailable += this.tickets;
      const sales = this.salesService.getSales();
      const sale: ISale = {
        saleId: String(sales.length + 1),
        screenId: this.screen.id,
        movie: this.screen.Movie,
        tickets: this.tickets,
        saleType: 'return',
      };
      this.salesService.addSale(sale);
      console.log(sales);
    }
    this.tickets = 0;
    this.pushSale.emit();
  };

  swap = () => {
    this.screenToBeSwapped.emit(this.screen);
  };
}
