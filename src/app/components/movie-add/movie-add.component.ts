import { Component, EventEmitter, Output } from '@angular/core';
import Movie from 'src/app/models/movie.model';

@Component({
  selector: 'movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {

  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  
  watched : boolean = false;

  selectedYes(){
    this.watched = true;
  }

  selectedNo(){
    this.watched = false;
  }

  addHandler(name:string, year:string, description:string, image:string) {
    this.add.emit(new Movie(0,name,Number(year),description,image,this.watched));
    
    this.clearFields();
  }

  clearFields(){
    setTimeout(function() { 
      (document.getElementById('movie-add-name') as HTMLInputElement).value = ""; 
      (document.getElementById('movie-add-year') as HTMLInputElement).value = ""; 
      (document.getElementById('movie-add-description') as HTMLInputElement).value = ""; 
      (document.getElementById('movie-add-image') as HTMLInputElement).value = ""; 
      (document.getElementById('movie-add-watched-yes') as HTMLInputElement).checked = false;
      (document.getElementById('movie-add-watched-no') as HTMLInputElement).checked = false;
    }, 100);
    
    this.watched = false;
  }

}
