import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';

import { LoginDataModel } from './login.model';
import { UserModel } from '../user/user.model';
import { LoginFormModel } from './login-page/login-form.model';

import { SERVER_DOMAIN } from '../app.config';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedSource = new Subject<boolean>();
  isLogged = this.isLoggedSource.asObservable();

  constructor(
    private http: HttpClient
  ) {}

  private handleError(error: HttpErrorResponse) {
    let message: string;

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
      message = 'Network error, please try later.';
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
      message = error.error;
    }

    return throwError(message);
  }

  logIn(data: LoginFormModel): Observable<LoginDataModel> {
    return this.http
      .post<LoginDataModel>(`${SERVER_DOMAIN}/auth/login`, data)
      .pipe(tap((res: LoginDataModel) => {
        localStorage.setItem('authToken', res.token);
        this.onLoginChange();
      }))
      .pipe(catchError(this.handleError));
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.onLoginChange();
  }

  onLoginChange() {
    this.isLoggedSource.next(this.isAuthenticated());
  }

  getUserInfo(): Observable<UserModel> {
    return this.http.post<UserModel>(`${SERVER_DOMAIN}/auth/userinfo`, {});
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem('authToken'));
  }

  getAuthorizationToken() {
    return this.isAuthenticated() ? localStorage.getItem('authToken') : '';
  }
}
