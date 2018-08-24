import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent {
  formData: LoginFormModel = {
    login: '',
    password: ''
  };
  loginError = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  login() {
    this.loginError = false;

    this.loginService.logIn(this.formData).subscribe(() => {
      this.router.navigate(['/']);
    }, (errMessage) => {
      this.loginError = errMessage;
    });
  }
}
