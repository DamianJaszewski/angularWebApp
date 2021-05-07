import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  url2 = 'https://restcountries.eu/rest/v2/region/europe';
  regions: any;
  
  constructor(private http: HttpClient){}
  
  public getRegions(){
    this.regions = this.http.get(this.url2)
  }
  ngOnInit(): void {
  }

}
