import { Component } from '@angular/core';
import User from 'src/app/models/user.model';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  
  constructor(private userService:UsersServiceService){
    this.userService.get()
                    .subscribe(data=>{
                      this.users = data as User[];
                    })
  }

  editHandler(user:User) {  
    this.userService.put(user)
                    .subscribe(data=>{})                
  }  
      
  deleteHandler(id:number){
    this.userService.delete(id)
                    .subscribe(datd=>{
                      this.users = this.users.filter(u=>u.id != id);
                    })
  }

  duplicateHandler(user:User){
    this.userService.post(user)
                    .subscribe(user=>{
                        this.users.push(user as User);
                    })
  }
}
