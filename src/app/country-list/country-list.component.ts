import { Component, OnInit } from '@angular/core';

import { CountriesService } from './../countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  country: string = "europe";
  countries;

  constructor(service: CountriesService) {
    this.countries = service.getRegions(this.country);
  }

  ngOnInit(): void {
  }

}
