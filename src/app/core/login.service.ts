import { Injectable } from '@angular/core';

import { LoginDataModel } from './login.model';
import { UserModel } from '../user/user.model';
import { UserService } from '../user/shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private userService: UserService) {}

  logIn(login: string, password: string): LoginDataModel {
    const user: UserModel = this.userService.getUser(login, password);

    return {
      success: Boolean(user),
      user
    };
  }

  logOut() {}
}
