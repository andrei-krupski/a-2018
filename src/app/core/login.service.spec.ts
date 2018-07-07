import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { UserService } from '../user/shared/user.service';

const userData = {
  id: 1,
  login: 'AndrewK',
  password: '1234',
  firstName: 'Andrew',
  lastName: 'Kru'
};

let loginService,
  userService;

describe('LoginService', () => {
  beforeEach(() => {
    userService = new UserService();
    loginService = new LoginService(userService);
  });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('should call UserService on login', () => {
    spyOn(userService, 'getUser').and.returnValue(userData);

    const data = loginService.logIn('login', 'pass');

    expect(userService.getUser).toHaveBeenCalled();
    expect(data).toEqual({
      success: true,
      user: userData
    });
  });
});
