import { AppState } from './reducers/index';
import { UsersService } from './users.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddUsersSuccess, loadUsers, LoadUsersSuccess } from './action/users.actions';
import { User } from './models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxStore';
  users: any | undefined;
  constructor(private usersService:UsersService,private store: Store<AppState>){}

// showConfig() {

//   this.usersService.getConfig()
//     .subscribe((data: any) => {
//       this.store.dispatch(LoadUsersSuccess({ data }));

//     } );
// }

AddUser(){
  let data:User= {
    id:'1',
    name:'doron',
    gender:'male',
    email:'doron.gmail.com'
  }
  this.store.dispatch(AddUsersSuccess({ data }))
}
showConfig(){
  this.store.dispatch(loadUsers());
}
}
