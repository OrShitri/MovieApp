import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieApp';

  isVisibleMovies: boolean = true; 
  isVisibleUsers: boolean = false;   

  viewUsers(){
    this.isVisibleMovies = true;
    this.isVisibleUsers = false;
  }

  viewMovies(){
    this.isVisibleUsers = true;
    this.isVisibleMovies = false;
  }

}
