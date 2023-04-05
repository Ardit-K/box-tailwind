import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IMovie } from "./movie";

@Injectable({
    providedIn: 'root'
})

export class MoviesService{
    constructor(private http: HttpClient){}
   getMovies = ()=>{
    return this.http.get<IMovie[]>('/api/movies');
   }
   
   byId =  (id:string)=>{
    return this.http.get<IMovie>(`/api/movies/${id}`);
   }

   add= (movie: IMovie)=>{
    return this.http.post<IMovie>('/api/movies', movie).subscribe();
   }
   
   delete = (movie:IMovie)=>{
    const id = movie.id;
    return this.http.delete<IMovie>(`/api/movies/${id}`).subscribe();
   }
}