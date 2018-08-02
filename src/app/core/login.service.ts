import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LoginDataModel } from './login.model';
import { UserModel } from '../user/user.model';
import { LoginFormModel } from './login-page/login-form.model';
import { UserService } from '../user/shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedSource = new Subject<boolean>();
  isLogged = this.isLoggedSource.asObservable();

  constructor(private userService: UserService) {}

  logIn(data: LoginFormModel): LoginDataModel {
    const user: UserModel = this.userService.getUser(data.email, data.password);
    localStorage.setItem('customUser', JSON.stringify(user));

    return {
      success: Boolean(user),
      user
    };
  }

  logOut() {
    localStorage.removeItem('customUser');
    this.onLoginChange();
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem('customUser'));
  }

  onLoginChange() {
    this.isLoggedSource.next(this.isAuthenticated());
  }

  getUserInfo() {
    const userCredencials = localStorage.getItem('customUser');

    return userCredencials ? JSON.parse(userCredencials) : null;
  }
}
