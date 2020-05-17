import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserDatos} from './user-datos';
import { PhpResponse } from './php-response';

interface isLoggedIn {
  status: boolean;
}
interface logoutStatus {
  success: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //midify your user
  modUser(username,email,password){
    return this.http.post<PhpResponse>("/api/modUser.php", {
      username,
      email,
      password
    });
  }

  //Return username of the user register
  getSomeData(){
    return this.http.get<UserDatos>("/api/userdata.php");
  }

  //Boolean indicate if there is a user logged in
  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin.php');
  }

  //Delete user session
  logout() {
    return this.http.get<logoutStatus>('/api/logout.php')
  }
}
