import { Component } from '@angular/core';
import Movie from 'src/app/models/movie.model';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private movieService:MoviesServiceService){
    this.movieService.get()
                    .subscribe(data=>{
                      this.movies = data as Movie[];
                    })
  }

  addHandler(newMovie:Movie){
    this.movieService.post(newMovie)
                    .subscribe(movie=>{
                        this.movies.push(movie as Movie);
                    })
  }

  updateDetails(movie:Movie) {
    this.movieService.put(new Movie(movie.id,movie.name,movie.year,movie.description,movie.image,movie.watched))
                    .subscribe(data=>{})
  }  
}
