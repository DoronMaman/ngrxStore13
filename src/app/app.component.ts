import { AppState } from './reducers/index';
import * as fromRoot from './reducers/index';

import { UsersService } from './users.service';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddUsers, AddUsersSuccess, loadUsers, LoadUsersSuccess } from './action/users.actions';
import { User } from './models/user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxStore';
  users: any | undefined;
  public usersData:any;
  constructor(private usersService:UsersService,private store: Store<AppState>){}

// showConfig() {

//   this.usersService.getConfig()
//     .subscribe((data: any) => {
//       this.store.dispatch(LoadUsersSuccess({ data }));

//     } );
// }

AddUser(){

  this.store.dispatch(AddUsers())
}
showConfig(){

  this.store.dispatch(loadUsers());

}
ShowAllUsers(){
  this.store.select(fromRoot.selectAllUserss).subscribe(users=>console.log("users",users))

  // const users=this.store.pipe(selectUsersShow())
  this.store.select(fromRoot.selectCurrentUser).subscribe(user=>console.log('userBy id ',user));


}

}
