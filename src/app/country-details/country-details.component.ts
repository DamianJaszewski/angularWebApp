import { Component, OnInit } from '@angular/core';

import { CountriesService } from './../countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: string = "europe";
  countries;

  constructor(service: CountriesService) {
    this.countries = service.getRegions(this.country);
  }

  ngOnInit(): void {
  }

}
