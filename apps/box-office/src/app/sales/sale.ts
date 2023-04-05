import { IMovie } from '../movies/movie';

export interface ISale {
  saleId: string;
  screenId: string;
  movie: IMovie;
  tickets: number;
  saleType: 'buy' | 'return';
}
