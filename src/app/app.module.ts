import { CountriesService } from './countries.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CountryPipe } from './country.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailsComponent,
    HomeScreenComponent,
    CountryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
