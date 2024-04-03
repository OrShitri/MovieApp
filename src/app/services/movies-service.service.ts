import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Movie from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  url: string = "http://localhost:3000/movies/";

  constructor(private httpServer:HttpClient) { }

  get(){
      return this.httpServer.get(this.url);
  }

  post(newMovie:Movie){
    return this.httpServer.post(this.url, newMovie);
  }

  put(movie:Movie){
    return this.httpServer.put(this.url+ movie.id, movie);

  }
  delete(id:number){
    return this.httpServer.delete(this.url+ id)
  }
}
