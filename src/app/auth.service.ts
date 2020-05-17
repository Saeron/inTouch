import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface registerResponse {
  success: boolean;
  message: string;
}

interface myData {
  success: boolean;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false;
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    //post details to API server, and return if user info is correct
    return this.http.post<myData>('/api/login.php', {
      username,
      password
    });
  }

  registerUser(username,password,email){
    return this.http.post<registerResponse>('/api/newUser.php', {
      username,
      password,
      email
    });
  }

}
