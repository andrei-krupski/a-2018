import { AuthorActionTypes, AuthorsActions } from '../actions';
import { AuthorsState } from '../app.states';

export function authorsReducer(state = {}, action: AuthorsActions): AuthorsState {
    switch (action.type) {
        case AuthorActionTypes.SET_AUTHORS:
            return Object.assign({}, state, {
                authors: action.payload
            });
        default:
            return state;
    }
}
