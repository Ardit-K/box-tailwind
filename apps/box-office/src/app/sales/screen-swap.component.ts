/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IScreen } from '../screens/screen';
import { SalesService } from './sales.service';

@Component({
    selector:'the-box-office-swap',
  templateUrl: 'screen-swap.component.html',
})
export class SwapComponent implements OnInit {
  @Input() screen!: IScreen;
  selectedScreen!: IScreen;
  tickets!: number;
  @Input() availableScreens!: IScreen[];
  @Output() swapComplete = new EventEmitter<{
    src: IScreen;
    target: IScreen;
    tickets: number;
  }>();

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.tickets = 0;
    const test = this.availableScreens;
    if (test) {
      console.log(test);
    }
  }
  swap = () => {
    if (
      this.tickets <= this.selectedScreen.ticketsAvailable &&
      this.tickets <= this.screen.totalTickets - this.screen.ticketsAvailable
    ) {
      this.swapComplete.emit({
        src: this.screen,
        target: this.selectedScreen,
        tickets: this.tickets,
      });
    } else {
      alert(
        'Ticket value cannot be more than the available tickets of selected screen or more than the purhcased tickets from source screen.'
      );
    }
  };
}
