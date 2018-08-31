import { Action } from '@ngrx/store';

import { AuthorModel } from '../lessons/author.model';

export const AuthorActionTypes = {
    SET_AUTHORS: 'SET_AUTHORS'
};

export class SetAuthorsAction implements Action {
    readonly type = AuthorActionTypes.SET_AUTHORS;

    constructor (readonly payload: AuthorModel[]) {}
}

export type AuthorsActions = SetAuthorsAction;
