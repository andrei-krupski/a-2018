import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/login.service';

import { UserModel } from '../../user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  user: UserModel;

  constructor(private loginService: LoginService) {}

  logIn() {
    const result = this.loginService.logIn('AndrewK', '1234');

    this.isLogged = result.success;
    this.user = result.user;
  }

  logOff() {
    this.isLogged = false;
    this.user = null;
  }

  ngOnInit() {
  }
}
