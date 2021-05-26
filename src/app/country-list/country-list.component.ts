import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from './../countries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  country: any;
  countries;

  constructor(service: CountriesService) {
    console.log(history.state);
    this.country = history.state.name;
    this.countries = service.getRegions(this.country);
  }

  ngOnInit(): void {
  }

}
