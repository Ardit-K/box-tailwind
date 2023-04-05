import { IMovie } from "../movies/movie";

export interface IScreen{
    id: string,
    Movie: IMovie,
    ticketsAvailable: number,
    totalTickets: number
}