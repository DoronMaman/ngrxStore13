import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  usersUrl = 'assets/users.json';
  userUrl = 'assets/user.json';


getConfig() {
  return this.http.get<any>(this.usersUrl);
}
addUser(){
  return this.http.get<any>(this.userUrl);

}
}
