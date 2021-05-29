import { CountriesService } from './../countries.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  
  region: string = "europe";
  countries;

  constructor(service: CountriesService) {
    this.countries = service.getRegions(this.region);
  }

  ngOnInit(): void {
  }

}
