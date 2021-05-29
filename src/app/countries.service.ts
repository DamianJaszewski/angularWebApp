import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountries } from './countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url2 = 'https://restcountries.eu/rest/v2/region/';
  url1 = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient){
  }
  
  getRegions(region: string): Observable<ICountries[]>{
    return this.http.get<ICountries[]>(this.url2 + region);
  }
  
  ngOnInit(): void {
  }
}
