import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMovie } from './movie';
import { MoviesService } from './movies.service';

@Component({
  templateUrl: 'movie-add.component.html',
})
export class MovieAddComponent implements OnInit {
  id!: number;
  movieForm!: FormGroup;
  constructor(
    private ms: MoviesService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.ms.getMovies().subscribe((data) => (this.id = data.length + 1));
    this.movieForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3)]],
      Release: ['', Validators.required],
      Description: [''],
      Rating: ['', Validators.required],
    });
  }
  save = () => {
    const movie: IMovie = {
      id: String(this.id),
      Name: this.movieForm.get('Name')?.value,
      Release: this.movieForm.get('Release')?.value,
      Description: this.movieForm.get('Description')?.value,
      Rating: this.movieForm.get('Rating')?.value,
    };
    this.ms.add(movie);
    this.router.navigate(['movies']);
  };

  get Name() {
    return this.movieForm.get('Name');
  }
}
