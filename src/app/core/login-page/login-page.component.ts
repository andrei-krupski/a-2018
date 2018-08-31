import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../login.service';
import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})
export class LoginPageComponent {
  loginFom = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginError = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  login() {
    this.loginError = false;

    if (this.loginFom.invalid) {
      return;
    }

    this.loginService.logIn(this.loginFom.value).subscribe(() => {
      this.router.navigate(['/']);
    }, (errMessage) => {
      this.loginError = errMessage;
    });
  }
}
