import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url2 = 'https://restcountries.eu/rest/v2/region/';
  countries: any;
  
  constructor(private http: HttpClient){}
  
  public getRegions(countrie: string){
    this.countries = this.http.get(this.url2 + countrie)
    return this.countries;
  }
  ngOnInit(): void {
  }
}
