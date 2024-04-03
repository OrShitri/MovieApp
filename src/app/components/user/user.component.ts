import { Component, EventEmitter, Input, Output } from '@angular/core';
import User from 'src/app/models/user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User = new User();

  isVisible: boolean = false;

  hideEditor(){
    this.isVisible = !this.isVisible;
  }

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() duplicate: EventEmitter<any> = new EventEmitter<any>();

  updateDetails(username:string, password:string, name:string, email:string) {  
    this.user.username = username;
    this.user.password = password;
    this.user.name = name;
    this.user.email = email;       
    
    this.edit.emit(this.user);
  }

  deleteHandler(){
    this.delete.emit(this.user.id);
  }

  duplicateHandler(){
    this.duplicate.emit(new User(0,this.user.username,this.user.password,this.user.name,this.user.email));
  }
}
