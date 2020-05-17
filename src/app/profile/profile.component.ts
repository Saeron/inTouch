import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserDatos } from '../user-datos';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myform: FormGroup;
  user: any;

  constructor(private session: UserService,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {

    this.user = this.session.getSomeData().subscribe(
      data => {
        this.user = data;
      }
    );
    if (!this.user) {
      this.router.navigate(['login']);
    }

    this.myform = new FormGroup({
      nombre: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    });
  }

  onSubmit() {
    this.session.modUser(this.myform.get('nombre').value, this.myform.get('email').value, this.myform.get('password').value).subscribe(
      data => {
        console.log(data.message);
        this.session.logout();
        this.auth.setLoggedIn(false);
      }
    );

    this.router.navigate(['login']);;

  }

}
