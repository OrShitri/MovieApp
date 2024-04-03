import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  
  url: string = "http://localhost:3000/users/";

  constructor(private httpServer:HttpClient) { }

  get(){
      return this.httpServer.get(this.url);
  }

  post(user:User){
    return this.httpServer.post(this.url, user);
  }

  put(user:User){
    return this.httpServer.put(this.url+ user.id, user);

  }
  delete(id:number){
    return this.httpServer.delete(this.url+ id)
  }
}
