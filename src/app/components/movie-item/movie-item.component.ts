import { Component,  Input } from '@angular/core';
import Movie from 'src/app/models/movie.model';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: Movie = new Movie();
}
