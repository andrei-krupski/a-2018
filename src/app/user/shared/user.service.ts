import { Injectable } from '@angular/core';

import { UserModel } from '../user.model';

// @TODO
const usersMock = [
  {
    id: 1,
    email: 'a@b.ru',
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

  getUser(email, password) {
    return this.users.find(user => user.email === email && user.password === password);
  }
}
