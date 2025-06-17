import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private http = inject(HttpClient);
  private baseUrl= "https://restcountries.com/v3.1/";

  getSearchByName(name:string){
    const url = this.baseUrl+'name/'+name
    return this.http.get(url)
  }
}
