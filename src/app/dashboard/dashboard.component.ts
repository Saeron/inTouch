import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message = "Loading..."
  constructor(private user: UserService,
    private router: Router) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(
      data => {
        this.message = data.username;
      }
    );
  }
}
