import { Route } from '@angular/router';
import { MovieAddComponent } from './movie-add.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieListComponent } from './movie-list.component';

export const movieRoutes: Route[] = [
  {path:'add-movie', component: MovieAddComponent},
  {path: ':id', component: MovieDetailComponent},
  { path: '', component: MovieListComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
