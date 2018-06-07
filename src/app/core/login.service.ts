import { Injectable } from '@angular/core';

import { UserService } from '../user/shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private userService: UserService) {}

  logIn(login, password) {
    const user = this.userService.getUser(login, password);

    return {
      success: Boolean(user),
      user
    };
  }

  logOut() {}
}
