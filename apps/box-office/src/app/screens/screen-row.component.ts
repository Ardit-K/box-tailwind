/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from '../movies/movie';
import { MoviesService } from '../movies/movies.service';
import { IScreen } from './screen';
import { ScreensService } from './screens.service';

@Component({
    selector:'the-box-office-s-row',
  templateUrl: 'screen-row.component.html',
  styleUrls: ['screen-row.component.css']
})
export class ScreenRowComponent implements OnInit{
  @Input() screen!: IScreen;
  editing = false;
  movies!: IMovie[];

  @Output() screenUpdated = new EventEmitter<IScreen>();

  constructor(private ss: ScreensService, private ms: MoviesService) {}
    ngOnInit(): void {
        this.ms.getMovies().subscribe(data=> this.movies = [...data]);
    }
  edit = () => {
    this.editing = !this.editing;
  };

  save = (screen: IScreen) => {
    this.screenUpdated.emit(screen);
    this.editing = !this.editing;
  };
}
