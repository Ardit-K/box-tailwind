import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IScreen } from './screen';

@Injectable({
  providedIn: 'root',
})
export class ScreensService {
  constructor(private http: HttpClient) {}
  getScreens = () => {
    return this.http.get<IScreen[]>('/api/screens');
  };

  updateScreen = (screen: IScreen) => {
    console.log("updating screen...");
    this.http.put<IScreen>('/api/screens', screen).subscribe(data=> console.log(data));
  };
}
