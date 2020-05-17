import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface moduserResponse {
  success: boolean,
  message: string
}


@Injectable({
  providedIn: 'root'
})
export class ModusersService {

  constructor(private http: HttpClient) {}

  addUser(username,password){
    return this.http.post<moduserResponse>("/api/newUser.php", {
      username,
      password
    });
  }

}
