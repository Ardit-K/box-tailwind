import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IScreen } from './screen';
import { ScreensService } from './screens.service';

@Component({
  templateUrl: './screen-list.component.html',
})
export class ScreenListComponent implements OnInit {
  screens$!: Observable<IScreen[]>;
  screens!: IScreen[];

  constructor(private ss: ScreensService) {}
  ngOnInit(): void {
    this.screens$ = this.ss.getScreens();
    this.screens$.subscribe(data => (this.screens = [...data]));
    console.log(`screens: ${JSON.stringify(this.screens)}`);
  }

  updateScreen = (screen: IScreen) => {
    this.ss.updateScreen(screen);
  };
}
