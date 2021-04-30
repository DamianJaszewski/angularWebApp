import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './post';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular webApp';
  url = 'https://jsonplaceholder.typicode.com';
  url2 = 'https://restcountries.eu/rest/v2/region/europe';
  posts: any;
  
  constructor(private http: HttpClient){}
  
  getPosts(){
    this.posts = this.http.get<Post[]>(this.url + '/posts')
  }

}
