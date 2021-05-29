import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { ICountries } from '../countries';

import { CountriesService } from './../countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  searchText: string = "Angola";
  region: any;
  countries: any[]=[];

  
  constructor(private _countriesService: CountriesService){
  }
  
    //history.state.name - download data from state with variable "name"    
  
  // constructor(service: CountriesService) {
  //   console.log(history.state.name);
  //   //history.state.name - download data from state with variable "name"
  //   this.region = history.state.name;
  //   this.countries = service.getRegions(this.region);
  // }

  ngOnInit(){
    this.region = history.state.name;
    this._countriesService.getRegions(this.region)
      .subscribe(data => this.countries = data);
  }

  competencies = [
    { Id: 1, Name: "Bootstrap", Level: 4, Picture: "bootstrap.svg", Description: "Wersja 3" },
    { Id: 2, Name: "AngularJS", Level: 3, Picture: "angularjs.png", Description: "" },
    { Id: 3, Name: "Angular", Level: 4, Picture: "angular.png", Description: "" },
    { Id: 4, Name: "Ionic", Level: 4, Picture: "ionic.png", Description: "Wersja 2" },
    { Id: 5, Name: "PhoneGap", Level: 1, Picture: "phonegap.png", Description: "Tylko absolutne podstawy" },
    { Id: 6, Name: "ReactJS", Level: 0, Picture: "react.png", Description: "Tylko absolutne podstawy" },
    { Id: 7, Name: "Xamarin", Level: 2, Picture: "xamarin.png", Description: "Bez API dla IOS" },
    { Id: 8, Name: "HTML5", Level: 5, Picture: "html5.png", Description: "Bez WebSockets i Database API" },
    { Id: 9, Name: "CSS3", Level: 4, Picture: "css3.png", Description: "" },
    { Id: 10, Name: "WebAPI", Level: 5, Picture: "webapi.png", Description: "" }
   ];
  
}


