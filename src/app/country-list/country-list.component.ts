import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  url2 = 'https://restcountries.eu/rest/v2/region/europe';
  regions: any;
  
  constructor(private http: HttpClient){}
  
  public getRegions(){
    this.regions = this.http.get(this.url2)
  }
  ngOnInit(): void {
  }

}
