import { Action } from '@ngrx/store';

export const AuthActionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

export class LoginAction implements Action {
    readonly type = AuthActionTypes.LOGIN;
}

export class LogoutAction implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = LoginAction | LogoutAction;
