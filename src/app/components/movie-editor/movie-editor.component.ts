import { Component, Input } from '@angular/core';
import Movie from 'src/app/models/movie.model';

@Component({
  selector: 'movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent {
  @Input() movie: Movie = new Movie();

  isVisible: boolean = false;

  hideEditor(){
    this.isVisible = !this.isVisible;
  }
  
}
