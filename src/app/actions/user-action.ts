import { Action } from '@ngrx/store';

import { UserModel } from '../user/user.model';

export const UserActionTypes = {
    SET_USER: 'SET_USER',
    DELETE_USER: 'DELETE_USER'
};

export class SetUserAction implements Action {
    readonly type = UserActionTypes.SET_USER;

    constructor(readonly payload: UserModel) {}
}

export class DeleteUserAction implements Action {
    readonly type = UserActionTypes.DELETE_USER;

    constructor(readonly payload = null) {}
}

export type UserActions = SetUserAction | DeleteUserAction;
