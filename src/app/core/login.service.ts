import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, tap } from 'rxjs/operators';

import { LoginDataModel } from './login.model';
import { UserModel } from '../user/user.model';
import { LoginFormModel } from './login-page/login-form.model';
import { LoginAction, LogoutAction, SetUserAction, DeleteUserAction } from '../actions';
import { AppState } from '../app.states';

import { SERVER_DOMAIN } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
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
        this.store.dispatch(new LoginAction());
        this.getUserInfo();
      }))
      .pipe(catchError(this.handleError));
  }

  logOut() {
    localStorage.removeItem('authToken');
    this.store.dispatch(new LogoutAction());
    this.store.dispatch(new DeleteUserAction());
  }

  getUserInfo(): void {
    this.http.post<UserModel>(`${SERVER_DOMAIN}/auth/userinfo`, {})
      .pipe(tap((user: UserModel) => {
        this.store.dispatch(new SetUserAction(user));
      }))
      .subscribe();
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem('authToken'));
  }

  getAuthorizationToken() {
    return this.isAuthenticated() ? localStorage.getItem('authToken') : '';
  }
}
