import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieAddComponent } from './movie-add.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieListComponent } from './movie-list.component';
import { movieRoutes } from './movies.routes';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, MovieAddComponent],
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(movieRoutes)],
})
export class MoviesModule {}
