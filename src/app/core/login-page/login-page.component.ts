import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

import { LoginFormModel } from './login-form.model';
import { LoginDataModel } from '../login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent {
  formData: LoginFormModel = {
    email: '',
    password: ''
  };
  isLoginError = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  login() {
    this.isLoginError = false;

    const loginResult: LoginDataModel = this.loginService.logIn(this.formData);

    this.isLoginError = !loginResult.success;

    if (loginResult.success) {
      this.router.navigate(['/']);
      this.loginService.onLoginChange();
    }
  }
}
