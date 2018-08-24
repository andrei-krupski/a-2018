import { Action } from '@ngrx/store';
import { AuthActionTypes } from '../actions';
import { AuthState, initialAuthState } from '../app.states';

export function authReducer(state = initialAuthState, action: Action): AuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return {
                logged: true
            };
        case AuthActionTypes.LOGOUT:
            return {
                logged: false
            };
        default:
            return state;
    }
}
