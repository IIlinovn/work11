import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  email = ''
  password = ''

  login() {
    this.authService.login(this.email, this.password).subscribe();
  }
}
