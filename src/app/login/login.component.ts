import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    
    /*
    this.auth.login(username,password).subscribe(
      data => {
        console.log(data);
      }
    );
    */
    
    this.auth.getUserDetails(username,password).subscribe(
      data => {
        if(data.success){
          this.auth.setLoggedIn(true);
          this.router.navigate(['listado']);
        } else {
          //por terminar
          window.alert(data.message);
        }
      }
    );
    
  }
}
