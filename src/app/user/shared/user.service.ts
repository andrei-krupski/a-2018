import { Injectable } from '@angular/core';

import { UserModel } from '../user.model';

// @TODO
const usersMock = [
  {
    id: 1,
    login: 'AndrewK',
    password: '1234',
    firstName: 'Andrew',
    lastName: 'Kru'
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: UserModel[];

  constructor() {
    this.users = usersMock;
  }

  getUser(login, password) {
    return this.users.find(user => user.login === login && user.password === password);
  }
}
