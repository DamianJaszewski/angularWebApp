import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Region} from './region';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular webApp';
  url2 = 'https://restcountries.eu/rest/v2/region/europe';
  regions: any;
  
  constructor(private http: HttpClient){}
  
  public getRegions(){
    this.regions = this.http.get<Region[]>(this.url2)
  }

}
