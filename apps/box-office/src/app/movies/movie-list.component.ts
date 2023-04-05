import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IMovie } from "./movie";
import { MoviesService } from "./movies.service";

@Component({
    templateUrl: './movie-list.component.html'
})

export class MovieListComponent implements OnInit{
    movies$!: Observable<IMovie[]>
    movies!: IMovie[];
    constructor(private ms: MoviesService){}
    ngOnInit(): void {
        this.movies$ = this.ms.getMovies();
        this.movies$.subscribe(data => {
            this.movies = [...data];
            console.log(`movies: ${JSON.stringify(this.movies)}`);
        });
    }

    delete = (movie: IMovie) =>{
        const yes = confirm(`Are you sure you would like to delete movie ${movie.id}?`);
        if(yes){this.ms.delete(movie);}
        this.ngOnInit();
    }
    
}