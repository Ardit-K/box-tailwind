import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from './movie';
import { MoviesService } from './movies.service';

@Component({
  templateUrl: 'movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {
  movie: IMovie | undefined;

  constructor(private ms: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.ms.byId(id).subscribe(data=> this.movie = data);
    }
  }
}
