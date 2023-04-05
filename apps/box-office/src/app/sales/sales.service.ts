import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISale } from './sale';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  sales!: ISale[];
  constructor(private http: HttpClient){}
  getSales = () => {
    this.http.get<ISale[]>('/api/sales').subscribe(data=> this.sales = [...data]);
    return this.sales;
  };

  addSale = (sale: ISale) => {
    this.http.post<ISale>('/api/sales', sale).subscribe();
  };
}
